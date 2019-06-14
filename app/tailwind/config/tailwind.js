import container from 'tailwindcss/plugins/container';

import colors from './colors';
import screens from './screens';
import fonts from './fonts';
import textSizes from './text-sizes';
import fontWeights from './font-weights';
import leading from './line-height';
import tracking from './letter-spacing';
import textColors from './text-colors';
import backgroundColors from './background-colors';
import backgroundSize from './background-size';
import borderWidths from './border-widths';
import borderColors from './border-colors';
import borderRadius from './border-radius';
import width from './width';
import height from './height';
import minWidth from './min-width';
import minHeight from './min-height';
import maxWidth from './max-width';
import maxHeight from './max-height';
import padding from './padding';
import margin from './margin';
import negativeMargin from './negative-margin';
import shadows from './shadows';
import zIndex from './z-index';
import opacity from './opacity';
import svgFill from './svg-fill';
import svgStroke from './svg-stroke';

export default {
  colors,
  screens,
  fonts,
  textSizes,
  fontWeights,
  leading,
  tracking,
  textColors,
  backgroundColors,
  backgroundSize,
  borderWidths,
  borderColors,
  borderRadius,
  width,
  height,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight,
  padding,
  margin,
  negativeMargin,
  shadows,
  zIndex,
  opacity,
  svgFill,
  svgStroke,

  /*
  |-----------------------------------------------------------------------------
  | Modules                  https://tailwindcss.com/docs/configuration#modules
  |-----------------------------------------------------------------------------
  |
  | Here is where you control which modules are generated and what variants are
  | generated for each of those modules.
  |
  | Currently supported variants:
  |   - responsive
  |   - hover
  |   - focus
  |   - focus-within
  |   - active
  |   - group-hover
  |
  | To disable a module completely, use `false` instead of an array.
  |
  */

  modules: {
    appearance: false, //['responsive'],
    backgroundAttachment: false, //['responsive'],
    backgroundColors: false, //['responsive', 'hover', 'focus'],
    backgroundPosition: false, //['responsive'],
    backgroundRepeat: false, //['responsive'],
    backgroundSize: false, //['responsive'],
    borderCollapse: false, //[],
    borderColors: false, //['responsive', 'hover', 'focus'],
    borderRadius: false, //['responsive'],
    borderStyle: false, //['responsive'],
    borderWidths: false, //['responsive'],
    cursor: false, //['responsive'],
    display: false, //['responsive'],
    flexbox: ['responsive'],
    float: false, //['responsive'],
    fonts: false, //['responsive'],
    fontWeights: false, //['responsive', 'hover', 'focus'],
    height: false, //['responsive'],
    leading: false, //['responsive'],
    lists: false, //['responsive'],
    margin: false, //['responsive'],
    maxHeight: false, //['responsive'],
    maxWidth: false, //['responsive'],
    minHeight: false, //['responsive'],
    minWidth: false, //['responsive'],
    negativeMargin: false, //['responsive'],
    objectFit: false,
    objectPosition: false,
    opacity: false, //['responsive'],
    outline: false, //['focus'],
    overflow: false, //['responsive'],
    padding: ['responsive'],
    pointerEvents: false, //['responsive'],
    position: false, //['responsive'],
    resize: false, //['responsive'],
    shadows: false, //['responsive', 'hover', 'focus'],
    svgFill: false, //[],
    svgStroke: false, //[],
    tableLayout: false, //['responsive'],
    textAlign: false, //['responsive'],
    textColors: false, //['responsive', 'hover', 'focus'],
    textSizes: false, //['responsive'],
    textStyle: false, //['responsive', 'hover', 'focus'],
    tracking: false, //['responsive'],
    userSelect: false, //['responsive'],
    verticalAlign: false, //['responsive'],
    visibility: false, //['responsive'],
    whitespace: false, //['responsive'],
    width: false, //['responsive'],
    zIndex: false, //['responsive'],
  },

  /*
  |-----------------------------------------------------------------------------
  | Plugins                                https://tailwindcss.com/docs/plugins
  |-----------------------------------------------------------------------------
  |
  | Here is where you can register any plugins you'd like to use in your
  | project. Tailwind's built-in `container` plugin is enabled by default to
  | give you a Bootstrap-style responsive container component out of the box.
  |
  | Be sure to view the complete plugin documentation to learn more about how
  | the plugin system works.
  |
  */

  plugins: [
    container({
      center: true,
      // padding: '1rem',
    })
  ],

  /*
  |-----------------------------------------------------------------------------
  | Advanced Options         https://tailwindcss.com/docs/configuration#options
  |-----------------------------------------------------------------------------
  |
  | Here is where you can tweak advanced configuration options. We recommend
  | leaving these options alone unless you absolutely need to change them.
  |
  */

  options: {
    prefix: '',
    important: false,
    separator: ':',
  },
};
