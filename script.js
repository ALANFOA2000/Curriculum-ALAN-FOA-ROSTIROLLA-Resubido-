document.addEventListener("DOMContentLoaded", function(event) {
  const barras = document.querySelectorAll('.barra');

  barras.forEach(barra => {
    const barraLlenado = barra.querySelector('.barra-llenado');
    const porcentajeInicial = parseInt(barra.dataset.porcentajeInicial);
    const porcentajeFinal = parseInt(barra.dataset.porcentaje);
  
    barra.addEventListener('mouseover', () => {
      let porcentaje = porcentajeInicial;
      const intervalo = setInterval(() => {
        porcentaje++;
        if (porcentaje > porcentajeFinal) {
          clearInterval(intervalo);
        } else {
          barraLlenado.innerText = porcentaje + '%';
        }
      }, 10);
    });

    barra.addEventListener('mouseout', () => {
      barraLlenado.innerText = '0%';
    });

    
  });
  const btn = document.querySelector("#btn-back-to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
});

btn.addEventListener("click", () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth"
  });
});


});
