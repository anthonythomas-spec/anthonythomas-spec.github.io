$(function () {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      setInterval(main, 1000 / frameRate);
    }

    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(
      -50,
      canvas.height - 10,
      canvas.width + 100,
      200,
      "rgb(118, 0, 233)",
    ); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    toggleGrid();

    createPlatform(80, 650, 220, 25, "#00f5d4");
    createPlatform(340, 570, 150, 22, "#00bbf9");
    createPlatform(540, 490, 150, 22, "#9b5de5");
    createPlatform(750, 410, 155, 22, "#f15bb5");
    createPlatform(970, 330, 155, 22, "#fee440");
    createPlatform(1190, 250, 150, 22, "#00f5d4");

    createPlatform(300, 690, 130, 18, "#4361ee");
    createPlatform(690, 620, 130, 18, "#7209b7");
    createPlatform(1030, 540, 140, 18, "#f72585");

    createPlatform(465, 535, 85, 18, "#ff9f1c");
    createPlatform(700, 455, 70, 18, "#2ec4b6");
    createPlatform(920, 375, 70, 18, "#ff9f1c");
    createPlatform(1140, 295, 70, 18, "#2ec4b6");

    createPlatform(470, 390, 110, 18, "#80ffdb", 430, 650, 2);
    createPlatform(880, 220, 110, 18, "#80ffdb", 820, 1080, 2);
    createPlatform(1080, 440, 95, 18, "#48cae4", null, null, 0, 360, 520, 1);

  
    createCollectable("steve", 150, 610);
    createCollectable("diamond", 400, 530, 0.5, 0.7);
    createCollectable("grace", 600, 450);
    createCollectable("kennedi", 805, 370);
    createCollectable("max", 1025, 290);
    createCollectable("database", 1240, 210, 0, 1, 1180, 1300, 1.5);

    createBadPlatform(490, 650, 125, 20, "red");
    createBadPlatform(845, 600, 110, 20, "red");
    createFakePlatform(700, 330, 105, 18, "#495057");
    createFakePlatform(1110, 300, 85, 18, "#343a40");


    createCannon("right", 470, 2350, 12, 8, 300, 650, 1);
    createCannon("left", 610, 2050, 18, 12, 420, 700, 1);
    createCannon("top", 760, 1750, 24, 18, 650, 950, 2);
    createCannon("bottom", 1040, 1550, 14, 28, 900, 1250, 2);
    createCannon("top", 1220, 1250, 30, 20, 1120, 1330, 2);

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});



