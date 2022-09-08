import logo from './logo.svg';
import './App.css';
import WithClass from './components/WithClass';
import WithFunction from './components/WithFunction';

function App() {
  return (
    <div className="App">
      <h1 style={{color: 'red'}}>With Class</h1>
      <WithClass />
      <hr />
      <h1 style={{color: 'red'}}>With Function</h1>
      <WithFunction />
    </div>
  );
}

export default App;
