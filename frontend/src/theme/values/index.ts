import borders from './borders';
import breakpoints from './breakpoints';
import colors from './colors';
import fontSizes from './fontSizes';
import fontWeights from './fontWeights';
import radii from './radii';
import shadows from './shadows';
import sizes from './sizes';
import space from './space';
import transitions from './transitions';
import zIndices from './zIndices';

const values = {
  borders,
  breakpoints,
  colors,
  fontSizes,
  fontWeights,
  radii,
  shadows,
  sizes,
  space,
  transitions,
  zIndices,
} as const;

export type ThemeSchema = {
  [P in keyof typeof values]: keyof typeof values[P];
};

export default values;
