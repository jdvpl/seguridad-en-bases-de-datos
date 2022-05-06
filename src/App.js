
   
import './App.css';
// rutas
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Inicio from './components/Inicio';


function App() {
  return (
    <div >

          <Router>
      <div className="App" id='page-top'>
      <Switch>
        <Route exact path="/"><Inicio/></Route>

      </Switch>

    </div>
      
    </Router>
    </div>
  );
}

export default App;