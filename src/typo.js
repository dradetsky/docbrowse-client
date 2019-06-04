import Typography from 'typography'
import theme from 'typography-theme-fairy-gates'
import 'typeface-open-sans'

theme.headerFontFamily = ['Open Sans']
theme.bodyFontFamily = ['Open Sans']

const typography = new Typography(theme)
typography.injectStyles()

export default typography
