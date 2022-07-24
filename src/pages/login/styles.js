import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  container: {
    
    height : "100vh",
    width : "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top : 0,
    left : 0,
  },
  logotypeContainer: {
    width : "45%",
    height : "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    //background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    //boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    [theme.breakpoints.down("md")]: {
      width : "50%",
    },
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  logotypeImage: {
    width : 350,
    marginBottom : theme.spacing(0),
  },
  logotypeText: {
    color: "white",
    fontWeight: 500,
    fontSize: 84,
    [theme.breakpoints.down("md")]: {
      fontSize: 48,
    },
  },
  formContainer: {
    background: 'linear-gradient(45deg, #FFFFFF 00%, #FFFFFF 90%)',
    width : "30%",
    height : "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
    [theme.breakpoints.down("md")]: {
      width : "50%",
    },},
  form: {
    width : 320,
  },
  tab: {
    fontWeight: 400,
    fontSize: 18,
  },
  greeting: {
    fontWeight: 500,
    textAlign: "center",
    marginTop : theme.spacing(4),
  },
  subGreeting: {
    fontWeight: 500,
    textAlign: "center",
    marginTop :  theme.spacing(2),
  },
  googleButton: {
    marginTop : theme.spacing(6),
    boxShadow: theme.customShadows.widget,
    backgroundColor: "white",
    width : "100%",
    textTransform: "none",
  },
  googleButtonCreating: {
    marginTop : 0,
  },
  googleIcon: {
    width : 30,
    marginRight : theme.spacing(2),
  },
  creatingButtonContainer: {
    marginTop : theme.spacing(2.5),
    height : 46,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  createAccountButton: {
    height : 46,
    textTransform: "none",
  },
  formDividerContainer: {
    marginTop : theme.spacing(4),
    marginBottom : theme.spacing(4),
    display: "flex",
    alignItems: "center",
  },
  formDividerWord: {
    paddingLeft : theme.spacing(2),
    paddingRight : theme.spacing(2),
  },
  formDivider: {
    flexGrow: 1,
    height : 1,
    backgroundColor: theme.palette.text.hint + "40",
  },
  errorMessage: {
    textAlign: "center",
    marginTop : 35
  },
  textFieldUnderline: {
    "&:before": {
      borderBottomColor:  '#495D7D',
    },
    "&:after": {
      borderBottomColor: '#E8F9FD',
    },
    "&:hover:before": {
      borderBottomColor: `${'#E8F9FD'} !important`,
    },
  },
  textField: {
    borderBottomColor: theme.palette.background.light,
  },
  formButtons: {
    width : "100%",
    marginTop :  theme.spacing(4),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  forgetButton: {
    textTransform: "none",
    fontWeight: 400,
  },
  loginLoader: {
    marginLeft : theme.spacing(4),
  },
  copyright : {
    marginTop : theme.spacing(4),
    whiteSpace: "nowrap",
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      bottom : theme.spacing(2),
    },
  },
}));
