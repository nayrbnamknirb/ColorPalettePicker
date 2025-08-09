import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import classes from "./paletteDetail.module.css"
import { NavLink } from "react-router-dom";
import PaletteColors from "../components/PaletteColors";
import Color from "color";

function PaletteDetailPage(props) {
    const params = useParams();

    const [name, setName] = useState("Loading...");
    const [desc, setDesc] = useState(null);
    const [colors, setColors] = useState([
        Color.rgb(255, 255, 255, 0), Color.rgb(255, 255, 255, 0), Color.rgb(255, 255, 255, 0), Color.rgb(255, 255, 255, 0),
         Color.rgb(255, 255, 255, 0), Color.rgb(255, 255, 255, 0),
    ]);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchPals = async() => {
            try {
                const response = await fetch('https://palettes-e75a0-default-rtdb.firebaseio.com//Palettes.json');
    
                if (!response.ok) {
                    throw new Error("Something went wrong.")
                }
    
                const responseData = await response.json();
    
                for (const key in responseData) {
                    if (key == params.palId) {
                        console.log(responseData[key])
                        setName(responseData[key].name)
                        setDesc(responseData[key].message)

                        const JSONparse = JSON.parse(responseData[key].colors)
                        let colorInfo = new Array()
                        for (let i = 0; i < 6; i++) {
                            colorInfo.push(Color.rgb(JSONparse[i].color[0], JSONparse[i].color[1], JSONparse[i].color[2]))
                        }
                        setColors(colorInfo)

                        break;
                    }
                }

                setError("")
                //setIsLoading(false);
            }
            catch (erro) {
                //setIsLoading(false);
                setError(erro.message);
            }
        };
        fetchPals();
    }, [])

    return <>
        <p>{error}</p>
        <h1>{name}</h1>
        <p className={classes.desc}>{desc}</p>
        <PaletteColors colors={colors} onColorChange={null}/>
        <br/><br/>
        <NavLink to="/browse" className={({isActive}) => 
            isActive ? `${classes.active} ${classes.greenbtn}` : classes.greenbtn
        }>Return to palettes</NavLink>
    </>
}

export default PaletteDetailPage