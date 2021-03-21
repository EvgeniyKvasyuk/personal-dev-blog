import Color from 'color';

const PRIMARY = '#5b9fd1';
const ACCENT = '#e87a43';
const ACCENT_PALE = '#6d8994';
const ACCENT_HIGH = '#d25857';
const DARK_BACKGROUND = '#52517d';
const BLACK = '#000000';
const WHITE = '#fff';
const BORDER = ACCENT_PALE;
const PALE = '#6b7c7d';
const BASE_BACKGROUND = '#FAFAFA';

const BOX_SHADOW_COLOR = Color(ACCENT_PALE).alpha(0.15).string();

export const COLORS = {
  PRIMARY,
  ACCENT,
  ACCENT_PALE,
  ACCENT_HIGH,
  DARK_BACKGROUND,
  BLACK,
  BORDER,
  WHITE,
  PALE,
  BASE_BACKGROUND,
} as const;

const MOBILE_MAX = '380px';
const TABLET_MIN = '768px';
const TABLET_MAX = '1023px';
const LAPTOP_MIN = '1024px';
const LAPTOP_MAX = '1279px';
const DESKTOP_MIN = '1280px';

export const RESOLUTIONS = {
  MOBILE_MAX,
  TABLET_MIN,
  TABLET_MAX,
  LAPTOP_MIN,
  LAPTOP_MAX,
  DESKTOP_MIN,
} as const;

const PADDING_S = '0.5rem';
const PADDING_M = '1rem';
const PADDING_L = '1.5rem';
const PADDING_XL = '2rem';

export const PADDINGS_AND_MARGINS = {
  PADDING_S,
  PADDING_M,
  PADDING_L,
  PADDING_XL,
} as const;

const FONT_SIZE_XS = '0.5rem';
const FONT_SIZE_S = '0.75rem';
const FONT_SIZE_M = '1rem';
const FONT_SIZE_L = '1.25rem';
const FONT_SIZE_XL = '1.5rem';

export const FONT_SIZES = {
  FONT_SIZE_L,
  FONT_SIZE_M,
  FONT_SIZE_S,
  FONT_SIZE_XL,
  FONT_SIZE_XS,
} as const;

const RESPONSIVE_PADDINGS = `
  @media (max-width: ${MOBILE_MAX}) {
    padding-left: ${PADDING_S};
    padding-right: ${PADDING_S};
  }
`;

const BOX_SHADOWS = `
  box-shadow: 0 5px 10px 2px ${BOX_SHADOW_COLOR}
`;

export const MIXINS = {
  RESPONSIVE_PADDINGS,
  BOX_SHADOWS,
};
