import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Hero3D from "./hero3D.component";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center h-screen px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-300 dark:to-purple-400"
        >
          Organize Your Tasks Effortlessly
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-4 text-lg text-gray-700 dark:text-gray-300"
        >
          A smart and interactive way to manage your daily tasks.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-6 px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-700"
        >
          Get Started
        </motion.button>
      </section>

      {/* 3D Hero Section */}
      <Canvas className="absolute inset-0 h-screen w-full">
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 3, 3]} />
        <Hero3D />
      </Canvas>
    </div>
  );
}