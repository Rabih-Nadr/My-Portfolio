//App.js

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./Pages/Home";
import About from "./Pages/about";
import Projects from "./Pages/projects";
import Contact from "./Pages/contact";
import Navbar from "./Components/Navbar";
import Footer from "./Components/footer";
import "./styleSheet/footer.css";


function App() {
  return (
  <Router>
  <div>
  <Navbar />
  <Switch>
  <Route exact path="/" component={HomePage} />
  <Route exact path="/about" component={About} />
  <Route exact path="/projects" component={Projects} />
  <Route exact path="/contact" component={Contact} />
  </Switch>
  </div>
  <div className="footer">
      <Footer />
  </div>
  </Router>
  );
  }
  
  export default App;
  
  
