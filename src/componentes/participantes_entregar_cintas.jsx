import React, { useState, useEffect, useRef } from "react";

import Table from "react-bootstrap/Table";

import Button from "react-bootstrap/Button";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import "../css/jjoo.css";

import "../css/participantesrecepcion.css";

import { participantesService } from "../services/participantes.service";

import { formatearFecha, calcularEdad } from "../funciones/fecha.js";
import { extraerSubstring } from "../funciones/texto.js";

import MdlEstaSeguro from "../modales/mdlestaseguro.jsx"
import AbrirMDLMensaje from "../modales/mdlMensaje.jsx"

function participantes_entregar_cintas() {

  
   const openMdlEstaSeguro = () => setShowMDLEstaSeguro(true);
    const closeMdlEstaSeguro = () => setShowMDLEstaSeguro(false);
    
    const [showMDLEstaSeguro, setShowMDLEstaSeguro] = useState(false);
    const [showMDLMensaje, setShowMDLMensaje] = useState(false);
  
  
     const [mensaje, setMensaje] = useState("");
   const [mdlMensajeTitulo, setMdlMensajeTitulo] = useState("PARTICIPANTE - GRABAR ENTREGA DE CINTAS.");
    const [mdlMensajeCuerpo, setMdlMensajeCuerpo] = useState(
      "¿Está seguro de grabar la entrega de cinta al PARTICIPANTE?"
    );

    
  const openMdlMensaje = () => setShowMDLMensaje(true);
  const closeMdlMensaje = () => setShowMDLMensaje(false);

  const [Apellido, SetApellido] = useState(null);

  const [Items, setItems] = useState(null);
  const [Item, setItem] = useState(null); // usado en BuscarporId (Modificar, Consultar)

  const [apeyNom, setapeyNom] = useState("");
  const [RegistrosTotal, setRegistrosTotal] = useState(0);
  const [delegacionOrigen, setDelegacionOrigen] = useState("");
  const [VarDNI, SetDNI] = useState("");

    const [fechaNacimiento, setFechaNacimiento] = useState("");
     const [edad, setEdad] = useState("");

     const [textoExtraido, SetTextoExtraido] = useState("");

  const [pagado, setPagado] = useState("");


/* useEffect(() => {
  if (fechaNacimiento) {
    setEdad(calcularEdad(fechaNacimiento));
  }
}, [fechaNacimiento]); */
   

  

  useEffect(() => {
    document.title = "JJ OO de Ingenieros - Recepción";
  }, []);
  
  async function Buscar(dni, textoDNI) {
    
    const data = await participantesService.Buscar("", dni, 1, 1);
    console.log(data.registros)
    // Chequea si hay registros válidos
    if (data?.registros?.length > 0) {
      setItems(data.registros);
      setapeyNom(
        `${data.registros[0].apellido || ""}, ${
          data.registros[0].nombres || ""
        }`
      );
      console.log(data.registros[0].fechanacimiento || "")
      setDelegacionOrigen(data.registros[0].delegacionorigen || "");
      setPagado(data.registros[0].pagadonopagado || "");
      const fnac = formatearFecha(data.registros[0].fechanacimiento || "")
      console.log(fnac)
      setFechaNacimiento(fnac)
      setEdad(calcularEdad(fnac))
      //setEdad(calcularEdad(fechaNacimiento))
    } else {
      // Si no hay resultados, limpia los campos
      setapeyNom("");
      setDelegacionOrigen("");
      setPagado("");
    }

    setRegistrosTotal(data.total || 0);
  }

  
  /* 
  async function BuscarPorId(item, accionABMC) {
    const data = await pacientesService.BuscarPorId(item);
    setItem(data);
    //setAccionABMC(accionABMC);
  } */
  const inputRef = useRef(null); // referencia al input

  useEffect(() => {
    // da el foco al input cuando se monta el componente
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  
    async function Grabar(dni) {
      // agregar o modificar
      //validaciones
      // Validaciones
     
      try {
        await participantesService.TransitarCintaEntregada(
         
          dni
          
        );
  
      } catch (error) {
        /*  modalDialogService.Alert(error?.response?.data?.message ?? error.toString()) */
        return;
      }
    }
  
  const mdlSiNo = async (respuesta) => {
    closeMdlEstaSeguro(); // cerramos primero el modal de confirmación

    if (respuesta) {
      try {
        await Grabar(VarDNI); // ejecutamos la función de grabar
        setMensaje("Se grabó con éxito el NUEVO PACIENTE."); // mensaje a mostrar
        openMdlMensaje(); // abrimos el modal de mensaje
        Limpiar();
      } catch (error) {
        setMensaje("Ocurrió un error al grabar");
        openMdlMensaje();
      }
    } else {
      setMensaje("Usuario canceló la operación");
      openMdlMensaje(); // opcional, si querés mostrar que canceló
    }
  };

  function Limpiar() {
    SetApellido("");
    setapeyNom("");
    SetDNI("");
    setItems([]);
    setPagado("");
    setDelegacionOrigen("");
    setFechaNacimiento("")
    setEdad("");
    if (inputRef.current) inputRef.current.focus(); // foco al input
  }

  return (
    <>
      <div
  style={{
    marginTop: "15px",
    width: "100%",
    backgroundColor: "#8d3419ff",
    color: "white",
    display: "flex",             // Flexbox
    alignItems: "center",        // Centra verticalmente
    justifyContent: "center",    // Centra horizontalmente
    padding: "0 15px",
  }}
>
  <h3 style={{ margin: 0 }}>PARTICIPANTES - ENTREGAR CINTAS</h3>
</div>

      <div
        style={{
          display: "grid",
          width: "95%",
          margin: "15px 15px",
          backgroundColor: "white",
        }}
      >
        <form>
          <div className="">
            <InputGroup className="mb-3">
              <InputGroup.Text
                style={{
                  backgroundColor: "#679bb9",
                  color: "white",
                  height: "70px",
                  width: "35%",
                  fontSize: "40px",
                  textAlign: "center",
                }}
              >
                Ingresar DNI
              </InputGroup.Text>

              <Form.Control
                ref={inputRef} // asigna la referencia
                placeholder="Buscar por DNI"
                aria-label="Profesión"
                aria-describedby="basic-addon2"
                style={{
                  height: "70px",
                  width: "55%",
                  fontSize: "50px",
                  textAlign: "center",
                }}
                value={VarDNI}
                onChange={(e) => SetDNI(e.target.value)} // actualiza el estado
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault(); // evita que el form se recargue
                    const textoLeido = e.target.value;
                   // SetTextoExtraido(textoLeido)
                    console.log(textoLeido)
                    const dniExtraido = extraerSubstring(textoLeido, "M", 2, 8); // ejemplo

                    if (dniExtraido) {
                      SetDNI(dniExtraido);
                      Buscar(dniExtraido, textoLeido);
                    }
                  }
                }}
              />

              <Button
                title="Buscar por DNI"
                variant="outline-secondary"
                id="button-addon1"
                style={{ height: "70px" }}
                color="white"
                onClick={() => Buscar(VarDNI)}
              >
                <i class="fa-solid fa-magnifying-glass"></i>
              </Button>
            </InputGroup>
          </div>

          <div className="">
            <InputGroup className="mb-3">
              <InputGroup.Text
                style={{
                  backgroundColor: "#679bb9",
                  color: "white",
                  height: "50px",
                  width: "35%",
                  fontSize: "40px",
                  textAlign: "right",
                }}
              >
                Apellido y Nombres:
              </InputGroup.Text>

              <Form.Control
                placeholder="Apellido y Nombres"
                aria-label="Apellido"
                aria-describedby="basic-addon2"
                style={{
                  height: "50px",
                  width: "65%",
                  fontSize: "35px",
                  textAlign: "center",
                }}
                value={apeyNom}
                readOnly
              />
            </InputGroup>
          </div>
           <div className="">
            <InputGroup className="mb-3">
              <InputGroup.Text
                style={{
                  backgroundColor: "#679bb9",
                  color: "white",
                  height: "80px",
                  width: "35%",
                  fontSize: "40px",
                  textAlign: "center",
                }}
              >
                Fecha de nacimiento:
              </InputGroup.Text>
              <Form.Control
                placeholder=""
                aria-label="Fecha de nacimiento"
                aria-describedby="basic-addon2"
                style={{
                  height: "80px",
                  width: "65%",
                  fontSize: "35px",
                  textAlign: "center",
                    backgroundColor: "#6C757D",
                  color:"white"
                }}
                value={fechaNacimiento}
              />
            </InputGroup>
          </div>
           <div className="">
            <InputGroup className="mb-3">
              <InputGroup.Text
                style={{
                  backgroundColor: "#679bb9",
                  color: "white",
                  height: "80px",
                  width: "35%",
                  fontSize: "40px",
                  textAlign: "center",
                }}
              >
                EDAD:
              </InputGroup.Text>
              <Form.Control
                placeholder=""
                aria-label="Edad"
                aria-describedby="basic-addon2"
                style={{
                  height: "80px",
                  width: "65%",
                  fontSize: "55px",
                  textAlign: "center",
                  backgroundColor: "white",
                  //backgroundColor: "#6C757D",
                  color:"blue"
                  //color:"white"
                }}
                value={edad ? `${edad} AÑOS` : ""}
                //value={edad}  'AÑOS'
              />
            </InputGroup>
          </div>

          <div className="">
            <InputGroup className="mb-3">
              <InputGroup.Text
                style={{
                  backgroundColor: "#679bb9",
                  color: "white",
                  height: "50px",
                  width: "35%",
                  fontSize: "40px",
                  textAlign: "right",
                }}
              >
                Delegación de origen:
              </InputGroup.Text>

              <Form.Control
                placeholder="Delegación de origen"
                aria-label="Delegación"
                aria-describedby="basic-addon2"
                style={{
                  height: "50px",
                  width: "65%",
                  fontSize: "35px",
                  textAlign: "center",
                }}
                value={delegacionOrigen.toUpperCase()}
              />
            </InputGroup>
          </div>
          <div className="">
            <InputGroup className="mb-3">
              <InputGroup.Text
                style={{
                  backgroundColor: "#679bb9",
                  color: "white",
                  height: "50px",
                  width: "35%",
                  fontSize: "40px",
                  textAlign: "center",
                }}
              >
                Inscripción:
              </InputGroup.Text>

              <Button
                style={{
                  height: "50px",
                  width: "65%",
                  fontSize: "30px",
                  textAlign: "center",
                  backgroundColor: !pagado
                    ? "#f8f9fa" // color light
                    : pagado.trim().toUpperCase() === "NO PAGADO"
                    ? "red"
                    : "green",
                  color: !pagado ? "black" : "white",
                  fontWeight: "bold",
                  border: "none",
                }}
              >
                {pagado ? pagado : ""}
              </Button>
            </InputGroup>
          </div>
         
        </form>
        <div>
          <hr />
          <div className="text-end mt-3">
           

            <Button
              variant="success"
              //onClick={Grabar}
              className="me-2"
              //disabled={pagado.trim().toUpperCase() !== " "}
 disabled={pagado.trim().toUpperCase() !== "PAGADO"}
                  onClick={openMdlEstaSeguro}
            >
              GRABAR ENTREGAR CINTA
            </Button>

            <Button variant="primary" onClick={() => Limpiar()}>
              LIMPIAR
            </Button>
          </div>
        </div>
      </div>
         {showMDLEstaSeguro && (
              <MdlEstaSeguro
                show={showMDLEstaSeguro}
                handleClose={closeMdlEstaSeguro}
                mensajetitulo={mdlMensajeTitulo}
                mensajecuerpo={mdlMensajeCuerpo}
                enviaralpadre={mdlSiNo} // esta función recibe la respuesta
              />
            )}

            
         {showMDLMensaje && (
                    <AbrirMDLMensaje
                      show={openMdlMensaje}
                      handleClose={closeMdlMensaje}
                      modalMessage={mensaje}
                      modalTitulo={mdlMensajeTitulo}
                    />
                  )}
    </>
  );
}

export default participantes_entregar_cintas;
