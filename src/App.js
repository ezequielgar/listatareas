
import './App.css';
import Subtitle from './components/Subtitle';
import Title from './components/Title';
import 'bootstrap/dist/css/bootstrap.min.css'
import FormTask from './components/FormTask';

function App() {
  return (
    <section className="container" >
     {/* esto es un comentario html */}
     <Title></Title>
     {/* <Titulo/> */}
     <Subtitle comision='c18i' estado={true} ></Subtitle>
     <hr/>
     <FormTask/>
   </section>
  );
}

export default App;
