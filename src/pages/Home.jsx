import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Home = () => {
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCategories(data));
    },[])
    return (
        <div>
            <h1 className="container mx-auto flex justify-center">All Options are here</h1>
            <div className="container mx-auto grid grid-cols-3 mt-5">
                {
                    categories.map(category => <div  key={category.id}>
                        <div >
                            <img className="w-80 h-72" src={category.photo} alt="" />
                        </div>
                        <p>Name: {category.name}</p>
                        <p>Price: {category.price}</p>
                        <Link to={`/booking/${category.id}`} className="bg-orange-500 text-white p-1 rounded-lg">{category.book}</Link>
                    </div> )
                }
            </div>
        </div>
    );
};

export default Home;