import React, { Fragment } from 'react';
import CreateAircraftForm from '../components/CreateAircraftForm/CreateAircraftForm';

const CreateAircraftPage = (props) => {
    return(
        <Fragment>
            <CreateAircraftForm {...props}/>
        </Fragment>
    )
}

export default CreateAircraftPage;