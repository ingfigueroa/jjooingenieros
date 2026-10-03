
import { useState, useEffect } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Modal from "react-bootstrap/Modal";

/* import { tiposexoService } from "/src/services/tiposexo.service.js";
import { profesionesService } from "/src/services/profesiones.service.js";
import { profesionalesService } from "/src/services/profesional.service.js";
import { tipodocumentoService } from "/src/services/tipodocumento.service.js";
import { provinciasService } from "/src/services/provincias.service.js";
import { localidadesService } from "/src/services/localidades.service.js";
import { usuariosService } from "/src/services/usuarios.service.js"; */

import MdlValidar from "./modales/mdlvalidar";
import MdlAltaExitosa from "./modales/mdlAltaExitosa";
import AbrirMDLMensaje from "./modales/mdlMensaje";
import MDLEstaSeguro from "./modales/mdlEstaSeguro";




function RegistrarParticipante({
    show,
    handleClose,
    
}) {

    const [mdlMensajeCuerpo, setModalMensajeCuerpo] = useState(
        "¿Desea grabar un nuevo profesional?"
    );

    const [mdlMensajeTitulo, setModalMensajeTitulo] = useState(
        "REGISTRAR PROFESIONAL"
    );

    const [showMDLMensaje, setShowMDLMensaje] = useState(false);
    const [mensaje, setMensaje] = useState("");

    const [showMDLEstaSeguro, setShowMDLEstaSeguro] = useState(false);

  

    const [modalTitulo, setModalTitulo] = useState("");
    const [modalCuerpo, setModalCuerpo] = useState("");

  

    const [Apellido, setApellido] = useState("");
    const [Nombres, setNombres] = useState("");

    const [TipoDocumento, setTipoDocumento] = useState([]);

    const [NroDocumento, setNroDocumento] = useState("");

    const [EMail, setEMail] = useState("");

    const [FechaNacimiento, setFechaNacimiento] = useState("");

    const [TECelular, setTECelular] = useState("");

    const [CuitCuil, setCuitCuil] = useState("");

    const [TipoSexo, setTipoSexo] = useState([]);

    const [MatriculaNro, setMatriculaNro] = useState("");

    const [TipoProfesion, setTipoProfesion] = useState([]);

    const [provincias, setProvincias] = useState([]);

    const [localidades, setLocalidades] = useState([]);

    const [idTipoSexoSelected, setIDTipoSexoSelected] = useState("");

    const [TipoDocumentoSelected, setTipoDocumentoSelected] = useState("");

    const [idTipoProfesionSelected, setIdTipoProfesionSelected] =
        useState("");

    const [idprofesional, setIDProfesional] = useState("0");

    const [idprovincia, setIDProvincia] = useState("");

    const [idlocalidad, setIDLocalidad] = useState("");

    const [modalMessage, setModalMessage] = useState("");
    const [modalMessageTitulo, setModalMessageTitulo] = useState("");

    const [showModal, setShowModal] = useState(false);

    const [showModalAlta, setShowModalAlta] = useState(false);

    const [nuevo, setNuevo] = useState(0);


    // =========================================================
    // VALIDAR FORMULARIO
    // =========================================================

    function validar() {

        if (!TipoDocumentoSelected) {
            showModalMessage("Debe seleccionar un tipo de documento");
            return false;
        }

        if (!NroDocumento.trim()) {
            showModalMessage(
                "El campo 'Número de Documento' es obligatorio"
            );
            return false;
        }

        if (!/^\d{7,8}$/.test(NroDocumento)) {
            showModalMessage(
                "El DNI debe contener entre 7 y 8 dígitos"
            );
            return false;
        }

        if (!idTipoSexoSelected) {
            showModalMessage("Debe seleccionar un sexo");
            return false;
        }

        if (!Apellido.trim()) {
            showModalMessage("El campo 'Apellido' es obligatorio");
            return false;
        }

        if (!Nombres.trim()) {
            showModalMessage("El campo 'Nombres' es obligatorio");
            return false;
        }

        if (!FechaNacimiento.trim()) {
            showModalMessage(
                "El campo 'Fecha de Nacimiento' es obligatorio"
            );
            return false;
        }

        const fechaNacimiento = new Date(FechaNacimiento);

        if (isNaN(fechaNacimiento.getTime())) {
            showModalMessage(
                "El campo 'Fecha de Nacimiento' debe contener una fecha válida"
            );
            return false;
        }

        if (fechaNacimiento > new Date()) {
            showModalMessage(
                "La fecha de nacimiento no puede ser posterior a la fecha actual"
            );
            return false;
        }

        if (!validarEmail(EMail)) {
            showModalMessage(
                "El formato de correo electrónico no es válido"
            );
            return false;
        }

        if (!CuitCuil.trim()) {
            showModalMessage(
                "El campo 'CUIT/CUIL' es obligatorio"
            );
            return false;
        }

        if (
            !idTipoProfesionSelected ||
            Number(idTipoProfesionSelected) <= 0
        ) {
            showModalMessage(
                "Debe seleccionar un tipo de profesión"
            );
            return false;
        }

        if (!MatriculaNro.trim()) {
            showModalMessage(
                "El campo 'Número de Matrícula' es obligatorio"
            );
            return false;
        }

        if (!TECelular.trim()) {
            showModalMessage(
                "El campo 'Teléfono Celular' es obligatorio"
            );
            return false;
        }

        if (!idprovincia || Number(idprovincia) <= 0) {
            showModalMessage(
                "Debe seleccionar una provincia"
            );
            return false;
        }

        if (!idlocalidad || Number(idlocalidad) <= 0) {
            showModalMessage(
                "Debe seleccionar una localidad"
            );
            return false;
        }

        return true;
    }


    // =========================================================
    // MODAL ESTA SEGURO
    // =========================================================

    const openMdlEstaSeguro = () => {

        if (!validar()) {
            return;
        }

        setModalTitulo("REGISTRAR PROFESIONAL");

        setModalCuerpo(
            "¿Está seguro de registrar un profesional?"
        );

        setShowMDLEstaSeguro(true);
    };


    const closeMdlEstaSeguro = () => {
        setShowMDLEstaSeguro(false);
    };


    // =========================================================
    // MODAL MENSAJE
    // =========================================================

    const openMdlMensaje = () => {
        setShowMDLMensaje(true);
    };


    const closeMdlMensaje = () => {
        setShowMDLMensaje(false);
        handleClose();
    };


    const showModalMessage = (message) => {
        setModalMessage(message);
        setShowModal(true);
    };


    const closeModalMessage = () => {
        setShowModal(false);
    };


    // =========================================================
    // MODAL ALTA EXITOSA
    // =========================================================

    const openModalAltaExitosa = () => {

        setModalMessage(
            "Se registró el profesional con éxito."
        );

        setModalMessageTitulo(
            "REGISTRAR PROFESIONAL"
        );

        setShowModalAlta(true);
    };


    const closeModalAltaExitosa = () => {
        setShowModalAlta(false);
    };


    // =========================================================
    // BUSCAR PROFESIONAL POR DNI
    // =========================================================

    const BuscaProfesionalPorDNI = async () => {

        if (!NroDocumento) {
            return;
        }

        try {

            const data = await profesionalesService.Buscar(
                ClienteID,
                "",
                NroDocumento,
                1,
                10
            );

            if (data.total === 1) {

                setMensaje(
                    "Ya existe un profesional con el DNI ingresado."
                );

                setNroDocumento("");

                openMdlMensaje();

                // Completar los datos del formulario
                // setApellido(respuesta.data.apellido);
                // setNombre(respuesta.data.nombre);
                // ...
            }

        } catch (error) {

            console.error(error);

        }
    };


    // =========================================================
    // BUSCAR USUARIO POR EMAIL
    // =========================================================

    const BuscaUsuarioPorEmail = async () => {

        if (!EMail) {
            return;
        }

        try {

            const data =
                await usuariosService.BuscarUsuarioxEMail(
                    EMail
                );

            if (data.total === 1) {

                setMensaje(
                    "Ya existe el EMAIL ingresado."
                );

                setEMail("");

                openMdlMensaje();

                // Completar los datos del formulario
                // setApellido(respuesta.data.apellido);
                // setNombre(respuesta.data.nombre);
                // ...
            }

        } catch (error) {

            console.error(error);

        }
    };


    // =========================================================
    // BUSCAR PROFESIONAL POR EMAIL
    // =========================================================

    const BuscaProfesionalPorEMAIL = async () => {

        if (!EMail) {
            return;
        }

        try {

            const data =
                await profesionalesService.BuscarProfesionalxEMail(
                    EMail
                );

            console.log(data);

            if (data.total === 1) {

                setMensaje(
                    "Ya existe un profesional con el EMAIL ingresado."
                );

                setEMail("");

                openMdlMensaje();

                // Completar los datos del formulario
                // setApellido(respuesta.data.apellido);
                // setNombre(respuesta.data.nombre);
                // ...
            }

        } catch (error) {

            console.error(error);

        }
    };


    // =========================================================
    // VALIDAR EMAIL
    // =========================================================

    const validarEmail = (email) => {

        const re =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        return re.test(email);
    };


    // =========================================================
    // GRABAR
    // =========================================================

    async function Grabar() {

        try {

            const response =
                await profesionalesService.GrabarAlta(

                    ClienteID,
                    idprofesional,
                    Nombres,
                    Apellido,
                    TipoDocumentoSelected,
                    NroDocumento,
                    EMail,
                    FechaNacimiento,
                    TECelular,
                    idTipoSexoSelected,
                    CuitCuil,
                    MatriculaNro,
                    idTipoProfesionSelected,
                    UserID,
                    idprovincia,
                    idlocalidad,
                    nuevo

                );

            console.log(response);

            return true;

        } catch (error) {

            console.error(error);

            setMensaje(
                error?.response?.data?.message ??
                error?.toString() ??
                "Ocurrió un error al grabar"
            );

            openMdlMensaje();

            return false;
        }
    }


    // =========================================================
    // CARGAR LOCALIDADES
    // =========================================================

    const cargarLocalidades = async (idprovincia) => {

        try {

            if (Number(idprovincia) > 0) {

                const response =
                    await localidadesService.Buscar(
                        idprovincia
                    );

                setLocalidades(response);

            } else {

                setLocalidades([]);

            }

        } catch (error) {

            console.error(
                "Error al cargar localidades:",
                error
            );

            setLocalidades([]);
        }
    };


    // =========================================================
    // RESPUESTA MODAL SI / NO
    // =========================================================

    const mdlSiNo = async (respuesta) => {

        closeMdlEstaSeguro();

        if (respuesta) {

            try {

                const bandera = await Grabar();

                if (bandera === true) {

                    setMensaje(
                        "Se creó el profesional.\n\n" +
                        "Para activar la cuenta del profesional siga estos pasos:\n\n" +
                        "1.- Tiene que ir a LOGIN.\n\n" +
                        "2.- Olvidé mi contraseña.\n\n" +
                        "3.- Resetear la password usando el mail que ingresó del profesional."
                    );

                    openMdlMensaje();

                } else {

                    console.log("ENTRA POR FALSE");

                    setMensaje(
                        "No se pudo crear el profesional"
                    );

                    openMdlMensaje();
                }

            } catch (error) {

                console.error(error);

                setMensaje(
                    "Ocurrió un error al grabar"
                );

                openMdlMensaje();
            }

        } else {

            setMensaje(
                "Usuario canceló la operación"
            );

            openMdlMensaje();
        }
    };


    // =========================================================
    // CARGA TIPO DE SEXO
    // =========================================================

    useEffect(() => {

        async function fetchData() {

            try {

                const data =
                    await tiposexoService.Buscar();

                setTipoSexo(data);

                setNuevo(0);

            } catch (error) {

                console.error(
                    "Error fetching tipo sexo:",
                    error
                );
            }
        }

        fetchData();

    }, []);


    // =========================================================
    // CARGA TIPO DE DOCUMENTO
    // =========================================================

    useEffect(() => {

        async function fetchData() {

            try {

                const data =
                    await tipodocumentoService.Buscar();

                setTipoDocumento(data);

            } catch (error) {

                console.error(
                    "Error fetching tipo documento:",
                    error
                );
            }
        }

        fetchData();

    }, []);


    // =========================================================
    // CARGA TIPO DE PROFESIONES
    // =========================================================

    useEffect(() => {

        async function fetchData() {

            try {

                const data =
                    await profesionesService.Buscar();

                setTipoProfesion(data);

            } catch (error) {

                console.error(
                    "Error fetching profesiones:",
                    error
                );
            }
        }

        fetchData();

    }, []);


    // =========================================================
    // CARGA PROVINCIAS
    // =========================================================

    useEffect(() => {

        async function fetchData() {

            try {

                const data =
                    await provinciasService.Buscar();

                setProvincias(data);

            } catch (error) {

                console.error(
                    "Error fetching provincias:",
                    error
                );
            }
        }

        fetchData();

    }, []);


    // =========================================================
    // RENDER
    // =========================================================

    return (
        <>

            <Modal
                show={show}
                onHide={handleClose}
                size="xl"
            >

                <Modal.Header
                    closeButton
                    style={{
                        color: "white",
                        backgroundColor: "#198754"
                    }}
                >

                    <Modal.Title>
                        REGISTRAR UN PROFESIONAL
                    </Modal.Title>

                </Modal.Header>


                <Modal.Body
                    style={{
                        width: "100%",
                        background: "white"
                    }}
                >

                    <div
                        style={{
                            display: "grid",
                            width: "100%",
                            backgroundColor: "white"
                        }}
                    >

                        <div
                            style={{
                                display: "flex",
                                width: "100%",
                                backgroundColor: "white",
                                paddingLeft: "5px",
                                paddingRight: "5px"
                            }}
                        >

                            <div
                                style={{
                                    width: "100%"
                                }}
                            >

                                {/* =====================================================
                                    DOCUMENTO / DNI / SEXO
                                ====================================================== */}

                                <InputGroup className="mb-3">

                                    <InputGroup.Text
                                        style={{
                                            backgroundColor: "#679bb9",
                                            color: "white"
                                        }}
                                    >
                                        Tipo documento
                                    </InputGroup.Text>


                                    <select
                                        onChange={(e) =>
                                            setTipoDocumentoSelected(
                                                e.target.value
                                            )
                                        }
                                        value={TipoDocumentoSelected}
                                        style={{
                                            width: "30%"
                                        }}
                                    >

                                        <option
                                            value=""
                                            disabled
                                        >
                                            Seleccionar
                                        </option>

                                        {TipoDocumento.map(
                                            (documento) => (

                                                <option
                                                    key={documento.id}
                                                    value={documento.id}
                                                >
                                                    {
                                                        documento.descripcion
                                                    }
                                                </option>

                                            )
                                        )}

                                    </select>


                                    <InputGroup.Text
                                        style={{
                                            backgroundColor: "#679bb9",
                                            color: "white"
                                        }}
                                    >
                                        Nro.
                                    </InputGroup.Text>


                                    <Form.Control
                                        placeholder="Ingresar número de documento"
                                        aria-label="Ingresar nro de documento"
                                        type="text"

                                        onChange={(e) => {

                                            const value =
                                                e.target.value;

                                            if (/^\d*$/.test(value)) {

                                                setNroDocumento(
                                                    value
                                                );
                                            }
                                        }}

                                        onBlur={
                                            BuscaProfesionalPorDNI
                                        }

                                        value={NroDocumento}
                                    />


                                    <InputGroup.Text
                                        style={{
                                            backgroundColor: "#679bb9",
                                            color: "white"
                                        }}
                                    >
                                        Sexo
                                    </InputGroup.Text>


                                    <select
                                        style={{
                                            width: "15%"
                                        }}
                                        onChange={(e) =>
                                            setIDTipoSexoSelected(
                                                e.target.value
                                            )
                                        }
                                        value={
                                            idTipoSexoSelected
                                        }
                                    >

                                        <option
                                            value=""
                                            disabled
                                        >
                                            Seleccionar
                                        </option>

                                        {TipoSexo.map(
                                            (sexo) => (

                                                <option
                                                    key={sexo.id}
                                                    value={sexo.id}
                                                >
                                                    {
                                                        sexo.descripcion
                                                    }
                                                </option>

                                            )
                                        )}

                                    </select>

                                </InputGroup>


                                {/* =====================================================
                                    APELLIDO / NOMBRES / FECHA
                                ====================================================== */}

                                <InputGroup className="mb-3">

                                    <InputGroup.Text
                                        style={{
                                            backgroundColor: "#679bb9",
                                            color: "white"
                                        }}
                                    >
                                        Apellido
                                    </InputGroup.Text>


                                    <Form.Control
                                        style={{
                                            width: "18%"
                                        }}
                                        placeholder="Ingresar apellido"
                                        type="text"
                                        onChange={(e) =>
                                            setApellido(
                                                e.target.value.toUpperCase()
                                            )
                                        }
                                        value={Apellido}
                                    />


                                    <InputGroup.Text
                                        style={{
                                            backgroundColor: "#679bb9",
                                            color: "white"
                                        }}
                                    >
                                        Nombres
                                    </InputGroup.Text>


                                    <Form.Control
                                        style={{
                                            width: "18%"
                                        }}
                                        placeholder="Ingresar nombres"
                                        type="text"
                                        onChange={(e) =>
                                            setNombres(
                                                e.target.value.toUpperCase()
                                            )
                                        }
                                        value={Nombres}
                                    />


                                    <InputGroup.Text
                                        style={{
                                            backgroundColor: "#679bb9",
                                            color: "white"
                                        }}
                                    >
                                        Fecha de nacimiento
                                    </InputGroup.Text>


                                    <Form.Control
                                        placeholder="Ingresar fecha de nacimiento"
                                        type="date"
                                        onChange={(e) =>
                                            setFechaNacimiento(
                                                e.target.value
                                            )
                                        }
                                        value={
                                            FechaNacimiento
                                        }
                                    />

                                </InputGroup>


                                {/* =====================================================
                                    EMAIL / CELULAR
                                ====================================================== */}

                                <InputGroup className="mb-3">

                                    <InputGroup.Text
                                        style={{
                                            backgroundColor: "#679bb9",
                                            color: "white"
                                        }}
                                    >
                                        Correo electrónico
                                    </InputGroup.Text>


                                    <Form.Control
                                        style={{
                                            width: "40%"
                                        }}
                                        placeholder="Ingresar correo electrónico"
                                        type="email"

                                        onChange={(e) => {

                                            const email =
                                                e.target.value;

                                            setEMail(email);

                                        }}

                                        onBlur={
                                            BuscaUsuarioPorEmail
                                        }

                                        value={EMail}
                                    />


                                    <InputGroup.Text
                                        style={{
                                            backgroundColor: "#679bb9",
                                            color: "white"
                                        }}
                                    >
                                        Celular
                                    </InputGroup.Text>


                                    <Form.Control
                                        style={{
                                            width: "15%"
                                        }}
                                        placeholder="Ingresar número de celular"
                                        type="text"

                                        onChange={(e) => {

                                            const value =
                                                e.target.value;

                                            if (/^\d*$/.test(value)) {

                                                setTECelular(
                                                    value
                                                );
                                            }
                                        }}

                                        value={TECelular}
                                    />

                                </InputGroup>


                                {/* =====================================================
                                    CUIT / PROFESION / MATRICULA
                                ====================================================== */}

                                <InputGroup className="mb-3">

                                    <InputGroup.Text
                                        style={{
                                            backgroundColor: "#679bb9",
                                            color: "white"
                                        }}
                                    >
                                        CUIT/CUIL
                                    </InputGroup.Text>


                                    <Form.Control
                                        placeholder="Ingresar CUIT/CUIL"
                                        type="text"

                                        onChange={(e) => {

                                            const value =
                                                e.target.value;

                                            if (/^\d*$/.test(value)) {

                                                setCuitCuil(
                                                    value
                                                );
                                            }
                                        }}

                                        value={CuitCuil}
                                    />


                                    <InputGroup.Text
                                        style={{
                                            backgroundColor: "#679bb9",
                                            color: "white"
                                        }}
                                    >
                                        Profesión
                                    </InputGroup.Text>


                                    <select
                                        style={{
                                            width: "40%"
                                        }}
                                        onChange={(e) => {

                                            setIdTipoProfesionSelected(
                                                e.target.value
                                            );

                                        }}
                                        value={
                                            idTipoProfesionSelected
                                        }
                                    >

                                        <option
                                            value=""
                                            disabled
                                        >
                                            Seleccionar
                                        </option>

                                        {TipoProfesion.map(
                                            (profesion) => (

                                                <option
                                                    key={profesion.ID}
                                                    value={profesion.ID}
                                                >
                                                    {
                                                        profesion.descripcion
                                                    }
                                                </option>

                                            )
                                        )}

                                    </select>


                                    <InputGroup.Text
                                        style={{
                                            backgroundColor: "#679bb9",
                                            color: "white"
                                        }}
                                    >
                                        MATRICULA
                                    </InputGroup.Text>


                                    <Form.Control
                                        placeholder="Ingresar matrícula"
                                        type="text"
                                        onChange={(e) =>
                                            setMatriculaNro(
                                                e.target.value
                                            )
                                        }
                                        value={
                                            MatriculaNro
                                        }
                                    />

                                </InputGroup>


                                {/* =====================================================
                                    PROVINCIA / LOCALIDAD
                                ====================================================== */}

                                <InputGroup className="mb-3">

                                    <InputGroup.Text
                                        style={{
                                            backgroundColor: "#679bb9",
                                            color: "white"
                                        }}
                                    >
                                        Provincia que reside
                                    </InputGroup.Text>


                                    <select
                                        style={{
                                            width: "34%"
                                        }}
                                        value={idprovincia}

                                        onChange={(e) => {

                                            const idProv =
                                                e.target.value;

                                            setIDProvincia(
                                                idProv
                                            );

                                            setIDLocalidad("");

                                            setLocalidades([]);

                                            cargarLocalidades(
                                                idProv
                                            );
                                        }}
                                    >

                                        <option value="">
                                            Seleccionar
                                        </option>

                                        {provincias.map(
                                            (prov) => (

                                                <option
                                                    key={prov.ID}
                                                    value={prov.ID}
                                                >
                                                    {
                                                        prov.Nombre
                                                    }
                                                </option>

                                            )
                                        )}

                                    </select>


                                    <InputGroup.Text
                                        style={{
                                            backgroundColor: "#679bb9",
                                            color: "white"
                                        }}
                                    >
                                        Localidad que reside
                                    </InputGroup.Text>


                                    <select
                                        style={{
                                            width: "34%"
                                        }}
                                        value={idlocalidad}
                                        disabled={!idprovincia}

                                        onChange={(e) => {

                                            setIDLocalidad(
                                                e.target.value
                                            );

                                        }}
                                    >

                                        <option value="">
                                            Seleccionar
                                        </option>

                                        {localidades.map(
                                            (localidad) => (

                                                <option
                                                    key={localidad.ID}
                                                    value={localidad.ID}
                                                >
                                                    {
                                                        localidad.localidad
                                                    }
                                                </option>

                                            )
                                        )}

                                    </select>

                                </InputGroup>

                            </div>

                        </div>


                        <hr />


                        {/* =====================================================
                            BOTONES
                        ====================================================== */}

                        <div
                            style={{
                                width: "100%",
                                margin: "0 auto",
                                backgroundColor: "white",
                                textAlign: "right"
                            }}
                        >

                            <ButtonGroup className="mb-2">

                                <Button
                                    variant="success"
                                    onClick={
                                        openMdlEstaSeguro
                                    }
                                >
                                    Grabar
                                </Button>


                                <Button variant="primary">
                                    Limpiar
                                </Button>


                                <Button
                                    variant="primary"
                                    onClick={
                                        handleClose
                                    }
                                >
                                    Cerrar
                                </Button>

                            </ButtonGroup>

                        </div>

                    </div>


                    {/* =====================================================
                        MODAL VALIDAR
                    ====================================================== */}

                    <MdlValidar
                        show={showModal}
                        handleClose={
                            closeModalMessage
                        }
                        modalMessage={
                            modalMessage
                        }
                    />


                    {/* =====================================================
                        MODAL ALTA EXITOSA
                    ====================================================== */}

                    <MdlAltaExitosa
                        show={showModalAlta}
                        handleClose={
                            closeModalAltaExitosa
                        }
                        modalMessage={
                            modalMessage
                        }
                    />

                </Modal.Body>

            </Modal>


            {/* =====================================================
                MODAL ESTA SEGURO
            ====================================================== */}

            {showMDLEstaSeguro && (

                <MDLEstaSeguro
                    show={showMDLEstaSeguro}
                    handleClose={
                        closeMdlEstaSeguro
                    }
                    mensajetitulo={
                        mdlMensajeTitulo
                    }
                    mensajecuerpo={
                        mdlMensajeCuerpo
                    }
                    enviaralpadre={
                        mdlSiNo
                    }
                />

            )}


            {/* =====================================================
                MODAL MENSAJE
            ====================================================== */}

            {showMDLMensaje && (

                <AbrirMDLMensaje
                    show={showMDLMensaje}
                    handleClose={
                        closeMdlMensaje
                    }
                    modalMessage={
                        mensaje
                    }
                />

            )}

        </>

    );
}

export default RegistrarParticipante;