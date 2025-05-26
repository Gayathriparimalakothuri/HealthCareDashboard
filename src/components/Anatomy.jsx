import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Html } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useLoader } from '@react-three/fiber'

// Function to load the 3d human anatomy model
function HumanModel() {
  const model = useLoader(GLTFLoader, '/models/HumanAnatomy.glb') 

  return <primitive object={model.scene} scale={[3, 3.8, 2]} 
      position={[0, 0, 0]} />
}

// function to display the human anatomy model in a canvas
function Anatomy() {
  return (
    <Canvas style={{ height: '100%' }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <HumanModel />

     {/*Handles the zoom, rotate properties of model */}
      <OrbitControls enableZoom={true} />

    </Canvas>
  )
}

export default Anatomy;
