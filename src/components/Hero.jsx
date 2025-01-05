import "../App.css";
import Scene from "../Scene";
import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";

function Title3D() {
    return (
      <div className="absolute top-0 left-0 h-screen w-screen">
        <Canvas
          dpr={[1, 2]}
          gl={{
            antialias: true,
            preserveDrawingBuffer: true,
          }}
          camera={{
            fov: 55,
            near: 0.1,
            far: 200,
          }}
        >
          <Scene />
        </Canvas>
      </div>
    );
  }
  
  function HeaderComponent() {
    return (
      <header className="relative z-50 mx-7 flex max-lg:flex-col justify-between py-6 border-b border-white/60 pointer-events-auto">
        <div className="whitespace-nowrap">
          <h1 className="font-bold inline align-middle mr-2">Bulge Text Effect</h1>
          <a title="Read the article" href="https://tympanus.net/codrops/?p=76625">
            <svg
              className="h-3 ml-0.5 inline-block align-middle"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.00006 0.25H11.7501V11H10.2501V2.81066L1.53039 11.5303L0.469727 10.4697L9.1894 1.75H1.00006V0.25Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
      </header>
    );
  }
  
  function Credits() {
    return (
      <div className="flex fixed w-full justify-between bottom-0 p-8">
        <p>
          Made by <a href="https://www.instagram.com/upleafmedia/">Upleaf Media</a>
        </p>
  
      </div>
    );
  }
  
  function Aside() {
    return (
      <div>
      <div className="absolute top-1/2 right-16 text-lg">
        </div>
   
  </div>
  
  
  
  
     
    );
  }
  
  function Hero() {
    return (
      <>
        <Leva
          collapsed={false}
          flat={true}
          hidden
          theme={{
            sizes: {
              titleBarHeight: "28px",
            },
            fontSizes: {
              root: "10px",
            },
          }}
        />
        <main className="font-sans">
          <HeaderComponent />
          <Title3D />
          <Aside />
          <Credits />
        </main>
      </>
    );
  }
  
  export default Hero;