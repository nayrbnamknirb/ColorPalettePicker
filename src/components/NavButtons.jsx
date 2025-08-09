import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";

function NavButtons() {
    return <nav>
            <ul className={classes.list}>
                <li>
                    <NavLink to="/" className={({isActive}) => 
                        isActive ? `${classes.active} ${classes.bluebtn}` : classes.bluebtn
                    }>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/create" className={({isActive}) => 
                        isActive ? `${classes.active} ${classes.redbtn}` : classes.redbtn
                    }>Create</NavLink>
                </li>
                <li>
                    <NavLink to="/browse" className={({isActive}) => 
                        isActive ? `${classes.active} ${classes.greenbtn}` : classes.greenbtn
                    }>Browse</NavLink>
                </li>
            </ul>
        </nav>
}

export default NavButtons