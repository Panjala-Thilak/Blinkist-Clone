import React, { useState } from 'react';
import Button from '../../atoms/Button/TabButtons';
import Menu from '../Menu/CustomizedMenu'
import Form from '../Form/form'
import CustomizedTabs from '../Tabs/tabs';
import Logo from '../../atoms/Logo/logo';
import { AppBar, Container, Toolbar } from '@material-ui/core';
import SearchIcon from '../../atoms/serach/serach'
import TextField from '../../atoms/Input/CustomInput'
import LoginButton from '../Login/LoginButton';
import Profile from '../Profile/profile';
  
export default function ButtonAppBar() {

  const [value,setValue]=useState(0);
  const [searchValue,setSearchValue]=useState('')
  const [statusValue,setStatusValue]=useState(false)

  const handleData=()=>{
  console.log("handledata");
   setValue(0);
  }

  const handleLibrary=()=>{
     setValue(0);
     setSearchValue('');
     setStatusValue(false);
    }



  const toggle=(value)=>{
    if(value===2)
    {
    setValue(0);
    setSearchValue('');
    }
    else
    setValue(2);
  }

  const searchNew=(val)=>{
    console.log(val);
    console.log("hello");
    setStatusValue(false);
    setSearchValue(val);
  }

  const searchExplore=(val)=>{
    console.log(val);
    console.log("hello");
    setStatusValue(true);
    setSearchValue(val);
  }
 
  return (

    <React.Fragment>
      <div style={{float:'right',paddingTop:10}}>
      <LoginButton />
      <Profile />
      </div>
      <AppBar position="static" elevation={0}>
        <Toolbar>   
          <Logo onClick={()=>{window.location.reload()}}/>
          <SearchIcon onClick={()=>{toggle(value)}}/>
          { (value===0 || value===1) && <Menu parentMenuFunction={(val)=>{searchExplore(val)}}/>} 
          { (value===0 || value===1) && <div>
            <Button name='My Library' onClick={()=>{handleLibrary()}}/>
            <Button name='Add Book' onClick={()=>{setValue(1)}}/>
          </div>}
          {(value===2) && <TextField placeholder="Search for titles, authors and Categories" onChange={(event)=>searchNew(event.target.value)}/>}
      </Toolbar>
      </AppBar>
      

      <Container maxWidth="md">
      <div>
      {(value===1 || value===2 || value===0) &&<CustomizedTabs searchValue={searchValue} exploreStatus={statusValue}/>}
      {(value===1 || value===2 || value===0) && console.log("hello")}
      {value===1 && <Form variant="outlined" parentFunction={()=>{handleData()}}/>}
      </div>
    </Container>
    </React.Fragment>
  );
}
