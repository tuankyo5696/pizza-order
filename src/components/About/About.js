import React from 'react'

import './_About.scss';

const about = props => (
    <div className="bodyAbout">
    <div className="contentAbout">
        <div>
            <p className="pAbout">About Page</p>
            <p className="pAboutDetails">
PYCO Pizza is one of the top 5 biggest Pizza houses in the world and is the biggest Pizza house in Vietnam. Our goal is to become a typical corporate model that contributes to the continuous development of the Fast Food industry in Vietnam. </p>
            <p className="pAboutDetails">
PYCO's Pizza ensures that your order will arrive within 30 minutes, or we will send you a medium-sized Pizza Free Voucher for the next purchase!
                </p>
            <p className="pAboutDetails">
PYCO's Pizza guarantees you will be satisfied! Your pizza is always guaranteed to be crispy and delicious when delivered to your doorstep, otherwise we are ready to exchange it for you!
            </p>
        </div>
    </div>
    <div className="imgAbout">
        <div >
            <div className="aCover">
                <div className="divImgAbout1 dabout"></div>
                <div className="divImgAbout2 dabout"></div>
            </div>
            <div className="aCover">
                <div className="divImgAbout3 dabout"></div>
                <div className="divImgAbout4 dabout"></div>
            </div>
        </div>
    </div>
</div>
)

export default about;