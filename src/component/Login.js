import React, { useContext } from "react";
import {Button, Container, Grid} from "@mui/material";
import Box from "@mui/material/Box/Box";
import { Context } from "../index";
import firebase from "firebase/compat/app";

const Login = (props) => {
    const {auth} = useContext(Context)



    const loginG = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        const {user} = await auth.signInWithPopup(provider)
        console.log(user)
    }

    const loginGit = async () => {
        const provider = new firebase.auth.GithubAuthProvider()
        const {user} = await auth.signInWithPopup(provider)
        console.log(user)
    }

    const loginFb = async () => {
        const provider = new firebase.auth.FacebookAuthProvider()
        const {user} = await auth.signInWithPopup(provider)
        console.log(user)
    }

    return (
        
        <Container>
            
            <Grid container
                  style={{height: window.innerHeight - 50}}
                  alignItems={"center"}
                  justifyContent={"center"}
            >
                <Grid style={{width:400, background: 'lightgray'}}
                      container
                      alignItems={"center"}
                      direction={"column"}
                >
                    <Box p={1}>
                        <Button onClick={loginGit} variant={"outlined"} >Войти с помощью GITHUB</Button>
                    </Box>
                    <Box p={1}>
                        <Button onClick={loginG} variant={"outlined"}>Войти с помощью Google</Button>
                    </Box>
                    <Box p={1}>
                        <Button onClick={loginFb}variant={"outlined"}>Войти с помощью Facebook</Button>
                    </Box>
                  
                </Grid>
            </Grid>
           
        </Container>
    );
};

export default Login;