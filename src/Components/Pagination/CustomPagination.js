import { makeStyles } from '@material-ui/core'
import { Pagination } from '@mui/material' 
import { ThemeProvider } from '@mui/private-theming'
import "./CustomPagionation.css"
import { createTheme } from '@mui/material/styles';


const darkTheme = createTheme({
    palette: {
        type: 'dark'
    }
})


const CustomPagination = ({setPage, numOfPages = 10 }) => { 

    const handlePageChange = (page) => {
        setPage(page);
        window.scroll(0, 0)
    }


    return (
        <div 
            style={{
                width: '100%',
                display: 'flex',
                justifyContent : 'center',
                marginTop: 10
            }}
        >
            <ThemeProvider theme={darkTheme}>
               <Pagination 
                    count={numOfPages} 
                    size="large" 
                    color="primary" 
                    onChange={(e) => handlePageChange(e.target.textContent)} 
                />
            </ThemeProvider>
        </div>
    )
}

export default CustomPagination
