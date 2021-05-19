import React, { useState } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '../../atoms/Button/TabButtons';
import CustomMenuButton from '../../atoms/Button/TabButtons';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { Grid, ListItem, ListItemIcon } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket ,faLandmark,faFlask,faGraduationCap,faLightbulb,faComment,faHeartbeat, faHeart, faGlobeAsia}  from '@fortawesome/free-solid-svg-icons';
import { withStyles } from '@material-ui/core/styles';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function CustomizedMenus({parentMenuFunction}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [expand,setExpand] = useState(0);
 

  const toggle=()=>{
    if(expand===0)
    setExpand(1);
    else
    setExpand(0);
  }
  const handleClick = (event) => {
    
    setAnchorEl(event.currentTarget);
    toggle();
  };

  const handleClose = () => {
    setAnchorEl(null);
    toggle();
  };

  const search=(value)=>{
    console.log(value);
    parentMenuFunction(value);
    console.log("last");
  }
  
  return (
    <div>
      <Button
        name='Explore'
        onClick={handleClick}
        endIcon={(expand===0 && <ExpandMoreIcon />)||(expand===1 && <ExpandLessIcon />)}
      />
       
  
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
          <Grid container direction={"row"}>
            <Grid item xs={12} sm={6} md={4}>
                    <StyledMenuItem onClick={handleClose}>
                        <ListItem >
                          <ListItemIcon><FontAwesomeIcon icon={faRocket} /></ListItemIcon>
                          <CustomMenuButton name="Entrepreneurship" onClick={()=>search("Entrepreneurship")}></CustomMenuButton>
                        </ListItem>
                    </StyledMenuItem>
            </Grid> 
            <Grid item xs={12} sm={6} md={4}>
                    <StyledMenuItem onClick={handleClose}>
                        <ListItem >
                            <ListItemIcon><FontAwesomeIcon icon={faLandmark} /></ListItemIcon>
                            <CustomMenuButton name="Politics" onClick={()=>search("Politics")}></CustomMenuButton>
                        </ListItem>
                    </StyledMenuItem>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                    <StyledMenuItem onClick={handleClose}>
                        <ListItem >
                            <ListItemIcon><FontAwesomeIcon icon={faFlask} /></ListItemIcon>
                            <CustomMenuButton name="Science" onClick={()=>search("Science")}></CustomMenuButton>
                        </ListItem>
                    </StyledMenuItem>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                    <StyledMenuItem onClick={handleClose}>
                        <ListItem >
                            <ListItemIcon><FontAwesomeIcon icon={faGraduationCap} /></ListItemIcon>
                            <CustomMenuButton name="Education" onClick={()=>search("Education")}></CustomMenuButton>
                        </ListItem>
                    </StyledMenuItem>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                    <StyledMenuItem onClick={handleClose}>
                        <ListItem >
                            <ListItemIcon><FontAwesomeIcon icon={faGlobeAsia} /></ListItemIcon>
                            <CustomMenuButton name="Economics" onClick={()=>search("Economics")}></CustomMenuButton>
                        </ListItem>
                    </StyledMenuItem>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                    <StyledMenuItem onClick={handleClose}>
                        <ListItem >
                            <ListItemIcon><FontAwesomeIcon icon={faLightbulb} /></ListItemIcon>
                            <CustomMenuButton name="Motivation"  onClick={()=>search("Motivation")}></CustomMenuButton>
                        </ListItem>
                    </StyledMenuItem>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <StyledMenuItem onClick={handleClose}>
                          <ListItem >
                              <ListItemIcon><FontAwesomeIcon icon={faHeartbeat} /></ListItemIcon>
                              <CustomMenuButton name="Health" onClick={()=>search("Health")}></CustomMenuButton>
                          </ListItem>
                      </StyledMenuItem>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <StyledMenuItem onClick={handleClose}>
                          <ListItem >
                              <ListItemIcon><FontAwesomeIcon icon={faComment} /></ListItemIcon>
                              <CustomMenuButton name="Communcation skills" onClick={()=>search("Communcation skills")}></CustomMenuButton>
                          </ListItem>
                      </StyledMenuItem>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <StyledMenuItem onClick={handleClose}>
                          <ListItem >
                              <ListItemIcon><FontAwesomeIcon icon={faHeart} /></ListItemIcon>
                              <CustomMenuButton name="Relationships" onClick={()=>search("Relationships")}></CustomMenuButton>
                          </ListItem>
                      </StyledMenuItem>
                    </Grid>
        </Grid>
      </StyledMenu>
    </div>
  );
}
