import React from 'react'
import Button from '@material-ui/core/Button'


function CustomMenuButton({variant,color,label,onClick}){
      return(

        <Button variant={variant} color={color} onClick={onClick}>{label}</Button>
    )
}


export default CustomMenuButton;