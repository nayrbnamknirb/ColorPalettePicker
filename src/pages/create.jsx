import * as colorLib from "../scripts/colorCalc.js"
import classes from "./create.module.css"
import { useState } from 'react';
import Color from 'color';
import ColorForm from '../components/ColorForm.jsx';
import PaletteColors from "../components/PaletteColors.jsx";

function CreatePage() {
    const [initialColor, setInitialColor] = useState(Color.rgb(255, 255, 255, 0) )
    const [currentColors, setCurrentColors] = useState([
        Color.rgb(255, 255, 255, 0), Color.rgb(255, 255, 255, 0), Color.rgb(255, 255, 255, 0), Color.rgb(255, 255, 255, 0),
         Color.rgb(255, 255, 255, 0), Color.rgb(255, 255, 255, 0),
    ]);
    const [colorMode, setColorMode] = useState(() => colorLib.Quadcolor)

    const runColorMode = (event) => {
        console.log(parseInt(event.target.value))
        switch(parseInt(event.target.value)) {
            case 1:
                setColorMode(() => colorLib.Quadcolor)
                setCurrentColors(colorLib.Quadcolor(initialColor))
                break;
            case 2:
                setColorMode(() => colorLib.Tricolor)
                setCurrentColors(colorLib.Tricolor(initialColor))
                break;
            case 3:
                setColorMode(() => colorLib.Dualcolor)
                setCurrentColors(colorLib.Dualcolor(initialColor))
                break;
            case 4:
                setColorMode(() => colorLib.Dualsplit)
                setCurrentColors(colorLib.Dualsplit(initialColor))
                break;
            case 5:
                setColorMode(() => colorLib.Nearby)
                setCurrentColors(colorLib.Nearby(initialColor))
                break;
            case 6:
                setColorMode(() => colorLib.Monochrome)
                setCurrentColors(colorLib.Monochrome(initialColor))
                break;
        }
    }

    const printColor = (event) => {
        setInitialColor(Color(event.target.value))

        setCurrentColors(colorMode(Color(event.target.value)))
    }

    const setColor = (event) => {
        setInitialColor(Color(event.target.style.backgroundColor))

        setCurrentColors(colorMode(Color(event.target.style.backgroundColor)))

        document.getElementById("color").value = colorLib.colorToHex(Color(event.target.style.backgroundColor))
    }

    return <>
        <h2>Palette Creator</h2>

        <div className={classes.currentColor}>
            <p>Current basis color:</p>
            <div style={{backgroundColor: currentColors[0], color: colorLib.getTextColor(currentColors[0])}}>
                {colorLib.colorToRGB(currentColors[0])}<br/>{colorLib.colorToHex(currentColors[0])}
            </div>
        </div>
        <form>
            <label htmlFor="color">Set basis color:</label>
            <input id='color' type="color" onChange={printColor}/>
            <br/><br/>
            <label htmlFor="mode">Set palette calculation mode:</label>
            <select id="mode" name="mode" onChange={runColorMode}>
                <option value="1">Quadcolor</option>
                <option value="2">Tricolor</option>
                <option value="3">Dualcolor</option>
                <option value="4">Dualsplit</option>
                <option value="5">Nearby</option>
                <option value="6">Monochrome</option>
            </select>
        </form>
        <br/>
        <p>Click on a color to set it to the basis color</p>

        <PaletteColors colors={currentColors} onColorChange={setColor}/>

        <ColorForm palette={initialColor.valpha == 1 ? JSON.stringify(currentColors) : null}/>
    </>
}

export default CreatePage