import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {Home, Adopt, About, PetPage} from './pages';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import {data} from './util/data';

function App() {
  const [currPet, setCurrPet] = useLocalStorage("pet", data[0]) ;

  const selectPet = (pet) => {
    setCurrPet(pet);
  }

  return (
    <Router>
      <div className="app">
        <Navbar/>

        <Switch>
            <Route path="/" exact component={() => <Home data={data} selectPet={selectPet}/>} />
            <Route path="/about" exact component={() => <About />} />
            <Route path="/adopt" exact component={() => <Adopt />} />
            <Route path="/pets" exact component={() => <PetPage pet={currPet} />} />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

// Hook
function useLocalStorage(key, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });
  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };
  return [storedValue, setValue];
}

export default App;
