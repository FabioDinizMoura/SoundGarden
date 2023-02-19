const muralDeEventos = document.querySelector('#muralDeEventos')
const URL = 'https://soundgarden-api.vercel.app/events'

async function verTodosEventos() {
  try {
    const response = await fetch(URL)
    const listaEventos = await response.json()
    console.log(listaEventos)

    listaEventos.forEach(evento => {

      let html = `
      <article class="evento card p-5 m-3">
            <h2>${evento.name} - ${dataEvento}</h2>
            <h4>${evento.attractions}</h4>
            <p>
              ${evento.description}
            </p>
          </article>
      `

      muralDeEventos.innerHTML += html
    })
  } catch (error) {
    console.log(error)
  }
}

verTodosEventos()

function redirecionar() {
  window.location.href = 'eventos.html'
}
