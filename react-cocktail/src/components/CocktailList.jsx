import { useState , useEffect} from "react"
import axios from "axios"
import { BASE_URL } from "../globals"
import { useNavigate } from "react-router-dom"



export default function CocktailList (props) { 
    const [ cocktails , setCocktails]= useState ([])

    useEffect(()=> {
        const getCocktails =  async ()=> {
            const response  = await axios.get (`${BASE_URL}`)
            setCocktails(response.data)

        }

    })

    
    return (
        <div className="CocktailList" > 
           <h2> I am the Cocktail List </h2>
    
    </div>
    )
    }