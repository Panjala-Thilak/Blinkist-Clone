import { IconButton } from "@material-ui/core";
import Search from "@material-ui/icons/SearchSharp"

const SearchIcon = ({onClick}) => {
    return ( 
        <div>
             <IconButton onClick={onClick}>
                <Search />
            </IconButton>
        </div>
     );
}
 
export default SearchIcon;