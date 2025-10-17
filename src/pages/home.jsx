import { useEffect, useRef, useState } from "react";
import Loader from "../components/loader";
import useSessionStorage from "../../hooks/useSessionStorage";
import "../styles/home.css";

function Home() {
  const [hasLoaded, setHasLoaded] = useSessionStorage("hasLoaded", false);
  const [showCanvas, setShowCanvas] = useState(hasLoaded);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const loaderTextRef = useRef(null);
  const loaderBarRef = useRef(null);
  const debugRef = useRef(null);

  useEffect(() => {
    if (!showCanvas) return;

    const easing = 0.09;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const video = videoRef.current;
    const loaderText = loaderTextRef.current;
    const loaderBar = loaderBarRef.current;
    const debugEl = debugRef.current;

    let videoLoaded = false;
    let scrollTarget = 0;
    let smooth = 0;
    let firstFrameDrawn = false;
    let rafId = 0;

    function resizeCanvas() {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function drawVideoToCover() {
      if (!video || video.readyState < 2) return;
      const vw = canvas.clientWidth;
      const vh = canvas.clientHeight;
      const iw = video.videoWidth;
      const ih = video.videoHeight;
      if (!iw || !ih) return;
      const scale = Math.max(vw / iw, vh / ih);
      const w = iw * scale;
      const h = ih * scale;
      const x = (vw - w) / 2;
      const y = (vh - h) / 2;
      ctx.clearRect(0, 0, vw, vh);
      ctx.drawImage(video, x, y, w, h);
    }

    function computeScrollPercent() {
      const el = document.scrollingElement || document.documentElement;
      const docH = el.scrollHeight - el.clientHeight;
      if (docH <= 0) return 0;
      return Math.max(0, Math.min(1, el.scrollTop / docH));
    }

    function loop() {
      smooth += (scrollTarget - smooth) * easing;
      
      if (videoLoaded && video.duration) {
        const targetTime = smooth * video.duration;
        video.currentTime = targetTime;
      }
      
      drawVideoToCover();
      rafId = requestAnimationFrame(loop);
    }

    function onVideoLoadedMetadata() {
      videoLoaded = true;
      video.currentTime = 0;
      
      if (loaderText) loaderText.textContent = "Video loaded: 100%";
      if (loaderBar) loaderBar.style.width = "100%";
      
      if (!firstFrameDrawn) {
        firstFrameDrawn = true;
        drawVideoToCover();
      }
    }

    function onVideoProgress() {
      if (video.buffered.length > 0 && video.duration) {
        const bufferedEnd = video.buffered.end(video.buffered.length - 1);
        const pct = Math.round((bufferedEnd / video.duration) * 100);
        if (loaderText) loaderText.textContent = `Loading video: ${pct}%`;
        if (loaderBar) loaderBar.style.width = pct + "%";
      }
    }

    function onScroll() {
      scrollTarget = computeScrollPercent();
    }

    function onResize() {
      resizeCanvas();
      if (firstFrameDrawn) {
        drawVideoToCover();
      }
    }

    resizeCanvas();
    
    video.addEventListener("loadedmetadata", onVideoLoadedMetadata);
    video.addEventListener("progress", onVideoProgress);
    video.addEventListener("seeked", drawVideoToCover);
    
    rafId = requestAnimationFrame(loop);
    window.addEventListener("scroll", onScroll);
    onScroll();
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      video.removeEventListener("loadedmetadata", onVideoLoadedMetadata);
      video.removeEventListener("progress", onVideoProgress);
      video.removeEventListener("seeked", drawVideoToCover);
    };
  }, [showCanvas]);

  useEffect(() => {
    if (!hasLoaded && !showCanvas) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [hasLoaded, showCanvas]);

  return (
    <>
      {!hasLoaded && !showCanvas && (
        <Loader
          onComplete={() => {
            setShowCanvas(true);
            setHasLoaded(true);
          }}
        />
      )}

      {showCanvas && (
        <>
          <video
            ref={videoRef}
            src="/videos/video2.mp4"
            preload="auto"
            playsInline
            muted
            crossOrigin="anonymous"
            style={{ display: "none" }}
          />

          <canvas id="canvas" ref={canvasRef} aria-hidden="true" />

          <div id="loader" aria-hidden="true">
            <div id="loader-text" ref={loaderTextRef}>
              Loading video: 0%
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
