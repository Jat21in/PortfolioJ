import React from 'react'
import { useGLTF } from '@react-three/drei'

export function ConsoleModel(props) {
  const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}/consoleModel.glb`);
  return (
    <group {...props} dispose={null}>
      <group position={[0, -199.067, 197.453]} rotation={[-1.57, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials['Glass_-_Heavy_Color']} />
        <mesh geometry={nodes.Object_3.geometry} material={materials['Plastic_-_Textured_-_Regular']} />
        <mesh geometry={nodes.Object_4.geometry} material={materials['Plastic_-_Translucent_Glossy_Blue']} />
        <mesh geometry={nodes.Object_5.geometry} material={materials['Plastic_-_Translucent_Glossy_Gray']} />
        <mesh geometry={nodes.Object_6.geometry} material={materials['Plastic_-_Translucent_Matte_Gray']} />
        <mesh geometry={nodes.Object_7.geometry} material={materials['Plastic_-_Translucent_Matte_Gray_1']} />
        <mesh geometry={nodes.Object_8.geometry} material={materials['Steel_-_Satin']} />
      </group>
    </group>
  )
}

useGLTF.preload(`${import.meta.env.BASE_URL}/consoleModel.glb`);
