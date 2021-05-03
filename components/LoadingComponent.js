import {Circle} from 'better-react-spinkit'

const LoadingComponent = () => {
    return (
        <center className='grid place-items-center h-screen'>
            <div>
                <img 
                    src="/whatsapp-icon-seeklogo.com.svg" 
                    alt="Whatsapp Loading Logo"
                    height={200}
                    className='mx-auto w-48 mb-10'
                />
                {/* <Circle color='#3CBC28' size={60}/> */}
            </div>
        </center>
    )
}

export default LoadingComponent
