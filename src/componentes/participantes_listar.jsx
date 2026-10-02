import { useState, useEffect } from "react";

import Table from "react-bootstrap/Table";

import Button from "react-bootstrap/Button";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import "../css/jjoo.css";

import "../css/participantesrecepcion.css";

import { formatearFecha } from "../funciones/fecha.js";

import { participantesService } from "../services/participantes.service";



function participantes_listar() {
  const [Apellido, SetApellido] = useState(null);

  const [VarDNI, SetDNI] = useState(null);

  const [Items, setItems] = useState(null);

  const [RegistrosTotal, setRegistrosTotal] = useState(0);
  const [Pagina, setPagina] = useState(1);
  const [Paginas, setPaginas] = useState([]);

  const [CantidaddeRegistros, setCantidaddeRegistros] = useState(10);

   const [mdlRegistrarPaciente, setModalRegistrarPaciente] = useState(false);

  
  const openMdlRegistrarPaciente = () => {
    setModalRegistrarPaciente(true);
  };

  const closeMdlRegistrarPaciente = () => {
    setModalRegistrarPaciente(false);
  };

  useEffect(() => {
     document.title = "JJ OO de Ingenieros - Recepción";
   }, []);
   
  async function Buscar(_pagina) {
    if (_pagina && _pagina !== Pagina) {
      setPagina(_pagina);
    }

    // OJO Pagina (y cualquier estado...) se actualiza para el proximo render, para buscar usamos el parametro _pagina
    else {
      _pagina = Pagina;
    }

    const data = await participantesService.Buscar(
      Apellido,
      VarDNI,
      _pagina,
      CantidaddeRegistros
    );
    setItems(data.registros);

    setRegistrosTotal(data.total);

    //generar array de las páginas para mostrar en select del paginador
    const arrPaginas = [];
    for (let i = 1; i <= Math.ceil(data.total / CantidaddeRegistros); i++) {
      arrPaginas.push(i);
    }
    setPaginas(arrPaginas);
  }
  /* 
  async function BuscarPorId(item, accionABMC) {
    const data = await pacientesService.BuscarPorId(item);
    setItem(data);
    //setAccionABMC(accionABMC);
  } */

  async function Limpiar() {
    SetApellido("");
    SetDNI("");
    setItems([]);
  }

  return (
    <>
      <div
        style={{
          display: "grid",
          width: "100%",
          margin: "15px 15px",
          backgroundColor: "white",
        }}
      >
        <form>
          <div className="acomodarencabezadopizaturnos">
            <div style={{ width: "30%", textAlign: "left" }}>
 <button
                title="Registrar nuevo participante"
                className="btn btn-sm btn-light btn-outline-primary acomodarbotonespt"
                onClick={(event) => {
                  event.preventDefault();
                  openMdlRegistrarPaciente();
                }}
              >
                <i class="fa-solid fa-plus"></i>
              </button>

            {/*  <button
                title="Imprimir"
                className="btn btn-sm btn-light btn-outline-primary acomodarbotonespt"
                onClick={() => Imprimir()}
              >
                <i class="fa fa-print"></i>
              </button>*/}
            </div>
          </div>

          <div className="acomodarencabezadopizaturnos">
            <InputGroup className="mb-3">
              <InputGroup.Text
                style={{
                  backgroundColor: "#679bb9",
                  color: "white",
                  height: "38px",
                }}
              >
                Participante
              </InputGroup.Text>
              <Form.Control
                placeholder="Buscar por apellido de participante"
                aria-label="Buscar participante"
                aria-describedby="basic-addon2"
                onChange={(e) => SetApellido(e.target.value.toUpperCase())}
                value={Apellido}
                autoFocus
              />
              <Button
                title="Buscar por DNI participante"
                variant="outline-secondary"
                id="button-addon1"
                style={{ height: "38px" }}
                color="white"
                onClick={() => Buscar(1)}
              >
                <i class="fa-solid fa-magnifying-glass"></i>
              </Button>
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text
                style={{
                  backgroundColor: "#679bb9",
                  color: "white",
                  height: "38px",
                }}
              >
                DNI
              </InputGroup.Text>
              <Form.Control
                placeholder="Buscar por DNI"
                aria-label="Profesión"
                aria-describedby="basic-addon2"
                style={{ marginght: "20px" }}
                onChange={(e) => SetDNI(e.target.value)}
                value={VarDNI}
              />
              <Button
                title="Buscar por DNI"
                variant="outline-secondary"
                id="button-addon1"
                style={{ height: "38px" }}
                color="white"
                onClick={() => Buscar(1)}
              >
                <i class="fa-solid fa-magnifying-glass"></i>
              </Button>
              <Button variant="success" onClick={() => Limpiar()}>
                Limpiar
              </Button>
            </InputGroup>
          </div>
        </form>

        <div className="">
          <Table bordered hover>
            <thead>
              <tr className="personalizarfila h-50">
                <th
                  style={{
                    textAlign: "center",
                    backgroundColor: "rgb(136, 161, 184)",
                  }}
                >
                  Fecha inscripción
                </th>
                <th
                  style={{
                    textAlign: "left",
                    backgroundColor: "rgb(136, 161, 184)",
                  }}
                >
                  Apellido
                </th>

                <th
                  style={{
                    textAlign: "left",
                    backgroundColor: "rgb(136, 161, 184)",
                  }}
                >
                  Nombres
                </th>

                <th
                  style={{
                    textAlign: "center",
                    backgroundColor: "rgb(136, 161, 184)",
                  }}
                >
                  DNI
                </th>

                <th
                  style={{
                    textAlign: "center",
                    backgroundColor: "rgb(136, 161, 184)",
                    width: "15%",
                  }}
                >
                  Delegación
                </th>
                <th
                  style={{
                    textAlign: "center",
                    backgroundColor: "rgb(136, 161, 184)",
                    width: "15%",
                  }}
                >
                  Asistencia
                </th>

                <th
                  style={{
                    textAlign: "center",
                    backgroundColor: "rgb(136, 161, 184)",
                  }}
                >
                  Inscripcion pagada
                </th>
                <th
                  style={{
                    textAlign: "center",
                    backgroundColor: "rgb(136, 161, 184)",
                  }}
                >
                  Cinta entregada
                </th>
                <th
                  style={{
                    textAlign: "center",
                    backgroundColor: "rgb(136, 161, 184)",
                  }}
                >
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody>
              {Items &&
                Items.map((Item) => (
                  <tr key={Item.ID}>
                    <td style={{ textAlign: "center" }}>
                      {formatearFecha(Item.fechainscripcion)}
                    </td>
                    <td style={{ textAlign: "left", fontSize: "12px" }}>
                      {Item.apellido}
                    </td>
                    <td style={{ textAlign: "left", fontSize: "12px" }}>
                      {Item.nombres}
                    </td>

                    <td style={{ textAlign: "center", fontSize: "12px" }}>
                      {Item.dni}
                    </td>
                    <td style={{ textAlign: "center", fontSize: "12px" }}>
                      {Item.delegacionorigen}
                    </td>
                    <td style={{ textAlign: "center", fontSize: "10px" }}>
                      {Item.asistio ? (
                        <Button
                          variant="success"
                          size="sm"
                          style={{ width: "70%" }}
                        >
                          SI
                        </Button>
                      ) : (
                        <Button
                          variant="info"
                          size="sm"
                          style={{ width: "70%" }}
                        >
                          NO
                        </Button>
                      )}
                    </td>

                    <td style={{ textAlign: "center", fontSize: "10px" }}>
                      {Item.pagadonopagado.trim() === "PAGADO" ? (
                        <Button
                          variant="success"
                          size="sm"
                          style={{ width: "70%" }}
                        >
                          SI
                        </Button>
                      ) : (
                        <Button
                          variant="warning"
                          size="sm"
                          style={{ width: "70%" }}
                        >
                          NO
                        </Button>
                      )}
                    </td>
                      <td style={{ textAlign: "center", fontSize: "10px" }}>
                       {Item.cintaentregada ? (
                        <Button
                          variant="success"
                          size="sm"
                          style={{ width: "70%" }}
                        >
                          SI
                        </Button>
                      ) : (
                        <Button
                          variant="primary"
                          size="sm"
                          style={{ width: "70%" }}
                        >
                          NO
                        </Button>
                      )}
                    </td>

                    <td style={{ textAlign: "center" }}>
                      <button
                        title="Editar paciente"
                        className="btn btn-sm btn-light btn-danger"
                        onClick={() => openMdlEditarPaciente(Item)}
                      >
                        <i class="fa-solid fa-user-pen"></i>
                      </button>

                      <button
                        title="Listar turnos pedidos"
                        className="btn btn-sm btn-light btn-danger"
                        onClick={() => openMdlUltimosTurnos(Item)}
                      >
                        <i class="fa-solid fa-calendar-days"></i>
                      </button>
                    </td>
                  </tr>
                  //<TableRow item={item} />
                ))}
            </tbody>
          </Table>
        </div>
        {/* Paginador*/}
        <div className="paginador">
          <div className="row">
            <div className="col">
              <span className="pyBadge">Registros: {RegistrosTotal}</span>
            </div>
            <div className="col text-center">
              Pagina: &nbsp;
              <select
                value={Pagina}
                onChange={(e) => {
                  Buscar(e.target.value);
                }}
              >
                {Paginas?.map((x) => (
                  <option value={x} key={x}>
                    {x}
                  </option>
                ))}
              </select>
              &nbsp; de {Paginas?.length}
            </div>

            <div className="col">
              Mostrar de a: &nbsp;
              <select
                value={CantidaddeRegistros}
                onChange={(e) => {
                  setCantidaddeRegistros(e.target.value);
                }}
              >
                {[10, 15, 20, 25].map((x) => (
                  <option value={x} key={x}>
                    {x}
                  </option>
                ))}
              </select>
              &nbsp; registros.
            </div>
          </div>
        </div>
      </div>
      {mdlRegistrarPaciente && (
        <MdlAltaParticipante
          show={openMdlRegistrarPaciente}
          handleClose={closeMdlRegistrarPaciente}
        />
      )}

    </>
  );
}

export default participantes_listar;
