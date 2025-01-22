'use client';
import { useState, useRef, useEffect } from "react";
import Matter from 'matter-js';
import PolyDecomp from 'poly-decomp';
// import { useWindowDimensions } from "@/app/functions/useWindowDimension";

export default function Home() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: undefined,
    height: undefined,
  });
  console.log(windowDimensions)
  const [currentDevice, updateCurrentDevice] = useState("desktop");
  console.log(currentDevice)
  const boxRef = useRef(null);
  const canvasRef = useRef(null);

  const desktopShapeProps = {
    heart: [{
      x: 100,
      y: 100,
      r: 100,
      xScale: 0.4,
      yScale: 0.4,
    }],
    star: [{
      x: 100,
      y: 100,
      r: 100,
      xScale: 0.3,
      yScale: 0.3,
    }],
    bowl: [{
      x: 100,
      y: 100,
      xScale: 0.5,
      yScale: 0.5,
    }],
    kennel: [{
      x: 100,
      y: 100,
      xScale: 0.5,
      yScale: 0.5,
    }],
    bone: [{
      x: 100,
      y: 100,
      xScale: 0.4,
      yScale: 0.4,
    }],
    smallDog: [{
      x: 100,
      y: 100,
      r: 100,
      xScale: 0.3,
      yScale: 0.3,
    }],
    mediumDog: [{
      x: 100,
      y: 100,
      r: 100,
      xScale: 0.3,
      yScale: 0.3,
    }],
    bigDog: [{
      x: 100,
      y: 100,
      r: 100,
      xScale: 0.4,
      yScale: 0.4,
    }]
  };
  const tabletShapeProps = {
    heart: [{
      x: 100,
      y: 100,
      r: 100,
      xScale: 0.5,
      yScale: 0.5,
    }],
    star: [{
      x: 100,
      y: 100,
      r: 100,
      xScale: 0.5,
      yScale: 0.5,
    }],
    bowl: [{
      x: 100,
      y: 100,
      xScale: 0.5,
      yScale: 0.5,
    }],
    kennel: [{
      x: 100,
      y: 100,
      xScale: 0.5,
      yScale: 0.5,
    }],
    bone: [{
      x: 100,
      y: 100,
      xScale: 0.5,
      yScale: 0.5,
    }],
    smallDog: [{
      x: 100,
      y: 100,
      r: 100,
      xScale: 0.5,
      yScale: 0.5,
    }],
    mediumDog: [{
      x: 100,
      y: 100,
      r: 100,
      xScale: 0.5,
      yScale: 0.5,
    }],
    bigDog: [{
      x: 100,
      y: 100,
      r: 100,
      xScale: 0.5,
      yScale: 0.5,
    }]
  };
  const mobileShapeProps = {
    heart: [{
      x: 100,
      y: 100,
      r: 100,
      xScale: 0.5,
      yScale: 0.5,
    }],
    star: [{
      x: 100,
      y: 100,
      r: 100,
      xScale: 0.5,
      yScale: 0.5,
    }],
    bowl: [{
      x: 100,
      y: 100,
      xScale: 0.5,
      yScale: 0.5,
    }],
    kennel: [{
      x: 100,
      y: 100,
      xScale: 0.5,
      yScale: 0.5,
    }],
    bone: [{
      x: 100,
      y: 100,
      xScale: 0.5,
      yScale: 0.5,
    }],
    smallDog: [{
      x: 100,
      y: 100,
      r: 100,
      xScale: 0.5,
      yScale: 0.5,
    }],
    mediumDog: [{
      x: 100,
      y: 100,
      r: 100,
      xScale: 0.5,
      yScale: 0.5,
    }],
    bigDog: [{
      x: 100,
      y: 100,
      r: 100,
      xScale: 0.5,
      yScale: 0.5,
    }]
  };

  useEffect(() => {
    let grassHeight = document.getElementById('grass').offsetHeight;

    // module aliases
    let Engine = Matter.Engine;
    let Render = Matter.Render;
    let Runner = Matter.Runner;
    let Bodies = Matter.Bodies;
    let MouseConstraint = Matter.MouseConstraint;
    let Mouse = Matter.Mouse;
    let Composite = Matter.Composite;
    let Composites = Matter.Composites;
    let Common = Matter.Common;

    // provide concave decomposition support library
    Common.setDecomp(PolyDecomp);

    // create an engine
    let engine = Engine.create();
    let world = engine.world;

    // create a renderer
    let render = Render.create({
      element: boxRef.current,
      engine: engine,
      canvas: canvasRef.current,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        background: 'inherit',
        wireframes: false,
      },
    });

    // run the renderers
    Render.run(render);

    // create runner
    var runner = Runner.create();

    // run the engine
    Runner.run(runner, engine);

    // add bodies
    Composite.add(world, [
      // walls
      Bodies.rectangle(window.innerWidth / 2, -6, window.innerWidth, 10, {
        isStatic: true, render: {
          fillStyle: "#0000",
        }
      }),
      Bodies.rectangle(window.innerWidth / 2, window.innerHeight - grassHeight, window.innerWidth, 10, {
        isStatic: true, render: {
          fillStyle: "#0000",
        }
      }),
      Bodies.rectangle(window.innerWidth + 6, window.innerWidth / 2, 10, window.innerWidth, { isStatic: true }),
      Bodies.rectangle(-6, window.innerWidth / 2, 10, window.innerWidth, { isStatic: true })
    ]);

    // Composites.stack(x, y, columns, rows, columnGap, rowGap, callback)
    var stack = Composites.stack((window.innerWidth / 10), 0, 8, 1, 20, 0, function (x, y, i) {
      if (i === 1) {
        return Bodies.rectangle(x, y, desktopShapeProps.smallDog[0].x, desktopShapeProps.smallDog[0].y, {
          frictionStatic: 1,
          restitution: 0.9,
          render: {
            sprite: {
              texture: "./smallDog.png",
              xScale: desktopShapeProps.smallDog[0].xScale,
              yScale: desktopShapeProps.smallDog[0].yScale
            }
          }
        })
      } else if (i === 3) {
        return Bodies.rectangle(x, y, desktopShapeProps.mediumDog[0].x, desktopShapeProps.mediumDog[0].y, {
          // friction: 0.8,
          frictionStatic: 1,
          restitution: 0.8,
          render: {
            sprite: {
              texture: "./mediumDog.png",
              xScale: desktopShapeProps.mediumDog[0].xScale,
              yScale: desktopShapeProps.mediumDog[0].yScale
            }
          }
        })
      } else if (i === 6) {
        return Bodies.rectangle(x, y, desktopShapeProps.bigDog[0].x, desktopShapeProps.bigDog[0].y, {
          // friction: 0.8,
          frictionStatic: 1,
          restitution: 0.4,
          render: {
            sprite: {
              texture: "./bigDog.png",
              xScale: desktopShapeProps.bigDog[0].xScale,
              yScale: desktopShapeProps.bigDog[0].yScale
            }
          }
        })
      }
      const randomNumber = Math.random()

      if (randomNumber > 0.85) {
        return Bodies.circle(x, y, desktopShapeProps.heart[0].r, {
          frictionStatic: 1,
          restitution: 0.7,
          render: {
            sprite: {
              texture: "./heart.png",
              xScale: desktopShapeProps.heart[0].xScale,
              yScale: desktopShapeProps.heart[0].yScale
            }
          }
        })
      } else if (randomNumber > 0.65) {
        return Bodies.circle(x, y, desktopShapeProps.star[0].r, {
          frictionStatic: 1,
          restitution: 0.8,
          render: {
            sprite: {
              texture: "./star.png",
              xScale: desktopShapeProps.star[0].xScale,
              yScale: desktopShapeProps.star[0].yScale
            }
          }
        })
      }
      else if (randomNumber > 0.45) {
        return Bodies.rectangle(x, y, desktopShapeProps.bowl[0].x, desktopShapeProps.bowl[0].y, {
          frictionStatic: 1,
          restitution: 0.7,
          render: {
            sprite: {
              texture: "./bowl.png",
              xScale: desktopShapeProps.bowl[0].xScale,
              yScale: desktopShapeProps.bowl[0].yScale
            }
          }
        })
      }
      else if (randomNumber > 0.25) {
        return Bodies.rectangle(x, y, desktopShapeProps.kennel[0].x, desktopShapeProps.kennel[0].y, {
          frictionStatic: 1,
          restitution: 0.3,
          render: {
            sprite: {
              texture: "./kennel.png",
              xScale: desktopShapeProps.kennel[0].xScale,
              yScale: desktopShapeProps.kennel[0].yScale
            }
          }
        })
      } else {
        return Bodies.rectangle(x, y, desktopShapeProps.bone[0].x, desktopShapeProps.bone[0].y, {
          frictionStatic: 1,
          restitution: 0.7,
          render: {
            sprite: {
              texture: "./bone.png",
              xScale: desktopShapeProps.bone[0].xScale,
              yScale: desktopShapeProps.bone[0].yScale
            }
          }
        })
      }
    });

    Composite.add(engine.world, stack);

    // add mouse control
    var mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false
          }
        }
      });

    // add all of the bodies to the world
    Composite.add(engine.world, mouseConstraint);

    // keep the mouse in sync with rendering
    render.mouse = mouse;

  }, [desktopShapeProps.bigDog, desktopShapeProps.bone, desktopShapeProps.bowl, desktopShapeProps.heart, desktopShapeProps.kennel, desktopShapeProps.mediumDog, desktopShapeProps.smallDog, desktopShapeProps.star]);


  useEffect(() => {
    function handleResize() {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      updateCurrentDevice(window.innerWidth < 767 ? "mobile" : window.innerWidth < 1024 ? "tablet" : "desktop")
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [setWindowDimensions]);

  return (
    <div className="flex flex-col items-center min-h-screen font-[family-name:var(--font-fredoka)]" style={{ height: "100vh" }}>
      <main id="main" className="w-full h-full absolute">
        {/* CANVAS */}
        <div id="canvasContainer" ref={boxRef} className="w-full h-full">
          <canvas ref={canvasRef} />
        </div>
      </main >
    </div >
  );
}
