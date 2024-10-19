import { Suspense, useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import Island from '../models/Island';
import Sky from '../models/Sky';
import Plane from '../models/Plane';
import Bird from '../models/Bird';
import Homeinfo from '../components/Homeinfo';
import sakura from "../assets/sakura.mp3"
import { soundoff, soundon } from '../assets/icons';
function Home() {
  const audioRef = useRef(new Audio(sakura))
  audioRef.current.loop = true;
  audioRef.current.volume = 0.4;
  const [currentStage, setCurrentStage] = useState(1);
  const [isPlayingMusic, setisPlayingMusic] = useState(false);
  const [isRotating, setIsRotating] = useState(false);

  useEffect(() => {
    if (isPlayingMusic) { audioRef.current.play() 
     };
    return ()=>{
      audioRef.current.pause()
    };
  }, [isPlayingMusic])

  const adjustIslandforScreenSize = () => {
    const screenSize = window.innerWidth;
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];
    if (screenSize < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }
    return [screenScale, screenPosition, rotation];
  }
  const [islandScale, islandPosition, islandRotation] = adjustIslandforScreenSize();

  const adjustPlaneforScreenSize = () => {
    const screenSize = window.innerWidth;
    let screenScale = null;
    let screenPosition = null;
    if (screenSize < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }
    return [screenScale, screenPosition];
  }
  const [PlaneScale, PlanePosition] = adjustPlaneforScreenSize();
  return (
    <section className='h-screen w-full relative'>
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <Homeinfo currentStage={currentStage} />}
      </div>
      <Canvas className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`} camera={{ near: 0.1, far: 1000 }}>
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight skyColor='#b1e1ff' groundColor='#000000' intensity={1} />
          <Bird />
          <Sky isRotating={isRotating} />
          <Island setCurrentStage={setCurrentStage} scale={islandScale} position={islandPosition} rotation={islandRotation} isRotating={isRotating} setIsRotating={setIsRotating} />
          <Plane isRotating={isRotating} rotation={[0, 20, 0]} scale={PlaneScale} position={PlanePosition} />
        </Suspense>
      </Canvas>
      <div className='absolute bottom-2 left-2'>
        <img src={
          isPlayingMusic ? soundon : soundoff
        } alt="sound"
          className='h-10 w-10 object-contain cursor-pointer'
          onClick={() => setisPlayingMusic(!isPlayingMusic)} />
      </div>
    </section>
  );
}

export default Home;
