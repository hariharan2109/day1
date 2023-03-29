import logo from './logo.svg';
import './App.css';

function App() {
  const Click=()=>
  {
    alert("LOGGED IN")
  }
  return (
    <div className="App">
      <h1>HELLO GUYS</h1>
<button onClick={window['alertMsg']}> LOGIN </button>
<h1>Alert Message</h1>
<button onClick={window['Console']}>CLICK HERE</button>
    </div>
    
  );
}
export default App;
