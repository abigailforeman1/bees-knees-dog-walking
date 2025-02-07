'use client';
import { useRef, useEffect } from "react";
import Matter from 'matter-js';
import PolyDecomp from 'poly-decomp';
import useWindowDimensions from "@/app/hooks/useWindowDimension";
import { gsap } from 'gsap/dist/gsap';
import { useGSAP } from '@gsap/react';
import NextImage from "next/image";

if (typeof window !== 'undefined') {
  gsap.registerPlugin(useGSAP);
}

export default function Home() {
  const { windowDimensions, currentDevice } = useWindowDimensions();
  const boxRef = useRef(null);
  const canvasRef = useRef(null);

  useGSAP(() => {
    const tlBeeOne = gsap.timeline({ paused: true });
    tlBeeOne.startTime(5);
    tlBeeOne.to('#bee', { left: windowDimensions.width + 70, duration: 10, ease: "none" }, "animation-2")
    tlBeeOne.to('#bee', { y: 100, duration: 2, ease: "power1.inOut" }, "animation-2+=1")
    tlBeeOne.to('#bee', { y: 50, duration: 1, ease: "power1.inOut" }, "animation-2+=3")
    tlBeeOne.to('#bee', { y: 200, duration: 3, ease: "power1.inOut" }, "animation-2+=4")
    tlBeeOne.to('#bee', { y: 150, duration: 2, ease: "power1.inOut" }, "animation-2+=7")

    const shapeProps = [
      {
        device: "desktop",
        shapes: {
          heart: [{
            x: 90,
            y: 90,
            xScale: 0.3,
            yScale: 0.3,
            frictionStatic: 1,
            restitution: 0.5,
          }],
          flower: [{
            x: 90,
            y: 90,
            xScale: 0.2,
            yScale: 0.2,
            frictionStatic: 1,
            restitution: 0.5,
          }],
          star: [{
            x: 90,
            y: 90,
            xScale: 0.2,
            yScale: 0.2,
            frictionStatic: 1,
            restitution: 0.4,
          }],
          bowl: [{
            x: 100,
            y: 70,
            xScale: 0.2,
            yScale: 0.2,
            frictionStatic: 1,
            restitution: 0.7,
          }],
          kennel: [{
            x: 120,
            y: 120,
            xScale: 0.4,
            yScale: 0.4,
            frictionStatic: 9,
            restitution: 0.8,
          }],
          ball: [{
            x: 90,
            y: 90,
            xScale: 0.4,
            yScale: 0.4,
            frictionStatic: 1,
            restitution: 0.2,
          }],
          bone: [{
            x: 50,
            y: 100,
            xScale: 0.2,
            yScale: 0.2,
            frictionStatic: 1,
            restitution: 0.6,
          }],
          smallDog: [{
            x: 90,
            y: 90,
            xScale: 0.2,
            yScale: 0.2,
            frictionStatic: 3,
            restitution: 0.7,
          }],
          mediumDog: [{
            x: 150,
            y: 100,
            xScale: 0.3,
            yScale: 0.3,
            frictionStatic: 4,
            restitution: 0.8,
          }],
          bigDog: [{
            x: 150,
            y: 150,
            xScale: 0.3,
            yScale: 0.3,
            frictionStatic: 5,
            restitution: 0.9,
          }]
        }
      },
      {
        device: "tablet",
        shapes: {
          heart: [{
            x: 80,
            y: 80,
            xScale: 0.2,
            yScale: 0.2,
            frictionStatic: 1,
            restitution: 0.5,
          }],
          flower: [{
            x: 80,
            y: 80,
            xScale: 0.1,
            yScale: 0.1,
            frictionStatic: 1,
            restitution: 0.5,
          }],
          star: [{
            x: 80,
            y: 80,
            xScale: 0.2,
            yScale: 0.2,
            frictionStatic: 1,
            restitution: 0.5,
          }],
          bowl: [{
            x: 90,
            y: 60,
            xScale: 0.2,
            yScale: 0.2,
            frictionStatic: 1,
            restitution: 0.6,
          }],
          kennel: [{
            x: 100,
            y: 100,
            xScale: 0.3,
            yScale: 0.3,
            frictionStatic: 9,
            restitution: 0.9,
          }],
          ball: [{
            x: 60,
            y: 60,
            xScale: 0.2,
            yScale: 0.2,
            frictionStatic: 1,
            restitution: 0.3,
          }],
          bone: [{
            x: 50,
            y: 70,
            xScale: 0.2,
            yScale: 0.2,
            frictionStatic: 1,
            restitution: 0.6,
          }],
          smallDog: [{
            x: 60,
            y: 70,
            xScale: 0.2,
            yScale: 0.2,
            frictionStatic: 3,
            restitution: 0.7,
          }],
          mediumDog: [{
            x: 70,
            y: 80,
            xScale: 0.3,
            yScale: 0.3,
            frictionStatic: 4,
            restitution: 0.8,
          }],
          bigDog: [{
            x: 80,
            y: 90,
            xScale: 0.3,
            yScale: 0.3,
            frictionStatic: 5,
            restitution: 0.9,
          }]
        }
      },
      {
        device: "mobile",
        shapes: {
          heart: [{
            x: 100,
            y: 100,
            xScale: 0.2,
            yScale: 0.2,
            frictionStatic: 10,
            restitution: 0.1,
          }],
          ball: [{
            x: 80,
            y: 100,
            xScale: 0.2,
            yScale: 0.2,
            frictionStatic: 10,
            restitution: 0.1,
          }],
          star: [{
            x: 90,
            y: 90,
            xScale: 0.2,
            yScale: 0.2,
            frictionStatic: 10,
            restitution: 0.1,
          }],
          bowl: [{
            x: 90,
            y: 90,
            xScale: 0.2,
            yScale: 0.2,
            frictionStatic: 10,
            restitution: 0.1,
          }],
          kennel: [{
            x: 90,
            y: 110,
            xScale: 0.2,
            yScale: 0.2,
            frictionStatic: 10,
            restitution: 0.1,
          }],
          bone: [{
            x: 50,
            y: 100,
            xScale: 0.2,
            yScale: 0.2,
            frictionStatic: 10,
            restitution: 0.1,
          }],
          smallDog: [{
            x: 90,
            y: 100,
            xScale: 0.2,
            yScale: 0.2,
            frictionStatic: 10,
            restitution: 0.1,
          }],
          mediumDog: [{
            x: 100,
            y: 100,
            xScale: 0.2,
            yScale: 0.2,
            frictionStatic: 10,
            restitution: 0.1,
          }],
          bigDog: [{
            x: 110,
            y: 110,
            xScale: 0.2,
            yScale: 0.2,
            frictionStatic: 10,
            restitution: 0.1,
          }],
          flower: [{
            x: 90,
            y: 90,
            xScale: 0.2,
            yScale: 0.2,
            frictionStatic: 10,
            restitution: 0.1,
          }]
        }
      }
    ];
    let grassHeight = document.getElementById('grass').offsetHeight;
    // let headerHeight = document.getElementById('header').offsetHeight;

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
      Bodies.rectangle(window.innerWidth / 2, 5, window.innerWidth, 10, {
        isStatic: true, render: {
          fillStyle: "#0000",
        }
      }),
      Bodies.rectangle(window.innerWidth / 2, window.innerHeight - grassHeight, window.innerWidth, 10, {
        isStatic: true, render: {
          fillStyle: "#0000",
        }
      }),
      Bodies.rectangle(window.innerWidth + 6, window.innerWidth / 2, 10, window.innerWidth, {
        isStatic: true, render: {
          fillStyle: "#0000",
        }
      }),
      Bodies.rectangle(-6, window.innerWidth / 2, 10, window.innerWidth, {
        isStatic: true, render: {
          fillStyle: "#0000",
        }
      })
    ]);

    // create gsap timeline
    const tlShapes = gsap.timeline();

    if (currentDevice === "desktop" || currentDevice === "tablet") {
      // Composites.stack(x, y, columns, rows, columnGap, rowGap, callback)
      var stack = Composites.stack((window.innerWidth / 11), 0, 10, 1, 10, 0, function (x, y, i) {
        if (i === 0) {
          let correctShape = shapeProps.filter((e) => e.device === currentDevice)[0].shapes.smallDog[0]
          return Bodies.rectangle(x, y, correctShape.x, correctShape.y, {
            frictionStatic: correctShape.frictionStatic,
            restitution: correctShape.restitution,
            render: {
              sprite: {
                texture: "./smallDog-paper.png",
                xScale: correctShape.xScale,
                yScale: correctShape.yScale
              }
            }
          })
        } else if (i === 1) {
          let correctShape = shapeProps.filter((e) => e.device === currentDevice)[0].shapes.kennel[0]
          return Bodies.rectangle(x, y, correctShape.x, correctShape.y, {
            frictionStatic: correctShape.frictionStatic,
            restitution: correctShape.restitution,
            render: {
              sprite: {
                texture: "./kennel-paper.png",
                xScale: correctShape.xScale,
                yScale: correctShape.yScale
              }
            }
          })
        } else if (i === 2) {
          let correctShape = shapeProps.filter((e) => e.device === currentDevice)[0].shapes.bone[0]
          return Bodies.rectangle(x, y, correctShape.x, correctShape.y, {
            frictionStatic: correctShape.frictionStatic,
            restitution: correctShape.restitution,
            render: {
              sprite: {
                texture: "./bone-paper2.png",
                xScale: correctShape.xScale,
                yScale: correctShape.yScale
              }
            }
          })
        } else if (i === 3) {
          let correctShape = shapeProps.filter((e) => e.device === currentDevice)[0].shapes.flower[0]
          return Bodies.rectangle(x, y, correctShape.x, correctShape.y, {
            frictionStatic: correctShape.frictionStatic,
            restitution: correctShape.restitution,
            render: {
              sprite: {
                texture: "./flower-paper.png",
                xScale: correctShape.xScale,
                yScale: correctShape.yScale
              }
            }
          })
        } else if (i === 4) {
          let correctShape = shapeProps.filter((e) => e.device === currentDevice)[0].shapes.mediumDog[0]
          return Bodies.rectangle(x, y, correctShape.x, correctShape.y, {
            // friction: 0.8,
            frictionStatic: correctShape.frictionStatic,
            restitution: correctShape.restitution,
            render: {
              sprite: {
                texture: "./mediumDog-paper.png",
                xScale: correctShape.xScale,
                yScale: correctShape.yScale
              }
            }
          })
        }
        else if (i === 5) {
          let correctShape = shapeProps.filter((e) => e.device === currentDevice)[0].shapes.bowl[0]
          return Bodies.rectangle(x, y, correctShape.x, correctShape.y, {
            frictionStatic: correctShape.frictionStatic,
            restitution: correctShape.restitution,
            render: {
              sprite: {
                texture: "./bowl-paper.png",
                xScale: correctShape.xScale,
                yScale: correctShape.yScale
              }
            }
          })
        }
        else if (i === 6) {
          let correctShape = shapeProps.filter((e) => e.device === currentDevice)[0].shapes.star[0]
          return Bodies.rectangle(x, y, correctShape.x, correctShape.y, {
            frictionStatic: correctShape.frictionStatic,
            restitution: correctShape.restitution,
            render: {
              sprite: {
                texture: "./star-paper.png",
                xScale: correctShape.xScale,
                yScale: correctShape.yScale
              }
            }
          })
        }
        else if (i === 7) {
          let correctShape = shapeProps.filter((e) => e.device === currentDevice)[0].shapes.ball[0]
          return Bodies.rectangle(x, y, correctShape.x, correctShape.y, {
            frictionStatic: correctShape.frictionStatic,
            restitution: correctShape.restitution,
            render: {
              sprite: {
                texture: "./ball-paper.png",
                xScale: correctShape.xScale,
                yScale: correctShape.yScale
              }
            }
          })
        } else if (i === 8) {
          let correctShape = shapeProps.filter((e) => e.device === currentDevice)[0].shapes.bigDog[0]
          return Bodies.rectangle(x, y, correctShape.x, correctShape.y, {
            frictionStatic: correctShape.frictionStatic,
            restitution: correctShape.restitution,
            render: {
              sprite: {
                texture: "./bigDog-paper.png",
                xScale: correctShape.xScale,
                yScale: correctShape.yScale
              }
            }
          })
        } else {
          let correctShape = shapeProps.filter((e) => e.device === currentDevice)[0].shapes.heart[0]
          return Bodies.rectangle(x, y, correctShape.x, correctShape.y, {
            frictionStatic: correctShape.frictionStatic,
            restitution: correctShape.restitution,
            render: {
              sprite: {
                texture: "./heart-paper.png",
                xScale: correctShape.xScale,
                yScale: correctShape.yScale
              }
            }
          })
        }
      });
      tlShapes.add(function () { Composite.add(engine.world, stack) }, "animation-1+=1");
      tlShapes.add(function () { tlBeeOne.play() }, "animation-1+=5");
    } else {
      var stackLoop = 1;
      // Composites.stack(x, y, columns, rows, columnGap, rowGap, callback)
      var stackMobile = Composites.stack((window.innerWidth / 11), 40, 4, 3, 15, 50, function (x, y, i) {
        if (i === 0 && stackLoop === 1) {
          let correctShape = shapeProps.filter((e) => e.device === currentDevice)[0].shapes.smallDog[0]
          return Bodies.rectangle(x, y, correctShape.x, correctShape.y, {
            frictionStatic: correctShape.frictionStatic,
            restitution: correctShape.restitution,
            render: {
              sprite: {
                texture: "./smallDog-paper.png",
                xScale: correctShape.xScale,
                yScale: correctShape.yScale
              }
            }
          })
        } else if (i === 1 && stackLoop === 1) {
          let correctShape = shapeProps.filter((e) => e.device === currentDevice)[0].shapes.kennel[0]
          return Bodies.rectangle(x, y, correctShape.x, correctShape.y, {
            frictionStatic: correctShape.frictionStatic,
            restitution: correctShape.restitution,
            render: {
              sprite: {
                texture: "./kennel-paper.png",
                xScale: correctShape.xScale,
                yScale: correctShape.yScale
              }
            }
          })
        } else if (i === 2 && stackLoop === 1) {
          let correctShape = shapeProps.filter((e) => e.device === currentDevice)[0].shapes.bone[0]
          return Bodies.rectangle(x, y, correctShape.x, correctShape.y, {
            frictionStatic: correctShape.frictionStatic,
            restitution: correctShape.restitution,
            render: {
              sprite: {
                texture: "./bone-paper2.png",
                xScale: correctShape.xScale,
                yScale: correctShape.yScale
              }
            }
          })
        } else if (i === 3 && stackLoop === 1) {
          stackLoop++;
          let correctShape = shapeProps.filter((e) => e.device === currentDevice)[0].shapes.flower[0]
          return Bodies.rectangle(x, y, correctShape.x, correctShape.y, {
            frictionStatic: correctShape.frictionStatic,
            restitution: correctShape.restitution,
            render: {
              sprite: {
                texture: "./flower-paper.png",
                xScale: correctShape.xScale,
                yScale: correctShape.yScale
              }
            }
          })
        } else if (i === 0 && stackLoop === 2) {
          let correctShape = shapeProps.filter((e) => e.device === currentDevice)[0].shapes.mediumDog[0]
          return Bodies.rectangle(x, y, correctShape.x, correctShape.y, {
            frictionStatic: correctShape.frictionStatic,
            restitution: correctShape.restitution,
            render: {
              sprite: {
                texture: "./mediumDog-paper.png",
                xScale: correctShape.xScale,
                yScale: correctShape.yScale
              }
            }
          })
        }
        else if (i === 1 && stackLoop === 2) {
          let correctShape = shapeProps.filter((e) => e.device === currentDevice)[0].shapes.bowl[0]
          return Bodies.rectangle(x, y, correctShape.x, correctShape.y, {
            frictionStatic: correctShape.frictionStatic,
            restitution: correctShape.restitution,
            render: {
              sprite: {
                texture: "./bowl-paper.png",
                xScale: correctShape.xScale,
                yScale: correctShape.yScale
              }
            }
          })
        }
        else if (i === 2 && stackLoop === 2) {
          let correctShape = shapeProps.filter((e) => e.device === currentDevice)[0].shapes.star[0]
          return Bodies.rectangle(x, y, correctShape.x, correctShape.y, {
            frictionStatic: correctShape.frictionStatic,
            restitution: correctShape.restitution,
            render: {
              sprite: {
                texture: "./star-paper.png",
                xScale: correctShape.xScale,
                yScale: correctShape.yScale
              }
            }
          })
        }
        else if (i === 3 && stackLoop === 2) {
          stackLoop++;
          let correctShape = shapeProps.filter((e) => e.device === currentDevice)[0].shapes.ball[0]
          return Bodies.rectangle(x, y, correctShape.x, correctShape.y, {
            frictionStatic: correctShape.frictionStatic,
            restitution: correctShape.restitution,
            render: {
              sprite: {
                texture: "./ball-paper.png",
                xScale: correctShape.xScale,
                yScale: correctShape.yScale
              }
            }
          })
        } else if (i === 0 && stackLoop === 3) {
          let correctShape = shapeProps.filter((e) => e.device === currentDevice)[0].shapes.bigDog[0]
          return Bodies.rectangle(x, y, correctShape.x, correctShape.y, {
            frictionStatic: correctShape.frictionStatic,
            restitution: correctShape.restitution,
            render: {
              sprite: {
                texture: "./bigDog-paper.png",
                xScale: correctShape.xScale,
                yScale: correctShape.yScale
              }
            }
          })
        } else if (i === 1 && stackLoop === 3) {
          let correctShape = shapeProps.filter((e) => e.device === currentDevice)[0].shapes.heart[0]
          return Bodies.rectangle(x, y, correctShape.x, correctShape.y, {
            frictionStatic: correctShape.frictionStatic,
            restitution: correctShape.restitution,
            render: {
              sprite: {
                texture: "./heart-paper.png",
                xScale: correctShape.xScale,
                yScale: correctShape.yScale
              }
            }
          })
        } else if (i === 2 && stackLoop === 3) {
          let correctShape = shapeProps.filter((e) => e.device === currentDevice)[0].shapes.flower[0]
          return Bodies.rectangle(x, y, correctShape.x, correctShape.y, {
            frictionStatic: correctShape.frictionStatic,
            restitution: correctShape.restitution,
            render: {
              sprite: {
                texture: "./flower-paper.png",
                xScale: correctShape.xScale,
                yScale: correctShape.yScale
              }
            }
          })
        } else if (i === 3 && stackLoop === 3) {
          let correctShape = shapeProps.filter((e) => e.device === currentDevice)[0].shapes.bone[0]
          return Bodies.rectangle(x, y, correctShape.x, correctShape.y, {
            frictionStatic: correctShape.frictionStatic,
            restitution: correctShape.restitution,
            render: {
              sprite: {
                texture: "./bone-paper2.png",
                xScale: correctShape.xScale,
                yScale: correctShape.yScale
              }
            }
          })
        }
      });
      tlShapes.add(function () { Composite.add(engine.world, stackMobile) }, "animation-1+=1");
      tlShapes.add(function () { tlBeeOne.play() }, "animation-1+=5");
    }

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

    // add mouse constraints to the world
    Composite.add(engine.world, mouseConstraint);

    // keep the mouse in sync with rendering
    render.mouse = mouse;

  }, [windowDimensions, currentDevice]);

  return (
    <>
      <NextImage
        id="bee"
        src={"/bee-paper.png"}
        className="absolute top-20 left-[-70px]"
        style={{ zIndex: 101 }}
        alt="bee"
        width={70}
        height={0}
        priority
      />

      <main id="main">
        {/* CANVAS */}
        <div id="canvasContainer" ref={boxRef} className="w-screen h-screen">
          <canvas ref={canvasRef} />
        </div>
      </main >
    </>
  );
}
