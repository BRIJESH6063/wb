import { useRef } from "react";




function Video() {

  const videoRef = useRef(null) ;

  function handleStart() {
    videoRef.current.play() ;
  }

  function handleStop() {
    videoRef.current.pause() ;
  }

  function handleRestart() {
    // console.log(videoRef.current) ;
    videoRef.current.currentTime = 0; // Reset time to the beginning
    videoRef.current.play();          // Start playback
  }

  function handleBackward() {
    videoRef.current.currentTime -= 10; // Reset time to the beginning
    videoRef.current.play();          // Start playback
  }

  function handleFarward() {
    videoRef.current.currentTime += 10; // Reset time to the beginning
    videoRef.current.play();          // Start playback
  }

  return (
    <>
      <video ref={videoRef} src="/video/myvideo.mp4" width='600' height='400'></video>
      <div>
        <button onClick={handleStart}>START</button>
        <button onClick={handleStop}>PAUSE</button>
        <button onClick={handleRestart}>RESTART</button>
      </div>
      <div>
        <button onClick={handleBackward}>BACKWARD 10</button>
        <button onClick={handleFarward}>FARWARD 10</button>
      </div>
    </>
  )
}

export default Video ;