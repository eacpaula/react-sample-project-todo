import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import icons from '@fortawesome/fontawesome-free-solid'

export default props => (
    !props.hide && (
        <Button variant={props.variant} type={props.type} className={props.style} onClick={props.onClick}>
            <FontAwesomeIcon icon={icons[props.icon]} />
        </Button>
    )
)