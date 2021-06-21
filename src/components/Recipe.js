import React from 'react';
import style from '../recipe.module.css'

const Recipe = ({title, calories, image, ingredients, url}) =>{
	return(
		<div className={style.recipe}>
			<h1>{title}</h1>
			<h2>Calories: {Math.ceil(calories)} </h2>
			<img src={image} alt={title} className={style.image} />
			<ul>
				{ingredients.map((ingredient, i) =>(
					<li key={i}>{ingredient.text} </li>
				))}
			</ul>
			<a href={url}>Full Recipe</a>
		</div>
	);
}

export default Recipe;