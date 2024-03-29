import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  pageTitleContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom : theme.spacing(4),
    marginTop : theme.spacing(5),
  },
  typo: {
    color:  '#495D7D',
  },
  button: {
    boxShadow: theme.customShadows.widget,
    textTransform: "none",
    "&:active": {
      boxShadow: "#495D7D",
    },
  },
}));
