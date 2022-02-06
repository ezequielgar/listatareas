import React, { useState } from "react";
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'
// se puede importar de las dos maneras
import { Form, Button } from "react-bootstrap";
import ListTask from "./ListTask";

const FormTask = () => {
  // aqui va la logica
  const [arrayTask, setArrayTask] = useState([]);
  const [task, setTasks] = useState("");

  // funciones
  const handleSubmit = (e) => {
    e.preventDefault();

    // guardar una tarea en el arrayTask
    setArrayTask([...arrayTask, task]);
    // limpiar el imput
    // e.target.reset();
    setTasks("");
  };

  // funcion borrar tarea
  const deleteTask = (name) =>{
    let arrayModif = arrayTask.filter((item)=>{return item !== name})
    setArrayTask (arrayModif);
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex">
          <Form.Control
            type="text"
            placeholder="Ingrese una tarea"
            onChange={(e) => setTasks(e.target.value)}
            value={task}
          />
          <Button variant="primary" type="submit" className="m-2">
            Enviar
          </Button>
        </Form.Group>
      </Form>
      <ListTask arrayTask={arrayTask} deleteTask={deleteTask}></ListTask>
    </div>
  );
};

export default FormTask;
