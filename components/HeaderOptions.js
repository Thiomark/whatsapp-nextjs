import HeaderOption from './HeaderOption'
import { DotsVerticalIcon, MapIcon, NewspaperIcon, PhotographIcon, PlayIcon, SearchIcon} from '@heroicons/react/outline'

const HeaderOptions = () => {
    return (
        <div className='flex w-full itens-center text-gray-700 justify-evenly'>
            <div className="flex space-x-4">
                <HeaderOption title="All" selected Icon={SearchIcon} />
                <HeaderOption title="Images" Icon={PhotographIcon} />
                <HeaderOption title="Videos" Icon={PlayIcon} />
                <HeaderOption title="News" Icon={NewspaperIcon} />
                <HeaderOption title="Maps" Icon={MapIcon} />
                <HeaderOption title="More" Icon={DotsVerticalIcon} />
            </div>
            <div className='flex space-x-4'>
                <p>Settings</p>
                <p>Tools</p>
            </div>
        </div>
    )
}

export default HeaderOptions
