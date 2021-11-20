
import './App.css';
import {useState, useRef} from 'react'
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Scene } from './Loader';
import { Html, useProgress } from '@react-three/drei';
import {useSpring, animated} from '@react-spring/three';




function App() {

  function Loader() {
    const { progress } = useProgress()
    return <Html center style={{ color: 'white' }}>{progress} % loaded</Html>
  }

  const [startPosition, setStartPosition] = useState([-2,0,0]);
  const [startRotation, setStartRotation] = useState([0,Math.PI,0])

  const [active, setActive]=useState(true)
  const myMesh = useRef();
  const {rotation,position}= useSpring({ rotation: active ? startRotation : [0,Math.PI/2,0], position: active ? startPosition : [-0.05,0,-0.07] ,config: { duration: 3000 }  })
  return (
    <div>
      <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 8] }}>
        <Suspense fallback={null}>
          <ambientLight />
          <pointLight position={[10, 20, 10]} />
          <pointLight position={[-5, -15, 30]} />
          <Suspense fallback={<Loader />}>
            <animated.mesh position={position} rotation={rotation}>
            <Scene  />
            </animated.mesh>
          </Suspense>


        </Suspense>
      </Canvas>
      <div className={'information'}>
        <p id={'info'}>This work is based on "2021 Lamborghini Countach LPI 800-4"</p>
      </div>
      <div className={'controllPanel'}>
        <div className={'buttonContainer'}>
          <button className={'buttonA'} onClick={() => setActive(!active)}>left</button>
          <button className={'buttonA'}>right</button>
          <button className={'buttonA'}>top</button>
          <button className={'buttonA'}>bottom</button>
        </div>
      </div>

    </div>

  );
}

export default App;
