import "../App.css";
import Scene from "../Scene";
import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";

function Title3D() {
  return (
    <div className="top-0 left-0 h-screen w-screen bg-black">
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
        <h1 className="font-bold inline align-middle mr-2">
          Upleaf Media Website
        </h1>
        <a
          title="Hemp Cannabis Agency"
          href="https://www.upleafmedia.com"
        >
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
    <div className="flex w-full justify-between bottom-0 p-8 bg-black">
    <a href="https://www.upleafmedia.com/">
      {/* <p>
      Elevate your online presence with{" "}
        <a href="https://www.upleafmedia.com/" className="uppercase text-16"> Upleaf Media&apos;s {" "}</a>high-performing 3D websites.
      </p> */}
      </a>
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
      <main className="flex items-center justify-between relative">
        {/* Left side - 3D scene */}
        <div className="flex-1 h-screen">
          <Title3D />
        </div>

        {/* Right side - Aside with bullet points */}
        <div className="absolute top- right-0 max-w-[550px] mx-auto px-8 text-lg  bg-opacity-80 p-4 rounded-lg">
          <h1 className="text-left text-3xl font-bold mb-4 ">Track Your High with Ease</h1>
          <p className="text-left">Welcome to Time To Smoke, the easiest way to track your cannabis experience. Record when your high starts and ends, how long it lasts, and how you feel during and after.</p>
          <h5 className="text-left font-semibold mt-4 mb-2">With Time To Smoke, you can:</h5>
          <ul className="list-disc pl-5 space-y-2">
            <li>Track the duration of your high.</li>
            <li>Log your mood and effects during the experience.</li>
            <li>Record strain information (like THC and CBD levels).</li>
            <li>Rate your overall experience.</li>
            <li>Add notes to remember key details.</li>
          </ul>
          <p className="text-left mt-4">Start using Time To Smoke today to understand your cannabis experience and find what works best for you!</p>
        </div>
      </main>
      <Credits />
    </>
  );
}


export default Hero;
