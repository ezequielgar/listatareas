import React from 'react';
import { ListGroup } from 'react-bootstrap';

const ItemTask = (props) => {
    return (
        <ListGroup.Item>{props.value}</ListGroup.Item>
    );
};

export default ItemTask;