import { Box, styled } from "@mui/material";
import Footer from "./Footer";
import Message from "./Message";
import { newMessage, getMessages } from "../../../service/api";

import { useContext, useState, useEffect } from "react";
import { AccountContext } from "../../context/AccountProvider";

const Wrapper = styled(Box)`
  background-image: url(${`https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png`})
  
` ;

const Component = styled(Box)`
  height: 80vh ;
  overflow-y: scroll ;
` ;


const Container = styled(Box)`
  padding: 2px 50px ;
` ;

const Messages = ({person, conversation }) => {

  const [value, setValue] = useState('') ;
  const { account } = useContext(AccountContext) ;
  const [messages, setMessages] = useState([]) ;
  const [newMessageFlag, setNewMessageFlag] = useState(false) ;
  const [file, setFile] = useState() ;
  const [image, setImage] = useState('') ;


  useEffect(() => {
    const getMessagedetails = async () => {
      const data = await getMessages(conversation._id) ;
      setMessages(data) ;
      // console.log(data) ;
    } 
    conversation._id && getMessagedetails() ;
  }, [person._id, conversation._id, newMessageFlag])

  const sendText = async (e) => {
    const code = e.keyCode || e.which ;
    // console.log(person) ;
    // console.log(account) ;
    if(code === 13) {
      let message = {} ;
      if(!file) {
        message = {
          senderId: account.sub,
          recieverId: person.sub,
          conversationId: conversation._id,
          type: 'text',
          text: value
        }
      } else {
        message = {
          senderId: account.sub,
          recieverId: person.sub,
          conversationId: conversation._id,
          type: 'file',
          text: image
        }
      }
      
      console.log(message) ;
      await newMessage(message) ;

      setValue('') ;
      setFile('') ;
      setImage('') ;
      setNewMessageFlag((prev) => !prev) ;
    }

  }

  return (
    <Wrapper>
      <Component>
        {
          messages && messages.map((message) => 
            <Container>
              <Message message={message}/>
            </Container>
          )
        }
      </Component>
      <Footer sendText={sendText} setValue={setValue} value={value} file={file} setFile={setFile} setImage={setImage} />
    </Wrapper>
  )
}


export default Messages ;