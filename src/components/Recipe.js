import React from 'react';

const Recipe = ({title, calories, image, ingredients, url}) =>{
	return(
		<div>
			<h1>{title}</h1>
			<h2>{calories} </h2>
			<img src={image} alt={title} />
			<ol>
				{ingredients.map((ingredient, i) =>(
					<li key={i}>{ingredient.text} </li>
				))}
			</ol>
			<a href={url}>Full Recipe</a>
		</div>
	);
}

export default Recipe;