import { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  MeshTransmissionMaterial,
  useTexture,
  useFBO,
  CameraControls,
} from "@react-three/drei";
// import * as THREE from 'three'
import { Splat } from "./splat";
import gsap from "gsap";


// import {useControls} from 'leva'// problematic 

function SplatModule() {
  const { roughness, transmission, rotation, showOriginal, color } =
    //useControls ()
    {
      roughness: { value: 0.05, min: 0, max: 1 },
      transmission: { value: 1, min: 0, max: 1 },
      rotation: { value: 1.4 * Math.PI, min: 0, max: 2 * Math.PI },
      showOriginal: { value: false },
      color: { value: "#fff" },
    };
  const buffer = useFBO();
  const ref = useRef();
  const ref0= useRef();
  const ref1 = useRef();
  const material = useRef();
  // const normalMap = useTexture("dirt1.png");
  // normalMap.wrapS = normalMap.wrapT = 1000;


  useFrame((state) => {

  });

  useEffect(() => {

    
    gsap.from(ref.current.material.uniforms.customRange, {
      value: 1,
      duration: 30,
      delay: 3,
      ease: "power1.inOut",
      onComplete: function(){
        
      }
    })
    
    let tl = gsap.timeline();


    tl.add("ani-1")
      .from(ref0.current.rotation, {
        x: Math.PI / 2,
        y: -Math.PI,
        duration: 5,
        ease: "power1.inOut",
        onComplete: function(){

        }
      },"ani-1")
      .from(ref0.current.scale, {
        x: 4,
        y: 4,
        z: 4,
        duration: 5,
        ease: "power1.inOut",
        onComplete: function(){

        }
      },"ani-1")


  },[])

  return (
    <>
    <group ref={ref0}>
      <Splat
        ref={ref}
        scale={1}
        rotation={[0.05*Math.PI, 0, 0]}
        position={[0, -0.25, 0]}
        src="Jason.min.splat"
      />

      </group>

      {/* <mesh
        ref={ref1}
        position={[0, 0, 0.8]}
      >
        <MeshTransmissionMaterial
          ref={material}
          transmission={transmission.value}
          roughness={roughness.value}
          thickness={0.1}
          normalMap={normalMap}
          normalScale={[0.2, 0.2]}
          color={color.value}
          buffer={buffer.texture}
          transparent={true}
          opacity={1}
        />
        <boxGeometry args={[1.5, 2, 0.2]} />
      </mesh> */}
    </>
  );
}


export default function App() {
  return (
    <>
      <Canvas camera={{ position: [0, 0, 3], fov: 75 }}>
        {/* <color attach="background" args={["#000"]} /> */}

        <SplatModule />
        <CameraControls />

      </Canvas>
    </>
  );
}
