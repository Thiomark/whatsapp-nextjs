import React from 'react'

const Avator = ({url, clickEvent}) => {
    return (
        <img loading='lazy'
            className='rounded-full h-7 w-7 hover:shadow-lg cursor-pointer hover:scale-105'
            alt='Profile Picture'
            src={url}
            onClick={clickEvent}
        />
    )
}

export default Avator
