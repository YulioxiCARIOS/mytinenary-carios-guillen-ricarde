import { FaUserCircle } from "react-icons/fa";

function NavBar(){
    return(

    <div>
    <div className="nav">
    <div className="logo"><img src="#" alt="" /></div>
    <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Trips</li>
        <li>Contact</li>
        <li> <FaUserCircle/> </li>
    </ul>
    </div>

</div>
)

       
    
}
export default NavBar