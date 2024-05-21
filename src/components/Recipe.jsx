import { Link } from 'react-router-dom';
import Card from './Card';
import {  useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

function Recipe() {
    const {pathname} = useLocation()
    const {recipes} = useSelector((state) => state.recipeReducer)  
   
    

    return ( 
        <div className="w-full h-screen flex flex-col bg-zinc-600">
            <div className="mb-10">
                <h1 className="text-5xl text-white text-center font-semibold mb-5">Our Recipes</h1>
                <p className="text-2xl text-red-200 text-center">Delicious every food bite!</p>
            </div>

            <div className='w-full h-screen bg-yellow-500  '>
            <div className="cardcontainer flex gap-4  ">
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
        </div>
    );
}

export default Recipe;
