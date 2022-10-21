import {Button, Stack, TextField} from "@mui/material";
import {useState} from "react";


const Review =(props) =>{
    const [reviewTitle, setReviewTitle] = useState('')
    const [reviewText, setReviewText] = useState('')

    const saveReview = (e) => {
        e.preventDefault();
        fetch("http://localhost:3001/reviews", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                // Key and then the value of the prop and or state
                email: props.email,
                movieId: props.movieId,
                reviewTitle: reviewTitle,
                reviewText: reviewText
            })
        })
            .then((res) => {
                if  (!res.ok) {
                    throw new Error("bad input values")
                }
                return res.json()

            })
            .then(()=> {
                //props.getAllEmails() ;
                setReviewTitle("");
                setReviewText("");
            })
            .catch((e) => {
                console.error(e)
            });
    }

    return (
        <>
            <Stack  spacing={1} direction="row">
                <form onSubmit={(e)=> {saveReview(e)}}>
                    <TextField
                        required
                        id="outlined-required"
                        label="Review Title"
                        defaultValue="Title"
                        value={reviewTitle}
                        onChange={(e) => {setReviewTitle(e.target.value)}}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Text"
                        defaultValue="Text"
                        value={reviewText}
                        onChange={(e) => {setReviewText(e.target.value)}}
                    />
                    <Button type= "submit" color="inherit" >Submit</Button>
                </form>
            </Stack>
        </>
    )
}

export default Review;
