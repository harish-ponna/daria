import React, { useEffect, useState } from 'react'
import Carousel from "react-elastic-carousel";

const wondersImagesPath = [
    { path: '1.png', name: 'Sales Agent' },
    { path: '2.png', name: 'City Business Owner' },
    { path: '3.png', name: 'Tutor' },
    { path: '4.png', name: 'Financial Advisor' },
    { path: '5.png', name: 'Personal Care Giver' },
    { path: '6.png', name: 'Yoga Trainer' },
    { path: '7.png', name: 'Nutritionist' },
    { path: '8.png', name: 'Astrologer' },
    { path: '9.png', name: 'Senior Care Director' },
]

const breakPoints = [
    { width: 100, itemsToShow: 1 },
    { width: 200, itemsToShow: 1.6 },
    { width: 300, itemsToShow: 1.8 },
    { width: 400, itemsToShow: 2.5 },
    { width: 500, itemsToShow: 3 },
    { width: 600, itemsToShow: 3.5 },
    { width: 700, itemsToShow: 4 },
    { width: 800, itemsToShow: 4.5 },
    { width: 900, itemsToShow: 5 },
    { width: 1000, itemsToShow: 5.5 },
];


const Wonders = ({ screen }) => {


    return (
        <div className='container'>
            <div className="sub-container">
                {
                    screen === 'large' ?
                        <h1 className="heading" style={{ textAlign: 'center' }}>iCaria Living - Explore the wonders of life</h1>
                        :
                        <h1 className="heading">Choose your profession for more details</h1>
                }
                <Carousel breakPoints={breakPoints} showArrows={screen === 'small' ? false : true}>
                    {
                        wondersImagesPath.map(image => (
                            <div key={image.path} style={{ marginTop: '30px' }}>
                                <img src={`/images/wondersImages/${image.path}`} style={screen === 'small' ? { borderRadius: 20, width: 152, height: 152 } : { borderRadius: 0, width: 192, height: 192 }} />
                                <p style={{ textAlign: 'center', color: '#4f586b' }}>{image.name}</p>
                            </div>
                        ))
                    }
                </Carousel>
            </div>
        </div>
    )
}

export default Wonders
