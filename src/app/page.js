'use client';
import { useState, useRef, useEffect } from "react";
import NextImage from "next/image";
import StarSvg from './assets/star.js';
import BoneSvg from './assets/bone.js';

export default function Home() {
  const [showInfoModal, updateShowInfoModal] = useState(false);
  const canvas = useRef();

  const starSvg = StarSvg;
  const [isStarDraggable, updateIsStarDraggable] = useState(false);
  const [currentXStar, updateCurrentXStar] = useState(0);
  const [currentYStar, updateCurrentYStar] = useState(0);
  const [starPlaced, updateStarPlaced] = useState(false)

  const boneSvg = BoneSvg;
  const [isBoneDraggable, updateIsBoneDraggable] = useState(false);
  const [currentXBone, updateCurrentXBone] = useState(0);
  const [currentYBone, updateCurrentYBone] = useState(0);
  const [bonePlaced, updateBonePlaced] = useState(false)


  function handleCanvasClick(canvas, e) {
    let rect = canvas.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    const image = new Image();
    const context = canvas.getContext('2d');
    if (!starPlaced) {
      image.src = `data:image/svg+xml;base64,${window.btoa(starSvg)}`;
      image.onload = () => {
        updateCurrentXStar(x);
        updateCurrentYStar(y);
        context.drawImage(image, x, y);
      };
      updateStarPlaced(true)
    }
    if (starPlaced && !bonePlaced) {
      image.src = `data:image/svg+xml;base64,${window.btoa(boneSvg)}`;
      image.onload = () => {
        updateCurrentXBone(x);
        updateCurrentYBone(y);
        context.drawImage(image, x, y);
      };
      updateBonePlaced(true)
    }
  }

  useEffect(() => {
    const canvasElem = document.getElementById("canvasElem")
    canvasElem.height = window.innerHeight;
    canvasElem.width = window.innerWidth;
    
    var imageStar = new Image();
    imageStar.src = `data:image/svg+xml;base64,${window.btoa(starSvg)}`;

    var imageBone = new Image();
    imageBone.src = `data:image/svg+xml;base64,${window.btoa(boneSvg)}`;

    mouseEvents();
    resetCanvas();
    drawImage();

    function resetCanvas() {
      const context = canvas.current.getContext('2d');
      context.fillStyle = '#50B175';
      context.fillRect(0, 0, canvas.current.width, canvas.current.height);
    }

    function mouseEvents() {

      canvas.current.onmousedown = function (e) {

        var mouseX = e.pageX - this.offsetLeft;
        var mouseY = e.pageY - this.offsetTop;

        if (mouseX >= (currentXStar - imageStar.width / 2) &&
          mouseX <= (currentXStar + imageStar.width / 2) &&
          mouseY >= (currentYStar - imageStar.height / 2) &&
          mouseY <= (currentYStar + imageStar.height / 2)) {
          updateIsStarDraggable(true);
        }

        if (mouseX >= (currentXBone - imageBone.width / 2) &&
          mouseX <= (currentXBone + imageBone.width / 2) &&
          mouseY >= (currentYBone - imageBone.height / 2) &&
          mouseY <= (currentYBone + imageBone.height / 2)) {
          updateIsBoneDraggable(true);
        }
      };

      canvas.current.onmousemove = function (e) {
        if (isStarDraggable) {
          updateCurrentXStar(e.pageX - this.offsetLeft);
          updateCurrentYStar(e.pageY - this.offsetTop);
        }
        if (isBoneDraggable) {
          updateCurrentXBone(e.pageX - this.offsetLeft);
          updateCurrentYBone(e.pageY - this.offsetTop);
        }
      };
      canvas.current.onmouseup = function (e) {
        updateIsStarDraggable(false);
        updateIsBoneDraggable(false);
      };
      canvas.current.onmouseout = function (e) {
        updateIsStarDraggable(false);
        updateIsBoneDraggable(false);
      };

    }

    function drawImage() {
      const context = canvas.current.getContext('2d');
      if (starPlaced) {
        context.drawImage(imageStar, currentXStar - (imageStar.width / 2), currentYStar - (imageStar.height / 2));
      }
      if (bonePlaced) {
        context.drawImage(imageBone, currentXBone - (imageBone.width / 2), currentYBone - (imageBone.height / 2));
      }
    }

  }, [starSvg, starPlaced, boneSvg, bonePlaced, currentXStar, currentYStar, isStarDraggable, currentXBone, currentYBone, isBoneDraggable])


  function handleInfoClick() {
    updateShowInfoModal(true);
  }

  return (

    <div className="flex flex-col items-center justify-between min-h-screen h-full">
      <main className="flex flex-col items-center justify-center absolute h-full w-full">
        {/* CANVAS */}
        <canvas id={"canvasElem"} ref={canvas} className="bg-green absolute"
          onClick={(e) => { handleCanvasClick(canvas.current, e) }}
        />

      </main >

      <nav className="flex justify-between w-full text-pink font-[family-name:var(--font-custom)] text-xl font-bold absolute pl-10 pr-10">
        <h1 className="mt-7 mr-7">BEE&apos;S</h1>
        <h1 className="mt-7 mr-7">KNEES</h1>
        <h1 className="mt-7 mr-7">DOG</h1>
        <h1 className="mt-7">WALKING</h1>
      </nav>

      <footer className=" flex gap-6 flex-wrap items-center justify-between w-full text-pink font-[family-name:var(--font-custom)] text-xl font-bold absolute bottom-0 pl-10 pr-10">
        <a
          className="flex items-center gap-2 hover:text-stroke-pink hover:text-stroke-2 hover:text-[#0000]"
          href="mailto:willowweebs1963@icloud.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact
        </a>
        <a
          className="flex items-center gap-2 hover:text-stroke-pink hover:text-stroke-2 hover:text-[#0000]"
          href="https://www.instagram.com/beeskneesbyjo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Follow
        </a>
        <button
          className="flex items-center gap-2 hover:text-stroke-pink hover:text-stroke-2 hover:text-[#0000]"
          onClick={handleInfoClick}
        >
          Info
        </button>
      </footer>

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

    </div >
  );
}
