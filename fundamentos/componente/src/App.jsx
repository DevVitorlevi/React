//componentes
import Componente from './components/PrimeiroComponente';
import TemplateExpression from './components/TemplateExpression';
import MyComponent from './components/MyComponent';
//style
import './App.css';
import Events from './components/Events';
import Challenger from './components/Challenger';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <Challenger/>
    </div>
  );
}

export default App;
