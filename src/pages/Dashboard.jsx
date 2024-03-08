import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import TareaForm from "../components/TareaForm"

const Dashboard = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)

  useEffect(() =>{
    if(!user){
      navigate('/login')
    }
  }, [user, navigate])

  return (
    <>
      <section className="heading">
        <h3>Bienvenido {user && user.name}</h3>
        <p>Dashboard de Tareas</p>
      </section>
      <TareaForm/>
    </>
  )
}

export default Dashboard
