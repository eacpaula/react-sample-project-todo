import React from "react";
import { Card, Row, Col } from "react-bootstrap";

import Header from "../../components/header"
import Form from "./form";
import List from "./list";

import './index.css'

const URL = 'http://localhost:3000/api/todos'

export default class Todo extends React.Component {

    constructor() {
        super()

        this.state = {
            descriptionField: "",
            items: []
        }

        this.handleAdd = this.handleAdd.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.refresh = this.refresh.bind(this)
    }

    async componentDidMount() {
        const tasks = await this.getTasks()

        this.setState({
            ...this.state, 
            items: tasks
        })
    }

    async refresh(descriptionField = '') {
        const items = await this.getTasks(descriptionField)

        this.setState({
            descriptionField: descriptionField,  
            items: items
        })
    }

    async getTasks(text = '') {
        const filter = text ? `description__regex=/${text}/i` : ''

        const request = await fetch(`${URL}?sort=-createdAt&${filter}`, {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin':'*',
                'Content-Type': 'application/json'
            }
        })

        const response = await request.json()
        return response
    }

    async handleAdd() {
        await fetch(URL, {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin':'*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                "description": this.state.descriptionField 
            })
        })

        await this.refresh()
    }

    async handleRemove(task) {
        await fetch(`${URL}/${task._id }`, {
            method: 'DELETE'
        })

        await this.refresh(this.state.descriptionField)
    }

    async handleMarkAsDone(task) {
        await fetch(`${URL}/${task._id }`, {
            method: 'PUT',
            headers: {
                'Access-Control-Allow-Origin':'*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                "done": true
            })
        })

        await this.refresh(this.state.descriptionField)
    }

    async handleMarkAsPending(task) {
        await fetch(`${URL}/${task._id }`, {
            method: 'PUT',
            headers: {
                'Access-Control-Allow-Origin':'*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                "done": false
            })
        })

        await this.refresh(this.state.descriptionField)
    }

    async handleSearch() {
        await this.refresh(this.state.descriptionField)
    }

    async handleClear() {
        await this.refresh()
    }

    handleChange(e) {
        this.setState({ ...this.state, descriptionField: e.target.value })
    }

    render() {
        return (
            <Card>
                <Header title="Todo" />
                <Card.Body>
                    <Row>
                        <Col>
                            <Form 
                                field={this.state.descriptionField} 
                                handleChange={this.handleChange} 
                                handleAdd={this.handleAdd}
                                handleSearch={this.handleSearch}
                                handleClear={this.handleClear} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <List 
                                items={this.state.items} 
                                handleMarkAsDone={this.handleMarkAsDone} 
                                handleMarkAsPending={this.handleMarkAsPending} 
                                handleRemove={this.handleRemove}/>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        )
    }
}