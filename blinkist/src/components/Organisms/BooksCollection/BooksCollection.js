import React from 'react';
import Card from '../../molecules/Card/card'
import Grid from '@material-ui/core/Grid'

const BooksCollection = ({buttonName,books,libraryBooks,status,onClick}) => {
    console.log(buttonName,books);
    // eslint-disable-next-line array-callback-return
    console.log(books,libraryBooks)
    const search=(id)=>{
      if(libraryBooks){
      for (var i=0; i < libraryBooks.length; i++) {
        if (libraryBooks[i].id === id) {
          console.log("available");
            return true;
        }
      }
    }
      }
    let visible=true
    let allbooks = books.map((item) => {
        if(search(item.id))
        {
          visible=false;
        }
        else{
          visible=true;
        }
        if (item.status === status)
          return (
            <Grid item xs={12} md={4} sm={6}>
              {console.log(item,visible)}
              <Card buttonName={buttonName} title={item.title} author={item.author} category={item.category} time={item.time} image={item.image} onClick={()=>onClick(item.id,status)} visible={visible} />
            </Grid>
          )
    }
      )

  return ( 
      
      <Grid container spacing={2}>
      {allbooks}
      </Grid>
  
   );
}

export default BooksCollection;