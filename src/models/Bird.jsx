import React from 'react'
import {useGLTF} from "@react-three/drei"
import birdScene from '../assets/3d/bird.glb'
function Bird() {
  const {scene,animations} = useGLTF(birdScene)
  return (
   <mesh position={[0,0,0]} scale={0.003}>
    <primitive object={scene} />
   </mesh>
  )
}

export default Bird
