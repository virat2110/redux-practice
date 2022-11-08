import Login from './components/Login';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"><Login /></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
