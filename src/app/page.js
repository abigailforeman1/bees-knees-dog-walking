'use client';
import { useRef, useEffect } from "react";
import Matter from 'matter-js';
import PolyDecomp from 'poly-decomp';
import useWindowDimensions from "@/app/hooks/useWindowDimension";
import NextImage from "next/image";
import Link from 'next/link'

export default function Home() {
  const { windowDimensions, currentDevice } = useWindowDimensions();
  const boxRef = useRef(null);
  const canvasRef = useRef(null);

  const desktopShapeProps = {
    heart: [{
      x: 100,
      y: 100,
      r: 100,
      xScale: 0.3,
      yScale: 0.3,
    }],
    flower: [{
      x: 100,
      y: 100,
      r: 100,
      xScale: 0.2,
      yScale: 0.2,
    }],
    star: [{
      x: 100,
      y: 100,
      r: 100,
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
      r: 100,
      xScale: 0.2,
      yScale: 0.2,
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
      xScale: 0.3,
      yScale: 0.3,
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
    ball: [{
      x: 100,
      y: 100,
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
    ball: [{
      x: 100,
      y: 100,
      xScale: 0.4,
      yScale: 0.4,
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
    let headerHeight = document.getElementById('header').offsetHeight;

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
    var stack = Composites.stack((window.innerWidth / 10), 0, 10, 1, 10, 0, function (x, y, i) {
      if (i === 0) {
        return Bodies.rectangle(x, y, desktopShapeProps.smallDog[0].x, desktopShapeProps.smallDog[0].y, {
          frictionStatic: 1,
          restitution: 0.9,
          render: {
            sprite: {
              texture: "./smallDog-paper.png",
              xScale: desktopShapeProps.smallDog[0].xScale,
              yScale: desktopShapeProps.smallDog[0].yScale
            }
          }
        })
      } else if (i === 1) {
        return Bodies.rectangle(x, y, desktopShapeProps.kennel[0].x, desktopShapeProps.kennel[0].y, {
          frictionStatic: 1,
          restitution: 0.3,
          render: {
            sprite: {
              texture: "./kennel-paper.png",
              xScale: desktopShapeProps.kennel[0].xScale,
              yScale: desktopShapeProps.kennel[0].yScale
            }
          }
        })
      } else if (i === 2) {
        return Bodies.rectangle(x, y, desktopShapeProps.bone[0].x, desktopShapeProps.bone[0].y, {
          frictionStatic: 1,
          restitution: 0.7,
          render: {
            sprite: {
              texture: "./bone-paper2.png",
              xScale: desktopShapeProps.bone[0].xScale,
              yScale: desktopShapeProps.bone[0].yScale
            }
          }
        })
      } else if (i === 3) {
        return Bodies.rectangle(x, y, desktopShapeProps.flower[0].x, desktopShapeProps.flower[0].y, {
          frictionStatic: 1,
          restitution: 0.7,
          render: {
            sprite: {
              texture: "./flower-paper.png",
              xScale: desktopShapeProps.flower[0].xScale,
              yScale: desktopShapeProps.flower[0].yScale
            }
          }
        })
      } else if (i === 4) {
        return Bodies.rectangle(x, y, desktopShapeProps.mediumDog[0].x, desktopShapeProps.mediumDog[0].y, {
          // friction: 0.8,
          frictionStatic: 1,
          restitution: 0.8,
          render: {
            sprite: {
              texture: "./mediumDog-paper.png",
              xScale: desktopShapeProps.mediumDog[0].xScale,
              yScale: desktopShapeProps.mediumDog[0].yScale
            }
          }
        })
      }
      else if (i === 5) {
        return Bodies.rectangle(x, y, desktopShapeProps.bowl[0].x, desktopShapeProps.bowl[0].y, {
          frictionStatic: 1,
          restitution: 0.7,
          render: {
            sprite: {
              texture: "./bowl-paper.png",
              xScale: desktopShapeProps.bowl[0].xScale,
              yScale: desktopShapeProps.bowl[0].yScale
            }
          }
        })
      }
      else if (i === 6) {
        return Bodies.rectangle(x, y, desktopShapeProps.star[0].x, desktopShapeProps.star[0].y, {
          frictionStatic: 1,
          restitution: 0.8,
          render: {
            sprite: {
              texture: "./star-paper.png",
              xScale: desktopShapeProps.star[0].xScale,
              yScale: desktopShapeProps.star[0].yScale
            }
          }
        })
      }
      else if (i === 7) {
        return Bodies.rectangle(x, y, desktopShapeProps.ball[0].x, desktopShapeProps.ball[0].y, {
          frictionStatic: 1,
          restitution: 0.3,
          render: {
            sprite: {
              texture: "./ball-paper.png",
              xScale: desktopShapeProps.ball[0].xScale,
              yScale: desktopShapeProps.ball[0].yScale
            }
          }
        })
      } else if (i === 8) {
        return Bodies.rectangle(x, y, desktopShapeProps.bigDog[0].x, desktopShapeProps.bigDog[0].y, {
          // friction: 0.8,
          frictionStatic: 1,
          restitution: 0.4,
          render: {
            sprite: {
              texture: "./bigDog-paper.png",
              xScale: desktopShapeProps.bigDog[0].xScale,
              yScale: desktopShapeProps.bigDog[0].yScale
            }
          }
        })
      } else {
        return Bodies.rectangle(x, y, desktopShapeProps.heart[0].x, desktopShapeProps.heart[0].y, {
          frictionStatic: 1,
          restitution: 0.7,
          render: {
            sprite: {
              texture: "./heart-paper.png",
              xScale: desktopShapeProps.heart[0].xScale,
              yScale: desktopShapeProps.heart[0].yScale
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

  }, [desktopShapeProps.ball, desktopShapeProps.bigDog, desktopShapeProps.bone, desktopShapeProps.bowl, desktopShapeProps.flower, desktopShapeProps.heart, desktopShapeProps.kennel, desktopShapeProps.mediumDog, desktopShapeProps.smallDog, desktopShapeProps.star]);

  return (
    <>
      <header id={"header"} className="gap-4 md:gap-7 flex flex-wrap absolute font-[family-name:var(--font-workSans)] m-4" style={{ zIndex: 100 }}>
        <div className="bg-yellow hover:rotate-3 pt-1 pb-1 pl-3 pr-3">
          <Link className="text-blue text-sm sm:text-l relative" href={"/"}>{`Bee's Knees Dog Walking`}</Link>
        </div>

        <nav id="footer" className="gap-4 md:gap-7 flex flex-wrap text-sm sm:text-l font-[family-name:var(--font-workSans)]">

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
        style={{ bottom: "-2px" }}
        className="absolute h-14 sm:h-auto w-full"
        alt="grass"
        width={1440}
        height={120}
        priority
      />

      <div className="absolute bottom-2 left-3 text-purple font-[family-name:var(--font-workSans)] font-bold">
        <p className="text-xs">© Bee&apos;s Knees 2025</p>
      </div>

    </>
  );
}
