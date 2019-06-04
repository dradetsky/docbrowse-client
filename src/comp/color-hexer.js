import {String2HexCodeColor} from 'string-to-hex-code-color'

const hexer = new String2HexCodeColor(-0.35)
const hex = (str) => hexer.stringToColor(str)

export { hex }
