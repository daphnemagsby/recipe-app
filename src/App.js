import React from 'react';
import './App.css';
import Recipe from './components/Recipe';
import {useEffect, useState} from 'react';

function App() {
  const APP_ID = process.env.REACT_APP_APP_ID;
  const APP_KEY = process.env.REACT_APP_APP_KEY;
  
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  
  /*useEffect runs everytime the page is rendered or something on the page is rerendered
  	add [] if only want to render at page load
  	add state variable if only want to render when state is rerendered 
  */
  useEffect(()=>{ 
  	//getRecipes();
  }, []);

 /*make api requests with fetch when working with browser*/
 const getRecipes = async ()=>{
 	try{
 		const res = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
 		const data = await res.json();
 		setRecipes(data.hits);
 	}
 	catch(err){
 		console.log("Oh No Something Went Wrong!");
 	}

 }

  return (
    <div className="App">
      <form className='search-form'>
		<input type='text' className='search-bar' value={search} />
		<button type='submit' className='search-button'>Search</button>
	  </form>
	  {recipes.map(recipe => (
      <Recipe 
        key={recipe.recipe.label}
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories} 
        image={recipe.recipe.image} 
      />

    ))}
    </div>
  );
}

export default App;
