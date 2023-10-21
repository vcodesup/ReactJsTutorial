import RestroCard from './RestroCard';
import restData from '../utils/mockData';
import Shimmer  from '../components/Shimmer'
import { useState,useEffect } from 'react/cjs/react.development';



const Body = () => {

    let [listOfRestro,setListOfRestro] = useState([])


    
    const fetchApiData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        
        const apiJson = await data.json();

        console.log(apiJson);
        setListOfRestro(apiJson?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle)
    }


 
    useEffect(() => {
        fetchApiData();
    },[]);
    // console.log(listOfRestro)

    // if(listOfRestro.length === 0) {
    //     return <Shimmer/>
    // }

    return (
        <div className="body">
            <div className="filter">
                <button onClick={() => {

                    let temp = listOfRestro.restaurants.filter((ele) => {
                        return ele.info.avgRating > 4
                    })
               
                    setListOfRestro({"restaurants":temp});
                   
                 }} className="filter-btn">Top Rated Restaurants</button>
            </div>
            <div className="restro-container container">
                {/* Restro Card */}
                {
                   listOfRestro.restaurants &&  listOfRestro.restaurants.map((ele) => {
                        return <RestroCard key={ele.info.id} resData={ele} />
                    })
                }

            </div>
        </div>
    )
}

export default Body;