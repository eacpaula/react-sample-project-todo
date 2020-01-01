import React from "react";
import { Table } from "react-bootstrap";

import Button from "../../../components/button";

import "./index.css";

export default props => {
    const buildRows = () => {
        const items = props.items || []

        return items.map((task, index) => (
            <tr key={task._id}>
                <td className={task.done ? 'mark-as-done' : ''}>{task.description}</td>
                <td>
                    <Button 
                        variant="success" 
                        type="button" 
                        icon="faCheck" 
                        hide={task.done}
                        onClick={() => { props.handleMarkAsDone(task) }}/>
                    <Button 
                        variant="warning" 
                        type="button" 
                        icon="faUndo" 
                        hide={!task.done}
                        onClick={() => { props.handleMarkAsPending(task) }}/>
                    <Button 
                        variant="danger" 
                        type="button" 
                        icon="faTrash" 
                        hide={!task.done}
                        onClick={() => { props.handleRemove(task) }}/>
                </td>
            </tr>
        ))
    }

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Description</th>
                    <th className="actions">Action</th>
                </tr>
            </thead>
            <tbody>
                {buildRows()}
            </tbody>
        </Table>
    )
}