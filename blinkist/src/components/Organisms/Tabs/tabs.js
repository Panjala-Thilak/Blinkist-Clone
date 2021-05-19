import React, { useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid'
import BooksCollection from '../BooksCollection/BooksCollection'
import {useState} from 'react';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
    
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box paddingTop={3} paddingLeft={1}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
}
  
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const CustomizedTabs=({searchValue,exploreStatus}) =>{

  const [books,setBooks] =useState(null);
  const [libraryBooks,setLibraryBooks]=useState(null);
  const [value, setValue] = React.useState(0);
  
  const fetchAllBooks=()=>{
    fetch('http://localhost:8086/books')
      .then(res => {
        return res.json()
      })
      .then(data => {
        setBooks(data);
      })
  }

  const fetchData=()=>{
    fetch('http://localhost:8086/library')
      .then(res => {
        return res.json()
      })
      .then(data => {
        setLibraryBooks(data);
      })
  }

  useEffect(() => {
    fetchData();
  }, [])

  useEffect(() => {
    fetchAllBooks();
  }, [])

  const search=(id,books)=>{
    for (var i=0; i < books.length; i++) {
        if (books[i].id === id) {
            return i;
        }
    }
    return -1;
  }


  const  handleClick= (id,status) => {

      let identity=search(id,libraryBooks)
      libraryBooks[identity].status=!status;

      fetch('http://localhost:8086/library/' + id, {
        method: 'PUT',
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(libraryBooks[identity])
      })

      fetchData();
  }

  const  addLibraryClick= (id) => {

    let identity=search(id,libraryBooks)
    
    if(identity===-1)
    {
      const i=search(id,books);

      fetch('http://localhost:8086/library/', {
      method: 'POST',
      body: JSON.stringify(books[i]),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
      })
    }
    fetchData();

  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  var resultFilter = [];
  const searchBooks = (booksData) =>{
    console.log(searchValue);
    if(booksData)
    {
      if(searchValue!=='' && searchValue){
        searchValue=searchValue.toLowerCase();
        for(var i=0;i<booksData.length;i++)
        {
          if(booksData[i].title.toLowerCase().indexOf(searchValue)>-1||booksData[i].author.toLowerCase().indexOf(searchValue)>-1||booksData[i].category.toLowerCase().indexOf(searchValue)>-1)
          {
            resultFilter.push(booksData[i]);
          }
        }
      }
      else{
        resultFilter=[...booksData];
      }
    }
    return resultFilter;
  }

  var result,valueState=0;
  if(exploreStatus)
  {
    valueState=1;
    console.log("helloooooo",valueState);
    result = searchBooks(books);
  }
  else
    result = searchBooks(libraryBooks);

  return (
    <React.Fragment>
    { (!exploreStatus) &&
    <Paper square elevation={0}>
      {console.log(valueState)}
      <React.Fragment>
        <div>
        <Typography variant="h4" component="h4">My Library</Typography>
        </div>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="disabled tabs example"
          inkBarStyle={{background: '#22c870'}}
        >
          <Tab label="Currently Reading" />
          <Tab label="Finished"/>
        </Tabs>
        <TabPanel value={value} index={0}>
        
        <Grid container spacing={2}>
              {libraryBooks && <BooksCollection buttonName='Finished' books={result} status={true} onClick={(id,status) => handleClick(id,status)} />}
        </Grid>
       
        </TabPanel>
        <TabPanel value={value} index={1}>
              <Grid container spacing={2}>
              {libraryBooks && <BooksCollection buttonName='Read Once Again' books={result} status={false} onClick={(id,status) => handleClick(id,status)} />}
              </Grid>
        </TabPanel>
      </React.Fragment>
    </Paper>}
    { (exploreStatus) &&
      <React.Fragment>
        <Typography variant="h4" component="h4">{searchValue[0].toUpperCase()+searchValue.substring(1)} Books</Typography>
        <div style={{ padding: 20, margin:10}}>
          <Grid container spacing={2}>
            <BooksCollection buttonName='+ Add To Library' books={result} status={true} libraryBooks={libraryBooks} onClick={(id) => addLibraryClick(id)}/>
          </Grid>
        </div>
      </React.Fragment>
    }
  </React.Fragment>
  );
}


export default CustomizedTabs;