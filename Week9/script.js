function playSound(e) {
  //console.log(e); // for troubleshooting
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  //console.log(audio, key); // for troubleshooting
  if (!audio) return; // stop function

  audio.currentTime = 0;

  audio.play();
  key.classList.add("playing");

  let margin = parseInt(
      key.style.marginTop.substr(0, key.style.marginTop.length - 2)
  );
  if (isNaN(margin)) {
      margin = 10;
  } else {
      margin = margin + 10;
      console.log(margin);
      if (margin >= 100) {
          margin = 0;
      }
  }



  key.style.marginTop = `${margin}px`;
}

function removeTransition(e) {
  console.log(e.propertyName);
  //if (e.propertyName !== "transform") return; // skip if not transform
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);