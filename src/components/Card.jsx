import { Link } from 'react-router-dom';

function Card({ recipe }) {
    const { title, description, image, id } = recipe;

    return (
        <div className="w-full sm:w-[calc(50% - 1rem)] md:w-[calc(33.33% - 1rem)] lg:w-[calc(25% - 1rem)] mb-5 mx-0 sm:mx-2 md:mx-4 flex ">
            <div className="card w-[300px] h-[200px] bg-zinc-800 rounded-lg shadow-md shadow-white transform hover:scale-105 duration-200 ">
                <img className="h-72 w-full object-cover rounded-t-lg" src={image} alt="image" />

                <div className="text-center text-white font-medium m-3">
                    <h1 className="mb-2 text-lg sm:text-2xl">{title}</h1>
                    <p className='overflow-auto text-sm'>{description}</p>
                    <hr className="my-2" />
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
