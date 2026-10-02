import httpService from "./http.service.js";
//const urlResource = "https://labsys.frc.utn.edu.ar/dds-express/api/articulos";

// mas adelante podemos usar un archivo de configuracion para el urlResource
 import {config} from "../config.js";
 const urlResourceParticipantesListar = config.urlResourceParticipantes;
 const urlResourceParticipantesTransitarAsistio = config.urlResourceParticipantesTransitarAsistio;
 const urlResourceParticipantesTransitarPagado = config.urlResourceParticipantesTransitarPagado;
  const urlResourceParticipantesTransitarCintaEntregada = config.urlResourceParticipantesTransitarCintaEntregada;

 
 async function Buscar(Apellido, VarDni, pagina, cantidadPorPagina) {
 
  const resp = await httpService.get(urlResourceParticipantesListar, {
    params: { Apellido, VarDni, pagina, cantidadPorPagina},
  });
  return resp.data;
}


 async function TransitarAsistio(VarDni) {
 
  const resp = await httpService.post(urlResourceParticipantesTransitarAsistio, 
    { VarDni},
  );
  return resp.data;
}


 async function TransitarPagado(VarDni) {

  const resp = await httpService.post(urlResourceParticipantesTransitarPagado, { VarDni},
  );
  return resp.data;
}

async function TransitarCintaEntregada(VarDni) {
 
  const resp = await httpService.post(urlResourceParticipantesTransitarCintaEntregada, { VarDni},
  );
  return resp.data;
}


export const participantesService = {
  Buscar, TransitarAsistio, TransitarPagado, TransitarCintaEntregada
};