const body = document.body;

document.addEventListener('mousemove', (event) => {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  
  // Posição do mouse
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  // Verifica se o mouse está no centro (ajustar conforme necessário)
  const tolerance = 50; // margem de tolerância ao centro
  const isInCenter = 
    mouseX > (windowWidth / 2 - tolerance) && 
    mouseX < (windowWidth / 2 + tolerance) &&
    mouseY > (windowHeight / 2 - tolerance) && 
    mouseY < (windowHeight / 2 + tolerance);

  if (isInCenter) {
    body.classList.add('background-active'); // Adiciona a imagem de fundo
  } else {
    body.classList.remove('background-active'); // Remove a imagem de fundo
  }
});
