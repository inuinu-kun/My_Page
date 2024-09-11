window.onload = function () {
    document.getElementById("spread").animate(
      {
        height: 0,
        opacity: 0.5
      },
      {
        fill: "forwards",
        duration: 1000,
        easing: "ease-in"
      }
    );
  };