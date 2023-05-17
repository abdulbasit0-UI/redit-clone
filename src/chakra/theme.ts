// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react'
import '@fontsource/open-sans/300.css';
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/700.css';

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    100: '#ff33c00'
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
    // buttons
}

export const theme = extendTheme({ colors, fonts, styles})