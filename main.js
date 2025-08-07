let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 70,
});
 
typewriter
  .pauseFor(500)
  .typeString('Estudiante de programación en Punto Code')
  .pauseFor(1500)
  .deleteChars(10)
  .start();