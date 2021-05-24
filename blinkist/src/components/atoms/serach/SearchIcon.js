import { IconButton } from "@material-ui/core";
import Search from "@material-ui/icons/SearchSharp";

const SearchIcon = ({onClick,title}) => {
    return ( 
        <div>
             <IconButton onClick={onClick} role='icon' title={title}>
                <Search />
            </IconButton>
        </div>
     );
};
 
export default SearchIcon;