const frame = document.getElementById("frame");
const animate = document.getElementById("animate");

function animation() {
  let pos = 0;
  let interval = setInterval(moving, 50);

  function moving() {
    pos += 5;

    if (pos >= 350) {
      clearInterval(interval);
      //       pos = 0;
    }

    animate.style.top = pos + "px";
    animate.style.left = pos + "px";
  }
}
