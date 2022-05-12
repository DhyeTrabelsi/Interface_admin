import { Grid,Button } from "@material-ui/core";
import React, { useState } from "react";
import Stack from '@mui/material/Stack';
import { ToastContainer, toast } from "react-toastify";
import { Close as CloseIcon } from "@material-ui/icons";
import axios from 'axios';

import Box from '@mui/material/Box';
import { useHistory } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Notification from "../../components/Notification";

import TextField from '@mui/material/TextField';
import * as icons from '@mui/icons-material';

// components
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";
import useStyles from "./styles";

export default function Profile_med() {
  var classes = useStyles();
  var [notificationsPosition] = useState(1);
  var [errorToastId, setErrorToastId] = useState(null);
  var [usernameValue, setusernameValue] = useState("");
  var [passwordValue, setPasswordValue] = useState("");
  var [NomValue, setNomValue] = useState("");
  var [PrenomValue, setPrenomValue] = useState("");
  var [EmailValue, setEmailValue] = useState("");
  var [TelephoneValue, setTelephoneValue] = useState("");

  const history = useHistory();
  const positions = [
    toast.POSITION.TOP_LEFT,
    toast.POSITION.TOP_CENTER,
    toast.POSITION.TOP_RIGHT,
    toast.POSITION.BOTTOM_LEFT,
    toast.POSITION.BOTTOM_CENTER,
    toast.POSITION.BOTTOM_RIGHT,
  ];
  let id;


    
  const Setnewmed = async() =>{
    const NewmedJson = { "username": String(usernameValue), "email":String(EmailValue),"password": String(passwordValue), "first_name":String(PrenomValue),"last_name": String(NomValue), "telephone":String(TelephoneValue)};
    await axios({
      headers: { 'Content-Type': 'application/json'},
      method: 'post',
      url:'http://127.0.0.1:8000/api/signup/medecine/',
      data: NewmedJson,
    }).then(response=>{
      console.log('success');
      id = 0;
      
        })
        .catch((error) => {
        console.log('error')
        if(error.response.status === 401){
          console.log('error401');
          id = 1;
        }
        if(error.response.status === 400){
          console.log("médecin avec ce nom d'utilisateur existe déjà");
          id = 1;
        }
          
      })
    handleNotificationCall()
}
  return (
<>
<PageTitle title="Nouveau Médecin" />
<Grid container >
  <Grid item xs={10} md={12}>
    <Widget  disableWidgetMenu sx={{ display: 'flex',  flexWrap: 'wrap', }}>
    <Box sx={{ display: 'flex',  flexWrap: 'wrap', }}>
    <Box sx={{ display: 'flex',alignItems: 'flex-end',  mr: 17, mb: 8, }}>
        <icons.SupervisedUserCircle sx={{ color: 'action.active', mr: 2,width : 40,
          height : 40,}} />
   <TextField
          disabled
          id="standard-disabled"
          label="Identificateur"
          defaultValue={history.location.pathname.charAt(history.location.pathname.length - 1)}
          variant="standard"
        />  
        </Box>
    <Box sx={{ display: 'flex',alignItems: 'flex-end',  mr: 17, mb: 8, }}>
        <icons.AccountCircle sx={{ color: 'action.active', mr: 2,width : 40,
          height : 40,}} />
        <TextField id="Nom" label="Nom" variant="standard"   value={NomValue}
                onChange={e => setNomValue(e.target.value)}/>
      </Box>
    <Box sx={{ display: 'flex', alignItems: 'flex-end',  mr: 17, mb: 8,   }}>
        <icons.AccountBox sx={{ color: 'action.active', mr: 2 ,width : 40,
          height : 40, }} />
        <TextField id="Prénom" label="Prénom" variant="standard" value={PrenomValue}
                onChange={e => setPrenomValue(e.target.value)} />
    </Box>
    <Box sx={{ display: 'flex', alignItems: 'flex-end',  mr: 17, mb: 8,   }}>
        <icons.AccountBalanceRounded sx={{ color: 'action.active', mr: 2 ,width : 40,
          height : 40, }} />
        <TextField id="Username" label="Username" variant="standard" value={usernameValue}
                onChange={e => setusernameValue(e.target.value)} />
    </Box>
    <Box sx={{ display: 'flex', alignItems: 'flex-end',  mr: 17, mb: 8,  }}>
        <icons.Phone sx={{ color: 'action.active', mr: 2  ,width : 40,
          height : 40,}} />
        <TextField id="Téléphone" label="Téléphone" variant="standard" value={TelephoneValue}
                onChange={e => setTelephoneValue(e.target.value)}/>
    </Box>
    <Box sx={{ display: 'flex', alignItems: 'flex-end' ,  mr: 17, mb: 8,}}>
        <icons.Email sx={{ color: 'action.active', mr: 2 ,width : 40,
          height : 40, }} />
        <TextField id="Email" label="Email" variant="standard" value={EmailValue}
                onChange={e => setEmailValue(e.target.value)} />
    </Box>
   
    <Box sx={{ display: 'flex', alignItems: 'flex-end' ,  mr: 17, mb: 8,}}>
        <icons.Password sx={{ color: 'action.active', mr: 2,width : 40,
          height : 40,  }} />
        <TextField  type="password" id="Password" label="Password" autoComplete="new-password" variant="standard"   value={passwordValue}
                onChange={e => setPasswordValue(e.target.value)} />
    </Box>
    </Box>

    </Widget>
  </Grid>

</Grid>
<Stack
  marginTop={3}
  direction="column"
  justifyContent="flex-start"
  alignItems="flex-end"
  spacing={1}
>
<Button
     onClick={() => Setnewmed()}
    variant="contained"
    size="medium"
    color="primary"
  >
     <icons.Save sx={{ color: 'action.active', mr: 2,}} />  Sauvgarder 
  </Button>
  <Grid container spacing={4}>
        <ToastContainer
          className={classes.toastsContainer}
          closeButton={
            <CloseButton className={classes.notificationCloseButton} />
          }
          closeOnClick={false}
          progressClassName={classes.notificationProgress}
        />

      </Grid>
  
  </Stack>
</>
  );



 function sendNotification(componentProps, options) {
    return toast(
      <Notification
        {...componentProps}
        className={classes.notificationComponent}
      />,
      options,
    );
  }

  function retryErrorNotification() {
    var componentProps = {
      type: "message",
      message: "Message was sent successfully!",
      variant: "contained",
      color: "secondary",
    };
    toast.update(errorToastId, {
      render: <Notification {...componentProps} />,
      type: "secondary",
    });
    setErrorToastId(null);
  }

  function handleNotificationCall(notificationType) {
    var componentProps;

    if (errorToastId && notificationType === "error") return;
    
    switch (id) {
    
      case 1:
        componentProps = {
          type: "message",
          message: "Médecin existe déjà",
          variant: "contained",
          color: "secondary",
          extraButton: " ",
          extraButtonClick: retryErrorNotification,
        };
        break;
      default:
        componentProps = {
          type: "shipped",
          message: "Le docteur a été bien enregistré",
          variant: "contained",
          color: "success",
        };
    }

    var toastId = sendNotification(componentProps, {
      type: notificationType,
      position: positions[notificationsPosition],
      progressClassName: classes.progress,
      onClose: notificationType === "error" && (() => setErrorToastId(null)),
      className: classes.notification,
    });

    if (notificationType === "error") setErrorToastId(toastId);
  }


}

// #############################################################
function CloseButton({ closeToast, className }) {
  return <CloseIcon className={className} onClick={closeToast} />;
}
