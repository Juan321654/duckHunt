window.onload = function () {
  const body = document.body;
  
  const createDuck = () => {
    const duckDiv = document.createElement("div");
    duckDiv.classList.add("duck");
    randomPosition(duckDiv);
    document.body.append(duckDiv);
    setInterval(() => duckDiv.classList.toggle("flap"), 250);
    function randomPosition(duck) {
      const top = `${Math.floor(Math.random() * window.innerHeight)}px`;
      const left = `${Math.floor(Math.random() * window.innerWidth)}px`;
      duck.style.top = top;
      duck.style.left = left;
    }
    const moveDuck = (duck) => {
      randomPosition(duck);
    };
    setInterval(() => moveDuck(duckDiv), 1000);
    duckDiv.addEventListener("click", () => {
      duckDiv.classList.add("shot");
      setTimeout(() => {
        const removeDuck = document.querySelector(".shot");
        removeDuck.parentNode.removeChild(removeDuck);
      }, 1000);
      setTimeout(() => {
        checkForWinner();
      }, 1000);
    });
  };

  for (let i = 0; i < 5; i++) {
    createDuck();
  }

  const checkForWinner = () => {
    const ducksLeft = document.querySelectorAll(".duck");
    if (ducksLeft.length > 0) {
      console.log(ducksLeft.length);
    } else {
      alert("You Win!");
    }
  };
};
