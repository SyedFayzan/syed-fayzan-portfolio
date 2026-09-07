import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Orbiting Ring Component
function OrbitRing({ radius, speed, rotationAxis, color }) {
  const ringRef = useRef();

  useFrame((state, delta) => {
    if (ringRef.current) {
      ringRef.current.rotation.x += delta * speed * rotationAxis[0];
      ringRef.current.rotation.y += delta * speed * rotationAxis[1];
      ringRef.current.rotation.z += delta * speed * rotationAxis[2];
    }
  });

  return (
    <group ref={ringRef}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[radius, 0.02, 16, 100]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.6}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </group>
  );
}

// Floating Tech Nodes Component
function FloatingNodes() {
  const nodes = useMemo(() => {
    const temp = [];
    const colors = ['#7c6af7', '#00e5ff', '#ec4899', '#a78bfa', '#38bdf8'];
    for (let i = 0; i < 28; i++) {
      const radius = 2.2 + Math.random() * 1.6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      const size = 0.04 + Math.random() * 0.06;
      const color = colors[i % colors.length];
      temp.push({ position: [x, y, z], size, color, speed: 0.5 + Math.random() });
    }
    return temp;
  }, []);

  const groupRef = useRef();

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15;
      groupRef.current.rotation.x += delta * 0.08;
    }
  });

  return (
    <group ref={groupRef}>
      {nodes.map((node, idx) => (
        <mesh key={idx} position={node.position}>
          <octahedronGeometry args={[node.size, 0]} />
          <meshStandardMaterial
            color={node.color}
            emissive={node.color}
            emissiveIntensity={0.9}
            roughness={0.1}
            metalness={0.9}
          />
        </mesh>
      ))}
    </group>
  );
}

// Background Particle Galaxy
function ParticleGalaxy({ count = 280 }) {
  const pointsRef = useRef();

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const colorPalette = [
      new THREE.Color('#7c6af7'),
      new THREE.Color('#00e5ff'),
      new THREE.Color('#38bdf8'),
      new THREE.Color('#c4b5fd'),
      new THREE.Color('#ffffff')
    ];

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      pos[i3] = (Math.random() - 0.5) * 14;
      pos[i3 + 1] = (Math.random() - 0.5) * 14;
      pos[i3 + 2] = (Math.random() - 0.5) * 12;

      const chosenColor = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      col[i3] = chosenColor.r;
      col[i3 + 1] = chosenColor.g;
      col[i3 + 2] = chosenColor.b;
    }
    return [pos, col];
  }, [count]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y -= delta * 0.04;
      pointsRef.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.7}
        sizeAttenuation
      />
    </points>
  );
}

// Central Interactive Geometric Core
function CentralCore() {
  const meshRef = useRef();
  const wireframeRef = useRef();

  useFrame((state, delta) => {
    // Smooth mouse follow parallax
    const targetX = (state.pointer.x * Math.PI) / 6;
    const targetY = (state.pointer.y * Math.PI) / 6;

    if (meshRef.current) {
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetY, 0.05) + delta * 0.2;
      meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetX, 0.05) + delta * 0.3;
    }

    if (wireframeRef.current) {
      wireframeRef.current.rotation.x = meshRef.current.rotation.x * 1.2;
      wireframeRef.current.rotation.y = -meshRef.current.rotation.y * 1.1;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={0.6} floatIntensity={0.8}>
      <group>
        {/* Inner Organic Distorted Core */}
        <Sphere ref={meshRef} args={[1.1, 64, 64]}>
          <MeshDistortMaterial
            color="#6d54f5"
            attach="material"
            distort={0.35}
            speed={2}
            roughness={0.2}
            metalness={0.8}
            emissive="#3b1fb5"
            emissiveIntensity={0.4}
          />
        </Sphere>

        {/* Outer Faceted Geometric Wireframe */}
        <mesh ref={wireframeRef}>
          <icosahedronGeometry args={[1.6, 1]} />
          <meshStandardMaterial
            color="#00e5ff"
            wireframe
            transparent
            opacity={0.35}
            emissive="#00e5ff"
            emissiveIntensity={0.5}
          />
        </mesh>

        {/* Orbital Gyroscopic Rings */}
        <OrbitRing radius={1.9} speed={0.4} rotationAxis={[1, 0.5, 0]} color="#7c6af7" />
        <OrbitRing radius={2.2} speed={-0.3} rotationAxis={[0.4, 1, 0.3]} color="#00e5ff" />
        <OrbitRing radius={2.5} speed={0.25} rotationAxis={[0.2, 0.3, 1]} color="#ec4899" />

        {/* Dynamic Nodes */}
        <FloatingNodes />
      </group>
    </Float>
  );
}

export default function HeroScene() {
  return (
    <div className="hero-canvas-container" style={{ width: '100%', height: '100%', minHeight: '440px' }}>
      <Canvas
        camera={{ position: [0, 0, 5.2], fov: 48 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        style={{ pointerEvents: 'auto' }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 10, 8]} intensity={1.5} color="#c4b5fd" />
        <directionalLight position={[-10, -10, -5]} intensity={1} color="#00e5ff" />
        <pointLight position={[0, 0, 3]} intensity={1.8} color="#7c6af7" />

        <CentralCore />
        <ParticleGalaxy count={250} />
      </Canvas>
    </div>
  );
}
