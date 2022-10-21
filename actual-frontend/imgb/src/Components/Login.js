
import Button from "@mui/material/Button";
import {useState} from "react";
import {TextField} from "@mui/material";
const Login = (props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const saveRegister = (e) => {
        e.preventDefault();
        fetch("http://localhost:3001/register", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
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
                props.setUser({'email': email, 'password': password});
                setEmail("");
                setPassword("");
                props.setToggleLogin(false);
            })
            .catch((e) => {
                console.error(e)
            });
    }


    return (
        <>
            <form onSubmit={(e)=> {saveRegister(e)}}>
                <TextField
                    required
                    id="outlined-required"
                    label="Email"
                    defaultValue="Email"
                    value={email}
                    onChange={(e) => {setEmail(e.target.value)}}
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Password"
                    defaultValue="Password"
                    value={password}
                    onChange={(e) => {setPassword(e.target.value)}}
                />
                <Button type= "submit" color="inherit" >Submit</Button>
            </form>

    </>
            )
}

export default Login