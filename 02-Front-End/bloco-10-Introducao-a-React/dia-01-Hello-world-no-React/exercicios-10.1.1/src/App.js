import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tarefas = ['Tomar café da manhã', 'Escovar os dentes', 'Ir trabalhar']

function App() {

  return (
    <ul>
      {tarefas.map((array) => Task(array))}
    </ul>
  );
}

export default App;
