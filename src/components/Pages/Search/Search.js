import { Button, Tab  } from '@mui/base';
import { Tabs, TextField, ThemeProvider,  createTheme } from '@mui/material';
import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
const Search = () => {
  const [ type, setType ]=useState(0);

  const darkTheme = createTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#fff",
      },
    },
  });


  return (
    <div>
      <ThemeProvider theme={darkTheme}>
      <div style={{display:"flex", margin:"15px 0"}}>
      <TextField
            style={{ flex: 1 }}
            className="searchBox"
            label="Search"
            variant="filled"
           // onChange={(e) => setSearchText(e.target.value)}
          />
          <Button variant='contained' style={{marginLeft:10}}><SearchIcon /> </Button>

      </div>
      
      

      </ThemeProvider>
       
    </div>

  )
}

export default Search


