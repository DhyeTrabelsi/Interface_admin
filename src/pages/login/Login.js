import React, { useState } from "react";
import {
  Grid,
  CircularProgress,
  Typography,
  Button,
  Tabs,
  Tab,
  TextField,
  Fade,
} from "@material-ui/core";
import {  withRouter } from "react-router-dom";
import axios from 'axios';
import { useUserDispatch, loginUser } from "../../context/UserContext";
// styles
import useStyles from "./styles";
import "./Login.scss";

// logo
import logo from "./logo.png";



function Login(props) {
  var classes = useStyles();
  var userDispatch = useUserDispatch();
  var [isLoading,setIsLoading ] = useState(false);
  var [error,setError] = useState(null);
  var [activeTabId, setActiveTabId] = useState(0);
  var [loginValue, setLoginValue] = useState("");
  var [passwordValue, setPasswordValue] = useState("");
  

  const loginhandle = async(e) =>{
    const article = { "username": String(loginValue), "password":String(passwordValue)};

    console.log(article);
    await axios({
      headers: { 'Content-Type': 'application/json'},
      method: 'post',
      url:'http://127.0.0.1:8000/api/login/admin/',
      data: article,
    }).then(response=>{
      console.log(article);
      loginUser(
        userDispatch,
        loginValue,
        passwordValue,
        props.history,
        setIsLoading,
        setError,
      );
     
      
        })
        .catch((error) => {
        console.log('error')
        if(error.response.status === 401){
          if(error.response.data.detail ===  'admin not found!'){
            setError('administrateur introuvable !');
          }
          if(error.response.data.detail ===  'Incorrect password!'){
            setError('Mot de passe incorrect !');

          }}
      })
}
  return (
    <Grid container className={classes.container}>
      
      <div className={classes.logotypeContainer}>

      <img src={logo} alt="logo" className={classes.logotypeImage} />
      <p className="system"> SYSTEMS </p> 
         
      </div>
      <div className={classes.formContainer}>
        <div className={classes.form}>
          <Tabs
            value={activeTabId}
            onChange={(e, id) => setActiveTabId(id)}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Login" classes={{ root: classes.tab }} />
      
          </Tabs>
          
          {activeTabId === 0 && (
            <React.Fragment>
           
              
    
           
              <TextField
                id="nom d'utilisateur"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                value={loginValue}
                onChange={e => setLoginValue(e.target.value)}
                margin="normal"
                fullWidth
                placeholder="nom d'utilisateur"

                required
              />
              <TextField
                id="mot de passe"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                value={passwordValue}
                onChange={e => setPasswordValue(e.target.value)}
                margin="normal"
                placeholder="mot de passe"
                type="password"
                fullWidth
                required
              />
              <div className={classes.formButtons}>
                {isLoading ? (
                  <CircularProgress size={26} className={classes.loginLoader} />
                ) : (
                  <Button
                    disabled={
                      loginValue.length === 0 || passwordValue.length === 0
                    }
                    onClick={() => loginhandle()
                     
                    }
                    variant="contained"
                    color="primary"
                    size="large"
                  >
                    Login
                  </Button>
                )}
                <Button
                  color="primary"
                  size="large"
                  className={classes.forgetButton}
                >
                  Forget Password
                </Button>
               
              </div>
              <Fade in={error}>
                <Typography color="secondary" className={classes.errorMessage}>
                {error}
                </Typography>
              </Fade>
            </React.Fragment>
          )}
         
        </div>
        <div color="black" className={classes.copyright}><div>
        © {new Date().getFullYear()} Tunisie, LLC. All rights reserved.</div>
        </div>
      </div>
    </Grid>
  );
}

export default withRouter(Login);
