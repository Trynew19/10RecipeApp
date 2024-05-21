import  {  useState  } from "react";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { asyncrecipes } from "../Redux/actions/recipeAction";

function Create() {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const {recipes} = useSelector((state) => state.recipeReducer)
  

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

     
    localStorage.setItem("recipes", JSON.stringify([...recipes, newRecipe]));
      dispatch(asyncrecipes());
        toast.success("Recipe Created Successfully!");
      navigate("/recipes")

  };

  return (
    <form
      onSubmit={submitHandler}
      className="w-full sm:w-[70%] m-auto pb-5 bg-zinc-800 px-5 sm:px-24"
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
