import React from 'react';
import Button from '@material-ui/core/Button';

function CustomButton({variant,color,label,onClick,endIcon,testId,size}){
      return(
        <Button variant={variant} color={color} onClick={onClick} data-testId={testId} size={size} fullWidth data-testId='button'>{label}{endIcon}</Button>
    );
}

export default CustomButton;