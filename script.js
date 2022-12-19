function changeImage() {
    if (
      document.getElementById("myImage").src ===
      "https://i.postimg.cc/KjK1wL3c/bulb-off.png"
    ) {
      document.getElementById("myImage").src =
        "https://i.postimg.cc/6QyTynzr/bulb-on.png";
      document.getElementById("btn").innerHTML = "OFF";
      document.getElementById("main").classList.remove("lightoff");
      document.getElementById("main").classList.add("lighton");
    } else if (
      document.getElementById("myImage").src ===
      "https://i.postimg.cc/6QyTynzr/bulb-on.png"
    ) {
      document.getElementById("myImage").src =
        "https://i.postimg.cc/KjK1wL3c/bulb-off.png";
      document.getElementById("btn").innerHTML = "ON";
      document.getElementById("main").classList.add("lightoff");
      document.getElementById("main").classList.remove("lighton");
    }
  }
  
  document.getElementById("btn").addEventListener("click", changeImage);
  