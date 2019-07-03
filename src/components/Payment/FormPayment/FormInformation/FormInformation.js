import React from 'react'
import Map from './../../../../components/Map/Map';

const Step1 = ({ nextStep, handleChange, values, errors, touched ,...props}) => (
    <div style={{ }}>
				<Map
					google={props.google}
					center={{lat: 18.5204, lng: 73.8567}}
					height='300px'
					zoom={15}
				/>
			</div>
)

export default Step1;