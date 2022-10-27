import React from 'react'
import { Link } from 'react-router-dom'

const NewHome = () => {
    return (
        <>
            <div className='main'>
                <div className='icon'>Hey</div>
                <hr className='hrhu' />
                <div className='root' >
                    <Link to="/" > HOME</Link>
                    <Link to="/About" >ABOUT</Link>
                    <Link to="/Product">PRODUCT</Link>
                </div>
            </div>
        </>
    )
}

export default NewHome
