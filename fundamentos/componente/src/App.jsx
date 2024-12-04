//componentes
import Componente from './components/PrimeiroComponente';
import TemplateExpression from './components/TemplateExpression';
import MyComponent from './components/MyComponent';
//style
import './App.css';
import Events from './components/Events';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <Componente/>
      <TemplateExpression/>
      <MyComponent/>
      <Events/>
    </div>
  );
}

export default App;
