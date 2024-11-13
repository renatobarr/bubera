const body = document.body;
const message = document.getElementById('message');
const centerImage = document.getElementById('center-image');
let timeout;

// Função para verificar se o mouse está no centro
function isMouseInCenter(mouseX, mouseY, tolerance = 50) {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  return (
    mouseX > (windowWidth / 2 - tolerance) &&
    mouseX < (windowWidth / 2 + tolerance) &&
    mouseY > (windowHeight / 2 - tolerance) &&
    mouseY < (windowHeight / 2 + tolerance)
  );
}

// Evento de movimento do mouse
document.addEventListener('mousemove', (event) => {
  clearTimeout(timeout);
  message.textContent = "Pare o mouse em algum lugar";
  centerImage.style.display = "none"; // Oculta a imagem quando o mouse está se movendo
  body.classList.remove('background-active'); // Remove o fundo ativo enquanto o mouse se move

  // Define um timeout para ocultar a mensagem quando o mouse parar
  timeout = setTimeout(() => {
    message.textContent = "";

    // Verifica se o mouse está no centro e ativa a imagem e o fundo
    const isInCenter = isMouseInCenter(event.clientX, event.clientY);
    if (isInCenter) {
      centerImage.style.display = "block"; // Exibe a imagem
      body.classList.add('background-active'); // Ativa o fundo com a imagem
    } else {
      centerImage.style.display = "none"; // Oculta a imagem se não estiver no centro
      body.classList.remove('background-active'); // Remove o fundo com a imagem
    }
  }, 500); // Tempo em milissegundos para considerar que o mouse "parou"
});
