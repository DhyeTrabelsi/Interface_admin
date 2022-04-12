import { Grid,Button } from "@material-ui/core";
import * as React from 'react';
import Stack from '@mui/material/Stack';

import Box from '@mui/material/Box';

import TextField from '@mui/material/TextField';
import * as icons from '@mui/icons-material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// components
import PageTitle from "../../components/PageTitle/PageTitle";
import Widget from "../../components/Widget/Widget";
export default function Profile_pat() {
  const [Sexe, setSexe] = React.useState('');
const id =3;

  function handleChange(e) {
    setSexe(e.target.value);
  }
  return (
<>
<PageTitle title="Nouveau Patient" />
<Grid container >
  <Grid item xs={10} md={12}>
    <Widget  disableWidgetMenu sx={{ display: 'flex',  flexWrap: 'wrap', }}>
    <Box sx={{ display: 'flex',  flexWrap: 'wrap', }}>
    <Box sx={{ display: 'flex',alignItems: 'flex-end',  mr: 17, mb: 8, }}>
        <icons.SupervisedUserCircle sx={{ color: 'action.active', mr: 2,width: 40,
          height: 40,}} />
   <TextField
          disabled
          id="standard-disabled"
          label="Identificateur"
          defaultValue={id}
          variant="standard"
        />  
        </Box>
    <Box sx={{ display: 'flex',alignItems: 'flex-end',  mr: 17, mb: 8, }}>
        <icons.AccountCircle sx={{ color: 'action.active', mr: 2,width: 40,
          height: 40,}} />
        <TextField id="Nom" label="Nom" variant="standard" />
      </Box>
    <Box sx={{ display: 'flex', alignItems: 'flex-end',  mr: 17, mb: 8,   }}>
        <icons.Info sx={{ color: 'action.active', mr: 2 ,width: 40,
          height: 40, }} />
        <TextField id="Prénom" label="Prénom" variant="standard" />
    </Box>
    <Box sx={{ display: 'flex', alignItems: 'flex-end' , mr: 17, mb: 8, }}>
        <icons.WcRounded sx={{ color: 'action.active', mr: 2, width: 40,
          height: 40,  }} />
        <FormControl variant="standard"  sx={{ minWidth: 183 }}> 
        <InputLabel id="demo-simple-select-standard-label">Sexe</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={Sexe}
          onChange={handleChange}
          label="Sexe"
        >
        
          <MenuItem value={10}>Femme</MenuItem>
          <MenuItem value={20}>Homme</MenuItem>
        </Select>
      </FormControl>
        
    </Box>
    <Box sx={{ display: 'flex', alignItems: 'flex-end',  mr: 17, mb: 8,  }}>
        <icons.CalendarToday sx={{ color: 'action.active', mr: 2  ,width: 40,
          height: 40,}} />
          <FormControl variant="standard"  sx={{ minWidth: 183 }}> 
        <TextField id="Datedenaisance"  type="date" variant="standard" />
        </FormControl>

    </Box>
    <Box sx={{ display: 'flex', alignItems: 'flex-end',  mr: 17, mb: 8,  }}>
        <icons.Phone sx={{ color: 'action.active', mr: 2  ,width: 40,
          height: 40,}} />
        <TextField id="Téléphone" label="Téléphone" variant="standard" />
    </Box>
    <Box sx={{ display: 'flex', alignItems: 'flex-end' ,  mr: 17, mb: 8,}}>
        <icons.Email sx={{ color: 'action.active', mr: 2 ,width: 40,
          height: 40, }} />
        <TextField id="Email" label="Email" variant="standard" />
    </Box>
    <Box sx={{ display: 'flex', alignItems: 'flex-end' ,  mr: 17, mb: 8,}}>
        <icons.Home sx={{ color: 'action.active', mr: 2 ,width: 40,
          height: 40, }} />
        <TextField id="Adresse" label="Adresse" variant="standard" />
    </Box>
    <Box sx={{ display: 'flex', alignItems: 'flex-end' ,  mr: 17, mb: 8,}}>
        <icons.Password sx={{ color: 'action.active', mr: 2,width: 40,
          height: 40,  }} />
        <TextField  type="password" id="Password" label="Password" autoComplete="new-password" variant="standard" />
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
    
    variant="contained"
    size="medium"
    color="primary"
  >
     <icons.Save sx={{ color: 'action.active', mr: 2,}} />  Sauvgarder 
  </Button></Stack>
</>
  );
}