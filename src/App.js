import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Login from "./containers/login/Login";
import Welcome from "./containers/welcome/Welcome";
import Register from "./containers/register/Register";
import Info from "./containers/info/Info";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' Component={Welcome}/>
        <Route path='/login' Component={Login} />
        <Route path='/register' Component={Register} />
        <Route path='/info' Component={Info} />
      </Routes>
    </Router>

  );
}

export default App;
