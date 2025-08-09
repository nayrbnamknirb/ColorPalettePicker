import { useState, useEffect } from "react";
import classes from './browse.module.css';
import ColorPalette from "../components/ColorPalette";

function BrowsePage() {
    const [pals, setPals] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchpals = async() => {
            try {
                const response = await fetch('https://palettes-e75a0-default-rtdb.firebaseio.com//Palettes.json');

                if (!response.ok) {
                    throw new Error("Something went wrong.")
                }

                const responseData = await response.json();

                const loadedpals = [];
                for (const key in responseData) {
                    loadedpals.push({
                        id: key,
                        name: responseData[key].name,
                        desc: responseData[key].message,
                        colors: responseData[key].colors,
                    })
                }
                setPals(loadedpals);
                setError("")
                //setIsLoading(false);
            }
            catch (erro) {
                //setIsLoading(false);
                setError(erro.message);
            }
        };
        fetchpals();
    }, [])

    const colList = pals.map((p) => <ColorPalette 
        key={p.id}
        id={p.id}
        name={p.name}
        desc={p.desc}
        colors={p.colors}
    />)


    return <>
        <h1>Browse Palettes</h1>
        <p>{error}</p>
        <p>Come take a look at the world of color:</p>
        <br/>
        <div className={classes.colorList}>
            {colList}
        </div>
    </>
}

export default BrowsePage