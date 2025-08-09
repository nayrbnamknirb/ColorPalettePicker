import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import classes from "./root.module.css";

function Root() {
    return <> 
        <MainNavigation/>
        <main className={classes.wrap}>
            <Outlet/>
        </main>
        <footer className={classes.footer}>
            © 2025 Color Palette Picker. All Rights Reserved.
        </footer>
    </>
}

export default Root;