export const fonts = {
  headline: 'Workbench_400Regular',
  sans: 'Inter_400Regular',
  sansMedium: 'Inter_500Medium',
  sansSemiBold: 'Inter_600SemiBold',
  mono: 'GeistMono_400Regular',
};

export const sizes = {
  font10xl: 88, font7xl: 58, fontDisplay: 40, font3xl: 28, fontXl: 24, fontLarge: 18, fontMedium: 16, fontSmall: 14, fontBody: 16, fontHeading: 24,
  padXxsmall: 4, padXsmall: 8, padSmall: 12, padMedium: 16, padLarge: 24, padXlarge: 32, padXxlarge: 56,
  gapXsmall: 4, gapSmall: 8, gapMedium: 16, gapLarge: 24, gapXlarge: 40, gapXxlarge: 56,
  letterSpacingSnug: -2,
  cornerSmall: 4, cornerMedium: 8, cornerLarge: 12, cornerFull: 999, adsCorner: 32,
  border: 0.5, borderBottom: 1, adsBorder: 1, sdsBorder: 1,
};

const lightColors = {
  colorPrimary: '#2c3039', colorSecondary: 'rgba(16,7,27,0.6)', colorTertiary: 'rgba(16,7,27,0.4)', colorDim: 'rgba(16,7,27,0.09)',
  colorBrandPrimary: '#e76f00', colorBrandSecondary: '#ffbf58', colorBrandTertiary: '#e76f00',
  colorAlt: '#5f788e', colorOnReverse: '#ffffff', colorOnReverseSecondary: 'rgba(255,255,255,0.2)',
  borderPrimary: '#e76f00', borderSecondary: '#86a8c0',
  bgBrandPrimary: '#ffffff', bgBrandSecondary: '#d2edff', bgOnBrand: 'rgba(16,7,27,0.09)', bgMap: '#8497a8',
  white100: '#ffffff', white200: 'rgba(255,255,255,0.8)', white300: 'rgba(255,255,255,0.6)', white400: 'rgba(255,255,255,0.4)', white500: 'rgba(255,255,255,0.2)', white600: 'rgba(255,255,255,0.1)',
};

const darkColors = {
  ...lightColors,
  colorPrimary: '#ffffff', colorSecondary: 'rgba(255,255,255,0.6)', colorTertiary: 'rgba(255,255,255,0.4)', colorDim: 'rgba(255,255,255,0.1)',
  colorBrandPrimary: '#ff932e', colorBrandSecondary: '#9e4700', colorBrandTertiary: '#ffbf58',
  colorAlt: '#d2edff', colorOnReverse: '#2c3039', colorOnReverseSecondary: 'rgba(16,7,27,0.2)',
  borderPrimary: '#ffbf58', borderSecondary: '#bbe4ff',
  bgBrandPrimary: '#10071b', bgBrandSecondary: '#424857', bgOnBrand: 'rgba(255,255,255,0.1)', bgMap: '#595360',
};

export function makeTheme(mode) {
  const colors = mode === 'Dark' ? darkColors : lightColors;
  return { ...sizes, ...colors, mode, fonts };
}

export const themes = { Light: makeTheme('Light'), Dark: makeTheme('Dark') };
