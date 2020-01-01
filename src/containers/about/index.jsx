import React from "react";
import { Card } from "react-bootstrap";
import Header from "../../components/header"
import './index.css'


export default props => {
    return (
        <Card>
            <Header title="About"/>
            <Card.Body>
                <Card.Title>Todo App</Card.Title>
                <Card.Text>
                    This application was build for help users to organize their tasks.
                </Card.Text>
            </Card.Body>
        </Card>
    )
}