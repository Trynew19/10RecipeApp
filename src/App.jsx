import Nav from "./components/Nav";

import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Recipe from "./components/Recipe"
import Contact from "./components/Contact"
import About from "./components/About"
import Details from "./components/Details";
import Update from "./components/Update";
import Create from "./components/Create";

const App = () => {
    return (
        <div className="">
            <Nav />

            <Routes>

                <Route path="/" element={<Layout />} />
                <Route path="/recipes" element={<Recipe/>}/>               
                <Route path="/contact" element={<Contact/>}/>               
                <Route path="/about" element={<About/>}/> 
                <Route path="/details/:id" element={<Details/>} />
                <Route path="/update/:id" element={<Update/>}/> 
                <Route path="/create-recipe" element={<Create/>}/>             
            </Routes>
        </div>
    );
};

export default App;
