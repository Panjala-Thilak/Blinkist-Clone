import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import "@fontsource/raleway";

const defaultTheme = createMuiTheme();

const baseTheme = createMuiTheme({
  typography: {
    fontSize: 12,
    fontFamily:"Raleway",
    h4:{
      padding:"3.125rem 0 2.5rem",
      fontSize: "2.2rem",
      color: "#03314B",
      fontWeight: 600
    }
  },
  spacing:10,
  container: {
    primary: {
      borderRadius: defaultTheme.spacing(1),
      padding: defaultTheme.spacing(2),
    },
    secondary: {
      borderRadius: defaultTheme.spacing(1),
      padding: defaultTheme.spacing(2),
    },
  },
  palette: {
    //type: "dark",
    primary: {
      main: "#22c870",
    }
  },
  overrides:{
    MuiTypography:{
      root:{
        fontFamily:"Raleway"
      }
    },
    MuiContainer:{
      root:{
        width:944
      }
    },
    MuiAppBar:{
        root:{
          width:700,
          backgroundColor:"#FFFFFF"
        },
        colorPrimary:{
          backgroundColor:"#FFFFFF"
        }
    },
    MuiToolbar:{
      gutters:{
        padding:0,
        paddingLeft:"0px",
        paddingRight:0
      },
      root:{
        textTransform:'capitalize'
      },
      regular:{
      '@media (min-width: 600px)':{
        paddingLeft:"0px"
      }
    }
    },
    MuiList: {
      root: {
          backgroundColor: '#F1F6F4'
      }
    },
    MuiCardMedia :{
      media:{
        height:"100%",
        width:"100%"
      }
    },
    MuiButtonBase:{
      root:{
        borderRadius:"0px"
      }
    },
    MuiButton:{
      root:{
        textTransform:'capitalize',
        disableElevation:true,
        fontSize: "1rem",
      fontWeight: 500,
      lineHeight: 1,
      color: "#03314b",
      '&:hover': {
        textDecoration:"underline #22c870",
        textDecorationThickness:"2px"
      }
      },
      containedPrimary:{
        borderRadius:"0px",
        
        backgroundColor:"#FFFFFF",
        color:"#0365F2",
        '&:hover': {
          textDecoration:"none",
          textDecorationThickness:"2px",
          color:"#FFFFFF",
          backgroundColor:" #0365F2"
        }
      },
      containedSizeSmall:{
        padding:"11px 10px",
        fontWeight:"bold"
      }
      
    },
    MuiCardActions:{
      root:{
        padding:"3px",
        border:"1px solid #BAC8CE",
        borderRadius:"0px"
      }
    },
    MuiDialog:{
      paper:{
        width:"400px"
      }
    },
    MuiTab :{
      root:{
          fontSize: "1.125rem",
          padding:"0px",
      },
      textColorPrimary: {
        
          textTransform: "none",
          minWidth: "32%",
          '&$selected': {
              color: "#68DF81",
          },
          '&:hover': {
              borderColor: "#6d787e"
          },
          borderBottom: ".125rem solid #6d787e",
      },
      wrapper: {
          alignItems: "baseline",
          fontWeight: "bold",
          paddingBottom: "0.5rem"
      }
    },
    MuiGrid:{
      root:{
        width:"100%",
      }
    },
    MuiCardContent:{
      root:{
        border:"1px solid #BAC8CE"
      }
    },
  },
  }
);

const responsiveFontTheme = responsiveFontSizes(baseTheme);

export default responsiveFontTheme;