import React from "react";
import { Form, Row, Col } from "react-bootstrap";

import Button from "../../../components/button";

import "./index.css";

export default props => {
    const keyHandler = (e) => {
        if(e.key === 'Enter') {
            e.ctrlKey && e.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if(e.key === 'Backspace') {
            props.handleClear()
        }
    }

    return (
        <Form role="form" className="todoForm" onSubmit={(e) => e.preventDefault()}>
            <Row>
                <Col xs={12} sm={12} md={12}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label srOnly={true}>Description</Form.Label>
                        <Form.Control
                            placeholder="Enter the task description" 
                            value={props.field}
                            onKeyUp={keyHandler}
                            onChange={props.handleChange}/>
                    </Form.Group>
                </Col>
                <Col md={{ offset: 10 }}>
                    <Button variant="primary" type="button" icon="faPlus" onClick={props.handleAdd}/>
                    <Button variant="info" type="button" icon="faSearch" onClick={props.handleSearch}/>
                    <Button variant="dark" type="button" icon="faEraser" onClick={props.handleClear}/>
                </Col>
            </Row>
        </Form>
    )
}