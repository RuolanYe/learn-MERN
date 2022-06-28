import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import {GrGallery} from 'react-icons/gr'
import {Link, useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {logout, reset} from '../features/auth/authSlice'

//rfce
function Header() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {user} = useSelector((state) => state.auth)

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }

  return (
    <header className='header'>
        <div className = "logo">
            <Link to='/'>Dashboard</Link>
        </div>
        <ul>
            {user ? (<>           
            {/* <li>
                <Link to='/'>
                    <FaSignInAlt/>Dashboard
                </Link>
            </li> */}
            <li>
                <Link to='/gallery'>
                    <GrGallery/>Gallery  
                </Link>
            </li>
            <button className='btn' onClick={onLogout}>
                <FaSignOutAlt/>Logout
            </button>
            </>
            ):(<> 
            <li>
                <Link to='/login'>
                    <FaSignInAlt/>Login
                </Link>
            </li>
            <li>
                <Link to='/register'>
                    <FaUser/>Register
                </Link>
            </li>
            </>)}
            
        </ul>
    </header>
  )
}

export default Header