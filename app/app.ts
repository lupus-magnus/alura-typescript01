import { NegociacaoController } from "./controllers/necociacao-controller.js";
import { Negociacao } from "./models/negociacao.js";

const controller = new NegociacaoController();
const form = document.querySelector(".form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  controller.adiciona();
});
