import React, { useState } from "react";
import { FirmaDigital } from "./FirmaDigital";

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

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };
  

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
                    <div className="col-md-4 position-relative">
                      <label 
                      for="documento"
                      className="form-label"
                      >Documento</label>
                      <input
                      type="text"
                      value={nroDocumento}
                      onChange={(e) => setNroDocumento(e.target.value)}
                      name="documento"
                      placeholder="ingrese el documento"
                      className="form-control"
                      required
                      id="documento"
                      ></input>
                    </div>
                    <div className="col-md-4 position-relative">
                      <label 
                      for="celular"
                      className="form-label"
                      >Celular</label>
                      <input
                      type="tel"
                      value={nroCelular}
                      onChange={(e) => setNroCelular(e.target.value)}
                      name="celular"
                      placeholder="ingrese el celular"
                      className="form-control"
                      required
                      id="celular"
                      ></input>
                    </div>
                    <div className="col-md-4 position-relative">
                      <label 
                      for="empresa"
                      className="form-label"
                      >Empresa</label>
                      <input
                      type="text"
                      value={empresa}
                      onChange={(e) => setEmpresa(e.target.value)}
                      name="empresa"
                      placeholder="ingrese la empresa"
                      className="form-control"
                      required
                      id="empresa"
                      ></input>
                    </div>
                    <div className="col-md-4 position-relative">
                    <label 
                    for="origen"
                    className="form-label"
                    >Origen</label>
                    <input
                    type="text"
                    value={origen}
                    onChange={(e) => setOrigen(e.target.value)}
                    name="origen"
                    placeholder="ingrese el origen"
                    className="form-control"
                    required
                    id="origen"
                    ></input>
                    </div>
                    <div className="col-md-4 position-relative">
                    <label 
                    for="destino"
                    className="form-label"
                    >Destino</label>
                    <input
                    type="text"
                    value={destino}
                    onChange={(e) => setDestino(e.target.value)}
                    name="destino"
                    placeholder="ingrese el destino"
                    className="form-control"
                    required
                    id="destino"
                    ></input>
                    </div>
                    <div className="col-md-4 position-relative">
                    <label 
                      for="dirOrigen"
                      className="form-label"
                      >dirOrigen</label>
                    <input
                      type="text"
                      value={dirOrigen}
                      onChange={(e) => setDirOrigen(e.target.value)}
                      name="dirOrigen"
                      placeholder="ingrese la dirOrigen"
                      className="form-control"
                      required
                      id="dirOrigen"
                    ></input>
                    </div>
                    <div className="col-md-4 position-relative">
                      <label 
                        for="dirDestino"
                        className="form-label"
                      >dirDestino</label>
                      <input
                        type="text"
                        value={dirDestino}
                        onChange={(e) => setDirDestino(e.target.value)}
                        name="dirDestino"
                        placeholder="ingrese la dirDestino"
                        className="form-control"
                        required
                        id="dirDestino"
                      ></input>
                    </div>
                    <div className="col-md-4 position-relative">
                      <label
                        for="horaSalida"
                        className="form-label"
                        >HoraSalida</label>
                      <input
                        type="text"
                        value={horaSalida}
                        onChange={(e) => setHoraSalida(e.target.value)}
                        name="horaSalida"
                        placeholder="ingrese la hora de Salida"
                        className="form-control"
                        required
                        id="horaSalida"
                      ></input>
                    </div>
                    <div className="col-md-4 position-relative">
                      <label
                      for="vuelo"
                      className="form-label"
                      >Vuelo</label>
                      <input
                      type="text"
                      value={vuelo}
                      onChange={(e) => setVuelo(e.target.value)}
                      name="vuelo"
                      placeholder="ingrese el vuelo"
                      className="form-control"
                      required
                      id="vuelo"
                      ></input>
                    </div>
                    <div className="col-md-4 position-relative">
                      <label 
                      for="placas"
                      className="form-label"
                      >Placas</label>
                      <input
                      type="text"
                      value={placas}
                      onChange={(e) => setPlacas(e.target.value)}
                      name="placas"
                      placeholder="ingrese la placas"
                      className="form-control"
                      required
                      id="placas"
                      ></input>
                    </div>
                    <div className="col-md-4 position-relative">
                      <label 
                      for="tipoVehiculo"
                      className="form-label"
                      >tipo Vehiculo</label>
                      <input
                      type="text"
                      value={tipoVehiculo}
                      onChange={(e) => setTipoVehiculo(e.target.value)}
                      name="tipoVehiculo"
                      placeholder="ingrese el tipoVehiculo"
                      className="form-control"
                      required
                      id="tipoVehiculo"
                      ></input>
                    </div>
                    <div className="col-md-4 position-relative">
                      <label 
                      for="nombreConductor"
                      className="form-label"
                      >nombre Conductor</label>
                      <input
                      type="text"
                      value={nombreConductor}
                      onChange={(e) => setNombreConductor(e.target.value)}
                      name="nombreConductor"
                      placeholder="ingrese el nombre de Conductor"
                      className="form-control"
                      required
                      id="nombreConductor"
                      ></input>
                    </div>
                    <div className="col-md-4 position-relative">
                      <label 
                      for="nroCeluarConductor"
                      className="form-label"
                      >Celuar Conductor</label>
                      <input
                      type="text"
                      value={nroCeluarConductor}
                      onChange={(e) => setNroCeluarConductor(e.target.value)}
                      name="nroCeluarConductor"
                      placeholder="ingrese el Celuar del Conductorr"
                      className="form-control"
                      required
                      id="nroCeluarConductor"
                      ></input>
                    </div>
                    <div className="col-md-4 position-relative">
                      <label
                      for="observaciones"
                      className="form-label"
                      >observaciones</label>
                      <input
                      type="text"
                      value={observaciones}
                      onChange={(e) => setObservaciones(e.target.value)}
                      name="observaciones"
                      placeholder="ingrese observaciones"
                      className="form-control"
                      required
                      id="observaciones"
                      ></input>
                    </div>
                    <div className="col-md-4 position-relative">
                      <label 
                      for="confirmacion"
                      className="form-label"
                      >confirmacion</label>
                      <input
                      type="text"
                      value={confirmacion}
                      onChange={(e) => setConfirmacion(e.target.value)}
                      name="confirmacion"
                      placeholder="ingrese la confirmacion"
                      className="form-control"
                      required
                      id="confirmacion"
                      ></input>
                    </div>
                    < FirmaDigital></FirmaDigital>
                    <button
                    type="submit"
                    className="btn btn-success fw-bold"
                    >Enviar</button>
                </form>
            </div>   
        </div>
      </div>
    </div>
  );
};
