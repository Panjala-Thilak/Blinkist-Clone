import React, { useEffect, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import BooksCollection from '../BooksCollection/BooksCollection';

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

  const [books,setBooks] =useState( {
    "id": 1,
    "title": "Steve Jobs",
    "author": "Walter Isaacson",
    "time": "20",
    "category": "Entrepreneurship",
    "image": "https://images.blinkist.com/images/books/608a9c296cee070007228a21/1_1/470.jpg",
    "status": true
  },
  {
    "id": 2,
    "title": "Dropshipping",
    "author": "James Moore",
    "time": "20",
    "category": "Entrepreneurship",
    "image": "https://images.blinkist.com/images/books/60701b716cee070008b8b7a1/1_1/470.jpg",
    "status": true
  });
  const [libraryBooks,setLibraryBooks]=useState( [
    {
      "id": 1,
      "title": "Steve Jobs",
      "author": "Walter Isaacson",
      "time": "20",
      "category": "Entrepreneurship",
      "image": "https://images.blinkist.com/images/books/608a9c296cee070007228a21/1_1/470.jpg",
      "status": true
    },
    {
      "id": 3,
      "title": "The Bully Pulpit",
      "author": "Goodwin",
      "time": "19",
      "category": "Politics",
      "image": "https://images.blinkist.com/images/books/608aa9b16cee070007228a70/1_1/250.jpg",
      "status": false
    },
    {
      "id": 4,
      "title": "Genesis",
      "author": "Guido Tonelli",
      "time": "12",
      "category": "Science",
      "image": "https://images.blinkist.com/images/books/608bcaf36cee07000722912e/1_1/470.jpg",
      "status": true
    }]);
  const [value, setValue] = React.useState(0);
  
  const  fetchAllBooks=async()=>{
    await fetch('http://localhost:8086/books')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setBooks(data);
      });
  };

  const fetchData=async()=>{
    await fetch('http://localhost:8086/library')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setLibraryBooks(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchAllBooks();
  }, []);

  const search=(id,books)=>{
    for (let i=0; i < books.length; i++) {
        if (books[i].id === id) {
            return i;
        }
    }
    return -1;
  };


  const  handleClick= async(id,status) => {

      const identity=search(id,libraryBooks);
      libraryBooks[identity].status=!status;

      await fetch('http://localhost:8086/library/' + id, {
        method: 'PUT',
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(libraryBooks[identity])
      });

      fetchData();
  };

  const  addLibraryClick= async (id) => {

    const identity=search(id,libraryBooks);
    
    if(identity===-1)
    {
      const i=search(id,books);

      await fetch('http://localhost:8086/library/', {
      method: 'POST',
      body: JSON.stringify(books[i]),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
      });
    }
    fetchData();
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let resultFilter = [];

  const searchBooks = (booksData) =>{
    
    if(booksData)
    {
      if(searchValue!=='' && searchValue){
        for(let i=0;i<booksData.length;i++)
        {
          if(booksData[i].title.toLowerCase().indexOf(searchValue.toLowerCase())>-1||booksData[i].author.toLowerCase().indexOf(searchValue.toLowerCase())>-1||booksData[i].category.toLowerCase().indexOf(searchValue.toLowerCase())>-1)
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
  };

  let result;
  if(exploreStatus)
  {
    result = searchBooks(books);
  }
  else
  {
    result = searchBooks(libraryBooks);
  }


  return (
    <React.Fragment>
    { (!exploreStatus) &&
    <Paper square elevation={0}>
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
              {libraryBooks && <BooksCollection buttonName='Mark as Completed' books={result} status={true} onClick={(id,status) => handleClick(id,status)} />}
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
};


export default CustomizedTabs;