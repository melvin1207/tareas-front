import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { reset, login } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const { email, password } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

  useEffect(() => {
    if(isError){
      toast.error(message)
    }

    if(isSuccess || user){
      navigate('/')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const userData ={
      email,
      password
    }

    dispatch(login(userData))
  }

  if(isLoading){
    return <Spinner/>
  }

  return (
    <>
      <section className='heading'>
        <h4><FaSignInAlt /> Entrar a la App</h4>
        <p>Por favor escribe tus credenciales</p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="email"
              className='form-control'
              id='email'
              name='email'
              value={email}
              placeholder='Por favor escribe tu email'
              onChange={onChange}
              />
          </div>
          <div className="form-group">
          <input
            type="password"
            className='form-control'
            id='password'
            name='password'
            value={password}
            placeholder='Por favor escribe tu password'
            onChange={onChange}
          />
          </div>
          <div className="form-group">  
            <button type='submit' className='btn btn-block'>
              Accesar
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Login
