import { Link, useLoaderData } from "react-router-dom";

const Home = () => {
    const allOptions = useLoaderData();
    return (
        <div className="container mx-auto grid grid-cols-3 gap-5">
           {
            allOptions.map(allOption => <div  key={allOption.id}>
                <img className="w-80 h-80" src={allOption.photo} alt="" />
                <p>{allOption.name}</p>
                <p>{allOption.price}</p>
                <Link to={`/details/${allOption.id}`} className="text-orange-500">{allOption.book}</Link>
            </div>)
           }
        </div>
    );
};

export default Home;