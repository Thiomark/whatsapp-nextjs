import React from 'react'
import Image from 'next/image'
import { SearchIcon} from '@heroicons/react/outline'
import { MicrophoneIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router'
import { useRef } from 'react';

const SearchComponent = () => {

    const searchInput = useRef(null);
    const router = useRouter();

    const submitSearch = (e) => {
        e.preventDefault();
        const userInput = searchInput.current.value
        
        if (!userInput) return 
        
        router.push(`/search?term=${userInput}`)
    }

    return (
        <form className='mx-5 flex flex-col items-center mt-44 flex-grow'>
            <Image 
                className='m-auto'
                width={300}
                height={100}
                src='https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
            />
            <div className="max-w-xl py-3 px-5 items-center flex w-full focus-within:shadow-lg mt-5 hover:shadow-lg rounded-full border border-gray-200">
                <SearchIcon className='h-5 mr-3 text-gray-500 '/>
                <input 
                    ref={searchInput}
                    type="text" 
                    className='flex-grow focus:outline-none'
                />
                <MicrophoneIcon className='h-5 mr-3 cursor-pointer text-gray-500 '/>
            </div>
            <div className='flex my-6 space-x-4'>
                <button onClick={(e) => submitSearch(e)} className='btn'>Google Search</button>
                <button className='btn'>I'm Feeling Lucky</button>
            </div>
            <div className="flex space-x-4">
                <p className='text-sm'>Google offered in:</p>
                <p className='links'>Afrikaans</p>
                <p className='links'>Sesotho</p>
                <p className='links'>isiZulu</p>
                <p className='links'>IsiXhosa</p>
                <p className='links'>Setswana</p>
                <p className='links'>Northern Sotho</p>
            </div>
        </form>
    )
}

export default SearchComponent
