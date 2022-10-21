import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from '@mui/material/Container';
import {Stack} from "@mui/material";
import {TextField} from "@mui/material";
import {useState} from "react";


const TBar =(props) =>{
    const [query, setQuery] = useState('')
    const goHome = () => {
        props.setCurrentMovie({})
        props.setToggleLogin(false)
    }

    const getSearchItems = () => {
        console.log("CLicked")
        console.log(query)
        fetch(`7`)
            .then(res => {
                return res.json();
            })
            .then((data) => props.setAllMovies(data))
            .catch((err) => console.log(err))
    }
    return(
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Box>
                        <Container>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                GMDB
                                <Button color ='inherit' onClick={()=> goHome()}>Home</Button>
                                <Button color="inherit" onClick = {()=> props.setToggleLogin(true)}>Login</Button>

                            </Typography>
                        </Container>
                    </Box>
                    <Stack  spacing={1} direction="row" >
                        <TextField
                            align="right"
                            id="filled-basic"
                            label="Search"
                            variant="filled"
                            value={query}
                            onChange={(e) => {setQuery(e.target.value)}}
                        />
                        <Button align="right" onClick={() =>{getSearchItems()}} variant="contained" >Submit</Button>
                    </Stack>
                    {/*<Button color="inherit">Login</Button>*/}
                </Toolbar>
            </AppBar>
        </Box>
        )

}

export default TBar;