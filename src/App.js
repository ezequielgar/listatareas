
import './App.css';
import Subtitle from './components/Subtitle';
import Title from './components/Title';

function App() {
  return (
    <section>
     {/* esto es un comentario html */}
     <Title></Title>
     {/* <Titulo/> */}
     <Subtitle comision='c18i' estado={true} ></Subtitle>
     <hr/>
   </section>
  );
}

export default App;
