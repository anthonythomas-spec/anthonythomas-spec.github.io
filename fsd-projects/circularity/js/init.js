var init = function (window) {
  "use strict";
  var draw = window.opspark.draw,
    physikz = window.opspark.racket.physikz,
    app = window.opspark.makeApp(),
    canvas = app.canvas,
    view = app.view,
    fps = draw.fps("#000");

  window.opspark.makeGame = function () {
    window.opspark.game = {};
    var game = window.opspark.game;

    ///////////////////
    // PROGRAM SETUP //
    ///////////////////

    var circles = [];

    function drawCircle() {
      var circle = draw.randomCircleInArea(canvas, true, true, "#999", 2);
      physikz.addRandomVelocity(circle, canvas, 5, 5);
      view.addChild(circle);
      circles.push(circle);
    }

    for (var i = 0; i < 50; i++) {
      drawCircle();
    }

    ///////////////////
    // PROGRAM LOGIC //
    ///////////////////

    /* 
        This Function is called 60 times/second, producing 60 frames/second.
        In each frame, for every circle, it should redraw that circle
        and check to see if it has drifted off the screen.         
        */
    function update() {
      for (var i = 0; i < circles.length; i++) {
        physikz.updatePosition(circles[i]);
        game.checkCirclePosition(circles[i]);
      }
    }

    /* 
        This Function should check the position of a circle that is passed to the 
        Function. If that circle drifts off the screen, this Function should move
        it to the opposite side of the screen.
        */
    game.checkCirclePosition = function (circle) {
      var radius = circle.radius || 0;

      if (circle.x > canvas.width + radius) {
        circle.x = -radius;
      } else if (circle.x < -radius) {
        circle.x = canvas.width + radius;
      }

      if (circle.y > canvas.height + radius) {
        circle.y = -radius;
      } else if (circle.y < -radius) {
        circle.y = canvas.height + radius;
      }
    };

    /////////////////////////////////////////////////////////////
    // --- NO CODE BELOW HERE  --- DO NOT REMOVE THIS CODE --- //
    /////////////////////////////////////////////////////////////

    view.addChild(fps);
    app.addUpdateable(fps);

    game.circles = circles;
    game.drawCircle = drawCircle;
    game.update = update;

    app.addUpdateable(window.opspark.game);
  };
};

// DO NOT REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = init;
}
