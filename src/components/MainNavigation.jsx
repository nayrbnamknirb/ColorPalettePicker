import { Link, NavLink } from 'react-router-dom'
import classes from "./MainNavigation.module.css";
import NavButtons from './NavButtons';

function MainNavigation() {
    return <header className={classes.header}>
        <h1>Color Palette Picker</h1>
        <NavButtons/>
    </header>
}

export default MainNavigation;