import React, { useState, useEffect, useCallback } from "react";
import { CircularProgress } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import * as Icons from "@material-ui/icons";
import PageTitle from "../../components/PageTitle/PageTitle";
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';
import { useHistory } from "react-router-dom";
import { ipconfig } from "../../components/Ipconfig";
import { Button} from "@material-ui/core";
export default function Tables(props) {
  // mock async function
  const xhrRequest = async () => {
    return new Promise((resolve, reject) => {
      // mock page data
      
      if (srcData.length !== 0) {
      srcData.sort();
      setTimeout(() => {
        resolve({
          srcData,
          
        });
      }, 1000);}
    });
  };
  var meddel;

  const deletemed = async() =>{
    confirmAlert({
      title: 'supprimer '+meddel+' ?',
      message: 'Êtes-vous sûr de le faire.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {axios({
            headers: { 'Content-Type': 'application/json'},
            method: 'delete',
            url:'http://'+ipconfig+':8000/api/delete/medecine/'+meddel+'/',
          }).then(response=>{
            console.log('success');
            window.location.reload(false);
      
              })
             }
        },
        {
          label: 'No',

          onClick: () => {}
        }
      ]
    });
    
}
  const [page, setPage] = useState(0);

  const [srcData, setData] = useState([["Chargement des données..."]]);
  const [isLoading, setIsLoading] = useState(false);

  const getData = useCallback((page = 0) => {
    setIsLoading(true);
    xhrRequest().then(res => {
      setIsLoading(false);
      setPage(page);
      
    });
  }, []);// eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    getData();
    axios({
      headers: { 'Content-Type': 'application/json'},
      method: 'get',
      url:'http://'+ipconfig+':8000/api/medecine/list/',
    }).then(response=>{

      var a = response.data.map(function(e) {
        return Object.keys(e).map(function(k) {
          return e[k]
        })
      })
      setData(a);
        })
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  /**************************************************/

  const changePage = page => {
    setIsLoading(true);
    getData(page);
    setPage(page);
  };

  const columns = [
    {
     name: "Nom d'utilisateur",
     label: "Nom d'utilisateur",
     options: {
      filter: true,
      sort: true,
     }
    },
    {
     name: "Email",
     label: "Email",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
     name: "Prénom",
     label: "Prénom",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
     name: "Nom",
     label: "Nom",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
      name: "Télephone",
      label: "Télephone",
      options: {
       filter: true,
       sort: false,
      }
     },
    {
      name: " ",
     label: " ",
    options: {
      filter: false,
      sort: false,
      print: false,
      
        customBodyRender: (value, tableMeta, updateValue) => {
          
            return (
              <div>
                <Button onClick={() => {meddel = tableMeta.rowData[0];
                deletemed()} }
                variant="contained"
                size="medium"
                style={{marginRight : 12}}
                color= '#495D7D'
              >
                <Icons.Delete />Supprimer
              </Button>
              </div>
            );
        }
    }
}];

  const options = {
    filter: true,
    filterType: "dropdown",
    serverSide: true,
    page: page,
    searchBox: true,
    selectableRows: 'none',
    filtering: true, 
    onTableChange: (action, tableState) => {
      console.log(action, tableState);
      switch (action) {
        case "changePage":
          changePage(tableState.page);
          break;

        default:
          console.log(action);
      }
    }
  };
  const history = useHistory();
  
  const routeChange = () =>{
    let id=srcData.length+1; 
    let path = `newmed/${id}`; 
    history.push(path);
    console.log(history);
  }
  
  return (
    
    <div>
<PageTitle title="Médecins" button={<Button
                onClick={routeChange}

    variant="contained"
    size="medium"
    color="#495D7D"
  >
      Ajouter Médecin
  </Button>} />     
    <MUIDataTable
        title={
          <div variant="title">
            {isLoading && (
              <CircularProgress
                size={24}
                style={{ marginLeft : 15, position: "relative", top : 10 }}
              />
            )}
          </div>
        }
        data={srcData}
        columns={columns}
        options={options}
      />

    </div>
  );
}
