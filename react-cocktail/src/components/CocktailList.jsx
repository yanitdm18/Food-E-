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
            <h2>I am the Cocktail List</h2>
            {cocktails && cocktails.map(cocktail => (
                <div key={cocktail.idDrink} className="Cocktail-Name">
                    <h3>{cocktail.strDrink}</h3>
                </div>
            ))}
        </div>
    );
}


    