'use client';
import { useEffect, useState } from 'react';
import Loader from "@/app/components/Loader";
import '../../styles/recipe.css'

function ShowRecipe({ params }) {
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);

    const { id } = params;

    useEffect(() => {
        fetch(`https://dummyjson.com/recipes/${id}`)
            .then(res => res.json())
            .then(data => {
            setRecipe(data); 
            setLoading(false); 
            })
            .catch(error => {
            console.error('Error fetching recipe:', error);
            setLoading(false);
            });
    }, []);

    if (loading) {
        return <Loader />;
    }
    return (
        <div className="recipe px-8 py-16 w-full flex flex-row flex-wrap-reverse justify-between">
        <div className="flex flex-col gap-3">
            <p className="text-2xl font-bold mr-2 text-green">
            Recipe Name: <span className="text-2xl text-black mb-2 font-normal">{recipe.name}</span>
            </p>

            <p className="text-2xl font-bold mr-2 text-green">
            Meal Type: <span className="text-2xl text-black mb-2 font-normal">{recipe.mealType}</span>
            </p>

            <p className="text-2xl font-bold mr-2 text-green">
            Serving: <span className="text-2xl text-black mb-2 font-normal">{recipe.servings} person</span>
            </p>

            <p className="text-2xl font-bold mr-2 text-green">
            Preparing Time: <span className="text-2xl text-black mb-2 font-normal">{recipe.prepTimeMinutes} Minutes</span>
            </p>

            <p className="text-2xl font-bold mr-2 text-green">
            Ingredients: 
            <ul className="text-2xl text-black mb-2 font-normal list-disc">
                {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className='mx-4'>{ingredient}</li>
                ))}
            </ul>
            </p>

            <p className="text-2xl font-bold mr-2 text-green">
            Instructions: 
            <ul className="text-2xl text-black mb-2 font-normal list-disc">
                {recipe.instructions.map((instruction, index) => (
                <li key={index} className='mx-4'>{instruction}</li>
                ))}
            </ul>
            </p>
        </div>
        <div>
            <img src={recipe.image}
              position='center' 
              alt='Card Image' 
              style={{width:'450px', marginBottom:'2rem', borderRadius:'10px'}}
            />
            </div>
        </div>
    );
}

export default ShowRecipe;
