import React from "react";
import {ListGroup} from "react-bootstrap";
import ItemTask from "./ItemTask";

const ListTask = (props) => {
  return (
    <ListGroup>
      {
        props.arrayTask.map((value,position)=> <ItemTask key={position} value={value}></ItemTask>)
      }
        
    </ListGroup>
  );
};

export default ListTask;