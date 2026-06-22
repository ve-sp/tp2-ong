const modalOverlay = document.createElement("div");

modalOverlay.classList.add("timeline-modal");

document.body.appendChild(modalOverlay);


const modales = {

  modal2009: {

    imagen: "media/2009.jpg",

    year: "2009 · Buenos Aires",

    titulo: "El comienzo de todo",

    texto: `

      <p>
        Aprender para Transformar nació en
        el barrio de Saavedra con pequeños
        talleres de alfabetización para
        jóvenes y adultos.
      </p>

      <p>
        Lo que empezó con apenas 12 personas
        y 4 voluntarios se convirtió en el
        primer paso de una red educativa que
        hoy llega a miles de personas en toda
        América Latina.
      </p>

    `
  },

  modal2015: {

    imagen: "media/2015.jpg",

    year: "2015 · Uruguay",

    titulo: "Primera expansión internacional",

    texto: `

      <p>
        En 2015 expandimos el proyecto
        fuera de Argentina por primera vez,
        llegando a Uruguay.
      </p>

      <p>
        Incorporamos nuevos voluntarios,
        talleres y espacios educativos
        comunitarios.
      </p>

      <p>
        Este crecimiento marcó el inicio
        de una red regional en expansión.
      </p>

    `
  },

  modal2019: {

    imagen: "media/2019.webp",

    year: "2019 · América Latina",

    titulo: "Nuevos países, nuevas oportunidades",

    texto: `

      <p>
        En 2019 comenzamos programas
        educativos en Colombia, Perú
        y Bolivia.
      </p>

      <p>
        Incorporamos más voluntarios,
        alianzas locales y actividades
        comunitarias.
      </p>

      <p>
        La organización empezó a consolidarse
        como una red educativa regional.
      </p>

    `
  },

  modal2026: {

    imagen: "media/2026.jpg",

    year: "2026 · América Latina",

    titulo: "Un impacto que sigue creciendo",

    texto: `

      <p>
        En 2026 superamos las
        12.000 personas beneficiadas
        en distintos países.
      </p>

      <p>
        Nuestros programas alcanzan
        comunidades urbanas, rurales
        y espacios educativos regionales.
      </p>

      <p>
        Seguimos ampliando oportunidades
        a través de la educación
        y la inclusión.
      </p>

    `
  },

  modalPuntoPartida: {

    imagen: "media/punto-partida.jpg",

    year: "Desde 2009 · América Latina",

    titulo: "Pro Futuro",

    texto: `

      <p>
        Pro Futuro fue el primer gran
        programa educativo de Aprender para
        Transformar, creado para acompañar
        procesos de alfabetización en jóvenes
        y adultos.
      </p>

      <p>
        El proyecto comenzó en pequeños espacios
        comunitarios de Buenos Aires y, con el
        tiempo, se expandió a distintos países
        de América Latina.
      </p>

      <p>
        A través de clases, tutorías y actividades
        prácticas, miles de personas pudieron
        volver a acercarse a la educación y
        recuperar oportunidades.
      </p>

      <div class="modal-image">

        <img
          src="media/punto-partida2.jpg"
          alt="Clases comunitarias">

      </div>

      <p>
        El programa incorporó herramientas
        digitales, acompañamiento escolar
        y formación básica para el trabajo,
        adaptándose a las necesidades de
        cada comunidad.
      </p>

      <p>
        Hoy Pro Futuro continúa creciendo
        gracias al trabajo conjunto de docentes,
        voluntarios y organizaciones sociales
        de toda la región.
      </p>

      <div class="modal-image">

        <img
          src="media/punto-partida3.jpg"
          alt="Voluntarios">

      </div>

      <p>
        Más de 8.000 personas participaron del
        programa desde su creación, convirtiéndolo
        en uno de los proyectos educativos más
        importantes de la organización.
      </p>

    `
  },

modalSumate: {

  imagen: "media/sumate.jpg",

  year: "Sumate a la causa",

  titulo: "Queremos conocerte",

  texto: `

    <p class="modal-intro">
      Completá el formulario y descubrí cuánto impacto puede generar tu ayuda.
    </p>

    <form class="sumate-form">

      <div class="form-group">
        <label>Nombre completo</label>
        <input type="text" placeholder="Tu nombre">
      </div>

      <div class="form-group">
        <label>Email</label>
        <input type="email" placeholder="correo@email.com">
      </div>

      <div class="form-group">
        <label>¿Cómo querés ayudar?</label>

        <select id="tipoAyuda">

          <option>Ser voluntario</option>
          <option>Realizar una donación</option>
          <option>Dar talleres</option>
          <option>Participar en proyectos</option>

        </select>

      </div>

      <div id="donacionBox" style="display: none;">

  <div class="form-group">
    <label>Monto de donación (ARS)</label>
    <input type="number" id="donacionInput" placeholder="Ej: 5000">
  </div>

  <div class="form-group">
    <button type="button" class="btn-primary" id="calcularImpacto">
      Calcular impacto
    </button>
  </div>

  <p id="resultadoImpacto" class="impacto-msg"></p>

</div>

      <div class="form-group">
        <label>Mensaje</label>

        <textarea
          rows="4"
          placeholder="Contanos un poco sobre vos">
        </textarea>

      </div>

      <button type="submit" class="btn-primary">
        Enviar solicitud
      </button>

    </form>

  `
},

};



