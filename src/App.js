import { Suspense, useState } from 'react';
import './App.css';
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Archer from './Archer'






function App() {
  const [action, setAction] = useState("RunForward")




  document.addEventListener('keydown', (event) => {
  var name = event.key;
  var code = event.code;

  if (code == "ArrowUp") {
    setAction("RunForward")
  }else{
    setAction("StandingIdle")
  }
  // Alert the key name and key code on keydown
  // alert(`Key pressed ${name} \r\n Key code value: ${code}`);
}, false);


  return (
    <>
    <Canvas>
    <ambientLight />
    <pointLight intensity={2} position={[-1, 1, 3]} color={"red"} />
    <pointLight intensity={2} position={[1, 1, 3]} color={"blue"} />
    <pointLight intensity={1} position={[0, 3, -10]} color={"white"} />
      <Suspense fallback={null}>
      <Archer action={action} />
      </Suspense>
      <OrbitControls />
    </Canvas>
    <div className='controls'> 
    <button onClick={()=> {setAction("RunForward")}}>Run Foward</button> 
    {/* <button onClick={()=> {setAction("Death")}}>Death</button>  */}
    {/* <button onClick={()=> {setAction("DrawArrow")}}>Draw Arrow</button>  */}
    <button  onClick={()=> {setAction("StandingIdle")}}>Idle</button> 
    </div>
    </>
  );
}

export default App;
