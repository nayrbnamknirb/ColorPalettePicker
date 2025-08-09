import { NavLink } from 'react-router-dom'
import classes from "./home.module.css"
import Card from '../components/Card'

function HomePage () {

    return <>
        <div className={classes.jumbotron}>
            <div className={classes.padOut}>
                <h1>Color creation with the Color Palette Picker</h1>
            </div>
        </div>
        <p className={classes.embiggen}>Take a look at the many uploaded color palettes made by members of the community, or create one with our tools to assist your art project.</p>

        <br></br>
        {/* Using extra divs in a 6 column grid set-up is my way of "cheating" equal-width columns. Not the most elegant method, but it was easy. */}
        <div className={classes.cardGrid}>
            <div></div>
            <Card>
                <div className={classes.cardBG1}>
                    <div className={classes.padOut}>
                        <h2>Create a palette:</h2>
                    </div>
                </div>
                <p className={classes.bottomPad}>Use the automatic color palette generator to create new colors:</p>
                <NavLink to="/create" className='btn redbtn'>Create</NavLink>
            </Card>
            <div></div>
            <Card>
                <div className={classes.cardBG2}>
                    <div className={classes.padOut}>
                        <h2>Browse palettes:</h2>
                    </div>
                </div>
                <p className={classes.bottomPad}>See what color palettes have been published by the people:</p>
                <NavLink to="/browse" className='btn greenbtn'>Browse</NavLink>
            </Card>
            <div></div>
        </div>

    </>
}

export default HomePage