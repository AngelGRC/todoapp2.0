import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#fff",
  fontColor: "#595959",
  btnColor: "blueviolet",
  flotColor: "blueviolet",
};

export const darkTheme = {
  body: "#595959",
  fontColor: "#fff",
  bgCard: "blueviolet",
  btnColor: "#595959",
  flotColor: "blueviolet",
  btnRotar: "rotate(-180deg);",
};

export const GlobalStyles = createGlobalStyle`

    body, .dark, .dark::placeholder, .dark:focus, .colorPrincipal, .a, .a:hover {
        background-color ${(props) => props.theme.body};
        color ${(props) => props.theme.fontColor};
        
        
    }

    .card{
        background-color ${(props) => props.theme.bgCard};
        color ${(props) => props.theme.fontColor};

    }

    .boton, .boton:hover, .boton:focus{

        background-color ${(props) => props.theme.btnColor};
        border: none;
        
    }

    .btnFlotante{
        color ${(props) => props.theme.flotColor};
        -webkit-transform: ${(props) => props.theme.btnRotar};

    }




`;
