import * as THREE from "three";
import { useEffect, useMemo } from "react";
import { useRef } from "react";

export default function CustomObject() {
  const geometryRef = useRef();
  //three vertices per triangle
  const verticesCount = 10 * 3;

  const positions = useMemo(() => {
    //3 values per vertex x, y, z
    const positions = new Float32Array(verticesCount * 3);

    for (let i = 0; i < verticesCount * 3; i++) {
      //gets values between -0.5 and 0.5 and multiplys by 3
      positions[i] = (Math.random() - 0.5) * 3;
    }
    return positions;
  }, []);

  useEffect(() => {
    geometryRef.current.computeVertexNormals();
  }, []);

  return (
    <mesh scale={0.5} position-z={3}>
      <bufferGeometry ref={geometryRef}>
        <bufferAttribute
          attach="attributes-position"
          count={verticesCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <meshStandardMaterial color="red" side={THREE.DoubleSide} />
    </mesh>
  );
}
