import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CustomButton from '../../atoms/Button/Button';
import TimeIcon from '@material-ui/icons/AccessTime'
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  }
});

const MediaCard=({title,author,category,time,buttonName,onClick,image,visible}) => {
  const classes = useStyles();
  console.log(title,visible);
  return (
    <Card className={classes.root}>
      <CardActionArea>
      <CardMedia
          component="img"
          alt="Image"
          height="140"
          image={image}
          title= ""
        />
        <CardContent>
        <Typography gutterBottom variant="title" component="h2" noWrap>
            {title}
          </Typography>
          <Typography gutterBottom variant="subtitle1">
            {author}
          </Typography>
          <Typography gutterBottom variant="subtitle2">
            {category}
          </Typography>
          <ListItem >
            <ListItemIcon><TimeIcon/></ListItemIcon>
            <ListItemText>{time} minute read</ListItemText>
          </ListItem>
        </CardContent>
      </CardActionArea>
      { visible &&
      <CardActions>
        <CustomButton size="small" color="primary" variant="contained" label={buttonName} onClick={onClick}/>
      </CardActions> }
    </Card>
  );
}

export default MediaCard;