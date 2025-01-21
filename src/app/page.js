'use client';
import { useState, useRef, useEffect } from "react";
import Matter from 'matter-js';
import PolyDecomp from 'poly-decomp';
import NextImage from "next/image";
import StarSvg from './assets/star.js';
import BoneSvg from './assets/bone.js';
import HeartSvg from "./assets/heart.js";
import PoodleSvg from "./assets/poodle.js";
import BowlSvg from "./assets/bowl.js";

export default function Home() {
  const [showInfoModal, updateShowInfoModal] = useState(false);
  const boxRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    // module aliases
    let Engine = Matter.Engine;
    let Render = Matter.Render;
    let Runner = Matter.Runner;
    let Bodies = Matter.Bodies;
    let MouseConstraint = Matter.MouseConstraint;
    let Mouse = Matter.Mouse;
    let Composite = Matter.Composite;
    let Common = Matter.Common;
    let Vertices = Matter.Vertices;

    // provide concave decomposition support library
    Common.setDecomp(PolyDecomp);

    // create an engine
    let engine = Engine.create();
    let world = engine.world;

    let footerHeight = document.getElementById('footer').offsetHeight;
    let navHeight = document.getElementById('nav').offsetHeight;
    let mainHeight = document.getElementById('main').offsetHeight;

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
      Bodies.rectangle(window.innerWidth / 2, window.innerHeight - footerHeight, window.innerWidth, 10, {
        isStatic: true, render: {
          fillStyle: "#0000",
        }
      }),
      Bodies.rectangle(window.innerWidth + 6, window.innerWidth / 2, 10, window.innerWidth, { isStatic: true }),
      Bodies.rectangle(-6, window.innerWidth / 2, 10, window.innerWidth, { isStatic: true })
    ]);

    // create two boxes and a ground
    let heart = Vertices.fromPath(HeartSvg);
    let bone = Vertices.fromPath(BoneSvg);
    let star = Vertices.fromPath(StarSvg);
    let poodle = Vertices.fromPath(PoodleSvg);
    let bowl = Vertices.fromPath(BowlSvg);
    let heart2 = Vertices.fromPath(HeartSvg);

    ([heart, bone, star, poodle, bowl, heart2]).forEach(function (path, i) {
      var color = Common.choose(['#e84242', '#FF7335', '#FCB0A6', '#5F5789', "#E0BB07"]);
      var vertexSets = Vertices.scale(path, 0.5, 0.5);

      Composite.add(world, Bodies.fromVertices((window.innerWidth / 4) + i * 150, 50 + i * 50, vertexSets, {
        render: {
          fillStyle: color,
          strokeStyle: color,
          lineWidth: 1
        }
      }, true));

    });

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

  }, []);

  function handleInfoClick() {
    updateShowInfoModal(true);
  }

  return (
    <>
      <div className="flex flex-col items-center min-h-screen" style={{ height: "100vh" }}>

        <nav id="nav" className="font-[family-name:var(--font-dongle)] font-bold">
          <h1 className="text-green text-xl">BEE&apos;S KNEES DOG WALKING</h1>
        </nav>

        <div id="footer" style={{ zIndex: 10 }} className="flex flex-wrap justify-center text-l font-bold gap-20 font-[family-name:var(--font-dongle)] absolute bottom-0">
          <a
            className="flex items-center gap-2 text-yellow hover:rotate-10"
            href="mailto:willowweebs1963@icloud.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact
          </a>
          <a
            className="flex items-center gap-2 text-purple hover:rotate-10"
            href="https://www.instagram.com/beeskneesbyjo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Follow
          </a>
          <button
            className="flex items-center gap-2 text-orange hover:rotate-10"
            onClick={handleInfoClick}
          >
            Info
          </button>
        </div>


        {showInfoModal && (
          <div className="bg-pink w-3/4 h-4/5 text-purple text-sm leading-9 font-[family-name:var(--font-custom)] relative">
            <button className="mt-2 mr-3 text-base right-0 absolute w-auto hover:text-stroke-purple hover:text-stroke-2 hover:text-[#0000]" onClick={() => updateShowInfoModal(false)}>x
            </button>
            <div className="flex items-center justify-center p-9 gap-6 h-full">
              <div className="flex flex-col align-center"><p className="mb-1">Hi, I’m Jo.</p>
                <p>I’ve been walking dogs for <span className="text-pink bg-purple p-1">15 years</span> around the <span className="text-pink bg-purple p-1">Medway towns</span> in Kent. I&apos;m a local dog walker offering a one-to-one service to ensure your dog has the <span className="text-pink bg-purple p-1">best walk possible.</span> I also provide a multi-visit service if you’re away for the weekend where I can <span className="text-pink bg-purple p-1">feed,</span> <span className="text-pink bg-purple p-1">walk,</span> <span className="text-pink bg-purple p-1">play</span> and keep your pet <span className="text-pink bg-purple p-1">company</span> up to 4 times a day. I am unable to take on dangerous breeds and very large dogs. <span className="text-pink bg-purple p-1">Thank you!</span></p>
              </div>
              <NextImage
                src="/beesKnees.png"
                alt="bees knees with Mishka the dog"
                width={300}
                height={300}
                priority
              />
            </div>
          </div>
        )
        }

        <main id="main" className="w-full h-full absolute">
          {/* CANVAS */}
          <div ref={boxRef} className="w-full h-full">
            <canvas ref={canvasRef} />
          </div>
        </main >

        <footer className="absolute bottom-3 left-3 text-purple font-sans font-bold">
          <p className="text-sm">© Bee&apos;s Knees 2025</p>
        </footer>
      </div >
    </>
  );
}
