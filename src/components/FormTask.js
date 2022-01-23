import React , {useState} from "react";
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'
// se puede importar de las dos maneras
import { Form, Button } from "react-bootstrap";
import  ListTask  from "./ListTask";

const FormTask = () => {
    // aqui va la logica
    const [arrayTask , setArrayTask] = useState([]);

  return (
    <div>
      <Form>
        <Form.Group className="mb-3 d-flex" >
         <Form.Control type="text" placeholder="Ingrese una tarea" />
        <Button variant="primary" type="submit" className="m-2">
          Submit
        </Button>
        </Form.Group>
      </Form>
      <ListTask></ListTask>
    </div>
  );
};

export default FormTask;
