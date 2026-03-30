import Conversation from "./Conversation";

import { useEffect, useState, useContext } from "react";
import { getUsers } from "../../../service/api";
import { Box, styled, Divider } from "@mui/material";

import { AccountContext } from "../../context/AccountProvider";


const Component = styled(Box)`
  height: 81vh ;
  overflow: overlay ;
` ;

const StyledDivider = styled(Divider)`
  margin: 0 0 0 70px ;
  background-color: #e9edef ;
  opacity: 0.4 ;
` ;


const Conversations = ({ text }) => {
  const [users, setUsers] = useState(null) ;

  const { account } = useContext(AccountContext) ;

  useEffect(() => {
    const fetchData = async () => {
      const response = await getUsers() ;
      const filteredData = response.filter((user) => user.name.toLowerCase().includes(text.toLowerCase())) ;
      setUsers(filteredData) ;
    }
    fetchData() ;
  }, [text]) ;

  return (
    <Component>
      {
        users?.map(user => (
          user.sub !== account.sub && 
          <>
            <Conversation key={user._id} user={user} />
            <StyledDivider />
          </>
        ))
      }
    </Component>
  )
}

export default Conversations ;