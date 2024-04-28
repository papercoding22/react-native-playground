import {TextStyle} from 'react-native';

// Reference Tokens
export interface Palette {
  [key: string]: string;
}

export interface ReferenceTokens {
  palette: Palette;
  typeface: {
    brand: string;
    weightRegular: TextStyle['fontWeight'];
    weightMedium: TextStyle['fontWeight'];
    weightBold: TextStyle['fontWeight'];
  };
}
