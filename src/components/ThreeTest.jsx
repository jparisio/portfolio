// import React from "react";
// import { useFrame, extend, useThree } from "@react-three/fiber";
// import { useRef } from "react";
// import { OrbitControls } from "three/examples/jsm/Addons.js";
// import CustomObject from "./CustomObject";

// extend({ OrbitControls });

// export default function ThreeTest() {
//   //vals
//   const cubeRef = useRef(null);
//   const groupRef = useRef(null);
//   const { camera, gl } = useThree();

//   useFrame((state, delta) => {
//     //state has a bunch of useful stuff
//     // const time = state.clock.getElapsedTime();
//     // state.camera.position.x = Math.sin(time) * 8;
//     // state.camera.position.z = Math.cos(time) * 8;
//     // state.camera.lookAt(0, 0, 0);
//     cubeRef.current.rotation.y += delta;
//     // groupRef.current.rotation.y += delta;
//   });

//   return (
//     <>
//       <orbitControls args={[camera, gl.domElement]} />
//       <directionalLight position={[1, 2, 3]} intensity={4.5} />
//       <ambientLight intensity={1.5} />
//       <group ref={groupRef}>
//         <mesh scale={0.4} position-x={-0.5}>
//           <sphereGeometry />
//           <meshStandardMaterial color="hotpink" />
//         </mesh>
//         <mesh
//           ref={cubeRef}
//           rotation-y={Math.PI * 0.25}
//           position-x={1}
//           scale={0.5}
//         >
//           <boxGeometry />
//           <meshStandardMaterial color="mediumpurple" />
//         </mesh>
//       </group>

//       <mesh position-y={-0.8} rotation-x={-Math.PI * 0.5} scale={4}>
//         <planeGeometry />
//         <meshStandardMaterial color="greenyellow" />
//       </mesh>
//       <CustomObject />
//     </>
//   );
// }

export default function ThreeTest() {
  return (
    <div>
      <h1>ThreeTest</h1>
    </div>
  );
}
