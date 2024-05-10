import React, { useContext, useState, useEffect } from "react";
import { recipecontext } from "../context/RecipeContext";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

function Create() {
  const [recipes, setRecipes] = useContext(recipecontext);
    const navigate = useNavigate();
  useEffect(() => {
    if (!recipes) {
      setRecipes([]);
    }
  }, [recipes, setRecipes]);

  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const newRecipe = {
      id: nanoid(),
      image,
      title,
      description,
      ingredients,
      instructions,
    };

    setRecipes([...recipes, newRecipe]);

    localStorage.setItem("recipes", JSON.stringify([...recipes, newRecipe]));
      toast.success("recipe create sucesfully")
    navigate("/recipes")

  };

  return (
    <form
      onSubmit={submitHandler}
      className="w-[100%] m-auto  pb-5 bg-zinc-800 px-24"
    >
      <h1 className="text-7xl mt-5 font-extrabold text-white  mb-[5%]">
        Create <br /> New Recipe
      </h1>
      <input
        onChange={(e) => setImage(e.target.value)}
        value={image}
        type="url"
        className="w-full border rounded-md px-6 py-3 text-lg mb-5"
        placeholder="Recipe Image URL"
      />
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        type="text"
        className="w-full border rounded-md px-6 py-3 text-lg mb-5"
        placeholder="Recipe Name"
      />
      <textarea
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="w-full border rounded-md px-6 py-3 text-lg mb-5"
        placeholder="recipe description..."
      ></textarea>
      <textarea
        onChange={(e) => setIngredients(e.target.value)}
        value={ingredients}
        className="w-full border rounded-md px-6 py-3 text-lg mb-5"
        placeholder="recipe ingredients -> 'use comma to seperate ingredients'..."
      ></textarea>
      <textarea
        onChange={(e) => setInstructions(e.target.value)}
        value={instructions}
        className="w-full border rounded-md px-6 py-3 text-lg mb-5"
        placeholder="recipe instructions -> 'use comma to seperate instructions'..."
      ></textarea>
      <div className="w-full text-right">
        <button className="rounded-md text-xl bg-green-600 text-white py-2 px-5 hover:bg-green-700 duration-200">
          Publish Recipe &nbsp; &#8594;
        </button>
      </div>
    </form>
  );
}

export default Create;
