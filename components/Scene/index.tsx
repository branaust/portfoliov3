import { Canvas } from '@react-three/fiber'
import Model from './Model';
import { Environment } from '@react-three/drei'

export default function Index() {
  return (
    <Canvas style={{ position: "absolute"}}>
        <Model />
        <directionalLight intensity={20} position={[0, 2, 3]}/>
        <Environment preset="sunset"/>
    </Canvas>
  )
}