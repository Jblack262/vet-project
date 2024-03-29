import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {Home, Adopt, About, PetPage, Error} from './pages';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// import {data} from './util/data';

const sanityClient = require('@sanity/client')
const client = sanityClient({
    projectId: 'ic8mtd9i',
    dataset: 'production',
    apiVersion: '2021-09-29', // use current UTC date - see "specifying API version"!
    token:process.env.SANITY_APP_TOKEN, // or leave blank for unauthenticated usage
    useCdn: true, // false if you want to ensure fresh data
})
const query = "*[_type == 'pet']";

function App() {
  const [pets, setPets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getInfo = async() => {
    return client.fetch(query);
  }

    useEffect(() => {
      getInfo()
      .then((pets) => {
        setPets(pets);
        setTimeout(()=>{setIsLoading(false)}, 1200)
        /* console.log(pets) */
      }).catch((error) => {console.log(error)});
    }, [])


  const [currPet, setCurrPet] = useLocalStorage("pet", pets[0]) ;
  const selectPet = (pet) => {
    setCurrPet(pet);
  }
  return (
    <Router>
      <div className="app">
        <Navbar/>
        <Switch>
            <Route path="/" exact component={() => <Home isLoading={isLoading} pets={pets} selectPet={selectPet}/>} />
            <Route path="/about" exact component={() => <About />} />
            <Route path="/adopt" exact component={() => <Adopt />} />
            <Route path="/pets" exact component={() => <PetPage pet={currPet} />} />
            <Route exact component={() => <Error/>} />
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
