import RestroCard from './RestroCard';
import restData from '../utils/mockData';
import { useState } from 'react/cjs/react.development';



const Body = () => {

    let [listOfRestro,setListOfRestro] = useState(restData)
    // console.log(listOfRestro)
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
                    listOfRestro.restaurants.map((ele) => {
                        return <RestroCard key={ele.info.id} resData={ele} />
                    })
                }

            </div>
        </div>
    )
}

export default Body;