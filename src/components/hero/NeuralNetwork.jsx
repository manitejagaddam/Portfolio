import { useRef, useMemo, useCallback } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

const NODE_COUNT = 120
const CONNECTION_DISTANCE = 2.2

function NeuralNodes({ mousePos }) {
  const groupRef = useRef()
  const pointsRef = useRef()
  const linesRef = useRef()

  const { positions, linePositions } = useMemo(() => {
    const pos = new Float32Array(NODE_COUNT * 3)
    const nodes = []
    for (let i = 0; i < NODE_COUNT; i++) {
      const x = (Math.random() - 0.5) * 14
      const y = (Math.random() - 0.5) * 10
      const z = (Math.random() - 0.5) * 8
      pos[i * 3] = x
      pos[i * 3 + 1] = y
      pos[i * 3 + 2] = z
      nodes.push([x, y, z])
    }

    const lineVerts = []
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i][0] - nodes[j][0]
        const dy = nodes[i][1] - nodes[j][1]
        const dz = nodes[i][2] - nodes[j][2]
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz)
        if (dist < CONNECTION_DISTANCE) {
          lineVerts.push(...nodes[i], ...nodes[j])
        }
      }
    }

    return { positions: pos, linePositions: new Float32Array(lineVerts) }
  }, [])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (groupRef.current) {
      groupRef.current.rotation.y = mousePos.current.x * 0.4 + t * 0.04
      groupRef.current.rotation.x = mousePos.current.y * 0.25 + Math.sin(t * 0.15) * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={positions}
            count={NODE_COUNT}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.06}
          color="#00d4ff"
          transparent
          opacity={0.85}
          sizeAttenuation
        />
      </points>

      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={linePositions}
            count={linePositions.length / 3}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#7c3aed"
          transparent
          opacity={0.18}
        />
      </lineSegments>
    </group>
  )
}

export default function NeuralNetwork() {
  const mousePos = useRef({ x: 0, y: 0 })

  const handleMouseMove = useCallback((e) => {
    mousePos.current = {
      x: (e.clientX / window.innerWidth - 0.5) * 2,
      y: -(e.clientY / window.innerHeight - 0.5) * 2,
    }
  }, [])

  return (
    <div
      className="absolute inset-0 w-full h-full"
      onMouseMove={handleMouseMove}
      style={{ zIndex: 0 }}
    >
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <NeuralNodes mousePos={mousePos} />
      </Canvas>
    </div>
  )
}
