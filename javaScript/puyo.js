document.querySelector(".square").animate(
    {
      borderRadius: [
        "50% 50% 50% 70%/50% 50% 70% 60%",
        "80% 30% 50% 50%/50%",
        "40% 40% 50% 40%/30% 50% 40% 80%"
      ]
    },
    {
      iterations: Infinity,
      direction: "alternate",
      duration: 7000
    }
  );