import './style.css';
import BlinklistSvg from './logo.svg'

export default function Logo({handleClick}){
    return (
           <img className='logo' src={BlinklistSvg} alt='Blinklist' onClick={handleClick}/>
    );
}
