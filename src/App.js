
import './App.css';
//import {useState} from 'react'
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Scene } from './Loader';
import { Html, useProgress } from '@react-three/drei'




function App() {

  function Loader() {
    const { progress } = useProgress()
    return <Html center style={{color:'white'}}>{progress} % loaded</Html>
  }

  return (
    <div>
      <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 8] }}>
        <Suspense fallback={null}>
          <ambientLight />
          <pointLight position={[10, 20, 10]} />
          <pointLight position={[-5, -15, 30]} />
          <Suspense fallback={<Loader />}>
            <Scene />
          </Suspense>


        </Suspense>
      </Canvas>
<div>
<p>This work is based on "2021 Lamborghini Countach LPI 800-4"</p>
</div>

    </div>

  );
}

export default App;
