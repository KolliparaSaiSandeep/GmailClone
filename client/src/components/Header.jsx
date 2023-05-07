import {AppBar,Toolbar,styled,InputBase,Box} from '@mui/material';
import {Menu as MenuIcon,Search,Tune} from '@mui/icons-material';
import {gmailLogo} from '../constants/constant';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const StyledAppBar=styled(AppBar)({
  background:'#F5F5F5',
  boxShadow:'None'
})


const SearchWrapper=styled(Box)({
  background:'#EAF1FB',
  marginLeft:80,
  minWidth:690,
  maxWidth:720,
  height:50,
  display:'flex',
  alignItems:'center',
  justifyContent:'space-between',
  padding:'0 20px',
  '& > div':{
    width:'100%',
    padding:'0 10px'
  }

})

const OptionsWrapper=styled(Box)({
  width:'100%',
  display:'flex',
  justifyContent:'end',
  '& > svg':{
    marginLeft:20,
  }
})

const Header=({toggleDrawer})=>{
 return (
 <StyledAppBar position="static">
   <Toolbar>
     <MenuIcon color='action' onClick={toggleDrawer}/>
     <img src={gmailLogo} alt="gmail logo" style={{width:'150px',height:'50px',marginLeft:'15px'}}/>
     <SearchWrapper>
      <Search color='action'/>
      <InputBase
       placeholder='Search mail'/>
      <Tune color='action'/>
     </SearchWrapper>
     <OptionsWrapper>
      <HelpOutlineOutlinedIcon color='action' />
      <SettingsOutlinedIcon color='action' />
      <AppsOutlinedIcon color='action' />
      <AccountCircleOutlinedIcon color='action' />
     </OptionsWrapper>
   </Toolbar>
 </StyledAppBar>)   
}
export default Header;