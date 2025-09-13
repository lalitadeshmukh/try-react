import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import { test } from "./RestaurantCard";
import {useState} from "react";

//let filterList = restaurantList;
const Body = () => {

    //Local state veriable
    const [allRestaurants] = useState(restaurantList);
    const [listOfRestaurant, setListOfRestaurant] = useState(restaurantList);

    return (
        <div className="body">
            <div className="filter">
                <button 
                    className="filter-btn" 
                    onClick={()=>{
                        const filterList = listOfRestaurant.filter((restaurant) => restaurant.data.avgRating>4);
                        setListOfRestaurant(filterList);
                }} 
                    onMouseOver={()=>{console.log("Button moved")}}>
                    Top Rated
                </button>
            </div>
            <div className="filter2">
                <button 
                    className="reset-btn" 
                    onClick={()=>{                        
                        setListOfRestaurant(allRestaurants);
                }} 
                    onMouseOver={()=>{console.log("Button moved")}}>
                    Reset Rating
                </button>
            </div>
            <div className="res-container">
                {
                listOfRestaurant.map((restaurant) => (
                    <RestaurantCard key={restaurant.data.id} resData={restaurant} />
                    ))
                }
            </div>
        </div>
    )
}

export default Body;