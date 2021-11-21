
import './App.css';
import {useState, useRef} from 'react'
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Scene } from './Loader';
import { Html, OrbitControls } from '@react-three/drei';
import {useSpring, animated} from '@react-spring/three';




function App() {

  function Loader() {
    //const { progress } = useProgress()
    //return <Html center style={{ color: 'white' }}>{progress} % loaded</Html>
    return <Html center style={{ color: 'white' }}>loading...</Html>
  }

  const [startPosition, setStartPosition] = useState([-2,0,0]);
  const [startRotation, setStartRotation] = useState([0,Math.PI,0]);
  const [finalPosition, setFinalPosition] = useState([-0.05,0,-0.07]);
  const [finalRotation, setFinalRotation] = useState([0,Math.PI/2,0])

  const [active, setActive]=useState(true)
  const myMesh = useRef();
  const {rotation,position}= useSpring({ rotation: active ? startRotation : finalRotation, position: active ? startPosition : finalPosition ,config: { duration: 3000 }  })

  function leftTurn(){
    setFinalPosition([-0.05,0,-0.07]);
    setFinalRotation([0,Math.PI/2,0])
    setActive(!active)
  }

  function rightTurn(){
    
    setFinalPosition([-0.05,0,4.5]);
    setFinalRotation([0,1.5*Math.PI,0])
    setActive(!active)
  }
  return (
    <div>
      <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 8] }}>
        <Suspense fallback={null}>
          <OrbitControls />
          <ambientLight />
          <pointLight position={[10, 20, 10]} />
          <pointLight position={[-5, -15, 30]} />
          <Suspense fallback={<Loader />}>
            <animated.mesh position={position} rotation={rotation} ref={myMesh}>
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
          <button className={'buttonA'} onClick={() => leftTurn()}>left/front</button>
          <button className={'buttonA'} onClick={() => rightTurn()}>right/front</button>
          <button className={'buttonA'}>top</button>
          <button className={'buttonA'}>bottom</button>
        </div>
      </div>

    </div>

  );
}

export default App;
