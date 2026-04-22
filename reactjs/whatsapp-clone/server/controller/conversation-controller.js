import conversation from '../model/Conversation.js'

export const newConversation = async (request, response) => {
  try{
    const senderId = request.body.senderId ;
    const recieverId = request.body.recieverId ;

    const convExist = await conversation.findOne({ members: { $all: [recieverId, senderId ]}}) ;

    if(convExist) {
      return response.status(200).json("conversation already exist") ;
    }

    const newConversation = new conversation({
      members: [senderId, recieverId ]
    })
    await newConversation.save() ;
    return response.status(200).json("conversation saved successfully!") ;
  } catch(error) {
    return response.status(500).json(error.message) ;

  }
}


export const getConversation = async (request, response) => {
  try{
    const senderId = request.body.senderId ;
    const recieverId = request.body.recieverId ;
    
    const convData = await conversation.findOne({ members: { $all: [recieverId, senderId ]}}) ;
    return response.status(200).json(convData) ;
  } catch(error) {
    return response.status(500).json(error.message) ;
  }
}