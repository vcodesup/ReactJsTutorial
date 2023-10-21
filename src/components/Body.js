import RestroCard from './RestroCard';
import Shimmer  from '../components/Shimmer'
import { useState,useEffect } from 'react/cjs/react.development';



const Body = () => {

    let [listOfRestro,setListOfRestro] = useState([])

    let [fixedListOfRestro,setFixedListOfRestro] = useState([])

    let [searchText,setSearchText] = useState("");

    
    const fetchApiData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        
        const apiJson = await data.json();

        console.log(apiJson);
        setListOfRestro(apiJson?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle)
        setFixedListOfRestro(apiJson?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle)
    }


 
    useEffect(() => {
        fetchApiData();
    },[]);
    // console.log(listOfRestro)

    

    return listOfRestro.length === 0 ? <Shimmer/> : (
        <div className="body">
            <div className="filter">

                <div className='search-box'>
                    <input type='text' value={searchText} onChange={(e) => {
                        
                        setSearchText(e.target.value)
                    }}/>
                    <button onClick={() => {
                        let filteredListOfRestro = listOfRestro.restaurants.filter((ele) => {
                            return ele.info.name.toLowerCase().includes(searchText.toLowerCase())
                        })
                        setFixedListOfRestro({"restaurants":filteredListOfRestro});
                    }}>Search</button>
                </div>
                <button onClick={() => {

                    let temp = listOfRestro.restaurants.filter((ele) => {
                        return ele.info.avgRating > 4
                    })
               
                    setFixedListOfRestro({"restaurants":temp});
                   
                 }} className="filter-btn">Top Rated Restaurants</button>
            </div>
            <div className="restro-container container">
                {/* Restro Card */}
                {
                   fixedListOfRestro.restaurants &&  fixedListOfRestro.restaurants.map((ele) => {
                        return <RestroCard key={ele.info.id} resData={ele} />
                    })
                }

            </div>
        </div>
    )
}

export default Body;