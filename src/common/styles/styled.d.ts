import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    body: string;
    text: string;
    float?: string;
    box?: string;
    borders?: string;
  }
}
