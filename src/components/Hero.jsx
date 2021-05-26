import React from 'react'

const Hero = ({ screen }) => {
    return (
        <div className='hero-container' style={{ backgroundImage: `url("/images/heroImages/${screen === 'large' ? 1 : 2}.png")` }} >
            <div className="sub-container">
                <div className="info">
                    <h1 className="main">Become a five-star professional!</h1>
                    <p className="content">Join the growing community of professional icarians.   Use the iCaria professional services to launch and grow your business, manage your clients, organize your schedule, and simplify your payments. With iCaria certification, your customers will be assured safe and secure access to services.</p>
                    <button><a href='#request-info'>Request Info</a></button>
                </div>
            </div>

        </div >
    )
}

export default Hero
