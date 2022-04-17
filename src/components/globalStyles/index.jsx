import { createGlobalStyle } from "styled-components";

import retroFont from "../../assets/fonts/retro.ttf"
import retroAtariFont from "../../assets/fonts/retroAtari.ttf"
import predatorFont from "../../assets/fonts/predator.ttf"

const FontStyles = createGlobalStyle`
    @font-face {
        font-family: "Retro";
        src: url(${retroFont});
    }
    @font-face {
        font-family: "RetroAtari";
        src: url(${retroAtariFont});
    }
    @font-face {
        font-family: "Predator";
        src: url(${predatorFont});
    }
`;

export default FontStyles;