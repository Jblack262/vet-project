import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {Home, Adopt, About} from './pages';
import Navbar from './components/Navbar';
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar/>

        <Switch>
            <Route path="/" exact component={() => <Home />} />
            <Route path="/about" exact component={() => <About />} />
            <Route path="/adopt" exact component={() => <Adopt />} />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
