import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import Shimmer from "./shimmer";
import {useState, useEffect} from "react";
import { Link } from "react-router";


const Body = () => {

    //Local state veriable - use state hook
    //const [allRestaurants] = useState(restaurantList);
    const [listOfFilteredRestaurant, setListOfFilteredRestaurant] = useState([]);
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    //use effect hook - first argument is callback function and dependancy array
    useEffect(() => {
        console.log("Use Effect")
        fetchData();
    
    }, [])

    const fetchData = async() => {
        const data = await fetch("https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();        
                
        setListOfFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 

        setAllRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        
    }

    // Conditional Rendering below turshery operator 
    /* if(listOfFilteredRestaurant.length === 0) {
            console.log("Inside Shimmer");
            console.log("Restaurant List:", listOfFilteredRestaurant);
            return <Shimmer/>;
        } */
    
    return listOfFilteredRestaurant.length === 0 ? <Shimmer/> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                <form onSubmit={(e)=> {
                    //Filter rest in original list
                    e.preventDefault();
                    console.log(searchText);
                    const searchFilter = allRestaurants.filter((res) => res?.info?.name.toLowerCase().includes(searchText.toLowerCase()));
                    setListOfFilteredRestaurant(searchFilter/* .length === 0 ? listOfFilteredRestaurant : searchFilter */);
                    console.log("Filtered search : " + searchFilter);}}>
                    <input type="text" className="search-box" value={searchText} 
                onChange={(e) => {setSearchText(e.target.value)}} ></input>
                <button className="search-btn" onClick={()=>{}}>
                    Search
                </button>
                </form>
            </div>
            <button 
                    className="filter-btn" 
                    onClick={()=>{
                        const filterList = allRestaurants.filter((restaurant) => restaurant?.info?.avgRating>4.2);                        
                        setListOfFilteredRestaurant(filterList);
                        console.log("Filtered List : " + filterList);
                }} 
                    onMouseOver={()=>{console.log("Button moved")}}>
                    Top Rated
                </button>
                <button 
                    className="reset-btn" 
                    onClick={()=>{
                        setListOfFilteredRestaurant(allRestaurants);
                        console.log("All Rest : " + allRestaurants);
                }} 
                    onMouseOver={()=>{console.log("Button moved")}}>
                    Reset All
                </button>
            </div>

            <div className="res-container">
                {
                listOfFilteredRestaurant.map((restaurant) => (
                    <Link to={"/restaurants/" + restaurant.info.id} ><RestaurantCard key={restaurant.info.id} resData={restaurant} /></Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Body;