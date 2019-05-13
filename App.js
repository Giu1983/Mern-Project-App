import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; 

import CreateTodo from "./Components/createtodo"; 
import EditTodo from "./Components/edit";  
import TodoList from "./Components/todolist"; 

class App extends Component {
  render() {
   return (
     <Router>
       <div className="container">
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand"></Link>
           <div className="collapse nav-collapse">
             <ul className="navbar-nav mr-auto">
               <li className="navbar-item">
                <Link to="/" className="nav-link">TodoList</Link>
                 </li>
                  <li>
                    <Link to="/" className="nav-link">Create Todo</Link>
                  </li>
                  <li>
                    <Link to="/" className="nav-link"></Link>
                  </li>
             </ul>
           </div>
         </nav>
       </div>
        <Route path="/" exact component={TodoList} />,
       <Route path="/" exact component={CreateTodo} />,
        <Route path="/" exact component={EditTodo} />
     </Router>
      
   )
}
}

export default App;
