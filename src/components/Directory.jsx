import React from 'react'
import Carousel from "react-elastic-carousel";


const directoryItems = [
    {
        iconPath: '/images/directoryImages/1.png',
        subHeading: 'Offer coupons',
        content: 'Grow your customer base by offering free coupons that are advertised on social media and discoverable through Google search. No hidden or upfront fees and you get a free professional profile.  Engage your customers and leads while expanding your business.'
    },
    {
        iconPath: '/images/directoryImages/2.png',
        subHeading: 'Search and discover',
        content: 'Our directory is accessed by families across US and Canada to find local service providers and facilities by profession, services offered, or ratings and rankings. We match families based on their needs.'
    },
    {
        iconPath: '/images/directoryImages/3.png',
        subHeading: 'Improve satisfaction',
        content: 'Get higher ratings and better reviews through transparency, media-rich profiles, engaging social blog, professional articles, and accreditation.Create events to promote your business and advertise them on social media.'
    },
    {
        iconPath: '/images/directoryImages/4.png',
        subHeading: 'Profile boosting',
        content: 'Get more referrals through improved ratings and reviews, performance monitoring, recommendations from other professionals, and profile search boosting. Your profiles are discoverable on Google search.'
    },
]


const breakPoints = [
    { width: 100, itemsToShow: 1 },
    { width: 280, itemsToShow: 1.2 },
    { width: 330, itemsToShow: 1.5 },
    { width: 400, itemsToShow: 1.7 },
    { width: 500, itemsToShow: 2 },
    { width: 600, itemsToShow: 2.5 },
    { width: 900, itemsToShow: 3 },
    { width: 1000, itemsToShow: 4 },

];

const Directory = ({ screen }) => {
    return (
        <div className='container'>
            <div className='sub-container'>
                {
                    screen === 'large' ?
                        <>
                            <div style={{ padding: '48px 0', background: '#ff61614a' }}>
                            </div>
                            <div style={{ padding: '16px 0', background: '#b75cff47 ' }}>
                            </div>
                        </> : null
                }
                <div>
                    <h1 className='heading'>Why Our Directory</h1>
                    <div className="directory-items">
                        <Carousel breakPoints={breakPoints} showArrows={false} showEmptySots={false} pagination={screen === 'large' ? false : true}>
                            {
                                directoryItems.map((item, index) => (
                                    <div key={item + index} className='item'>
                                        <div className="icon"><img src={item.iconPath} /></div>
                                        <h4 className="sub-heading">{item.subHeading}</h4>
                                        <p className="content">{item.content}</p>
                                    </div>
                                ))
                            }
                        </Carousel>
                    </div>
                </div>
                {
                    screen === 'large' ?
                        <>
                            <div style={{ padding: '16px 0', background: '#b75cff47 ' }}>
                            </div>
                            <div style={{ padding: '48px 0', background: '#ff61614a' }}>
                            </div>
                        </> : null
                }
            </div>
        </div>
    )
}

export default Directory
