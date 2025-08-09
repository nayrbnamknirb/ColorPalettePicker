import classes from './PaletteColors.module.css';
import * as colorLib from "../scripts/colorCalc.js"
import { useState } from 'react';

const PaletteColors = (props) => {
    const [copyDone, setCopyDone] = useState(false)

    function ColorToClipboard() {
        var copyText = document.getElementById("colorCode");

        navigator.clipboard.writeText(copyText.textContent);
        setCopyDone(true)
        
        setTimeout(() => {
            setCopyDone(false)
        }, 3000);
    } 
    
    return (
        <>
        <div className={classes.colorList}>
            <div></div>
            <button onClick={props.onColorChange} style={{backgroundColor: props.colors[0], color: colorLib.getTextColor(props.colors[0])}}>
                {colorLib.colorToRGB(props.colors[0])}<br/>{colorLib.colorToHex(props.colors[0])}
            </button>
            <button onClick={props.onColorChange} style={{backgroundColor: props.colors[1], color: colorLib.getTextColor(props.colors[1])}}>
                {colorLib.colorToRGB(props.colors[1])}<br/>{colorLib.colorToHex(props.colors[1])}
            </button>
            <button onClick={props.onColorChange} style={{backgroundColor: props.colors[2], color: colorLib.getTextColor(props.colors[2])}}>
                {colorLib.colorToRGB(props.colors[2])}<br/>{colorLib.colorToHex(props.colors[2])}
            </button>
            <div className={classes.mobileShow}></div>
            <div className={classes.mobileShow}></div>
            <button onClick={props.onColorChange} style={{backgroundColor: props.colors[3], color: colorLib.getTextColor(props.colors[3])}}>
                {colorLib.colorToRGB(props.colors[3])}<br/>{colorLib.colorToHex(props.colors[3])}
            </button>
            <button onClick={props.onColorChange} style={{backgroundColor: props.colors[4], color: colorLib.getTextColor(props.colors[4])}}>
                {colorLib.colorToRGB(props.colors[4])}<br/>{colorLib.colorToHex(props.colors[4])}
            </button>
            <button onClick={props.onColorChange} style={{backgroundColor: props.colors[5], color: colorLib.getTextColor(props.colors[5])}}>
                {colorLib.colorToRGB(props.colors[5])}<br/>{colorLib.colorToHex(props.colors[5])}
            </button>
        </div>
        <h4>Colors as plaintext:</h4>
        <pre className={classes.plaintext}>
            <code id='colorCode'>
                {
                    colorLib.colorToHex(props.colors[0]) + "\n" +
                    colorLib.colorToHex(props.colors[1]) + "\n" +
                    colorLib.colorToHex(props.colors[2]) + "\n" +
                    colorLib.colorToHex(props.colors[3]) + "\n" +
                    colorLib.colorToHex(props.colors[4]) + "\n" +
                    colorLib.colorToHex(props.colors[5]) + "\n"
                }
            </code>
        </pre>
        
        <button onClick={ColorToClipboard} className='btn yellowbtn'>Copy plaintext</button>
        <br/>
        <span className={copyDone && classes.success || classes.error}>{copyDone && "Copied successfully" || null}</span>
        </>
    )
}

export default PaletteColors