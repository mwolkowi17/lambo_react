
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from "@react-three/drei";
import {animated} from '@react-spring/three';

export function Scene(props) {
    //const gltf = useLoader(GLTFLoader, '/zawor_kulowy_three_kula1.glb')
    const gltf = useLoader(GLTFLoader, '/scene.gltf')
    return (
      <>
        {/*<OrbitControls  />*/}
        
        <primitive object={gltf.scene}  position={props.pos} rotation={props.rot}/>
        
      </>
    )
  }