const urlServidor = "http://localhost:3000"


//const urlServidor = "localhost:3000"


const urlResourceParticipantes = urlServidor + "/participanteslistar";
const urlResourceParticipantesTransitarAsistio = urlServidor + "/transitarasistio";
const urlResourceParticipantesTransitarPagado = urlServidor + "/transitarpagado";
const urlResourceParticipantesTransitarCintaEntregada = urlServidor + "/transitarcintaentregada";



export const config = {
  urlServidor,
    urlResourceParticipantes,
    urlResourceParticipantesTransitarAsistio,
    urlResourceParticipantesTransitarPagado,
    urlResourceParticipantesTransitarCintaEntregada
}
