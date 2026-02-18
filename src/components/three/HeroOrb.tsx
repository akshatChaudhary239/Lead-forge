// @ts-nocheck
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";

const HeroOrb = () => {
    const meshRef = useRef(null);

    useFrame(({ clock }) => {
        if (meshRef.current) {
            meshRef.current.rotation.y = clock.getElapsedTime() * 0.2;
            meshRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.3) * 0.2;
        }
    });

    return (
        <mesh ref={meshRef} position={[0, 0, -2]} scale={1.5}>
            <Sphere args={[1, 100, 100]}>
                <MeshDistortMaterial
                    color="#c8ff00"
                    roughness={0.1}
                    metalness={0.9} // Increased metalness for premium look
                    distort={0.4}
                    speed={2}
                    wireframe={false} // Solid look
                    emissive="#c8ff00"
                    emissiveIntensity={0.1}
                />
            </Sphere>
        </mesh>
    );
};

export default HeroOrb;
