import React, { Component } from 'react'
import Contact from './../../components/Contact/Contact';
class ContactPage extends Component {
    render() {
        return (
            <div style={{ paddingTop: '13rem', marginBottom: '4rem'}}>
            <Contact
                google={this.props.google}
                center={{lat: 18.5204, lng: 73.8567}}
                height='100vh'
                zoom={15}
            />
        </div>

        )
    }
}
export default ContactPage;