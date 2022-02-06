import React from "react";
import {ListGroup} from "react-bootstrap";
import ItemTask from "./ItemTask";

const ListTask = (props) => {
  return (
    <ListGroup>
      {
        props.arrayTask.map((value,position)=> <ItemTask key={position} value={value} deleteTask={props.deleteTask}></ItemTask>)
      }
        
    </ListGroup>
  );
};

export default ListTask;