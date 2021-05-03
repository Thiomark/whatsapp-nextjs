import { DotsVerticalIcon, ChatAlt2Icon, SearchIcon } from '@heroicons/react/solid'
import {useAuthState} from 'react-firebase-hooks/auth';
import * as EmailValidator from 'email-validator'
import Avator from './Avator'
import { useRef } from 'react';
import { auth, db } from '../firebase';

const SidebarComponent = () => {

    const [user, loading] = useAuthState(auth)

    const createChat = () => {
        const input = prompt("Enter user")

        if(!input) return;

        if(EmailValidator.validate(input)){
            db.collection('chats').add({
                users: [user.email, input]
            })
        }
    }

    return (
        <aside className='max-w-xs sticky top-0 bg-red-500'>
            <div className='sticky top-0 bg-white'>
                <HeaderSection />
                <SearchSection />
            </div>
            <section>

            </section>
        </aside>
    )
}

const HeaderSection = () => {
    return (
        <section className='w-full flex bg-gray-200 p-4 justify-between items-center'>
            <Avator clickEvent={() => auth.signOut()} url='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=60'/>
            <div className='flex items-center'>
                <ChatAlt2Icon className='h-6 cursor-pointer' />
                <DotsVerticalIcon className='ml-4 h-6 cursor-pointer'/>
            </div>
        </section>
    )
}

const SearchSection = () => {
    const searchInput = useRef(null)
    return (
        <section className='w-full sticky bg-gray-50 p-2'>
            <div className='bg-white flex px-4 py-2 rounded-md justify-between items-center'>
                <SearchIcon className='h-5 mr-6 text-gray-500 '/>
                <input 
                    ref={searchInput}
                    type="text" 
                    placeholder='Search in chats'
                    className='flex-grow focus:outline-none'
                />
            </div>
        </section>
    )
}

export default SidebarComponent
