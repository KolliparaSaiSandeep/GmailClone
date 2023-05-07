import { useState } from 'react';
import {Dialog,Box,Topography, Typography,InputBase,TextField,Button} from '@mui/material';
import { Close ,DeleteOutline} from '@mui/icons-material';
import styled from '@emotion/styled';


const dialogStyle={
    height:'90%',
    width:'80%',
    maxWidth:'100%',
    maxHeight:'100%',
    boxShadow:'none',
    borderRadius :'10px 10px 0 0'
}

const Header=styled(Box)({
    display:'flex',
    justifyContent:'space-between',
    padding:'10px 15px',
    background:'#f2f6fc',
    '& > p':{
        fontSize:14,
        fontWeight:500,
    }
})

const RecipientsWrapper=styled(Box)({
     display:'flex',
     flexDirection:'column',
     padding:"0 15px",
     '& > div':{
        fontSize:14,
        borderBottom:'1px solid #F5F5F5',
        marginTop:'10px'
     }
})

const Footer=styled(Box)({
    display:'flex',
    justifyContent:'space-between',
    padding:'10px 15px',
    alignItems:'center'
})

const SendButton=styled(Button)({
    background:'#0B57D0',
    color:'#fff',
    fontWeight:500,
    textTransform:'none',
    width:'100px'
})



const ComposeMail=({openDialog,setopenDialog})=>{
    const [data,setdata]=useState({});
    const config={
        Host : "smtp.elasticemail.com",
        Username : "qwertyytrewq12345@gmail.com",
        Password : "EC0E411770F44496C1EC17787A408A9B2E0B",
        Port:2525,
    }
    const closeCompositeMail=(e)=>{
        e.preventDefault();
        setopenDialog(false);
    }

    const onValueChange=(e)=>{
        setdata({...data,[e.target.name]:e.target.value})
        console.log(data);
    }
    

    const sendMail=(e)=>{
        e.preventDefault();
    if(window.Email){
    window.Email.send({
            ...config,
            To : data.to,
            From : "ksai11122002@gmail.com",
            Subject : data.subject,
            Body : data.body
        }).then(
          message => alert(message)
        );
    }
        setopenDialog(false);
    }
    return (
        <Dialog 
        open={openDialog}
        PaperProps={{sx:dialogStyle}}
        >
        <Header>
         <Typography>New Message</Typography>
         <Close fontsize="small" onClick={(e)=>closeCompositeMail(e)}/>
        </Header>
        
        <RecipientsWrapper>
            <InputBase placeholder="Receipients" name="to" onChange={(e)=>onValueChange(e)}/>
            <InputBase placeholder="Subject" name="subject" onChange={(e)=>onValueChange(e)}/>
        </RecipientsWrapper>
        <TextField
             multiline 
             rows={15}
             sx={{'& .MuiOutlinedInput-notchedOutline':{
                border:'none'
             }}}
             name="body"
             onChange={(e)=>onValueChange(e)}
             />
        <Footer>
            <SendButton onClick={(e)=>sendMail(e)}>
                Send
            </SendButton>
            <DeleteOutline onClick={()=>setopenDialog(false)}/>
        </Footer>
        </Dialog>
    )
}

export default ComposeMail;