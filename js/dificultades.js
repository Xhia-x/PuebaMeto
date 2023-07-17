document.addEventListener('DOMContentLoaded', function() {
    var principiante = document.getElementById('principiante');
    var intermedio = document.getElementById('intermedio');
    var avanzado = document.getElementById('avanzado');
  
    principiante.addEventListener('click', function() {
      seleccionarDificultad('principiante');
    });
  
    intermedio.addEventListener('click', function() {
      seleccionarDificultad('intermedio');
    });
  
    avanzado.addEventListener('click', function() {
      seleccionarDificultad('avanzado');
    });
  
    function seleccionarDificultad(dificultad) {
      // Aquí puedes hacer lo que necesites con la dificultad seleccionada
      console.log('Dificultad seleccionada:', dificultad);
    }
  });