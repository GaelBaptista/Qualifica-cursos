document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("video");
  const playBtn = document.getElementById("play-btn");

  // O vídeo já inicia automaticamente com o som desativado (muted)
  video
    .play()
    .then(() => {
      console.log("Vídeo está sendo reproduzido automaticamente.");
    })
    .catch((error) => {
      console.error(
        "Erro ao tentar reproduzir o vídeo automaticamente:",
        error
      );
    });

  // Função para reiniciar o vídeo, ativar som e mostrar controles
  playBtn.addEventListener("click", function () {
    video.currentTime = 0; // Reinicia o vídeo desde o início
    video.muted = false; // Habilita o som
    video.loop = false; // Remove o loop para a reprodução normal
    video.play(); // Reproduz o vídeo
    video.style.filter = "none"; // Remove o blur
    playBtn.classList.add("hidden"); // Esconde o botão de play
    video.setAttribute("controls", "controls"); // Ativa os controles de vídeo
  });
});

// URGENCIA
// Set the countdown time (for example, 24 hours from now)
var countdownDate = new Date().getTime() + 24 * 60 * 60 * 1000;

// Update the countdown every second
var countdownInterval = setInterval(function () {
  var now = new Date().getTime();
  var distance = countdownDate - now;

  // Calculate time left
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown in the element
  document.getElementById("countdown").innerHTML =
    hours + "h " + minutes + "m " + seconds + "s ";

  // If the countdown is finished, clear the interval
  if (distance < 0) {
    clearInterval(countdownInterval);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);
