import { useState, useEffect } from "react"
import { FaUser } from 'react-icons/fa'

const Register = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })

  const {name, email, password, password2} = formData

  const onChange = (e) => {
    setFormData((prevState) =>({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }


  return (
    <>
      <section className="heading">
        <h4><FaUser/> Registrar usuario</h4>
        <p>Por favor crea un usuario</p>
      </section>

      <section className="form">
        <form>
          <div className="form-group">
            <input 
                type="text" 
                className="form-control"
                id="name"
                name="name"
                value={name}
                placeholder="Ingresa tu nombre por favor"
                onChange={onChange}
            />
          </div>
        </form>
      </section>
    </>
  )
}

export default Register
