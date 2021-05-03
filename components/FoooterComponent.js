import React from 'react'

const FoooterComponent = () => {
    return (
        <footer className='grid w-full divide-y-[1px] divide-grey-300 text-gray-700 bg-gray-100 text-sm'>
            <div className='px-8 py-3'>
                <p>South Africa</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row-dense px-8 py-3'>
                <div className="py-4 flex justify-center items-center md:col-span-2 lg:col-span-1 lg:col-start-2">
                    <p>Carbon neutral since 2007</p>
                </div>
                <div className="py-4 flex justify-center space-x-8 whitespace-nowrap md:justify-self-start">
                    <p>About</p>
                    <p>Advertising</p>
                    <p>Business</p>
                    <p>How Search works</p>
                </div>
                <div className="py-4 flex justify-center space-x-8 whitespace-nowrap md:ml-auto">
                    <p>Privacy</p>
                    <p>Terms</p>
                    <p>Settings</p>
                </div>
            </div>
        </footer>
    )
}

export default FoooterComponent
