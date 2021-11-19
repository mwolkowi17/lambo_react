
import * as THREE from 'three'
import { useLoader, useFrame } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from "@react-three/drei";
import { useEffect, useRef } from 'react';


export function Kurek2(props) {

  const mixer = useRef();
  const gltf = useLoader(GLTFLoader, '/zawor_kulowy_three_kula3_kurek.glb')
  //animatio segment start
  useEffect(() => {
    if (gltf) {
      mixer.current = new THREE.AnimationMixer(gltf.scene)
      const action = mixer.current.clipAction(gltf.animations[0])
      console.log(gltf.animations)
      
      if(props.ifPlay){
      
      action.play()
      }
    }
  }, [gltf, props.ifPlay])

  useFrame((state, delta) => {
    mixer.current?.update(delta)
  })
  // animation segment end

  return (
    <>
      <OrbitControls />
      <primitive object={gltf.scene} dispose={null}   />
    </>
  )
}