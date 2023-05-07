import {Drawer,styled} from '@mui/material'
import SideBarContent from './SideBarContent'

const SideBar=({openDrawer})=>{
    return (
        <Drawer
          anchor='left'
          open={openDrawer}
          hideBackdrop={true}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          variant='persistent'
          sx={{
            '& .MuiDrawer-paper':{
            marginTop:'64px',
            width:250,
            background:'#F5F5F5',}
          }}><SideBarContent/>
        </Drawer>
    )   
   }
export default SideBar;