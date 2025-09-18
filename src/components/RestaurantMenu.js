import { useState,useEffect } from "react";
import { MENU_API } from "../utils/constants";
import Shimmer from "./shimmer";
import { useParams } from "react-router";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);
    const {resId} = useParams();


    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async ()=> {

    const response = await fetch(MENU_API + resId);
    const json = await response.json();
    setResInfo(json.data);
    console.log(json.data.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card.card.categories[1]?.itemCards);
    };
    
    if (resInfo === null) return <Shimmer/>;

    const {name, cuisines, costForTwoMessage, avgRating} = resInfo?.cards[2]?.card?.card?.info;
    
    const cardItems = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.categories[1]?.itemCards;

    return (
        <div className="menu">            
            <h1>{name}</h1>
            <h3>{cuisines.join(",")}</h3>
            <h3>Cost of two: {costForTwoMessage}</h3>
            <h3>Rating : {avgRating}</h3>
            <h2>Menu: </h2>
            <ul>
                {cardItems?.slice(2).map((item) => (
                    <li key={item.card.info.id}> {item.card.info.name} | Price: ₹{item.card.info.price / 100}.00 {/* | Description:  {item.card.info.description}  */}</li>
                ))}
            </ul>


        </div>
        );
};

export default RestaurantMenu;
