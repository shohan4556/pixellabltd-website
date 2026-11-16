/* 3D tilt + holo shine for .app-card. Same logic as the inline script in /index.html. */
(function () {
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var cards = document.querySelectorAll(".app-card");
  if (reduceMotion || !cards.length) return;

  var MAX_TILT = 10;

  cards.forEach(function (card) {
    var state = {
      targetRX: 0,
      targetRY: 0,
      targetScale: 1,
      rx: 0,
      ry: 0,
      scale: 1,
      raf: null,
    };

    function loop() {
      var k = 0.18;
      state.rx += (state.targetRX - state.rx) * k;
      state.ry += (state.targetRY - state.ry) * k;
      state.scale += (state.targetScale - state.scale) * k;
      card.style.transform = "rotateX(" + state.rx.toFixed(2) + "deg) rotateY(" + state.ry.toFixed(2) + "deg) scale(" + state.scale.toFixed(3) + ")";
      var done = Math.abs(state.targetRX - state.rx) < 0.01 && Math.abs(state.targetRY - state.ry) < 0.01 && Math.abs(state.targetScale - state.scale) < 0.001;
      if (!done) {
        state.raf = requestAnimationFrame(loop);
      } else {
        state.raf = null;
      }
    }
    function kick() {
      if (!state.raf) state.raf = requestAnimationFrame(loop);
    }

    card.addEventListener("pointermove", function (e) {
      var r = card.getBoundingClientRect();
      var px = (e.clientX - r.left) / r.width;
      var py = (e.clientY - r.top) / r.height;
      state.targetRY = (px - 0.5) * MAX_TILT * 2;
      state.targetRX = -(py - 0.5) * MAX_TILT * 2;
      card.style.setProperty("--px", (px * 100).toFixed(1) + "%");
      card.style.setProperty("--py", (py * 100).toFixed(1) + "%");
      kick();
    });
    card.addEventListener("pointerenter", function () {
      state.targetScale = 1.03;
      kick();
    });
    card.addEventListener("pointerleave", function () {
      state.targetRX = 0;
      state.targetRY = 0;
      state.targetScale = 1;
      kick();
    });
    card.addEventListener("pointerdown", function () {
      state.targetScale = 0.98;
      kick();
    });
    card.addEventListener("pointerup", function () {
      state.targetScale = 1.03;
      kick();
    });
  });
})();
