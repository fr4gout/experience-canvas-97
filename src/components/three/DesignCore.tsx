import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface DesignCoreProps {
  quality: "high" | "low";
  animate: boolean;
}

const PANELS: Array<{ position: [number, number, number]; rotation: [number, number, number]; scale: [number, number] }> = [
  { position: [1.9, 0.6, 0.4], rotation: [0.1, -0.6, 0.06], scale: [1.5, 1] },
  { position: [-2.1, -0.5, 0.2], rotation: [-0.08, 0.55, -0.05], scale: [1.2, 0.8] },
  { position: [0.4, -1.7, -0.6], rotation: [0.5, 0.1, 0.12], scale: [1.1, 0.7] },
];

export function DesignCore({ quality, animate }: DesignCoreProps) {
  const group = useRef<THREE.Group>(null);
  const inner = useRef<THREE.Mesh>(null);
  const ringA = useRef<THREE.Mesh>(null);
  const ringB = useRef<THREE.Mesh>(null);
  const dust = useRef<THREE.Points>(null);

  const particleCount = quality === "high" ? 420 : 160;

  const particles = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i += 1) {
      const radius = 3 + Math.random() * 3.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = (Math.random() - 0.5) * 6;
      positions[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta);
    }
    return positions;
  }, [particleCount]);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    const scroll =
      typeof window === "undefined"
        ? 0
        : window.scrollY / Math.max(window.innerHeight, 1);

    if (group.current) {
      const targetY = animate ? state.pointer.x * 0.42 + t * 0.09 : 0.4;
      const targetX = animate ? -state.pointer.y * 0.26 + scroll * 0.5 : 0.1;
      group.current.rotation.y = THREE.MathUtils.damp(
        group.current.rotation.y,
        targetY,
        3,
        delta,
      );
      group.current.rotation.x = THREE.MathUtils.damp(
        group.current.rotation.x,
        targetX,
        3,
        delta,
      );
      group.current.position.y = animate
        ? Math.sin(t * 0.6) * 0.12 - scroll * 0.8
        : 0;
    }

    if (!animate) return;
    if (inner.current) inner.current.rotation.y = t * 0.25;
    if (ringA.current) ringA.current.rotation.z = t * 0.18;
    if (ringB.current) ringB.current.rotation.x = -t * 0.14;
    if (dust.current) dust.current.rotation.y = t * 0.03;
  });

  return (
    <group ref={group} scale={quality === "high" ? 1 : 0.85}>
      <ambientLight intensity={0.35} />
      <directionalLight position={[4, 6, 5]} intensity={1.4} color="#cfe6ff" />
      <pointLight position={[-5, -2, -3]} intensity={40} color="#6bbfff" distance={18} />
      <pointLight position={[3, 3, 4]} intensity={18} color="#9fd4ff" distance={16} />

      {/* Glass shell */}
      <mesh>
        <icosahedronGeometry args={[1.7, 1]} />
        <meshPhysicalMaterial
          color="#0d1730"
          transmission={0.9}
          thickness={1.4}
          roughness={0.16}
          metalness={0.1}
          ior={1.4}
          transparent
          opacity={0.85}
        />
      </mesh>

      {/* Metallic core */}
      <mesh ref={inner}>
        <octahedronGeometry args={[0.85, 0]} />
        <meshStandardMaterial
          color="#8fb4dd"
          metalness={1}
          roughness={0.18}
          emissive="#1c4a75"
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* Wireframe cage */}
      <mesh scale={1.32}>
        <icosahedronGeometry args={[1.7, 1]} />
        <meshBasicMaterial color="#6bbfff" wireframe transparent opacity={0.16} />
      </mesh>

      {/* Emissive rings */}
      <mesh ref={ringA} rotation={[Math.PI / 2.4, 0, 0]}>
        <torusGeometry args={[2.55, 0.008, 8, 128]} />
        <meshBasicMaterial color="#6bbfff" transparent opacity={0.75} />
      </mesh>
      <mesh ref={ringB} rotation={[0, 0.6, Math.PI / 3]}>
        <torusGeometry args={[3.1, 0.006, 8, 128]} />
        <meshBasicMaterial color="#6bbfff" transparent opacity={0.4} />
      </mesh>

      {/* Floating UI planes */}
      {PANELS.map((panel, i) => (
        <group key={i} position={panel.position} rotation={panel.rotation}>
          <mesh>
            <planeGeometry args={panel.scale} />
            <meshBasicMaterial
              color="#0e1224"
              transparent
              opacity={0.55}
              side={THREE.DoubleSide}
            />
          </mesh>
          <lineSegments>
            <edgesGeometry
              args={[new THREE.PlaneGeometry(panel.scale[0], panel.scale[1])]}
            />
            <lineBasicMaterial color="#6bbfff" transparent opacity={0.55} />
          </lineSegments>
        </group>
      ))}

      {/* Dust */}
      <points ref={dust}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[particles, 3]}
            count={particleCount}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.028}
          color="#9fd4ff"
          transparent
          opacity={0.7}
          sizeAttenuation
        />
      </points>
    </group>
  );
}
