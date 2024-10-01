import { useGLTF } from '@react-three/drei'
import planeScene from "../assets/3d/plane.glb"
function Plane() {
    const {scene,animation} = useGLTF(planeScene)
  return (
   <mesh position={[0,0,0]} scale={3}>
    <primitive object={scene}/>
   </mesh>
  )
}

export default Plane
