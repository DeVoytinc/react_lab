import classes from './Profile.module.css'
import React from 'react'
 
interface ProfileProps {
    name: string;
}

const Profile: React.FC<ProfileProps> = ({name}) => { 
    return ( 
        <div className={classes.row}>
            <h4 className={classes.h4}>{name}</h4>
            <h5 className={classes.h5}>Health care</h5>
        </div>
    ); 
};
 
export default Profile;