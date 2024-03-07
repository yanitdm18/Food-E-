import { useState , useEffect} from "react"
import axios from "axios"
import { BASE_URL } from "../globals"
import { useNavigate } from "react-router-dom"
import { Link, useParams } from 'react-router-dom'

export default function CocktailDetails () {

    const [cocktail, setCocktail] = useState('')
    let {strDrink} = useParams()

    useEffect(() => {
        const getCocktail = async () => {
            const response = await axios.get(`${BASE_URL}${strDrink}`)
            console.log(response.data)
            setCocktail(response.data)
        }
        getCocktail()
    }, [strDrink])
    
    return cocktail ? (
        <div className="cocktail-details" >
            <div className="detail-header">
                <img className="detail-image" src={cocktail.strDrinkThumb} alt={cocktail.strDrink}/>
                <div className="detail-title">{cocktail.strDrink}</div>
                <div className="detail-subtitle">{cocktail.strTags}</div>
            </div>
            <div className="detail-body">
                <div className="detail-ingredients">
                    <div className="detail-body-title">Ingredients</div>
                    <div className="detail-ingredients-measurements">
                        <div>{cocktail.strMeasurement1}</div>
                        <div>{cocktail.strMeasurement2}</div>
                        <div>{cocktail.strMeasurement3}</div>
                        <div>{cocktail.strMeasurement4}</div>
                        <div>{cocktail.strMeasurement5}</div>
                        <div>{cocktail.strGlass}</div>
                    </div>
                    <div className="detail-ingredients-ingredients">
                        <div>{cocktail.strIngredient1}</div>
                        <div>{cocktail.strIngredient2}</div>
                        <div>{cocktail.strIngredient3}</div>
                        <div>{cocktail.strIngredient4}</div>
                        <div>{cocktail.strIngredient5}</div>
                        <div>{cocktail.strGlass}</div>
                    </div>
                </div>
                <div className="detail-recipe">
                    <div className="detail-body-title">Recipe</div>
                    <div className="detail-recipe-text">{cocktail.strInstructions}</div>
                </div>
                <div className="detail-variations">
                    <div className="detail-body-title">Variations</div>
                    <div className="detail-variation-grid">
                        {/* Make this an imported component */}
                        <div className="detail-variation-card">
                            <div className="detail-variation-title">Variation</div>
                            <img className="detail-variation-image"/>
                            <button className="detail-variation-button">See More</button>
                        </div>
                    </div>
                </div>
                <div className="detail-back">
                    <div className="detail-back-link">
                        <Link to="/cocktaillist">back to list</Link>
                    </div>
                </div>
            </div>
        </div>
    ) : null
}