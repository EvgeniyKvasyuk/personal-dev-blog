declare module '*.css' {
  const styles: {
    [className: string]: string
  };
  export default styles;
}

declare module 'typography-theme-noriega' {
  import { TypographyOptions } from 'typography';

  const Theme: TypographyOptions;
  export = Theme;
}
