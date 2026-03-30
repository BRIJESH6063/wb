
import { Box, styled } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { InputBase } from '@mui/material';


const Component = styled(Box)`
  height: 45px ;
  background-color: #fff ;
  border-bottom: 1px solid #F2F2F2 ;
` ;

const Wrapper = styled(Box)`
  background-color: #fef2f5 ;
  position: relative ;
  margin: 7px 13px ;
  border-radius: 10px ;
` ;

const Icon = styled(Box)`
  position: absolute ;
  height: 100% ;
  padding: 8px ;
  color: #919191 ;
` ;

const InputField = styled(InputBase)`
  width: 100% ;
  padding: 16px ;
  height: 15px ;
  padding-left: 55px ;
  font-size: 15px ;
` ;


const Search = ({setText}) => {


  return (
    <Component>
      <Wrapper>
        <Icon>
          <SearchIcon 
            fontSize="small"

          />
        </Icon>
        <InputField  
          placeholder="Search or start new chat"
          onChange={(e)=> setText(e.target.value)}
        />
      </Wrapper>
    </Component>
  )
}

export default Search ;