import React , { useContext, useState, useEffect} from "react";
import { Context } from "../index";
import {useAuthState} from "react-firebase-hooks/auth";
import {Avatar, Button, Container, Grid, TextField} from "@mui/material";
import {useCollectionData} from "react-firebase-hooks/firestore";
import firebase from "firebase/compat";

const Chat = () =>{
  

    const {auth, firestore} = useContext(Context)
    const [user] = useAuthState(auth)
    const [value, setValue] = useState()
    const [countSis, setCountSis] = useState(0);
    const [countBro, setCountBro] = useState(0);
    const [messages] = useCollectionData(
        firestore.collection('messages').orderBy('createdAt')
    )
    
    const bro = async () => {
        firestore.collection('messages').add({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: Button.textContent ="Brooo!",
            createdAt: new Date().toLocaleString(),
            
        })
        setValue('')
    }

    const sis = async () => {
        firestore.collection('messages').add({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: Button.textContent ="Siiis!",
            createdAt: new Date().toLocaleString()
        })
        setValue('')
    }

    return (        
        <Container>
        <Grid container
              justifyContent={"center"}
              style={{height: window.innerHeight - 50, marginTop: 20}}>
            <div onClick={document.location.reload} style={{width: '80%', height: '60vh', border: '1px solid gray', overflowY: 'auto'}}>
                {messages?.map (message  => 
                       
                    <div style={{
                        margin: 10,
                        border: user.uid === message.uid ? '2px solid green' : '2px dashed red', borderRadius:'25px',
                        marginLeft: user.uid === message.uid ? 'auto' : '10px', borderRadius:'25px',
                        width: 'fit-content',
                        padding: 5,
                    }}>
                        <Grid container>
                            <Avatar src={message.photoURL} />
                            <div>{message.displayName}</div>
                        </Grid>
                        <div>{message.text}</div>
                        <div>{message.createdAt}</div>
                    </div>
                )}
            </div>
            <Grid
                container
                justifyContent={"center"}
                direction={"row"}
                alignItems={"flex-top"}
                style={{width: '90%'}}
            > 
                <Button onClick={bro} style={{maxWidth: '300px', maxHeight: '100px', minWidth: '300px', minHeight: '100px', border: '5px solid blue', fontSize:'40px'}}  variant={"outlined"}>Bro!</Button>
                <Button onClick={sis} style={{maxWidth: '300px', maxHeight: '100px', minWidth: '300px', minHeight: '100px', border: '5px solid red', fontSize:'40px'}}  variant={"outlined"}>Sis!</Button>
            </Grid>
        </Grid>
       
    </Container>
    )
}


export default Chat;