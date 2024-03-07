import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../globals";
import { useNavigate } from "react-router-dom";

export default function CocktailList() { 
    const [cocktails, setCocktails] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getCocktails = async () => {
            try {
                const response = await axios.get(`${BASE_URL}`);
                setCocktails(response.data.results);
            } catch (error) {
                console.error("Error fetching cocktails:", error);
            }
        };
        
        getCocktails();
    }, []);

    return (
        <div className="CocktailList">
            <h2>The Full List</h2>
            {cocktails && cocktails.map(cocktail => (
                <div key={cocktail.strDrink} className="cocktail-list-result">
                    <img src={cocktail.strDrinkThumb}/>
                    <div className="list-result-info">
                        <div className="list-result-title">{cocktail.strDrink}</div>
                        <div className="list-result-ingredients">
                            <div>{cocktail.strIngredient1}, </div>
                            <div>{cocktail.strIngredient2}, </div>
                            <div>{cocktail.strIngredient3}, ...</div>
                        </div>
                        {/* <div className="list-result-variations">Variations</div> */}
                        <button className="list-result-button">see more</button>
                    </div>
                </div>
            ))}
        </div>
    )
}


    