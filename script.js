// Seleciona os campos de horas e minutos
const horas = document.querySelectorAll(".hora");
const minutos = document.querySelectorAll(".minuto");

// Adiciona evento para calcular automaticamente
horas.forEach(input => {
    input.addEventListener("input", calcular);
});

minutos.forEach(input => {
    input.addEventListener("input", calcular);
});

// Função de cálculo
function calcular() {

    let totalMinutos = 0;

    for (let i = 0; i < horas.length; i++) {

        let h = parseInt(horas[i].value) || 0;
        let m = parseInt(minutos[i].value) || 0;

        totalMinutos += (h * 60) + m;
    }

    let horasTotal = Math.floor(totalMinutos / 60);
    let minutosTotal = totalMinutos % 60;

    document.getElementById("resultado").textContent =
        String(horasTotal).padStart(2, "0") +
        ":" +
        String(minutosTotal).padStart(2, "0");
}

// Limpar todos os campos
function limpar() {

    document.querySelectorAll("input").forEach(input => {
        input.value = "";
    });

    document.getElementById("resultado").textContent = "00:00";
}

// Evento do botão Limpar
document.getElementById("btnLimpar").addEventListener("click", limpar);