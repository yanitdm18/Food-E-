import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../globals";



export default function CocktailList() { 
    const [cocktails, setCocktails] = useState([]);
   

    useEffect(() => {
        const getCocktails = async () => {
            try {
                const response = await axios.get(`${BASE_URL}`);
                setCocktails(response.data);
            } catch (error) {
                console.error("Error fetching cocktails:", error);
            }
        };
        console.log (cocktails)
        getCocktails();
    }, []);
    
    return (
        <div>
          {/* Render list of cocktails */}
        </div>
      );
    }
    
   





    