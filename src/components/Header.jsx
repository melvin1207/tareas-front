import { FaSignInAlt, FaUser, FaSignOutAlt } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'

const Header = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { user } = useSelector((state) => state.auth)

  const onLogout = () =>{
    dispatch(logout())
    dispatch(reset())
    navigate('/login')
  }

  return (
    <header className='header'>
      <div className='logo'>
        <Link to = '/'>App de Tareas de Melvin</Link>
      </div>
      <ul>
        {user ? (
          <li>
            <button className='btn' onClick={onLogout}>
              <FaSignOutAlt/> Logout
            </button>
          </li>
        ) : (
          <>
            <li>
              <Link to='/login'>
                <FaSignInAlt/> Login
              </Link>
            </li>
            <li>
              <Link to='/register'>
                <FaUser/> Registrar
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  )
}

export default Header
