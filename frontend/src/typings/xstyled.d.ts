import '@xstyled/styled-components';

declare module '@xstyled/styled-components' {
  export class ColorModeProvider extends React.PureComponent<{
    children: React.ReactNode;
  }> {}

  export type ColorModes = 'default' | 'dark';

  function useTheme<
    Theme extends typeof xstyled.DefaultTheme = xstyled.DefaultTheme,
  >(): Theme;

  export function useColorMode(): [ColorModes, (colorMode: ColorModes) => void];
}
