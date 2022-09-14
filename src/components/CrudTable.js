import React from 'react'
import { CrudTableRow } from './CrudTableRow'

export const CrudTable = ({data, setDataToEdit,deleteData}) => {
  return (
    <>
        <h3>Tabla cocksuckingslut de datos </h3>
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Constelación</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {data.length > 0 ? (
            data.map((el) => (
              <CrudTableRow
                key={el.id}
                el={el}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
                
              />
            ))
          ) : (
            <tr>
              <td colSpan="3">Sin datos</td>
            </tr>
          )}
            </tbody>
        </table>
    </>
  )
}
