import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber"

const Car2 = (props) => {
  const { nodes, materials } = useGLTF("/auto_beter.glb");
  const wiel1 = useRef()
  const wiel2 = useRef()
  const wiel3 = useRef()
  const wiel4 = useRef()

  useFrame((state) => {
    wiel1.current.rotation.y += 0.05
    wiel2.current.rotation.y += 0.05
    wiel3.current.rotation.y += 0.05
    wiel4.current.rotation.y += 0.05
  })


  return (
    <group {...props} dispose={null} scale={0.05} rotation={[0, Math.PI/2, 0]} position={[0, .05, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.roof.geometry}
        material={materials["Material.001"]}
        position={[1.3, 16.2, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wiper2.geometry}
        material={materials["Default OBJ"]}
        position={[-0.8, 13.7, -0.3]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Led_case.geometry}
        material={materials.Material}
        position={[-3.8, 11, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />

      {/* wiel1 */}
      <mesh
        ref={wiel1}
        castShadow
        receiveShadow
        geometry={nodes.bolts006.geometry}
        material={materials["Default OBJ"]}
        position={[-25, 6.8, 17]}
        rotation={[Math.PI / 2, 0, 0]}
      />

      {/* wiel2 */}
      <mesh
        ref={wiel2}
        castShadow
        receiveShadow
        geometry={nodes.bolts3.geometry}
        material={materials["Default OBJ"]}
        position={[-25, 6.8, -17]}
        rotation={[Math.PI / 2, 0, 0]}
      />

      {/* wiel3 */}
      <mesh
        ref={wiel3}
        castShadow
        receiveShadow
        geometry={nodes.bolts004.geometry}
        material={materials["Default OBJ"]}
        position={[28.6, 7.5, -17]}
        rotation={[Math.PI / 2, 0, 0]}
      />

      {/* wiel4 */}
      <mesh
        ref={wiel4}
        castShadow
        receiveShadow
        geometry={nodes.bolts005.geometry}
        material={materials["Default OBJ"]}
        position={[28.6, 7.5, 17]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/auto_beter.glb");

export default Car2