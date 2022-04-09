const btn_success = document.querySelector(".btn-success");
const btn_danger = document.querySelector(".btn-danger");
let contador = document.querySelector(".contador");
let container_contador = document.querySelector(".container-contador");
let conitainer_cronometro = document.querySelector(".container-cronometro");

let contar = 0;

btn_success.addEventListener("click", () => {
    contar++;
    contador.textContent = contar;

});

btn_danger.addEventListener("click", () => {

    contar--;
    contador.textContent = contar;
});

let btn_app_contador = document.getElementById("btn-app-contador");
let btn_app_cronometro = document.getElementById("btn-app-cronometro");

btn_app_contador.addEventListener("click", () => {
    if (btn_app_cronometro.className !== ("btn btn-success")) {

        console.log("true primer nivel")
        conitainer_cronometro.classList.toggle("visibility_ocultar");
        container_contador.classList.toggle("visibility_Contador");

        if (conitainer_cronometro.classList !== ("visibility_Contador") && btn_app_contador.className !== ("btn btn-success")) {
            btn_app_contador.className = ("btn btn-success");
            sin_app_select.style.display = ("none")
            console.log("true")
        } else {
            console.log("false")
            btn_app_contador.className = ("btn btn-primary");
            sin_app_select.style.display = ("flex")
            apagar_alerta()

        }

    } else {
        console.log("false primer nivel")
        alert_darger.style.display = ("block")

    }
});

function apagar_alerta() {
    if (btn_app_contador.className === ("btn btn-primary") && btn_app_cronometro.className === ("btn btn-primary")) {
        alert_darger.style.display = ("none")

    } else {
        alert_darger.style.display = ("block")
    }
}

btn_app_cronometro.addEventListener("click", () => {
    if (btn_app_contador.className !== ("btn btn-success")) {

        container_contador.classList.toggle("visibility_ocultar");
        conitainer_cronometro.classList.toggle("visibility_Contador");

        if (container_contador.classList !== ("visibility_Contador") && btn_app_cronometro.className !== ("btn btn-success")) {
            btn_app_cronometro.className = ("btn btn-success");
            sin_app_select.style.display = ("none")
            console.log("true")
        } else {
            console.log("false")
            btn_app_cronometro.className = ("btn btn-primary");
            sin_app_select.style.display = ("flex")
            apagar_alerta()

        }
    } else {
        console.log("false primer nivel")
        alert_darger.style.display = ("block")

    }
});

let alert_darger = document.querySelector(".alert-danger");
let sin_app_select = document.querySelector(".sin_app_select");