import Navbar from "./Navbar"
import Searchbar from "./Searchbar"
import { Link } from 'react-router-dom'

 export default function Header () {
    return(
        <div className="header"> 
             <h2>The Drink List</h2>
             <Navbar />
             <Searchbar />
        </div>
    )
 }