const botones = document.querySelectorAll(".open-modal");

botones.forEach(boton => {

  boton.addEventListener("click", () => {

    const id = boton.dataset.modal;

    const data = modales[id];

    if (!data) return;

    modalOverlay.innerHTML = `

      <div class="timeline-modal-box">

        <button class="close-modal">
          ×
        </button>

        <div class="modal-image">

          <img
            src="${data.imagen}"
            alt="${data.titulo}">

        </div>

        <div class="modal-text">

          <p class="modal-year">
            ${data.year}
          </p>

          <h2>
            ${data.titulo}
          </h2>

          ${data.texto}

        </div>

      </div>

    `;
    const form = modalOverlay.querySelector("form");

if (form) {

  form.addEventListener("submit", e => {

    e.preventDefault();

    alert("¡Gracias por sumarte! Nos comunicaremos con vos pronto.");

    form.reset();

    cerrarModal();

  });

}

    modalOverlay.classList.add("active");
    const tipoAyuda = modalOverlay.querySelector("#tipoAyuda");
const donacionBox = modalOverlay.querySelector("#donacionBox");

if (tipoAyuda && donacionBox) {

  tipoAyuda.addEventListener("change", () => {

    if (tipoAyuda.value === "Realizar una donación") {

      donacionBox.style.display = "block";

    } else {

      donacionBox.style.display = "none";

    }

  });

}

    const botonImpacto = modalOverlay.querySelector("#calcularImpacto");

if (botonImpacto) {

  botonImpacto.addEventListener("click", () => {

    const monto = Number(
      modalOverlay.querySelector("#donacionInput").value
    );

    const resultado =
      modalOverlay.querySelector("#resultadoImpacto");

    if (!monto || monto <= 0) {

      resultado.textContent =
        "Ingresá un monto válido para calcular tu impacto.";

      return;
    }

    let mensaje = "";

    if (monto < 5000) {

      mensaje =
        "Con tu ayuda podemos entregar útiles escolares a 1 niño.";

    } else if (monto < 15000) {

      mensaje =
        "Con tu donación podemos comprar 3 libros educativos.";

    } else if (monto < 30000) {

      mensaje =
        "Tu aporte ayuda a sostener talleres para 2 estudiantes.";

    } else if (monto < 50000) {

      mensaje =
        "Con este monto podemos financiar un mes de apoyo escolar para 5 niños.";

    } else {

      mensaje =
        "¡Gracias! Tu ayuda puede transformar el futuro de toda una comunidad.";
    }

    resultado.textContent = mensaje;

  });

}

    modalOverlay
      .querySelector(".close-modal")
      .addEventListener("click", cerrarModal);

  });

});



function cerrarModal() {

  modalOverlay.classList.remove("active");

}



modalOverlay.addEventListener("click", e => {

  if (e.target === modalOverlay) {

    cerrarModal();
    

  }

});


const counters = document.querySelectorAll(".counter");

function iniciarContadores() {

  counters.forEach(counter => {

    const target = Number(counter.dataset.target);

    let current = 0;

    const incremento = target / 100;

    const timer = setInterval(() => {

      current += incremento;

      if (current >= target) {

        counter.textContent =
        "+" + target.toLocaleString("es-AR");

        clearInterval(timer);

      } else {

       counter.textContent =
        "+" + Math.floor(current).toLocaleString("es-AR");

      }

    }, 20);

  });

}

iniciarContadores();


const forms = document.querySelectorAll("form");

forms.forEach(form => {
  form.addEventListener("submit", function(e){

    if(form.id === "newsletterForm") return;

    e.preventDefault();
    alert("¡Gracias por completar el formulario! Nos pondremos en contacto pronto.");

    form.reset();

  });
});

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
  });

}

const newsletterForm = document.getElementById("newsletterForm");

newsletterForm.addEventListener("submit", function(e) {

  e.preventDefault();

  alert("¡Gracias por suscribirte a nuestra newsletter!");

  newsletterForm.reset();

});