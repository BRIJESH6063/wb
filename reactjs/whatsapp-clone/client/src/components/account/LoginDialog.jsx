import { useContext } from 'react';
import { Dialog, Box, Typography, List, ListItem, styled} from '@mui/material'

import { AccountContext } from '../context/AccountProvider';
import { qrCodeImage } from "../../constants/data";
import { GoogleLogin } from '@react-oauth/google'; // google-authentication

import { addUser } from '../../service/api';

// jwt-decoder
import { jwtDecode } from "jwt-decode";

/*
Box -> div replacement 
Typograpgy -> p replacement
*/

// styling of Dialog --> styled does not work directly
const dialogStyle = {
  height: '96%',
  marginTop: '12%',
  width: '60%',
  maxWidth: '100%',
  maxHeight: '100%',
  boxShadow: 'none',
  overflow: 'hidden'  // no scroll 
}

// make written instructions and QR code side by side
const Component = styled(Box)`
  display: flex ;
` ;

const Container=styled(Box)`
  padding: 56px 0 56px 56px ;
` ;

// img is not mui component hence pass 'img' and give styling as object
const QRCode = styled('img')({
  height: 260,
  width: 260 ,
  margin: '56px 0 0 56px' // TOP RIGHT BOTTOM LEFT (clockwise)
})

const Title = styled(Typography)`
  font-size: 26px ;
  color: #525252 ;
  font-weight: 300;
  font-style: inherit ;
  margin-bottom: 30px ;

` ;


const StyledList = styled(List)`
  & > li {
    padding: 0 ;
    margin-top: 15px ;
    font-size: 18px ;
    line-height: 28px ;
    color: #4a4a4a ;
  }
` ;

const LoginDialog = () => {
  const {setAccount} = useContext(AccountContext) ;

  const onLoginSuccess = async (res) => {
    const decoded = jwtDecode(res.credential) ;
    setAccount(decoded) ;
    await addUser(decoded) ;
  }


  const onLoginFailure = (res) => {
    console.log("Login Failed!"+res) ;
  }



  return (
    <Dialog 
      open={true} 
      PaperProps={{sx: dialogStyle}}
      hideBackdrop={true}
    >
      <Component> 
        <Container>
          <Title>To use whatsapp on your computer:</Title>
          <StyledList>
            <ListItem>1. Open Whatsapp on your phone</ListItem>
            <ListItem>2. Tap Menu or Settings and Select Whatsapp Web</ListItem>
            <ListItem>3. Scan the QR to begin with Whatsapp web</ListItem>
          </StyledList>
        </Container>
        <Box style={{position: 'relative'}}>
          <QRCode src={qrCodeImage} alt="qr code" />
          <Box style={{position:'absolute', top: '50%'}}>
              <GoogleLogin 
                onSuccess={onLoginSuccess} 
                onError={onLoginFailure}
              />
          </Box>
          
        </Box>
      </Component>
    </Dialog>
  )
}


export default LoginDialog ;
