import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { recipecontext } from '../context/RecipeContext';
import Card from './Card';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function Recipe() {
    const { pathname } = useLocation();
    const [recipes,setRecipes] = useContext(recipecontext);
    useEffect(() => {
      setRecipes(JSON.parse(localStorage.getItem("recipes")) || []);
  }, []);

    return (
        <div className="w-full h-screen bg-zinc-600 f">
            <div className="mb-10">
                <h1 className="text-5xl text-white text-center font-semibold mb-5">Our Recipes</h1>
                <p className="text-2xl text-red-200 text-center">Delicious every food bite!</p>
            </div>

            <div className="cardcontainer w-[90%] flex flex-wrap gap-5 m-auto">
                {recipes && recipes.length > 0 ? (
                    recipes.map(recipe => (
                        <Card key={recipe.id} recipe={recipe} />
                    ))
                ) : (
                    <h2>No Recipes Found</h2>
                )}

                {pathname === "/recipes" && (
                    <Link
                        to="/create-recipe"
                        className="cursor-pointer rounded-md absolute top-[15%] py-2 px-5 left-[10%]  bg-green-200 gap-x-3 flex items-center"
                    >
                        <i className="text-3xl text-green-600 ri-add-box-line"></i>
                        Create Recipe
                    </Link>
                )}
            </div>
        </div>
    );
}

export default Recipe;
