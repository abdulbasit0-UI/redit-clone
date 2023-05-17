// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react'
import '@fontsource/open-sans/300.css';
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/700.css';
import { Button } from './buttons';

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    100: '#ff3c00'
  },

  
}
const fonts = {
    body: "Open Sans"
}

const styles = {
    global: {
        body: {
            bg: "gray.200"
        }
    }
}

const components = {
    Button,
}


export const theme = extendTheme({ colors, fonts, styles, components})