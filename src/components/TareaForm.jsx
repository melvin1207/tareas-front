import { useState } from "react"
import { UseSelector, useDispatch } from "react-redux"

const TareaForm = () => {
  const [descripcion, setDescripcion] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="descripcion">Descripción</label>
            <input 
              type="text"
              name="descripcion"
              id="descripcion"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">Crear Tarea</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default TareaForm