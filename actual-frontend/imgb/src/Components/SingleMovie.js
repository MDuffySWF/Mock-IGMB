import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import {Stack} from "@mui/material";
import {TextField} from "@mui/material";

import Review from './Review'

const SingleMovie =(props) =>{


    return (
        <Card sx={{ maxWidth: 500 }}
              spacing={0}
              direction="column"
              display="flex"
              alignItems="center"
              justifyContent="center">
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="500"
                    width="500"
                    image= {props.currentMovie.poster}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.currentMovie.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.currentMovie.plot}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Review movieId = {props.currentMovie.movieId} email ={props.email} />
            </CardActions>
        </Card>


    )
}
export default SingleMovie