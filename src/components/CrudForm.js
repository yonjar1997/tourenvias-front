import React, { useEffect, useState } from 'react'

const initailForm = {
    name:"",
    constellation:"",
    id:null,
}
export const CrudForm = () => {

  const [form, setForm] = useState(initailForm)
  const handleChange = (e) => {}

  const handleSubmit = (e) => {}

  const handleReset = (e) => {}
  return (
    <>
        <h3>Agregar</h3>
        <form onSubmit={handleSubmit} >
            <input 
            type="text" 
            name="name" 
            placeholder="Nombre"
            onChange={handleChange}
            value={form.name}
            />
            <input 
            type="text" 
            name="constellation" 
            placeholder="Constelacion"
            onChange={handleChange}
            value={form.constellation}
            />
            <input type="submit" value="Enviar"></input>
            <input type="reset" value="limpiar" onClick={handleReset}></input>
        </form>
    </>
  )
}
