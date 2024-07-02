import React, { useState } from 'react';
import axios from 'axios';

const RecipeForm = () => {
    const [recipe, setRecipe] = useState({
        name: '',
        ingredients: '',
        instructions: '',
        cuisine: '',
        dietaryRestrictions: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRecipe({
            ...recipe,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/recipes', recipe)
            .then(response => {
                console.log('Recipe added!', response.data);
            })
            .catch(error => {
                console.error('There was an error adding the recipe!', error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Recipe Name" onChange={handleChange} />
            <input type="text" name="ingredients" placeholder="Ingredients" onChange={handleChange} />
            <input type="text" name="instructions" placeholder="Instructions" onChange={handleChange} />
            <input type="text" name="cuisine" placeholder="Cuisine" onChange={handleChange} />
            <input type="text" name="dietaryRestrictions" placeholder="Dietary Restrictions" onChange={handleChange} />
            <button type="submit">Add Recipe</button>
        </form>
    );
};

export default RecipeForm;
