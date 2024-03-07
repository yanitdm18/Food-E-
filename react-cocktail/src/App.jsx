import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CocktailList from './components/CocktailList';
import CocktailDeatil from './components/CocktailDeatil';
import axios from 'axios';
import Header from './components/Header'
import Searchbar from './components/Searchbar';
import { BASE_URL } from './globals';

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (searchQuery) => {
    try {
      const response = await axios.get(`${BASE_URL}/search`, {
        params: { query: searchQuery }
      });
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error searching for cocktails:', error);
    }
  };

  return (
    <div>
      <h1>Sip Savy</h1>
      <Header handleSearch={handleSearch} />
    <Routes>
      <Route exact path="/" component={Home} />
      <Route exact path="/cocktails" render={(props) => <CocktailList {...props} searchResults={searchResults} />} />
      <Route path="/cocktails/:id" component={CocktailDeatil} />
    </Routes>
    </div> 
  );
}

export default App;



