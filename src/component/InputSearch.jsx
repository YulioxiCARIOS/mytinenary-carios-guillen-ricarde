import "../style/App.css"
import { FaSearch } from "react-icons/fa";

function InputSearch() {

    return (
        <div className="input-search">
            <div className="search-icon"><FaSearch /></div>
            <input type="search" placeholder="Find Your City Here.." />
        </div>
    )
}

export default InputSearch;