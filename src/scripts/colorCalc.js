//this is a separate code file used for manipulating colors. It allows conversion of the colors to text and creating color palettes

import Color from 'color';
import colorString from 'color-string';

//COLOR STRING FUNCTIONS

//this function calculates whether the text color on a color background should be white or black. 
export function getTextColor(colorVal) {
    if (colorVal.valpha < 1) {
        return colorVal
    }

    //this color object comes bundled with a luminosity calculator, so W3C Recommendations (WCAG 2.0) are easy to acomplish
    if (colorVal.isLight()) {
        return Color.rgb(0, 0, 0, 1) 
    }
    else {
        return Color.rgb(255, 255, 255, 1)
    }
}

export function colorToRGB(colorVal) {
    if (colorVal.valpha < 1) {
        return ""
    }
    return colorString.to.rgb(colorVal.color[0], colorVal.color[1], colorVal.color[2])
}

export function colorToHex(colorVal) {
    if (colorVal.valpha < 1) {
        return ""
    }
    return colorString.to.hex(colorVal.color[0], colorVal.color[1], colorVal.color[2])
}


//COLOR PALETTE ASSISTS

function makeLightColor(baseColor) {
    let colorStore = baseColor
    if (baseColor.hsl().color[2] <= 65) {
        colorStore = colorStore.lighten(.25).rgb()
    }
    else {
        colorStore = colorStore.darken(.75).rgb()
    }
    if (baseColor.hsl().color[1] >= 55) {
        colorStore = colorStore.desaturate(.25).rgb()
    }
    else {
        colorStore = colorStore.saturate(.75).rgb()
    }
    return colorStore
}

function makeDarkColor(baseColor) {
    let colorStore = baseColor
    if (baseColor.hsl().color[2] >= 30) {
        colorStore = colorStore.darken(.25).rgb()
    }
    else {
        colorStore = colorStore.lighten(.75).rgb()
    }
    if (baseColor.hsl().color[1] >= 75) {
        colorStore = colorStore.desaturate(.25).rgb()
    }
    else {
        colorStore = colorStore.saturate(.75).rgb()
    }
    return colorStore
}

function makeSaturatedColor(baseColor) {
    if (baseColor.hsl().color[2] >= 40) {
        return baseColor.desaturate(0.5).darken(.125).rgb()
    }
    else {
        let colorStore = baseColor.desaturate(0.5).negate().rotate(180).darken(-.2+((100-baseColor.hsv().color[2])/100)).rgb()
        if (baseColor.hsl().color[2] >= 30 && baseColor.hsl().color[1] <= 60) {
            return colorStore.lighten(2/3).rgb()
        }
        return colorStore
    }
}


//COLOR PALETTE GENERATORS

export function Quadcolor(baseColor) {
    if (!baseColor) { return }

    let colorList = [
        baseColor, Color.rgb(255, 255, 255, 0), Color.rgb(255, 255, 255, 0), Color.rgb(255, 255, 255, 0),
         Color.rgb(255, 255, 255, 0), Color.rgb(255, 255, 255, 0),
    ];

    colorList[1] = baseColor.rotate(270).rgb()
    colorList[2] = baseColor.rotate(180).rgb()
    colorList[3] = baseColor.rotate(90).rgb()
    colorList[4] = makeSaturatedColor(baseColor)
    colorList[5] = makeSaturatedColor(colorList[1])

    return colorList;
}

export function Tricolor(baseColor) {
    let colorList = [
        baseColor, Color.rgb(255, 255, 255, 0), Color.rgb(255, 255, 255, 0), Color.rgb(255, 255, 255, 0),
         Color.rgb(255, 255, 255, 0), Color.rgb(255, 255, 255, 0),
    ];

    colorList[1] = baseColor.rotate(240).rgb()
    colorList[2] = baseColor.rotate(120).rgb()
    colorList[3] = makeSaturatedColor(baseColor)
    colorList[4] = makeSaturatedColor(colorList[1])
    colorList[5] = makeSaturatedColor(colorList[2])

    return colorList;
}

export function Dualsplit(baseColor) {
    let colorList = [
        baseColor, Color.rgb(255, 255, 255, 0), Color.rgb(255, 255, 255, 0), Color.rgb(255, 255, 255, 0),
         Color.rgb(255, 255, 255, 0), Color.rgb(255, 255, 255, 0),
    ];

    colorList[1] = baseColor.rotate(210).rgb()
    colorList[2] = baseColor.rotate(150).rgb()
    colorList[3] = makeSaturatedColor(baseColor)
    colorList[4] = makeSaturatedColor(colorList[1])
    colorList[5] = makeSaturatedColor(colorList[2])

    return colorList;
}

export function Dualcolor(baseColor) {
    if (!baseColor) { return }

    let colorList = [
        baseColor, Color.rgb(255, 255, 255, 0), Color.rgb(255, 255, 255, 0), Color.rgb(255, 255, 255, 0),
         Color.rgb(255, 255, 255, 0), Color.rgb(255, 255, 255, 0),
    ];

    colorList[1] = baseColor.rotate(180).rgb()
    colorList[2] = makeLightColor(baseColor)
    colorList[3] = makeLightColor(colorList[1])
    colorList[4] = makeDarkColor(baseColor)
    colorList[5] = makeDarkColor(colorList[1])

    return colorList;
}

export function Nearby(baseColor) {
    let colorList = [
        baseColor, Color.rgb(255, 255, 255, 0), Color.rgb(255, 255, 255, 0), Color.rgb(255, 255, 255, 0),
         Color.rgb(255, 255, 255, 0), Color.rgb(255, 255, 255, 0),
    ];

    colorList[1] = baseColor.rotate(-15).rgb()
    colorList[2] = baseColor.rotate(15).rgb()
    colorList[3] = baseColor.rotate(-30).rgb()
    colorList[4] = baseColor.rotate(30).rgb()
    colorList[5] = makeSaturatedColor(baseColor)

    return colorList;
}

export function Monochrome(baseColor) {
    let colorList = [
        baseColor, Color.rgb(255, 255, 255, 0), Color.rgb(255, 255, 255, 0), Color.rgb(255, 255, 255, 0),
         Color.rgb(255, 255, 255, 0), Color.rgb(255, 255, 255, 0),
    ];

    colorList[1] = makeLightColor(baseColor)
    colorList[2] = makeLightColor(makeLightColor(baseColor))
    colorList[3] = makeDarkColor(baseColor)
    colorList[4] = makeDarkColor(makeDarkColor(baseColor))
    colorList[5] = makeSaturatedColor(baseColor)

    return colorList;
}