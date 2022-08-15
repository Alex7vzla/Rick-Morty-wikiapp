import { useState, useEffect } from 'react';
import './App.css';
import CardResidents from './components/CardResidents';
import Location from './components/Location';
import useFetch from './hooks/useFetch'
import axios from 'axios';

function App() {
    
    const [search, setSearch] = useState('');
    const [location, setLocation] = useState();

    //Selection of random search and input search
    useEffect(() => {
      let numberLocation;

      if(search === '') {numberLocation = Math.floor(Math.random() * (126 - 1) + 1)}
      else{numberLocation = search}
      
      const url = `https://rickandmortyapi.com/api/location/${numberLocation}`;
      
      axios
        .get(url)
        .then(res => setLocation(res.data))
        .catch(err => console.log(err))
    },[search])
    

    console.log(location);

    //input handle 
    const handleSubmit = e => {
      e.preventDefault()
      setSearch(e.target.search.value)
    }

    console.log(search);

  return (
    <div className="App">

      <div className='bg'></div>
      
      <header className='header'>  

        <h1>Rick & Morty wiki-app</h1>

        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='type a location id' id='search'></input>
          <button>Search</button>
        </form>

        <Location location={location}/>

      </header>

      <main>
      {
          location?.residents.map(url => (
            <CardResidents key={url} url={url}/>
          ))
      }
      </main>

    </div>//fin del App
  )
}

export default App
