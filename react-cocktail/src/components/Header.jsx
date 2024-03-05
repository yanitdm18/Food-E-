import Navbar from "./Navbar"
import Searchbar from "./Searchbar"
 export default function Header () {
    return(
        <div className="header"> 
             <h2> I am the header</h2>
             <Navbar />
             <Searchbar />
        </div>
    )
 }