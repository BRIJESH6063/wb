import { Drawer } from "@mui/material";
import { Box, Typography, styled } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import Profile from "./Profile";

const drawerStyle = {
  left: 20 ,
  top: 17 ,
  height: '95%',
  width: '30%',
  boxShadow: 'none'
}

const Header = styled(Box)`
  background: #008069 ;
  color: #FFFFFF ;
  height: 98px ;
  display: flex ;
  &>svg, &>p {
    margin-top: auto ;
    padding: 15px ;
    font-weight: 600 ;
  }
` ;

const Component = styled(Box)`
  background: #ededed ;
  height: 85% ;
` ;

const Text = styled(Typography)`
  font-size: 17px ;
` ;


const InfoDrawer = ({open, setOpen}) => {

  const handleClose = () => {
    setOpen(false) ;
  }

  return (
    <div>
      <Drawer
        open={open}
        onClose={handleClose}
        PaperProps={{sx: drawerStyle}}
        style={{ zIndex: 1500 }}
      >
        <Header>
          <ArrowBack onClick={handleClose}/>
          <Text>Profile</Text>
        </Header>
        <Component>
          <Profile />
        </Component>
      </Drawer>
    </div>
  )
}

export default InfoDrawer ;