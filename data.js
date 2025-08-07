document.addEventListener("DOMContentLoaded", function () {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      // Hero Section
      document.getElementById("hero-title").textContent = data.hero.title;

      // About Section
      document.getElementById("about-title").textContent = data.about.title;
      document.getElementById("about-text").textContent = data.about.text;

       // Renderizar la sección "frase"
       const fraseContainer = document.querySelector(".frase");

       // Vacía la sección antes de llenarla dinámicamente
       fraseContainer.innerHTML = "";
 
       // Iterar sobre los datos de la sección "frase"
       data.frase.forEach((item) => {
         const titleElement = document.createElement("h2");
         titleElement.textContent = item.title;
 
         const subtitleElement = document.createElement("h4");
         subtitleElement.textContent = item.subtitle;
 
         fraseContainer.appendChild(titleElement);
         fraseContainer.appendChild(subtitleElement);
 
         // Añade un salto de línea entre los bloques, si es necesario
         fraseContainer.appendChild(document.createElement("br"));
       });

      // Skills Section
      document.getElementById("skills-title").textContent = data.skills.title;

      // Code and Software Skills
      const iconosSoftware = document.getElementById("iconos_software");
      data.skills.codeSoftware.forEach((skill) => {
        const li = document.createElement("li");
        li.innerHTML = `<span><img src="${skill.icon}" alt=""></span><p>${skill.name}</p>`;
        iconosSoftware.appendChild(li);
      });

      // Aptitudes
      const aptitudes = document.getElementById("aptitudes");
      data.skills.aptitudes.forEach((aptitude) => {
        const li = document.createElement("li");
        li.innerHTML = `<i class="${aptitude.icon}"></i><p>${aptitude.name}</p>`;
        aptitudes.appendChild(li);
      });

      // Experiencia Section
      const experienciaContainer = document.querySelector(".mi_experiencia");
      data.experiencia.forEach((curso) => {
        const div = document.createElement("div");
        div.className = "datos_experiencia";
        div.setAttribute("data-aos", "zoom-in");

        div.innerHTML = `
          
          <img src="${curso.image}" alt="">
         
          <h4>${curso.title}</h4>
          <div class="fecha_lugar">
            <h5><i class="fa-solid fa-calendar"></i> ${curso.year}</h5>
            <h5><i class="fa-sharp fa-solid fa-location-dot"></i> <a href="https://www.punto-code.com/">punto-code</a></h5>
          </div>
          <ul>
            <li class="titulo_li"><i class="fa-solid fa-laptop-code"></i>Herramientas:</li>
            ${curso.tools.map((tool) => `<li>${tool}</li>`).join("")}
          </ul>
          <p>${curso.description}</p>
          <p><i class="fa-solid fa-star"></i> ${curso.accomplishments}</p>
        `;

        experienciaContainer.appendChild(div);
      });

       // Proyectos Section
       const proyectosDescription = document.querySelector("#proyectos p");
       proyectosDescription.textContent = data.proyectos.description;
 
       const proyectosContainer = document.querySelector(".proyectos-items");
       data.proyectos.items.forEach((project) => {
         const figure = document.createElement("figure");
         figure.className = "item";
         figure.setAttribute("data-aos", "zoom-in");
 
         figure.innerHTML = `
           <img src="${project.image}" alt="">
           <div class="item-content">
             <h6>${project.category}</h6>
             <h3>${project.title}</h3>
             <p>${project.description}</p>
             <a href="${project.link}">Ver</a>
           </div>
         `;
 
         proyectosContainer.appendChild(figure);
       });

       // Populate Testimonials (Carrusel)
      const carouselInner = document.querySelector(".carousel-inner");

      data.testimonios.forEach((testimonio, index) => {
        const div = document.createElement("div");
        div.className = `carousel-item ${index === 0 ? "active" : ""}`; // Add "active" class to the first item

        div.innerHTML = `
          <div class="container">
            <img class="testimonio-imagen rounded-circle" src="${testimonio.image}" alt="Foto de ${testimonio.cliente}">
            <p class="testimonio-texto">${testimonio.text}</p>
            <div class="testimonio-info">
              <p class="cliente">${testimonio.cliente}</p>
              <p class="cargo">${testimonio.cargo}</p>
            </div>
          </div>
        `;

        carouselInner.appendChild(div);
      });




    })
    .catch((error) => console.error("Error fetching the JSON data:", error));
});
