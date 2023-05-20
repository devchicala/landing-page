import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      //default: Interpolation<ThemeProps<DefaultTheme>>
      primary: string
      secondary: string
      primary: string
      secondary: string
      light: string
      text: string
      textDark: string
      bgDefault: string
      bgLight: string
    }
  }
}
