import React from "react";
import { Card } from "react-bootstrap";

export default props => (
    <Card.Header>
        <h2>
            {props.title}
        </h2>
    </Card.Header>
)