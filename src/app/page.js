'use client';
import { useRef, useEffect } from "react";
import Matter from 'matter-js';
import PolyDecomp from 'poly-decomp';
import useWindowDimensions from "@/app/hooks/useWindowDimension";
import NextImage from "next/image";
import Link from 'next/link'

export default function Home() {
  const { windowDimensions, currentDevice } = useWindowDimensions();
  console.log(currentDevice)
  const boxRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const shapeProps = [
      {
        device: "desktop",
        shapes: {
          heart: [{
            x: 100,
            y: 100,
            xScale: 0.3,
            yScale: 0.3,
          }],
          flower: [{
            x: 100,
            y: 100,
            xScale: 0.2,
            yScale: 0.2,
          }],
          star: [{
            x: 100,
            y: 100,
            xScale: 0.2,
            yScale: 0.2,
          }],
          bowl: [{
            x: 100,
            y: 100,
            xScale: 0.2,
            yScale: 0.2,
          }],
          kennel: [{
            x: 100,
            y: 100,
            xScale: 0.4,
            yScale: 0.4,
          }],
          ball: [{
            x: 100,
            y: 100,
            xScale: 0.4,
            yScale: 0.4,
          }],
          bone: [{
            x: 100,
            y: 100,
            xScale: 0.2,
            yScale: 0.2,
          }],
          smallDog: [{
            x: 100,
            y: 100,
            xScale: 0.2,
            yScale: 0.2,
          }],
          mediumDog: [{
            x: 100,
            y: 100,
            xScale: 0.3,
            yScale: 0.3,
          }],
          bigDog: [{
            x: 100,
            y: 100,
            xScale: 0.3,
            yScale: 0.3,
          }]
        }
      },
      {
        device: "tablet",
        shapes: {
          heart: [{
            x: 50,
            y: 50,
            xScale: 0.2,
            yScale: 0.2,
          }],
          flower: [{
            x: 50,
            y: 50,
            xScale: 0.1,
            yScale: 0.1,
          }],
          star: [{
            x: 50,
            y: 50,
            xScale: 0.2,
            yScale: 0.2,
          }],
          bowl: [{
            x: 50,
            y: 50,
            xScale: 0.1,
            yScale: 0.1,
          }],
          kennel: [{
            x: 50,
            y: 50,
            xScale: 0.2,
            yScale: 0.2,
          }],
          ball: [{
            x: 50,
            y: 50,
            xScale: 0.2,
            yScale: 0.2,
          }],
          bone: [{
            x: 50,
            y: 50,
            xScale: 0.2,
            yScale: 0.2,
          }],
          smallDog: [{
            x: 50,
            y: 50,
            xScale: 0.2,
            yScale: 0.2,
          }],
          mediumDog: [{
            x: 50,
            y: 50,
            xScale: 0.3,
            yScale: 0.3,
          }],
          bigDog: [{
            x: 50,
            y: 50,
            xScale: 0.3,
            yScale: 0.3,
          }]
        }
      },
      {
        device: "mobile",
        shapes: {
          heart: [{
            x: 40,
            y: 40,
            xScale: 0.2,
            yScale: 0.2,
          }],
          ball: [{
            x: 40,
            y: 40,
            xScale: 0.2,
            yScale: 0.2,
          }],
          star: [{
            x: 40,
            y: 40,
            xScale: 0.2,
            yScale: 0.2,
          }],
          bowl: [{
            x: 40,
            y: 40,
            xScale: 0.2,
            yScale: 0.2,
          }],
          kennel: [{
            x: 40,
            y: 40,
            xScale: 0.2,
            yScale: 0.2,
          }],
          bone: [{
            x: 40,
            y: 40,
            xScale: 0.2,
            yScale: 0.2,
          }],
          smallDog: [{
            x: 40,
            y: 40,
            xScale: 0.2,
            yScale: 0.2,
          }],
          mediumDog: [{
            x: 40,
            y: 40,
            xScale: 0.2,
            yScale: 0.2,
          }],
          bigDog: [{
            x: 40,
            y: 40,
            xScale: 0.3,
            yScale: 0.3,
          }],
          flower: [{
            x: 40,
            y: 40,
            xScale: 0.2,
            yScale: 0.2,
          }]
        }
      }
    ];
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
      Bodies.rectangle(window.innerWidth / 2, currentDevice === "mobile" ? window.innerHeight - grassHeight - 50 : window.innerHeight - grassHeight, window.innerWidth, 10, {
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

    // Composites.stack(x, y, columns, rows, columnGap, rowGap, callback)
    var stack = Composites.stack((window.innerWidth / 10), 0, 10, 1, currentDevice === "mobile" ? 10 : 20, 0, function (x, y, i) {
      if (i === 0) {
        return Bodies.rectangle(x, y, shapeProps.filter((e) => e.device === currentDevice)[0].shapes.smallDog[0].x, shapeProps.filter((e) => e.device === currentDevice)[0].shapes.smallDog[0].y, {
          frictionStatic: 1,
          restitution: 0.9,
          render: {
            sprite: {
              texture: "./smallDog-paper.png",
              xScale: shapeProps.filter((e) => e.device === currentDevice)[0].shapes.smallDog[0].xScale,
              yScale: shapeProps.filter((e) => e.device === currentDevice)[0].shapes.smallDog[0].yScale
            }
          }
        })
      } else if (i === 1) {
        return Bodies.rectangle(x, y, shapeProps.filter((e) => e.device === currentDevice)[0].shapes.kennel[0].x, shapeProps.filter((e) => e.device === currentDevice)[0].shapes.kennel[0].y, {
          frictionStatic: 1,
          restitution: 0.3,
          render: {
            sprite: {
              texture: "./kennel-paper.png",
              xScale: shapeProps.filter((e) => e.device === currentDevice)[0].shapes.kennel[0].xScale,
              yScale: shapeProps.filter((e) => e.device === currentDevice)[0].shapes.kennel[0].yScale
            }
          }
        })
      } else if (i === 2) {
        return Bodies.rectangle(x, y, shapeProps.filter((e) => e.device === currentDevice)[0].shapes.bone[0].x, shapeProps.filter((e) => e.device === currentDevice)[0].shapes.bone[0].y, {
          frictionStatic: 1,
          restitution: 0.7,
          render: {
            sprite: {
              texture: "./bone-paper2.png",
              xScale: shapeProps.filter((e) => e.device === currentDevice)[0].shapes.bone[0].xScale,
              yScale: shapeProps.filter((e) => e.device === currentDevice)[0].shapes.bone[0].yScale
            }
          }
        })
      } else if (i === 3) {
        return Bodies.rectangle(x, y, shapeProps.filter((e) => e.device === currentDevice)[0].shapes.flower[0].x, shapeProps.filter((e) => e.device === currentDevice)[0].shapes.flower[0].y, {
          frictionStatic: 1,
          restitution: 0.7,
          render: {
            sprite: {
              texture: "./flower-paper.png",
              xScale: shapeProps.filter((e) => e.device === currentDevice)[0].shapes.flower[0].xScale,
              yScale: shapeProps.filter((e) => e.device === currentDevice)[0].shapes.flower[0].yScale
            }
          }
        })
      } else if (i === 4) {
        return Bodies.rectangle(x, y, shapeProps.filter((e) => e.device === currentDevice)[0].shapes.mediumDog[0].x, shapeProps.filter((e) => e.device === currentDevice)[0].shapes.mediumDog[0].y, {
          // friction: 0.8,
          frictionStatic: 1,
          restitution: 0.8,
          render: {
            sprite: {
              texture: "./mediumDog-paper.png",
              xScale: shapeProps.filter((e) => e.device === currentDevice)[0].shapes.mediumDog[0].xScale,
              yScale: shapeProps.filter((e) => e.device === currentDevice)[0].shapes.mediumDog[0].yScale
            }
          }
        })
      }
      else if (i === 5) {
        return Bodies.rectangle(x, y, shapeProps.filter((e) => e.device === currentDevice)[0].shapes.bowl[0].x, shapeProps.filter((e) => e.device === currentDevice)[0].shapes.bowl[0].y, {
          frictionStatic: 1,
          restitution: 0.7,
          render: {
            sprite: {
              texture: "./bowl-paper.png",
              xScale: shapeProps.filter((e) => e.device === currentDevice)[0].shapes.bowl[0].xScale,
              yScale: shapeProps.filter((e) => e.device === currentDevice)[0].shapes.bowl[0].yScale
            }
          }
        })
      }
      else if (i === 6) {
        return Bodies.rectangle(x, y, shapeProps.filter((e) => e.device === currentDevice)[0].shapes.star[0].x, shapeProps.filter((e) => e.device === currentDevice)[0].shapes.star[0].y, {
          frictionStatic: 1,
          restitution: 0.8,
          render: {
            sprite: {
              texture: "./star-paper.png",
              xScale: shapeProps.filter((e) => e.device === currentDevice)[0].shapes.star[0].xScale,
              yScale: shapeProps.filter((e) => e.device === currentDevice)[0].shapes.star[0].yScale
            }
          }
        })
      }
      else if (i === 7) {
        return Bodies.rectangle(x, y, shapeProps.filter((e) => e.device === currentDevice)[0].shapes.ball[0].x, shapeProps.filter((e) => e.device === currentDevice)[0].shapes.ball[0].y, {
          frictionStatic: 1,
          restitution: 0.2,
          render: {
            sprite: {
              texture: "./ball-paper.png",
              xScale: shapeProps.filter((e) => e.device === currentDevice)[0].shapes.ball[0].xScale,
              yScale: shapeProps.filter((e) => e.device === currentDevice)[0].shapes.ball[0].yScale
            }
          }
        })
      } else if (i === 8) {
        return Bodies.rectangle(x, y, shapeProps.filter((e) => e.device === currentDevice)[0].shapes.bigDog[0].x, shapeProps.filter((e) => e.device === currentDevice)[0].shapes.bigDog[0].y, {
          frictionStatic: 1,
          restitution: 0.4,
          render: {
            sprite: {
              texture: "./bigDog-paper.png",
              xScale: shapeProps.filter((e) => e.device === currentDevice)[0].shapes.bigDog[0].xScale,
              yScale: shapeProps.filter((e) => e.device === currentDevice)[0].shapes.bigDog[0].yScale
            }
          }
        })
      } else {
        return Bodies.rectangle(x, y, shapeProps.filter((e) => e.device === currentDevice)[0].shapes.heart[0].x, shapeProps.filter((e) => e.device === currentDevice)[0].shapes.heart[0].y, {
          frictionStatic: 1,
          restitution: 0.7,
          render: {
            sprite: {
              texture: "./heart-paper.png",
              xScale: shapeProps.filter((e) => e.device === currentDevice)[0].shapes.heart[0].xScale,
              yScale: shapeProps.filter((e) => e.device === currentDevice)[0].shapes.heart[0].yScale
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

  }, [currentDevice]);

  return (
    <div className="flex justify-center w-screen h-screen">
      <header id={"header"} className={`flex items-center absolute ${currentDevice === "desktop" ? "left-0" : ""} gap-4 md:gap-7 font-[family-name:var(--font-workSans)] m-4`} style={{ zIndex: 100, flexDirection: currentDevice === "mobile" ? "column" : "row" }}>
        <div className="bg-yellow hover:rotate-3 pt-1 pb-1 pl-3 pr-3" style={{ width: currentDevice === "mobile" || currentDevice === "tablet" ? "340px" : "425px" }}>
          <Link className="text-blue text-sm lg:text-l relative" href={"/"}>{`Bee's Knees Dog Walking`}</Link>
        </div>

        <nav id="footer" className="justify-between gap-4 lg:gap-7 flex flex-wrap text-sm lg:text-l font-[family-name:var(--font-workSans)]" style={{ width: currentDevice === "mobile" || currentDevice === "tablet" ? "340px" : "425px" }}>

          <div className="bg-purple hover:rotate-5 pt-1 pb-1 pl-3 pr-3">
            <Link className="text-pink relative" href={"/info"}>{"Info"}</Link>
          </div>

          <div className="bg-green hover:rotate-5 pt-1 pb-1 pl-3 pr-3">
            <Link className="text-yellow relative" href={"/contact"}>{"Contact"}</Link>
          </div>

          <div className="bg-pink hover:rotate-5 pt-1 pb-1 pl-3 pr-3">
            <a
              className="text-red relative"
              href="https://www.instagram.com/beeskneesbyjo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow
            </a>
          </div>
        </nav>
      </header>

      <div className="flex flex-col items-center min-h-screen" style={{ height: "100vh" }}>
        <main id="main" className="w-full h-full absolute">
          {/* CANVAS */}
          <div id="canvasContainer" ref={boxRef} className="w-full h-full">
            <canvas ref={canvasRef} />
          </div>
        </main >
      </div >

      <NextImage
        id="grass"
        src={currentDevice === "mobile" ? "/grass-paper.png" : "/grass-paper2.png"}
        style={{ bottom: "-2px", height: "auto" }}
        className="absolute w-screen"
        alt="grass"
        width={1440}
        height={120}
        priority
      />

      <div className="absolute bottom-2 left-3 text-purple font-[family-name:var(--font-workSans)] font-bold">
        <p className="text-xs">© Bee&apos;s Knees 2025</p>
      </div>

    </div>
  );
}
