import React, { useState } from 'react';
import Button from '../../atoms/Button/TabButtons';
import Menu from '../Menu/CustomizedMenu';
import Form from '../Form/CustomForm';
import CustomizedTabs from '../Tabs/CustomizedTabs';
import Logo from '../../atoms/Logo/logo';
import { AppBar, Container, Toolbar } from '@material-ui/core';
import SearchIcon from '../../atoms/serach/SearchIcon';
import TextField from '../../atoms/Input/CustomInput';
import LoginButton from '../Login/LoginButton';
import Profile from '../Profile/profile';
  
export default function TopTab() {

  const [value,setValue]=useState(0);
  const [searchValue,setSearchValue]=useState('');
  const [statusValue,setStatusValue]=useState(false);

  const handleData=()=>{
  console.log("handledata");
   setValue(0);
  };

  const handleLibrary=()=>{
     setValue(0);
     setSearchValue('');
     setStatusValue(false);
    };



  const toggle=(val)=>{
    if(val===2)
    {
    setValue(0);
    setSearchValue('');
    }
    else
    {
    setValue(2);
    }
  };

  const searchNew=(val)=>{
    setStatusValue(false);
    setSearchValue(val);
  };

  const searchExplore=(val)=>{
    setStatusValue(true);
    setSearchValue(val);
  };
 
  return (

    <React.Fragment>
      <div style={{float:'right',paddingTop:10}}>
      <LoginButton />
      <Profile />
      </div>
      <AppBar position="static" elevation={0}>
        <Toolbar>   
          <Logo/>
          <SearchIcon title="searchIcon" onClick={()=>{toggle(value);}}/>
          { (value===0 || value===1) && <Menu parentMenuFunction={(val)=>{searchExplore(val);}}/>} 
          { (value===0 || value===1) && <div>
            <Button name='My Library' onClick={()=>{handleLibrary();}}/>
            <Button name='Add Book' onClick={()=>{setValue(1);}}/>
          </div>}
          {(value===2) && <TextField placeholder="Search for titles, authors and Categories" value="" onChange={(event)=>searchNew(event.target.value.trim())}/>}
      </Toolbar>
      </AppBar>
      

      <Container maxWidth="md">
      <div>
      {(value===1 || value===2 || value===0) &&<CustomizedTabs searchValue={searchValue} exploreStatus={statusValue}/>}
      {value===1 && <Form variant="outlined" parentFunction={()=>{handleData();}}/>}
      </div>
    </Container>
    </React.Fragment>
  );
}
