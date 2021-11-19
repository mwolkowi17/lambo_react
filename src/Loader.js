
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from "@react-three/drei";

export function Scene(props) {
    //const gltf = useLoader(GLTFLoader, '/zawor_kulowy_three_kula1.glb')
    const gltf = useLoader(GLTFLoader, '/scene.gltf')
    return (
      <>
        <OrbitControls  />
        <primitive object={gltf.scene}  position={[-2,0,0]} rotation={[0,Math.PI,0]}/>
      </>
    )
  }