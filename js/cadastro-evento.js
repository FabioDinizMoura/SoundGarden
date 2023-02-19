import validFormData from "./format/validFormData.js";
import LoadingSpinner from "./format/LoadingSpinner.js";
const loader = new LoadingSpinner();

const form = document.querySelector("form");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  try {
    const formData = validFormData({
      name: form.elements["nome"],
      attractions: form.elements["atracoes"],
      description: form.elements["descricao"],
      scheduled: form.elements["data"],
      number_tickets: form.elements["lotacao"],
    });
    loader.show();
    const res = await sendNewEvent(formData);
    loader.hide();
    if (res.ok) {
      alert("Evento criado com sucesso!");
      form.reset();
    } else {
      alert(
        "Falha na requisição"
      );
    }
     } catch (error) {
    alert(
      "Preencha os campos corretamente"
    );
     }
});

async function sendNewEvent(formData) {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await fetch("https://soundgarden-api.vercel.app/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      resolve(res);
    } catch (error) {
      reject(null);
    }
  });
}
