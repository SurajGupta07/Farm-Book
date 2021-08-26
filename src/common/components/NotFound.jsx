import React from 'react';
import NotfoundLogo from '../assets/notFound.svg'

const Notfound = () => {
    return (
        <div>
            <img src={NotfoundLogo} alt="Not-Found" className="notFound"/>
        </div>
    )
}

export default Notfound;