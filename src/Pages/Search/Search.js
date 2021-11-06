import TextField  from "@mui/material/TextField";
import { useState } from "react";
import { makeStyles } from '@mui/styles'; 
import { ThemeProvider } from '@mui/private-theming';
import SearchIcon from "@mui/icons-material/Search";
import { Tab, Tabs } from "@mui/material";

const Search = () => {

    const [type, setType] = useState(0); 

    const darkTheme = makeStyles({ 
        palette: {
               type: "dark",
               primary: {
                   main: "#fff",
               }
        }
    }) 

    return (
        <div>
           <ThemeProvider theme={darkTheme}>
            <div style={{display: 'flex', marginLeft: 10}}>
                <TextField 
                        style={{ flex: 1 }}
                        className="search"
                        label="search"
                        variant="filled"
                        // onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button variant='contained' style={{ padding: "10px",marginLeft: 10 }}>
                        <SearchIcon />
                    </button>
            </div>

            <Tabs value={type} indicatorColor="primary" textColor="primary">
                <Tab style={{width: '50%'}} label="Search Movies" />
                <Tab style={{width: '50%'}} label="Search TV Series"/> 
            </Tabs>

           </ThemeProvider>
        </div>
    )
}

export default Search
