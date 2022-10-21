import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Paper} from "@mui/material";

const HomeScreen = (props) => {

    // const moviesMapping = props.allMovies.map((movie) =>{
    //     return (
    //         <>
    //             <Grid xs={3}>
    //                 <Card>
    //                     <Item>Testing, Should be a card</Item>
    //                 </Card>
    //
    //             </Grid>
    //         </>
    //
    //     )
    // })





    return (
        <Grid sx={{ flexGrow: 1 }} container spacing={1}>
            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={1.25}>
                    {props.allMovies.map((movie) => (
                        <Grid key={movie.movieId} onClick ={()=>{props.getSingleMovie(movie.movieId)}} item>
                            <img src= {movie.poster}/>
                            </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    )
}

export default HomeScreen