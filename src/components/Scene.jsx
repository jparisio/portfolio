import { fragment, vertex } from "./Shader";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { useRef } from "react";

export default function Scene() {
  const amplitude = { value: 0.25, min: 0, max: 2, step: 0.1 };
  const waveLength = { value: 5, min: 0, max: 20, step: 0.5 };

  return (
    <div className="shader">
      <Canvas>
        <SceneContent
          amplitude={amplitude.value}
          waveLength={waveLength.value}
        />
      </Canvas>
      <div className="shader-wrapper">
        <h1 className="contact-header">lets get in touch</h1>
        <div className="bobbing-triangle"></div>
      </div>
    </div>
  );
}
function SceneContent({ amplitude, waveLength }) {
  const texture = useTexture("/phone.jpg");
  const materialRef = useRef();

  const uniforms = {
    uTime: { value: 0 },
    uAmplitude: { value: amplitude },
    uWaveLength: { value: waveLength },
    uTexture: { value: texture },
  };

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
    }
  });

  return (
    <mesh scale={[5, 5, 1]}>
      {" "}
      {/* Scale the plane geometry */}
      <planeGeometry args={[1, 1, 15, 15]} />
      <shaderMaterial
        ref={materialRef}
        wireframe={false}
        fragmentShader={fragment}
        vertexShader={vertex}
        uniforms={uniforms}
      />
    </mesh>
  );
}
