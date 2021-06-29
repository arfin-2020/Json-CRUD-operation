import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from './components/layout/Navbar';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import pageNotFound from './components/pages/PageNotFound';
import AddUser from './components/User/AddUser';
import EditUser from './components/User/EditUser';
import View from './components/User/View';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/adduser" component={AddUser}/>
          <Route exact path="/edituser/:id" component={EditUser}/>
          <Route exact path="/viewuser/:id" component={View}/>
          <Route path='*' component={pageNotFound}/>
        
        </Switch>
      </div>
      </Router>
   
  );
}

export default App;
