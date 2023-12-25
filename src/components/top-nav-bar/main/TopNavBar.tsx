import classes from './TopNavBar.module.css' 
import React from 'react' 
import NavButton from '../button'
 
interface ITopNav {
    arr: string[];
  }
  
  const TopNavBar: React.FC<ITopNav> = ({ arr }) => {
    return (
      <div className={classes.topNav}>
        <NavButton _enabled={true} text={arr[0]}></NavButton>
        <NavButton _enabled={false} text={arr[1]}></NavButton>
        <NavButton _enabled={false} text={arr[2]}></NavButton>
        <NavButton _enabled={false} text={arr[3]}></NavButton>
        <NavButton _enabled={false} text={arr[4]}></NavButton>
      </div>
    );
  };
  
  export default TopNavBar;