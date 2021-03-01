import logo from '../src/img/comilla-victorians-logo.png';
import './App.css';
import Team from './components/Team/Team';
function App() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Team></Team>
    </div>
  );
}

export default App;
