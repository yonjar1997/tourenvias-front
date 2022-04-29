import React, { useState } from "react";

export const FormularioTourEnvias = () => {
  const [nombre, setNombre] = useState("");
  const [nroDocumento, setNroDocumento] = useState("");
  const [nroCelular, setNroCelular] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [origen, setOrigen] = useState("");
  const [destino, setDestino] = useState("");
  const [dirOrigen, setDirOrigen] = useState("");
  const [dirDestino, setDirDestino] = useState("");
  const [horaSalida, setHoraSalida] = useState("");
  const [vuelo, setVuelo] = useState("");
  const [placas, setPlacas] = useState("");
  const [tipoVehiculo, setTipoVehiculo] = useState("");
  const [nombreConductor, setNombreConductor] = useState("");
  const [nroCeluarConductor, setNroCeluarConductor] = useState("");
  const [observaciones, setObservaciones] = useState("");
  const [confirmacion, setConfirmacion] = useState("");

  // const handleInputChange = (e) => {
  //     setNombre(e.target.value);
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
            <div className="shadow-lg p-3 mb-5 mt-4 bg-body rounded">
                <form className="row g-3 needs-validation" novalidate>
                    <div className="col-md-4 position-relative">
                        <label 
                        for="nombre"
                        className="form-label"
                        >nombre</label>
                        <input
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        name="nombre"
                        placeholder="ingrese el nombre"
                        className="form-control"
                        required
                        id="nombre"
                        ></input>
                        <div className="valid-tooltip">campo ok</div>
                        <div className="invalid-tooltip">complete el campo</div>
                    </div>
                

                <label for="documento">Documento</label>
                <input
                type="number"
                value={nroDocumento}
                onChange={(e) => setNroDocumento(e.target.value)}
                name="documento"
                placeholder="ingrese el documento"
                ></input>
                <label for="celular">Celular</label>
                <input
                type="tel"
                value={nroCelular}
                onChange={(e) => setNroCelular(e.target.value)}
                name="celular"
                placeholder="ingrese el celular"
                ></input>
                <label for="empresa">Empresa</label>
                <input
                type="text"
                value={empresa}
                onChange={(e) => setEmpresa(e.target.value)}
                name="empresa"
                placeholder="ingrese la empresa"
                ></input>
                <label for="origen">Origen</label>
                <input
                type="text"
                value={origen}
                onChange={(e) => setOrigen(e.target.value)}
                name="origen"
                placeholder="ingrese el origen"
                ></input>
                <label for="destino">Destino</label>
                <input
                type="text"
                value={destino}
                onChange={(e) => setDestino(e.target.value)}
                name="destino"
                placeholder="ingrese el destino"
                ></input>
                <label for="dirOrigen">dirOrigen</label>
                <input
                type="text"
                value={dirOrigen}
                onChange={(e) => setDirOrigen(e.target.value)}
                name="dirOrigen"
                placeholder="ingrese la dirOrigen"
                ></input>
                <label for="dirDestino">dirDestino</label>
                <input
                type="text"
                value={dirDestino}
                onChange={(e) => setDirDestino(e.target.value)}
                name="dirDestino"
                placeholder="ingrese la dirDestino"
                ></input>
                <label for="horaSalida">HoraSalida</label>
                <input
                type="text"
                value={horaSalida}
                onChange={(e) => setHoraSalida(e.target.value)}
                name="horaSalida"
                placeholder="ingrese la hora de Salida"
                ></input>
                <label for="vuelo">Vuelo</label>
                <input
                type="text"
                value={vuelo}
                onChange={(e) => setVuelo(e.target.value)}
                name="vuelo"
                placeholder="ingrese el vuelo"
                ></input>
                <label for="placas">Placas</label>
                <input
                type="text"
                value={placas}
                onChange={(e) => setPlacas(e.target.value)}
                name="placas"
                placeholder="ingrese la placas"
                ></input>
                <label for="tipoVehiculo">tipo Vehiculo</label>
                <input
                type="text"
                value={tipoVehiculo}
                onChange={(e) => setTipoVehiculo(e.target.value)}
                name="tipoVehiculo"
                placeholder="ingrese el tipoVehiculo"
                ></input>
                <label for="nombreConductor">nombre Conductor</label>
                <input
                type="text"
                value={nombreConductor}
                onChange={(e) => setNombreConductor(e.target.value)}
                name="nombreConductor"
                placeholder="ingrese el nombre de Conductor"
                ></input>
                <label for="nroCeluarConductor">Celuar Conductor</label>
                <input
                type="text"
                value={nroCeluarConductor}
                onChange={(e) => setNroCeluarConductor(e.target.value)}
                name="nroCeluarConductor"
                placeholder="ingrese el Celuar del Conductorr"
                ></input>
                <label for="observaciones">observaciones</label>
                <input
                type="text"
                value={observaciones}
                onChange={(e) => setObservaciones(e.target.value)}
                name="observaciones"
                placeholder="ingrese observaciones"
                ></input>
                <label for="confirmacion">confirmacion</label>
                <input
                type="text"
                value={confirmacion}
                onChange={(e) => setConfirmacion(e.target.value)}
                name="confirmacion"
                placeholder="ingrese la confirmacion"
                ></input>
                <button
                type="submit"
                className="btn btn-warning fw-bold"
                >Enviar</button>
            </form>
            </div>
            
        </div>
      </div>
    </div>
  );
};
