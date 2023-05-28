import React, { Suspense, useRef, useState } from 'react'
import * as THREE from "three";
import { Canvas, useFrame } from '@react-three/fiber'
import  { GlitchMode} from 'postprocessing';
import {  OrbitControls, Stage } from '@react-three/drei'


function Box(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += delta))
  useFrame((state, delta) => (ref.current.rotation.y += delta))
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <boxGeometry />
      <meshPhongMaterial transparent opacity={0.9} color={hovered ? '#5d81ba' : '#625df5'} />
    </mesh>
  )
}

export default function Cubes(){

    return (
        <Canvas dpr={[1, 2]} camera={{ fov: 80 }}>
            <Suspense fallback={null}>
              <Stage preset="soft" intensity={0.0} environment="night" adjustCamera center shadows='accumulative'>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <pointLight position={[-10, -10, -10]} />
                <Box position={[-1.9, 2, 0]} scale={2} />
                <Box position={[1.2, -0.9, 0]} />
                <OrbitControls />
              </Stage>
              {/* <EffectComposer>
                <Scanline blendFunction={BlendFunction.PIN_LIGHT} density={1.25} />
                <Glitch
                  delay={[1.5, 3]} // min and max glitch delay
                  duration={[0.6, 1.0]} // min and max glitch duration
                  strength={[0.3, 1.0]} // min and max glitch strength
                  mode={GlitchMode.SPORADIC} // glitch mode
                  active // turn on/off the effect (switches between "mode" prop and GlitchMode.DISABLED)
                  ratio={0.85} // Threshold for strong glitches, 0 - no weak glitches, 1 - no strong glitches.
                />
              </EffectComposer> */}
            </Suspense>
        </Canvas> 
    )
}
