// Reference Tokens
export interface Palette {
  [key: string]: string;
}

export interface ReferenceTokens {
  palette: Palette;
  typeface: {
    brand: string;
    weightRegular: string;
    weightMedium: string;
    weightBold: string;
  };
}
