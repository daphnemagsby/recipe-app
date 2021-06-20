import React from 'react';

const Recipe = ({title, calories, image, ingredients}) =>{
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
		</div>
	);
}

export default Recipe;