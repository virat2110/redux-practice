import Login from './components/Login';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"><Login /></Route>
        <Route exact path="/home"><Home /></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
