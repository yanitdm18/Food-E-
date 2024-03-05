import { Link } from 'react-router-dom'

export default function Navbar () {
return (
    <div className="Navbar" > 
       <h2> I am the navBar </h2>
     <Link to = "/CocktailList" > Cocktail List  </Link>
     <Link to ="/" > Home </Link>



</div>
)
}