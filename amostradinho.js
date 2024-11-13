const body = document.body;
let timeout;

  document.addEventListener('mousemove', (event) => {

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    clearTimeout(timeout);
    document.getElementById('message').textContent = "Pare o mouse em algum lugar";

    timeout = setTimeout(() => {
      document.getElementById('message').textContent = "";

      const mouseX = event.clientX;
      const mouseY = event.clientY;
      
      const tolerance = 50; 
      const isInCenter = 
        mouseX > (windowWidth / 2 - tolerance) && 
        mouseX < (windowWidth / 2 + tolerance) &&
        mouseY > (windowHeight / 2 - tolerance) && 
        mouseY < (windowHeight / 2 + tolerance);
      }, 500);

      if (isInCenter) {
        body.classList.add('background-active'); 
      } else {
        body.classList.remove('background-active'); 
      }
  });
