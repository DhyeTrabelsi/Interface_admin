import React, { useState, useEffect, useCallback } from "react";
import { CircularProgress } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import * as Icons from "@material-ui/icons";
import PageTitle from "../../components/PageTitle/PageTitle";

import { useHistory } from "react-router-dom";
import { Button} from "@material-ui/core";
export default function Tables(props) {
  // mock async function
  const xhrRequest = () => {
    return new Promise((resolve, reject) => {
      // mock page data
      const srcData = [
        [1, "Linc", "Draycott", "ldraycott0@blog.com",88155214],
        [2, "Ronni", "Stare", "rstare1@vimeo.com",54255444],
        [3, "Robb", "Hyde", "rhyde2@1und1.de",54477777],
        [4, "Jaymie", "Rousby", "jrousby3@indiatimes.com",88155214],
        [5, "Ripley", "Bratty", "rbratty4@google.ca",77855526]
      ];
      if (srcData.length !== 0) {
      srcData.sort();
      setTimeout(() => {
        resolve({
          srcData,
          
        });
      }, 1000);}
    });
  };

  const [page, setPage] = useState(0);

  const [srcData, setData] = useState([["Loading Data..."]]);
  const [isLoading, setIsLoading] = useState(false);

  const getData = useCallback((page = 0) => {
    setIsLoading(true);
    xhrRequest().then(res => {
      setIsLoading(false);
      setPage(page);
      setData(res.srcData);
    });
  }, []);
  useEffect(() => {
    getData();
  }, [getData]); // <-- You need to use dependency array, otherwise the `getData` method runs on every render.
  /**************************************************/

  const changePage = page => {
    setIsLoading(true);
    getData(page);
    setPage(page);
  };

  const columns = [
    {
     name: "ID",
     label: "ID",
     options: {
      filter: true,
      sort: true,
     }
    },
    {
     name: "Médecin",
     label: "Médecin",
     options: {
      filter: true,
      sort: false,
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
     name: "Télephone",
     label: "Télephone",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
      name: "Ville",
      label: "Ville",
      options: {
       filter: true,
       sort: false,
      }
     },
    {
      name: "Actions",
     label: "Actions",
    options: {
      filter: false,
      sort: false,
      print: false,
      
        customBodyRender: (value, tableMeta, updateValue) => {
          
            return (
              <div>
                <Button onClick={() => console.log(value, tableMeta) }
                variant="contained"
                size="medium"
                style={{marginRight: 12}}
                color="secondary"
              >
                <Icons.Delete />Delete
              </Button>
               <Button onClick={() => console.log(value, tableMeta) }
                    style={{marginRight: -70}}

               variant="contained"
               size="medium"
             >
               <Icons.Edit />Edit
             </Button></div>
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
    let path = `newmed/`; 
   // let id=srcData.length+1;
    history.push(path);
  }
  
  return (
    
    <div>
<PageTitle title="Médecins" button={<Button
                onClick={routeChange}

    variant="contained"
    size="medium"
    color="primary"
  >
      Ajouter Médecin
  </Button>} />     
    <MUIDataTable
        title={
          <div variant="title">
            {isLoading && (
              <CircularProgress
                size={24}
                style={{ marginLeft: 15, position: "relative", top: 10 }}
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
