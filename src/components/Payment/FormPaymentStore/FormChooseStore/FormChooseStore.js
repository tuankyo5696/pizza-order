import React from 'react'
import ContactStore from './../../../Contact/ContactStore';
import { withRouter } from 'react-router-dom';
const Step2 = props => {
    const getBack = e => {
        e.preventDefault();
        props.history.goBack();
    };
    
    const next = e => {
        e.preventDefault();
        props.nextStep();
      };
    return(
        <div style={{}}>
            <ContactStore
              google={props.google}
              center={{ lat: 10.8020047, lng: 106.6413804 }}
              height="100vh"
                zoom={15}
                getBack={getBack}
                next= {next}
            />
          </div>
    )
    
} 
export default withRouter(Step2)