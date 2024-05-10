import React from 'react';
import { Link } from 'react-router-dom';

function Card({ recipe }) {
    const { title, description, image,id } = recipe;

    return (
        <div>
            <div className="card w-72 h-auto bg-zinc-800 rounded-lg shadow-md shadow-white hover:scale-105 duration-200">
                <img className="items-center h-72 w-full object-cover" src={image} alt="image" />

                <div className="text-center text-white font-medium m-3">
                    <h1 className="mb-2 text-2xl">{title}</h1>
                    <p className='overflow-auto'>{description}</p>
                    <hr />
                    <div className="flex justify-between">
                        <div>
                            <h1>Times</h1>
                            <p>5 mins</p>
                        </div>
                        <Link to={`/details/${id}`}>
                            <button className="py-1 px-5 bg-white text-black mt-2 rounded-sm">View</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
