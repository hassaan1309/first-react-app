//import logo from './logo.svg';
import './App.css';
import './Hello.css';

function App(props) {
  return (
    <div> 
      Hello World from <strong className="myname">{props.name}</strong>.
    </div>
  );
}

export default App;
