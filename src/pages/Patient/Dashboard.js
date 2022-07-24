import React, { useState, useEffect, useCallback } from "react";
import { CircularProgress } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import * as Icons from "@material-ui/icons";
import PageTitle from "../../components/PageTitle/PageTitle";
import {Button} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { ipconfig } from "../../components/Ipconfig";
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';
export default function Dashboard(props) {
  
  const xhrRequest = async () => {
    return new Promise((resolve, reject) => {
      if (srcData.length !== 0) {
      srcData.sort();
      setTimeout(() => {
        resolve({
          srcData,
          
        });
      }, 1000);}
    });
  };
  var patdel;

  const deletepat = async() =>{
    confirmAlert({
      title: 'supprimer '+patdel+' ?',
      message: 'Êtes-vous sûr de le faire.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {axios({
            headers: { 'Content-Type': 'application/json'},
            method: 'delete',
            url:'http://'+ipconfig+':8000/api/delete/patient/'+patdel+'/',
          }).then(response=>{
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
      url:'http://'+ipconfig+':8000/api/patient/list/',
    }).then(response=>{

      var a = response.data.map(function(e) {
        return Object.keys(e).map(function(k) {
          return e[k]
        })
      })
      setData(a);
        })

  }, []);  // eslint-disable-line react-hooks/exhaustive-deps
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
      name: "",

     label: "",

    options: {
      filter: false,
      sort: false,
      print: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          
            return (
              <div>
                <Button onClick={() =>{patdel = tableMeta.rowData[0];
                
                deletepat()} }
                variant="contained"
                size="medium"
                color="#495D7D"
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
    let path = `newpat/${id}`; 
    history.push(path);
  }
  return (
    
    <div>
<PageTitle title="Patients" button={<Button
      onClick={routeChange}
    variant="contained"
    size="medium"
    color="#E8F9FD"
  >
      Ajouter Patient
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
