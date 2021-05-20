import TextField from '@material-ui/core/TextField';



function CustomInput({variant,label,placeholder,type,onChange}){
    return(
        <TextField variant={variant} label={label} placeholder={placeholder} type={type} onChange={onChange} fullWidth data-testid='input'/>
    )
}

export default CustomInput;