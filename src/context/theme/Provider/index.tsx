import { NativeBaseProvider, extendTheme } from 'native-base'
import React from 'react'

const ThemeProvider: React.FC = ({ children }) => {
  const theme = extendTheme({
    colors: {
      purple: {
        900: '#7D2F87',
        800: '#9B38A8',
        700: '#BB63C7',
        600: '#D096D8'
      },
      purpleDark: {
        900: '#371B58',
        800: '#4C3575',
        700: '#5B4B8A',
        600: '#7858A6'
      },
      orange: {
        900: '#FF5733',
        800: '#e36950',
        700: '#e88470'
      },
      neutral: {
        white: '#FFFFFF',
        black: '#242026',
        gray: '#8F8D91',
        gray2: '#C7C7C7'
      }
    },
    breakpoints: {
      base: 0,
      sm: 400,
      md: 768,
      lg: 992,
      xl: 1280
    }
  })

  return (
    <NativeBaseProvider theme={theme}>
      {children}
    </NativeBaseProvider>
  )
}

export default ThemeProvider
