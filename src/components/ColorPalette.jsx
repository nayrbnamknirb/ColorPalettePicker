import classes from './ColorPalette.module.css';
import Card from './Card';
import Color from 'color';
import { Link } from "react-router-dom"

const ColorPalette = (props) => {
    const JSONparse = JSON.parse(props.colors)
    let colorInfo = new Array()
    for (let i = 0; i < 6; i++) {
        colorInfo.push(Color.rgb(JSONparse[i].color[0], JSONparse[i].color[1], JSONparse[i].color[2]))
    }

    return (
        <Card>
            <h3>{props.name}</h3>
            <div className={classes.colorList}>
                <div style={{backgroundColor: colorInfo[0], color: colorInfo[0]}}>.</div>
                <div style={{backgroundColor: colorInfo[1], color: colorInfo[1]}}>.</div>
                <div style={{backgroundColor: colorInfo[2], color: colorInfo[2]}}>.</div>
                <div style={{backgroundColor: colorInfo[3], color: colorInfo[3]}}>.</div>
                <div style={{backgroundColor: colorInfo[4], color: colorInfo[4]}}>.</div>
                <div style={{backgroundColor: colorInfo[5], color: colorInfo[5]}}>.</div>
            </div>
            <br/>
            <Link className={classes.button} to={
                {pathname: `/palette/${props.id}`,
                    name: props.name,
                    desc: props.desc,
                    colors: colorInfo
                }
            }>See info</Link>
            <br/><br/>
        </Card>
    )
}

export default ColorPalette