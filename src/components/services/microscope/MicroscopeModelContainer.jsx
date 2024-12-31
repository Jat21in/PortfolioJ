import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";
import { MicroscopeModel } from "./Microscope";

const MicroscopeModelContainer = () => {
  return (
    <Canvas>
      <Suspense fallback="loading...">
        <Stage environment="night" intensity={10}>
          <MicroscopeModel/>
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
        <PerspectiveCamera position={[-1,0,-2]} zoom={0.7} makeDefault />
      </Suspense>
    </Canvas>
  );
};

export default MicroscopeModelContainer;