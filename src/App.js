import React from 'react';
import './App.css';
import Recipe from './components/Recipe';
import {useEffect, useState} from 'react';

function App() {
  const APP_ID = process.env.REACT_APP_APP_ID;
  const APP_KEY = process.env.REACT_APP_APP_KEY;
  
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');
  
  /*useEffect runs everytime the page is rendered or something on the page is rerendered
  	add [] if only want to render at page load
  	add state variable if only want to render when state is rerendered 
  */
  useEffect(()=>{ 
  	 /*make api requests with fetch when working with browser*/
 	const getRecipes = async ()=>{
	 	try{
	 		const res = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
	 		const data = await res.json();
	 		setRecipes(data.hits);
	 	}
	 	catch(err){
	 		console.log("Oh No Something Went Wrong!");
	 	}
	}
  	//getRecipes();
  }, [query, APP_ID, APP_KEY]);

 const updateSearch = (e) =>{
 	setSearch(e.target.value);
 }

 const updateQuery = (e) =>{
 	e.preventDefault();
 	setQuery(search);
 	setSearch('');
 }
  return (
    <div className="App">
      <form onSubmit={updateQuery} className='search-form'>
		<input type='text' className='search-bar' value={search} onChange={updateSearch} />
		<button type='submit' className='search-button'>Search</button>
	  </form>
	  {recipes.map(recipe => (
      <Recipe 
        key={recipe.recipe.label}
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories} 
        image={recipe.recipe.image} 
        ingredients={recipe.recipe.ingredients}
        url={recipe.recipe.url}
      />

    ))}
    </div>
  );
}

export default App;
