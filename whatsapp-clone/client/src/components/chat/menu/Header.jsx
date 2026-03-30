import React from "react";
import { Box, styled } from "@mui/material";
import { useContext, useState } from "react";
import { AccountContext } from "../../context/AccountProvider";
import { Chat as MessageIcon } from '@mui/icons-material';
import HeaderMenu from "./HeaderMenu";
import InfoDrawer from "../../drawer/InfoDrawer";

const Container = styled(Box)`
  height: 42px ;
  background-color: #ededed ;
  padding: 8px 16px ;
  display: flex ;
  align-items: center ;
` ;

const Image = styled('img')({
  height: '38px',
  width: '38px',
  borderRadius: '50%'
})


const Wrapper = styled(Box)`
  margin-left: auto ;
  & > * {
    margin-left: 2px ;
    padding: 8px ;
    color: #000 ;
  } ;
  &: first-child{
    font-size: 20px ;
    margin-right: 8px ;
    margin-top: 3px ;
  }
` ;


const Header = () => {
  const { account } = useContext(AccountContext) ;
  // console.log(account.picture) ;

  const [openDrawer, setOpenDrawer] = useState(false) ;

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer) ;
  }
  return (
    <Container>
      <Image src={account.picture} alt="dp" onClick={toggleDrawer} />
      <Wrapper>
        <MessageIcon />
        <HeaderMenu setOpenDrawer={setOpenDrawer} />
      </Wrapper>
      <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} />
    </Container>
  )
}



export default Header ;