import {String2HexCodeColor} from 'string-to-hex-code-color'

const contrastAdjust = 0.1
// darker
// const contrastAdjust = -0.35

const hexer = new String2HexCodeColor(contrastAdjust)
const hex = (str) => hexer.stringToColor(str)

export { hex }
