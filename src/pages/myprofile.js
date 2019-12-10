import React, { Fragment } from 'react';
import ProfileData from '../components/ProfileData/ProfileData';

const MyProfilePage = (props) => {
    return(
        <Fragment>
            <ProfileData {...props}/>
        </Fragment>
    )
}

export default MyProfilePage;