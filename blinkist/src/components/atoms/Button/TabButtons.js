import React from 'react';
import Button from '@material-ui/core/Button';


export default function CustomizedButtons({variant,color,name,onClick,endIcon}) {

  return (
      
        <Button  onClick={onClick} endIcon={endIcon} color={color} variant={variant}>
          {name}
        </Button>
      
  );
}