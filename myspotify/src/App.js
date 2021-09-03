import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { Component } from "react";
import './App.css';
import MyNavbar from "./Components/MyNavbar";
import Home from "./Components/Home";
import Album from "./Components/Album";

class App extends Component {
 
  state = {
    query: "Judas Priest"
    
  };
  onChange = (query) => {
    this.setState({ query });
  };
 
 render(){
 return(
      <div >
        <Router>
          <MyNavbar onChange={this.onChange}/>         
          <Route path="/" exact render={(routerProps) => <Home {...routerProps} search={this.state.query} />} />
          <Route path="/album/:id" render={(routerProps) => <Album {...routerProps} />} />

        </Router>
      </div>
    );
    }
    }
  

export default App;
