import { useState } from "react";
import {Box,Button,styled,List,ListItem} from "@mui/material";
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import { SIDEBAR_DATA } from "../config/sidebar.config";
import ComposeMail from "./ComposeMail";

const ComposeButton=styled(Button)({
    background:'#c2e7ff',
    color:'#001d35',
    padding:10,
    borderRadius:15,
})

const Container=styled(Box)({
    padding:8,
    '& >ul ':{
        padding:'10px 0 0 5px',
        fontSize:14,
        fontWeight:500,
        cursor:'pointer'
    },
    '& >ul > li > svg ':{
        marginRight:20
}})

const SideBarContent=()=>{
    const [openDialog,setopenDialog]=useState(false);
    const onComposeClick=()=>{
        setopenDialog(true);
    }
    return (
        <Container>
                <ComposeButton onClick={()=>onComposeClick()}>
                    <CreateOutlinedIcon/>
                    Compose
                </ComposeButton>
                <List>
                    {SIDEBAR_DATA.map(data=>(
                        <ListItem>
                            <data.icon/>{data.title}
                        </ListItem> 
                    ))}
                </List>
                <ComposeMail openDialog={openDialog} setopenDialog={setopenDialog}/>
        </Container>
    )
}
export default SideBarContent;