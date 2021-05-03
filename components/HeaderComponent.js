import React from 'react'
import Avator from './Avator'
import { ViewGridIcon, XIcon, MicrophoneIcon, SearchIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import { useRouter } from 'next/router';
import { useRef } from 'react'
import HeaderOptions from '../components/HeaderOptions'

const HeaderComponent = ({home}) => {

    const router = useRouter()

    const searchInput = useRef(null)

    const submitSearch = (e) => {
        e.preventDefault();
        const userInput = searchInput.current.value
        
        if (!userInput) return 
        
        router.push(`/search?term=${userInput}`)
    }

    const profileSection = () => {
        return (
            <>
                <ViewGridIcon className='h-10 w-10 cursor-pointer rounded-full p-2 hover:bg-gray-100'/>
                <Avator url='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=60'/>
            </>
        )
    }

    return (
        home ? (
            <header className='flex items-center w-full text-grey-700 p-5 justify-between'>
                <div>
                </div>
                <div className="flex space-x-4 items-center ">
                    <p className='link'>Gmail</p>
                    <p className='link'>Images</p>
                    {profileSection()}
                </div>
            </header>) : (
            <header className='sticky top-0 bg-white'>
                <div className="flex w-full p-6">
                    <Image 
                        width={120}
                        height={40}
                        src='https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
                        onClick={(e) => router.push('/')}
                    />
                    <form className='flex px-6 py-3 ml-10 mr-5 flex-grow border border-gray-200 rounded-full shadow-md max-w-3xl items-center'>
                        <input type="text" ref={searchInput} className='flex-grow w-full focus:outline-none'/>
                        <XIcon 
                            className='h-6 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125'
                            onClick={() => searchInput.current.value = ''}
                        />
                        <MicrophoneIcon 
                            className='h-6 sm:mr-3 pl-3 hidden sm:inline-flex text-blue-600 border-l-2 border-gray-300 cursor-pointer'
                        />
                        <SearchIcon 
                            className='h-6 hidden sm:inline-flex text-blue-500 cursor-pointer'
                            onClick={(e) => submitSearch(e)}
                        />
                    </form>
                    <div className="ml-auto flex items-center">
                        {profileSection()}
                    </div>
                </div>
                <HeaderOptions />
            </header>
        )
    )
}

export default HeaderComponent