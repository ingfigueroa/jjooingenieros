import React, { useState } from "react";

import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

import HelpOutlineIcon from "@mui/icons-material/HelpOutline";


import "../css/jjoo.css"

import Image from "react-bootstrap/Image";
import ParticipantesListar from "../componentes/participantes_listar";
import ParticipantesRecepcion from "../componentes/participantes_recepcion";
import ParticipantesCobrar from "../componentes/participantes_cobrar";




function jjoo_ingenieros() {
  const [mostrarParticipantesRecepcion, setMostrarParticipantesRecepcion] = useState(false);
  const [mostrarParticipantesListar, setMostrarParticipantesListar] = useState(false);
  const [mostrarParticipantesCobrar, setMostrarParticipantesCobrar] = useState(false);
  


  const [titulo, setTitulo] = useState("Sistema de Gestión - JJOO de INGENIEROS");

  const MostrarParticipantesRecepcion = () => {
    
   
    setMostrarParticipantesRecepcion(true);
    setMostrarParticipantesListar(false);
    setMostrarParticipantesCobrar(false);
   
    setTitulo("PARTICIPANTES - RECEPCION");
    setOpen(false);
  };

  
  const MostrarParticipantesListar = () => {
    
   
    setMostrarParticipantesRecepcion(false);
    setMostrarParticipantesListar(true);
    setMostrarParticipantesCobrar(false);
   
    setTitulo("PARTICIPANTES - LISTAR");
    setOpen(false);
  };

  
  const MostrarParticipantesCobrar = () => {
    
   
    setMostrarParticipantesRecepcion(false);
    setMostrarParticipantesListar(false);
    setMostrarParticipantesCobrar(true);
   
    setTitulo("PARTICIPANTES - COBRAR");
    setOpen(false);
  };

  const varpaciente = "FIGUEROA, RODOLFO";

  const [open, setOpen] = useState(false);

  const toggleDrawer = (state) => {
    setOpen(state);
  };

  return (
    <>
      <div className="">
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "60px",
            backgroundColor: "#2980B9",
          }}
        >
          <div
            style={{
              width: "25%",
              backgroundColor: "#2980B9",
              marginLeft: "0 px",
            }}
          >
            <IconButton
              onClick={() => toggleDrawer(true)}
              style={{ color: "white", marginLeft: "auto" }}
            >
              <MenuIcon fontSize="large" />
            </IconButton>

            <a href="/">
              <img
                src="./assets/Logo_2022_resolucion.jpg"
                alt=""
                style={{ margin: "20px 20px" }}
              />
            </a>
          </div>

          <div
            style={{
              width: "85%",
              backgroundColor: "#2980B9",

              color: "white",
              display: "flex", // Usa flexbox
              alignItems: "center", // Centra verticalmente
              justifyContent: "space-between", // Separa los elementos, titulo a la izquierda y el resto a la derecha
              padding: "0 15px", // Espaciado lateral
            }}
          >
            {/* Título alineado a la izquierda */}
            <h3 style={{ textAlign: "left", margin: 0 }}>{titulo}</h3>

            {/* Contenedor derecho con usuario e imagen */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Image
                style={{
                  width: "30px",
                  height: "30px",
                }}
                src="assets/sinfoto.png"
                roundedCircle
              />
              <h6 style={{ margin: 0 }}>
                Usuario: <br /> {varpaciente}
              </h6>
            </div>
          </div>
          {/*  */}
          <div
            style={{
              display: "flex",

              alignItems: "right",
              width: "auto",
              height: "60px",
              backgroundColor: "#2980B9",

              padding: "0 10px",
            }}
          >
            {/* Botón para abrir el menú */}

            {/* Botón de ayuda */}
            <button
              title="Ayuda"
              className="btn btn-sm btn-light btn-outline-primary"
              style={{
                alignItems: "right",
                height: "30px",
                marginTop: "auto",
                marginRight: "auto",
              }}
            >
              <HelpOutlineIcon />
            </button>
          </div>

          {/* Drawer (Menú lateral derecho) */}
          <Drawer
            anchor="left"
            open={open}
            onClose={() => toggleDrawer(false)()}
          >
            <List style={{ width: 280, padding: 0 }}>
              <ListItem
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#2980B9",
                  color: "white",
                  margin: "5px 0px 5px 0px",
                }}
              >
                <img
                  src="./assets/Logo_2022_resolucion.jpg"
                  alt="Logo"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "60px",
                    objectFit: "contain",
                  }}
                />
              </ListItem>

              <Divider
                sx={{
                  marginY: "0.5",
                  height: "2px",
                  backgroundColor: "black",
                }}
              />

              <ListItem
                button
                onClick={MostrarParticipantesRecepcion}
                sx={{
                  "&:hover": {
                    backgroundColor: "#2980B9",
                    color: "white", // texto blanco al hacer hover
                    "& .MuiListItemIcon-root": {
                      color: "white", // ícono blanco también
                    },
                  },
                }}
              >
                <ListItemIcon>
                  <CalendarTodayIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Recepción" />
              </ListItem>
               <ListItem
                button
                onClick={MostrarParticipantesListar}
                sx={{
                  "&:hover": {
                    backgroundColor: "#2980B9",
                    color: "white", // texto blanco al hacer hover
                    "& .MuiListItemIcon-root": {
                      color: "white", // ícono blanco también
                    },
                  },
                }}
              >
                <ListItemIcon>
                  <CalendarTodayIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Listar Participantes" />
              </ListItem>
               <ListItem
                button
                onClick={MostrarParticipantesCobrar}
                sx={{
                  "&:hover": {
                    backgroundColor: "#2980B9",
                    color: "white", // texto blanco al hacer hover
                    "& .MuiListItemIcon-root": {
                      color: "white", // ícono blanco también
                    },
                  },
                }}
              >
                <ListItemIcon>
                  <CalendarTodayIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Cobrar INSCRIPCION" />
              </ListItem>



              {/* Podés agregar más secciones acá */}
            </List>
          </Drawer>
        </div>

        <div
          style={{ display: "flex", width: "100%", backgroundColor: "white" }}
        >
        
        {mostrarParticipantesRecepcion && <ParticipantesRecepcion />}
         {mostrarParticipantesListar && <ParticipantesListar />}
          {mostrarParticipantesCobrar && <ParticipantesCobrar />}
         

        </div>
      </div>
    </>
  );
}

export default jjoo_ingenieros;
