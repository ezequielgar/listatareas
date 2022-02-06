import React from "react";
import { ListGroup, Button } from "react-bootstrap";

const ItemTask = (props) => {
  return (
    <ListGroup.Item className='d-flex justify-content-between'>
      {props.value}{" "}
      <Button variant="danger" type="Button" onClick={()=> props.deleteTask(props.value)}>
        Borrar
      </Button>
    </ListGroup.Item>
  );
};

export default ItemTask;
