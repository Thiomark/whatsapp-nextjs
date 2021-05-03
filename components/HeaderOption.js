import React from 'react'

const HeaderOption = ({title, Icon, selected}) => {
    return (
        <div className={`flex items-center cursor-pointer border-b-4 border-transparent hover:text-blue-600 hover:border-blue-600 space-x-2 ${selected && 'text-blue-600 border-blue-600'}`}>
            <Icon  className='h-4'/>
            <p className='hidden sm:inline-flex'>{title}</p>
        </div>
    )
}

export default HeaderOption
