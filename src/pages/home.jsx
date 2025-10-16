import { useEffect, useRef, useState } from "react";
import Loader from "../components/loader";
import "../styles/home.css";

function Home() {
  const [showCanvas, setShowCanvas] = useState(false);
  const canvasRef = useRef(null);
  const loaderTextRef = useRef(null);
  const loaderBarRef = useRef(null);
  const debugRef = useRef(null);

  useEffect(() => {
    if (!showCanvas) return;

    const frameCount = 583;
    const prefix = "00";
    const ext = ".jpg";
    const padding = 3;
    const framesPath = "/frames/";
    const easing = 0.09;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const loaderText = loaderTextRef.current;
    const loaderBar = loaderBarRef.current;
    const debugEl = debugRef.current;

    let images = new Array(frameCount);
    let loadedCount = 0;
    let scrollTarget = 0;
    let smooth = 0;
    let firstFrameDrawn = false;
    let rafId = 0;

    function pad(num) {
      return String(num).padStart(padding, "0");
    }
    function frameUrl(i) {
      return framesPath + prefix + pad(i) + ext;
    }

    function resizeCanvas() {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function drawImageToCover(img) {
      if (!img || !img.width) return;
      const vw = canvas.clientWidth;
      const vh = canvas.clientHeight;
      const iw = img.width;
      const ih = img.height;
      const scale = Math.max(vw / iw, vh / ih);
      const w = iw * scale;
      const h = ih * scale;
      const x = (vw - w) / 2;
      const y = (vh - h) / 2;
      ctx.clearRect(0, 0, vw, vh);
      ctx.drawImage(img, x, y, w, h);
    }

    function computeScrollPercent() {
      const el = document.scrollingElement || document.documentElement;
      const docH = el.scrollHeight - el.clientHeight;
      if (docH <= 0) return 0;
      return Math.max(0, Math.min(1, el.scrollTop / docH));
    }

    function loop() {
      smooth += (scrollTarget - smooth) * easing;
      const index = Math.max(
        0,
        Math.min(frameCount - 1, Math.floor(smooth * (frameCount - 1)))
      );
      const img = images[index] || images.find(Boolean);
      if (img) drawImageToCover(img);
      rafId = requestAnimationFrame(loop);
    }

    function preloadAll() {
      for (let i = 1; i <= frameCount; i++) {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.onload = () => {
          images[i - 1] = img;
          loadedCount++;
          const pct = Math.round((loadedCount / frameCount) * 100);
          if (loaderText) loaderText.textContent = `Loading frames: ${pct}%`;
          if (loaderBar) loaderBar.style.width = pct + "%";
          if (!firstFrameDrawn) {
            firstFrameDrawn = true;
            drawImageToCover(img);
          }
        };
        img.src = frameUrl(i);
      }
    }

    function onScroll() {
      scrollTarget = computeScrollPercent();
    }
    function onResize() {
      resizeCanvas();
      if (firstFrameDrawn) {
        const img = images.find(Boolean);
        if (img) drawImageToCover(img);
      }
    }

    resizeCanvas();
    preloadAll();
    rafId = requestAnimationFrame(loop);
    window.addEventListener("scroll", onScroll);
    onScroll();
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      images = [];
    };
  }, [showCanvas]);

  return (
    <>
      {!showCanvas && (
        <Loader
          onComplete={() => {
            setShowCanvas(true);
          }}
        />
      )}

      {showCanvas && (
        <>
          <canvas id="canvas" ref={canvasRef} aria-hidden="true" />

          <div id="loader" aria-hidden="true">
            <div id="loader-text" ref={loaderTextRef}>
              Loading frames: 0%
            </div>
            <div className="bar">
              <i id="loader-bar" ref={loaderBarRef}></i>
            </div>
          </div>

          <div id="debug" ref={debugRef} aria-hidden="true">
            debug: initializing...
          </div>

          <div className="content-block">
            <h1>PlaceHolders</h1>
          </div>
          <div className="content-block">
            <h1>PlaceHolders</h1>
          </div>
          <div className="content-block">
            <h1>PlaceHolders</h1>
          </div>
          <div className="content-block">
            <h1>PlaceHolders</h1>
          </div>
        </>
      )}
    </>
  );
}

export default Home;