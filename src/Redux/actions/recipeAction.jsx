import { addrecipe } from "../Redusers/recipeSlice";

import { toast } from "react-toastify";



 export const asyncrecipes = () => async (dispatch,getState) =>{
    try {
        let data = JSON.parse(localStorage.getItem("recipes")) || [];
        dispatch(addrecipe(data))
    } catch (error) {
        toast.error(error);
    }



}