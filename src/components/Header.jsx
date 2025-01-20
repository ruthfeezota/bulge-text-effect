import { Link, useNavigate } from 'react-router-dom'
// import { useAuth } from '../components/authContext'
import { doSignOut } from '../components/auth'

const Header = () => {
    // const navigate = useNavigate()
    // const { userLoggedIn } = useAuth()
    return (
        <nav className='flex flex-row gap-x-2 w-full z-20 fixed top-0 left-0 h-12 place-content-center items-center bg-black'>
         {/* {
                userLoggedIn
                    ?
                    <>
                        <button onClick={() => { doSignOut().then(() => { navigate('/login') }) }} className='text-md text-white'>Logout</button>
                        
                    </>
                    : */}
                    <div className='mt-2 flex'>
                        <Link className='text-sm text-white p-8 text-md' to={'/login'}>Login</Link>
                        <Link className='text-sm text-white p-8 text-md' to={'/register'}>Register New Account</Link>
                     
                    </div>
                   
            {/* } */}
            <div>
            
            </div> 
          

        </nav>
    )
}

export default Header