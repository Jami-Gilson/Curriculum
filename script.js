const semaforosGrupo1 = document.querySelectorAll('.Semaforo1, .Semaforo4'); // Semáforos 1 y 4
const semaforosGrupo2 = document.querySelectorAll('.Semaforo2, .Semaforo3'); // Semáforos 2 y 3
let grupoActivo = 1; // 1: Grupo 1 (verde), 2: Grupo 2 (verde)

function cambiarLuz() {
    // Función para actualizar un grupo de semáforos
    const actualizarSemaforos = (semaforos, estado) => {
        semaforos.forEach(semaforo => {
            const focos = semaforo.querySelectorAll('.foco');
            focos.forEach(foco => foco.classList.remove('active'));
            if (estado === "verde") {
                focos[2].classList.add('active'); // Verde
            } else if (estado === "amarillo") {
                focos[1].classList.add('active'); // Amarillo
            } else if (estado === "rojo") {
                focos[0].classList.add('active'); // Rojo
            }
        });
    };

    if (grupoActivo === 1) {
        // Grupo 1 en verde, Grupo 2 en rojo
        actualizarSemaforos(semaforosGrupo1, "verde");
        actualizarSemaforos(semaforosGrupo2, "rojo");

        // Cambiar a amarillo para Grupo 1 después de 3 segundos
        setTimeout(() => {
            actualizarSemaforos(semaforosGrupo1, "amarillo");
        }, 3000);

        // Cambiar al siguiente grupo después de 4 segundos
        setTimeout(() => {
            grupoActivo = 2;
            cambiarLuz();
        }, 4000);
    } else {
        // Grupo 2 en verde, Grupo 1 en rojo
        actualizarSemaforos(semaforosGrupo2, "verde");
        actualizarSemaforos(semaforosGrupo1, "rojo");

        // Cambiar a amarillo para Grupo 2 después de 3 segundos
        setTimeout(() => {
            actualizarSemaforos(semaforosGrupo2, "amarillo");
        }, 3000);

        // Cambiar al siguiente grupo después de 4 segundos
        setTimeout(() => {
            grupoActivo = 1;
            cambiarLuz();
        }, 4000);
    }
}

// Inicializar el ciclo
cambiarLuz();
