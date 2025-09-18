import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { Button } from './components/ui/button'
import { Card, CardContent } from './components/ui/card'
import { ImageWithFallback } from './components/figma/ImageWithFallback'
import { 
  Camera, 
  Brain, 
  Eye, 
  Shield, 
  Gamepad2, 
  Wifi,
  ArrowRight,
  CheckCircle,
  BarChart3,
  Sparkles,
  Target,
  Zap,
  Globe
} from 'lucide-react'
import { useIsMobile } from "./components/ui/use-mobile"; // Add this import at the top
import { useInView } from "framer-motion";
import { useRef } from "react";

// Feature definitions
const features = [
  {
    icon: Wifi,
    title: "Offline AI",
    description: "Works without internet connection in remote areas",
    gradient: "from-blue-500 to-cyan-500",
    points: [
      "No network required",
      "Instant results",
      "Rural-ready"
    ],
    delay: 0
  },
  {
    icon: BarChart3,
    title: "REST API",
    description: "Easy integration with existing government systems",
    gradient: "from-purple-500 to-pink-500",
    points: [
      "Seamless integration",
      "Real-time data access",
      "Standardized protocols"
    ],
    delay: 0.1
  },
  {
    icon: Shield,
    title: "Blockchain Security",
    description: "Tamper-proof immutable records with distributed ledger",
    gradient: "from-emerald-500 to-teal-500",
    points: [
      "Immutable records",
      "Decentralized storage",
      "Enhanced privacy"
    ],
    delay: 0.2
  },
  {
    icon: Brain,
    title: "Explainable AI",
    description: "Transparent decisions with feature highlighting",
    gradient: "from-orange-500 to-red-500",
    points: [
      "Interpretable models",
      "Feature importance visualization",
      "User-friendly explanations"
    ],
    delay: 0.3
  },
  {
    icon: Gamepad2,
    title: "Gamified Training",
    description: "Interactive learning for field workers",
    gradient: "from-indigo-500 to-purple-500",
    points: [
      "Engaging content",
      "Real-world scenarios",
      "Instant feedback"
    ],
    delay: 0.4
  }
]

// Floating animation component
const FloatingElement = ({ children, delay = 0, duration = 6 }: { children: React.ReactNode, delay?: number, duration?: number }) => (
  <motion.div
    animate={{
      y: [-10, 10, -10],
      rotate: [-2, 2, -2],
    }}
    transition={{
      duration,
      repeat: Infinity,
      delay,
      ease: "easeInOut"
    }}
  >
    {children}
  </motion.div>
)
function BlockchainPhoneScreen({ blockchainStep }: { blockchainStep: number }) {
  return (
    <div className="p-6 h-full bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-200/30 via-transparent to-transparent"></div>
      <div className="relative z-10">
        <div className="flex items-center mb-6">
          <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center mr-3">
            <Shield className="w-4 h-4 text-white" />
          </div>
          <span className="font-semibold text-indigo-800">Blockchain Security</span>
        </div>
        <div className="space-y-3">
          {/* Step 1: Hash created */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{
              scale: blockchainStep === 0 ? 1 : 0.95,
              opacity: blockchainStep === 0 ? 1 : 0.5,
            }}
            transition={{ duration: 0.3 }}
            className={`bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-emerald-200 relative`}
          >
            <div className="flex items-center">
              <div className="w-3 h-3 bg-emerald-500 rounded-full mr-3 relative">
                {blockchainStep === 0 && (
                  <div className="absolute inset-0 bg-emerald-500 rounded-full animate-ping opacity-75"></div>
                )}
              </div>
              <span className="text-sm font-medium text-emerald-800">Hash created ✓</span>
            </div>
            {/* Partial hash */}
            {blockchainStep === 0 && (
              <div className="text-xs text-slate-500 mt-2 font-mono select-all">
                0x8f3a...b7e1
              </div>
            )}
          </motion.div>
          {/* Step 2: Blockchain validation */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{
              scale: blockchainStep === 1 ? 1 : 0.95,
              opacity: blockchainStep === 1 ? 1 : 0.5,
            }}
            transition={{ duration: 0.3 }}
            className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-amber-200 relative"
          >
            <div className="flex items-center">
              <div className="w-3 h-3 bg-amber-500 rounded-full mr-3 relative">
                {blockchainStep === 1 && (
                  <div className="absolute inset-0 bg-amber-500 rounded-full animate-ping opacity-75"></div>
                )}
              </div>
              <span className="text-sm font-medium text-amber-800">Blockchain validation...</span>
            </div>
            {/* Block number */}
            {blockchainStep === 1 && (
              <div className="text-xs text-slate-500 mt-2 font-mono select-all">
                Block: #18342
              </div>
            )}
          </motion.div>
          {/* Step 3: Registry update pending */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{
              scale: blockchainStep === 2 ? 1 : 0.95,
              opacity: blockchainStep === 2 ? 1 : 0.5,
            }}
            transition={{ duration: 0.3 }}
            className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-slate-200 relative"
          >
            <div className="flex items-center">
              <div className="w-3 h-3 bg-slate-400 rounded-full mr-3 relative">
                {blockchainStep === 2 && (
                  <div className="absolute inset-0 bg-slate-400 rounded-full animate-ping opacity-75"></div>
                )}
              </div>
              <span className="text-sm font-medium text-slate-700">Registry update pending...</span>
            </div>
              {/* Registry ID */}
              {blockchainStep === 2 && (
                <div className="text-xs text-amber-600 mt-2 font-mono select-all">
                  Registry ID: BPA-2024-1847
                </div>
              )}
          </motion.div>
          {/* Step 4: Securing Record with loading bar */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{
              scale: blockchainStep === 3 ? 1 : 0.95,
              opacity: blockchainStep === 3 ? 1 : 0.5,
            }}
            transition={{ duration: 0.3 }}
            className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-indigo-200 relative"
          >
            <div className="flex flex-col items-center">
              <div className="inline-flex items-center px-3 py-1 bg-indigo-100 rounded-full mb-2">
                <Sparkles className="w-3 h-3 text-indigo-600 mr-1" />
                <span className="text-xs font-medium text-indigo-800">Securing Record</span>
              </div>
              {/* Animated loading bar */}
              <div className="w-full h-2 bg-indigo-100 rounded-full overflow-hidden mt-2">
                <motion.div
                  className="h-2 bg-gradient-to-r from-indigo-400 to-emerald-400 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{
                    width: blockchainStep === 3 ? "100%" : "0%",
                  }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const { scrollYProgress } = useScroll()
  //const [activeScreen, setactiveScreen] = useState(0)
  
  // Calculate which screen should be shown based on scroll position

  // Advanced transform values with spring physics
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 }
  //const phoneX = useSpring(useTransform(scrollYProgress, [0, 0.25, 0.75, 1], ['45vw', '25vw', '-25vw', '-45vw']), springConfig)
  //const phoneY = useSpring(useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [80, 0, -60, -120]), springConfig)
  //const phoneScale = useSpring(useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.75, 1, 1, 0.85]), springConfig)
  //const phoneRotate = useSpring(useTransform(scrollYProgress, [0, 0.5, 1], [0, 3, -3]), springConfig)
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.25], [1, 0.95])
  const heroY = useTransform(scrollYProgress, [0, 0.25], [0, -50])

  // Background parallax effects
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const bgOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.1, 0])

  const isMobile = useIsMobile();
  // Inside your App component, before return:
  const [blockchainStep, setBlockchainStep] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setBlockchainStep((prev) => (prev + 1) % 4);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const phoneScreens = [
  {
    title: "Capture Animal",
    subtitle: "FLW takes photo of animal",
    step: "01",
    content: (
<div className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 text-green-800 relative overflow-hidden">
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-200/20 via-transparent to-transparent"></div>
  <motion.div
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="relative z-10 flex flex-col items-center"
  >
    {/* Cattle/Bull Image */}
    <img
      src="/cattle.jpg"
      alt="Cattle"
      className="w-48 h-48 object-cover rounded-2xl shadow-lg border-4 border-white mb-6"
      style={{ background: "#eee" }}
    />
    {/* Capture Button with Pulse Animation */}
    <motion.button
      whileTap={{ scale: 0.92 }}
      whileHover={{ scale: 1.08, boxShadow: "0 0 0 8px #34d39944" }}
      className="mt-2 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full text-lg font-semibold shadow-lg focus:outline-none relative"
      style={{ outline: "none" }}
    >
      <span className="relative z-10 flex items-center">
        <Camera className="w-6 h-6 mr-2" />
        Capture
      </span>
      {/* Pulse animation ring */}
      <motion.span
        className="absolute inset-0 rounded-full"
        animate={{ boxShadow: ["0 0 0 0 #34d39955", "0 0 0 16px #34d39900"] }}
        transition={{ repeat: Infinity, duration: 1.2, ease: "easeOut" }}
        style={{ zIndex: 0 }}
      />
    </motion.button>
    <div className="text-center mt-4">
      <h3 className="text-lg font-semibold">Take a Photo</h3>
      <p className="text-sm mt-2 opacity-80">Point camera at cattle/buffalo</p>
    </div>
  </motion.div>
</div>
    ),
    description: "Field workers simply capture a photo of the animal using their smartphone camera. Our AI works instantly, even offline in remote rural areas.",
    icon: Camera,
    color: "emerald"
  },
  {
    title: "AI Analysis",
    subtitle: "AI suggests top-3 breeds with confidence %",
    step: "02",
    content: (
      <div className="p-6 h-full bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-200/30 via-transparent to-transparent"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <Brain className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-semibold text-blue-800">AI Analysis</span>
            </div>
            <div className="flex space-x-1">
              <div className="w-1 h-1 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="w-1 h-1 bg-blue-500 rounded-full animate-pulse delay-100"></div>
              <div className="w-1 h-1 bg-blue-500 rounded-full animate-pulse delay-200"></div>
            </div>
          </div>
<div className="flex justify-center mb-4">
  <img
    src="/cattle.jpg"
    alt="Cattle"
    className="w-48 h-48 object-cover rounded-xl shadow border-2 border-white"
    style={{ background: "#eee" }}
  />
</div>
<div className="space-y-3">
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white/90 backdrop-blur-sm rounded-xl p-4 border-l-4 border-emerald-500 shadow-lg"
            >
              <div className="flex justify-between items-center">
                <span className="font-semibold text-emerald-800">Gir</span>
                <div className="flex items-center space-x-2">
                  <div className="w-12 h-2 bg-emerald-100 rounded-full overflow-hidden">
                    <div className="w-[94%] h-full bg-emerald-500 rounded-full"></div>
                  </div>
                  <span className="text-emerald-600 font-bold">94%</span>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-white/90 backdrop-blur-sm rounded-xl p-4 border-l-4 border-amber-500 shadow-lg"
            >
              <div className="flex justify-between items-center">
                <span className="font-semibold text-amber-800">Red Sindhi</span>
                <div className="flex items-center space-x-2">
                  <div className="w-12 h-2 bg-amber-100 rounded-full overflow-hidden">
                    <div className="w-[78%] h-full bg-amber-500 rounded-full"></div>
                  </div>
                  <span className="text-amber-600 font-bold">78%</span>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="bg-white/90 backdrop-blur-sm rounded-xl p-4 border-l-4 border-slate-400 shadow-lg"
            >
              <div className="flex justify-between items-center">
                <span className="font-semibold text-slate-700">Sahiwal</span>
                <div className="flex items-center space-x-2">
                  <div className="w-12 h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="w-[45%] h-full bg-slate-400 rounded-full"></div>
                  </div>
                  <span className="text-slate-600 font-bold">45%</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    ),
    description: "Advanced AI algorithms analyze the image and provide the top 3 most likely breed matches with confidence percentages using deep learning models.",
    icon: Brain,
    color: "blue"
  },
  {
    title: "Visual Comparison",
    subtitle: "Visual comparison with standard breed images",
    step: "03",
    content: (
      <div className="p-6 h-full bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-200/30 via-transparent to-transparent"></div>
        <div className="relative z-10">
          <div className="flex items-center mb-6">
            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-3">
              <Eye className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-purple-800">Visual Comparison</span>
          </div>
<div className="grid grid-cols-2 gap-4 mb-4">
  {/* Your Animal */}
  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg flex flex-col items-center">
    <div className="w-20 h-20 bg-slate-100 rounded-lg flex items-center justify-center mb-2 border-2 border-emerald-200 overflow-hidden">
      <img
        src="/cattle.jpg"
        alt="Your Animal"
        className="max-w-full max-h-full object-contain rounded-lg"
        style={{ background: "#eee" }}
      />
    </div>
    <div className="text-xs text-center font-medium text-slate-700">Your Animal</div>
  </div>
  {/* Gir Standard */}
  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg flex flex-col items-center">
    <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center mb-2 border-2 border-emerald-400 overflow-hidden">
      <img
        src="/standard.jpg"
        alt="Gir Standard"
        className="max-w-full max-h-full object-contain rounded-lg"
        style={{ background: "#fff" }}
      />
    </div>
    <div className="text-xs text-center font-medium text-emerald-700">Gir Standard</div>
  </div>
</div>
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
            <div className="space-y-2">
              <div className="flex items-center text-xs">
                <CheckCircle className="w-3 h-3 text-emerald-500 mr-2" />
                <span className="text-emerald-700 font-medium">Dewlap matches (98%)</span>
              </div>
              <div className="flex items-center text-xs">
                <CheckCircle className="w-3 h-3 text-emerald-500 mr-2" />
                <span className="text-emerald-700 font-medium">Ear shape matches (95%)</span>
              </div>
              <div className="flex items-center text-xs">
                <Target className="w-3 h-3 text-amber-500 mr-2" />
                <span className="text-amber-700 font-medium">Horn curve (87%)</span>
              </div>
            </div>
<div className="mt-2 flex flex-col items-center">
  <div className="border-t border-dashed border-emerald-200 my-4 w-full"></div>
  <span className="inline-flex items-center px-4 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-3">
    <Sparkles className="w-4 h-4 mr-2" />
    Visual Match: <span className="ml-2 font-bold">High</span>
  </span>
  <label className="flex items-center text-xs text-slate-600 cursor-pointer select-none mt-2 mb-1">
    <input
      type="checkbox"
      className="form-checkbox rounded text-emerald-600 mr-2"
      // You can add onChange logic here if needed
    />
    Don't show this validation again
  </label>
</div>
          </div>
        </div>
      </div>
    ),
    description: "Side-by-side visual comparison with standard breed characteristics helps validate the AI's decision with explainable features and detailed analysis.",
    icon: Eye,
    color: "purple"
  },
  {
    title: "Blockchain Security",
    subtitle: "Blockchain confirmation of record",
    step: "04",
    content: <BlockchainPhoneScreen blockchainStep={blockchainStep} />,
    description: "All breed records are secured using blockchain technology, ensuring tamper-proof livestock documentation for government registries with immutable ledger.",
    icon: Shield,
    color: "indigo"
  },
  {
    title: "Success",
    subtitle: "Success: Breed registered in BPA",
    step: "05",
    content: (
<div className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 text-green-800 relative overflow-hidden">
  {/* Subtle celebratory background */}
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-200/30 via-transparent to-transparent"></div>
  <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-emerald-200/50 text-center flex flex-col items-center relative z-10">
<div className="relative mb-4 flex items-center justify-center">
  {/* Animated tick */}
  <motion.div
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ 
      scale: [1, 1.12, 1], 
      opacity: [1, 1, 1]
    }}
    transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
    className="relative"
  >
    <CheckCircle className="w-20 h-20 text-emerald-600 mx-auto drop-shadow-lg" />
  </motion.div>
  {/* Animated sparkle, farther from tick and in sync */}
  <motion.div
    className="absolute -top-7 -right-7"
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: [0.8, 1.12, 0.8], opacity: [0.7, 1, 0.7] }}
  >
    <Sparkles className="w-8 h-8 text-amber-400" />
  </motion.div>
</div>
    <h3 className="text-2xl font-bold text-emerald-800 mb-2">Registration Complete!</h3>
    <p className="text-base opacity-80 mb-4">Animal successfully added to BPA registry</p>
    <div className="bg-emerald-100 rounded-full px-6 py-3 inline-block shadow font-mono text-lg font-bold text-emerald-800 tracking-wide mb-4">
      ID: GIR2024001847
    </div>
    <div className="flex justify-center space-x-2 mt-2">
      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"></div>
      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce delay-100"></div>
      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce delay-200"></div>
    </div>
  </div>
</div>
    ),
    description: "The animal is successfully registered in the Bureau of Plant and Animal (BPA) registry with a unique blockchain-verified ID and permanent record.",
    icon: CheckCircle,
    color: "emerald"
  }
];

const sectionRefs = phoneScreens.map(() => useRef(null));
const inViews = sectionRefs.map(ref =>
  useInView(ref, { amount: 0.1, margin: "-10% 0px -10% 0px" })
);
const activeScreen = inViews.findIndex(Boolean);

  // Phone position logic
  // Steps: 0 (right), 1 (left), 2 (right), 3 (left), 4 (right), else (hidden)
  let phoneSide: "left" | "right" | "hidden" = "right";
  if (activeScreen === 1 || activeScreen === 3) phoneSide = "left";
  if (activeScreen === -1 || activeScreen === 5) phoneSide = "hidden";

  // Only show phone if not hidden and not on mobile
  const showPhone = phoneSide !== "hidden" && !isMobile;

  // Phone container style
  const phoneContainerStyle =
    phoneSide === "left"
      ? { left: 32, right: "auto", transform: "translateY(-50%)" }
      : { right: 32, left: "auto", transform: "translateY(-50%)" };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          style={{ y: bgY, opacity: bgOpacity }}
          className="absolute inset-0"
        >
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-emerald-200/30 to-teal-200/30 rounded-full blur-xl"></div>
          <div className="absolute top-40 right-20 w-48 h-48 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-xl"></div>
          <div className="absolute bottom-40 left-20 w-40 h-40 bg-gradient-to-r from-orange-200/30 to-pink-200/30 rounded-full blur-xl"></div>
        </motion.div>
      </div>

      {/* Hero Section */}
<section className="min-h-[80vh] flex flex-col lg:flex-row items-center justify-between px-8 lg:px-16 relative overflow-hidden">
  {/* Decorative animated sparkles */}
  <motion.div
    initial={{ opacity: 0, scale: 0.8, y: -30 }}
    animate={{ opacity: [0, 1, 1, 0], scale: [0.8, 1.1, 1, 0.8], y: [-30, 0, 10, -30] }}
    transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
    className="absolute left-10 top-10 z-10"
  >
    <Sparkles className="w-10 h-10 text-emerald-300" />
  </motion.div>
  <motion.div
    initial={{ opacity: 0, scale: 0.8, x: 30, y: 40 }}
    animate={{ opacity: [0, 1, 1, 0], scale: [0.8, 1.1, 1, 0.8], x: [30, 0, -10, 30], y: [40, 20, 40, 40] }}
    transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", delay: 2 }}
    className="absolute right-24 top-24 z-10"
  >
    <Sparkles className="w-8 h-8 text-green-200" />
  </motion.div>

  {/* Left: Hero Text */}
  <div className="flex-1 max-w-2xl z-20 relative py-16">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="inline-flex items-center px-5 py-2 bg-emerald-100 rounded-full mb-6 shadow"
    >
      <Sparkles className="w-5 h-5 text-emerald-600 mr-2" />
      <span className="text-base font-semibold text-emerald-800 tracking-wide">AI-Powered Agricultural Innovation</span>
    </motion.div>
    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.1, delay: 0.2 }}
      className="text-5xl lg:text-7xl font-extrabold mb-6 text-slate-900 leading-tight"
    >
      <span className="block">AI-Powered</span>
      <span className="block bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 bg-clip-text text-transparent animate-gradient-x">
        Cattle &amp; Buffalo
      </span>
      <span className="block">Breed Recognition</span>
      <motion.span
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 1.2, delay: 0.8 }}
        className="block mt-2"
        style={{ display: "inline-block", overflow: "hidden" }}
      >
        <span className="relative text-3xl lg:text-4xl text-emerald-700 font-bold">
          for India
          <span className="absolute left-0 -bottom-1 w-full h-2 bg-gradient-to-r from-emerald-300 to-green-200 rounded-full opacity-60 animate-pulse" />
        </span>
      </motion.span>
    </motion.h1>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl"
    >
      Revolutionizing livestock registry with offline AI, blockchain security, and seamless government integration for field workers across India.
    </motion.p>
        {/* Floating stats */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1 }}
      className="flex items-center space-x-8 mt-12"
    >
      <div className="text-center">
        <div className="text-2xl font-bold text-slate-900">94%+</div>
        <div className="text-sm text-slate-600">Accuracy Rate</div>
      </div>
      <div className="w-px h-8 bg-slate-300"></div>
      <div className="text-center">
        <div className="text-2xl font-bold text-slate-900">100+</div>
        <div className="text-sm text-slate-600">Breed Types</div>
      </div>
      <div className="w-px h-8 bg-slate-300"></div>
      <div className="text-center">
        <div className="text-2xl font-bold text-slate-900">Offline</div>
        <div className="text-sm text-slate-600">AI Processing</div>
      </div>
    </motion.div>
  </div>
{/* Right: Full-size sticker image */}
<div className="flex-1 flex items-center justify-end h-[700px] w-full lg:w-auto">
  <img
    src="/stickers/cow1.png"
    alt="Cattle"
    className="h-full max-h-[700px] w-auto object-contain drop-shadow-2xl"
    style={{ maxWidth: "100%" }}
  />
</div>
</section>

      {/* Enhanced Phone Mockup */}
      {/* Enhanced Content Sections */}
      <div className="relative z-20">
      {phoneScreens.map((screen, index) => (
        <section
          key={index}
          ref={sectionRefs[index]}
          className="min-h-screen flex items-center px-8 lg:px-16 py-32"
        >
          <div className="w-full max-w-6xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
  {(index === 1 || index === 3) ? (
    <>
      {/* Phone left */}
      <motion.div
        className="lg:col-span-6 lg:col-start-1 flex flex-col justify-center items-center px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.7 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-72 h-[580px]">
          <div className="relative w-full h-full bg-gradient-to-b from-slate-800 to-slate-900 rounded-[3.5rem] p-3 shadow-2xl border border-slate-700">
            <div className="w-full h-full bg-black rounded-[3rem] overflow-hidden relative">
              {screen.content}
            </div>
          </div>
        </div>
      </motion.div>
      {/* Text right */}
      <motion.div
        className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center px-6"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.7 }}
        transition={{ duration: 0.8 }}
      >
        {/* Step number */}
        <div className="flex items-center mb-6">
          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${
            screen.color === 'emerald' ? 'from-emerald-500 to-green-500' :
            screen.color === 'blue' ? 'from-blue-500 to-indigo-500' :
            screen.color === 'purple' ? 'from-purple-500 to-pink-500' :
            screen.color === 'indigo' ? 'from-indigo-500 to-blue-500' :
            'from-emerald-500 to-teal-500'
          } flex items-center justify-center shadow-lg`}>
            <screen.icon className="w-8 h-8 text-white" />
          </div>
          <div className="ml-4">
            <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
              Step {screen.step}
            </div>
            <div className="text-xs text-slate-400">Workflow Process</div>
          </div>
        </div>
        <h2 className="text-4xl lg:text-5xl mb-6 text-slate-900 leading-tight">
          {screen.subtitle}
        </h2>
        <p className="text-xl text-slate-600 leading-relaxed mb-8">
          {screen.description}
        </p>
        {/* Feature highlights */}
        <div className="space-y-3">
          <div className="flex items-center text-emerald-700">
            <Zap className="w-5 h-5 mr-3 text-emerald-600" />
            <span>Lightning fast processing</span>
          </div>
          <div className="flex items-center text-emerald-700">
            <Shield className="w-5 h-5 mr-3 text-emerald-600" />
            <span>Enterprise-grade security</span>
          </div>
          <div className="flex items-center text-emerald-700">
            <Target className="w-5 h-5 mr-3 text-emerald-600" />
            <span>94%+ accuracy guaranteed</span>
          </div>
        </div>
      </motion.div>
    </>
  ) : (
    <>
      {/* Text left */}
      <motion.div
        className="lg:col-span-5 lg:col-start-1 relative"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.7 }}
        transition={{ duration: 0.8 }}
      >
        {/* Step number */}
        <div className="flex items-center mb-6">
          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${
            screen.color === 'emerald' ? 'from-emerald-500 to-green-500' :
            screen.color === 'blue' ? 'from-blue-500 to-indigo-500' :
            screen.color === 'purple' ? 'from-purple-500 to-pink-500' :
            screen.color === 'indigo' ? 'from-indigo-500 to-blue-500' :
            'from-emerald-500 to-teal-500'
          } flex items-center justify-center shadow-lg`}>
            <screen.icon className="w-8 h-8 text-white" />
          </div>
          <div className="ml-4">
            <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
              Step {screen.step}
            </div>
            <div className="text-xs text-slate-400">Workflow Process</div>
          </div>
        </div>
        <h2 className="text-4xl lg:text-5xl mb-6 text-slate-900 leading-tight">
          {screen.subtitle}
        </h2>
        <p className="text-xl text-slate-600 leading-relaxed mb-8">
          {screen.description}
        </p>
        {/* Feature highlights */}
        <div className="space-y-3">
          <div className="flex items-center text-emerald-700">
            <Zap className="w-5 h-5 mr-3 text-emerald-600" />
            <span>Lightning fast processing</span>
          </div>
          <div className="flex items-center text-emerald-700">
            <Shield className="w-5 h-5 mr-3 text-emerald-600" />
            <span>Enterprise-grade security</span>
          </div>
          <div className="flex items-center text-emerald-700">
            <Target className="w-5 h-5 mr-3 text-emerald-600" />
            <span>94%+ accuracy guaranteed</span>
          </div>
        </div>
      </motion.div>
      {/* Phone right */}
      <motion.div
        className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center items-center px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.7 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-72 h-[580px]">
          <div className="relative w-full h-full bg-gradient-to-b from-slate-800 to-slate-900 rounded-[3.5rem] p-3 shadow-2xl border border-slate-700">
            <div className="w-full h-full bg-black rounded-[3rem] overflow-hidden relative">
              {screen.content}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )}
</div>
          </div>
        </section>
      ))}
      </div>  

<section className="py-32 px-4 lg:px-0 bg-[#fdf7ee] relative z-10 flex flex-col items-center">
  {/* Section Title & Subtitle */}
  <div className="flex flex-col items-center mb-14">
      <div className="inline-flex items-center px-6 py-3 bg-orange-100 rounded-full mb-8 border border-orange-200 shadow">
        <Sparkles className="w-5 h-5 text-orange-500 mr-2" />
        <span className="text-orange-700 font-semibold">Powerful Features</span>
      </div>
    <h2 className="text-5xl font-bold text-green-900 mb-4 text-center">
      Built for Modern Agriculture
    </h2>
    <p className="text-xl text-slate-700 text-center max-w-2xl">
      Engineered specifically for India's diverse livestock ecosystem with cutting-edge technology and unmatched reliability.
    </p>
  </div>
  {/* Feature Cards Grid */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl mx-auto">
    {/* Top Row: 3 Cards */}
<div className="flex justify-center">
  <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-center w-full max-w-xs">
    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
      <Wifi className="w-7 h-7 text-white" />
    </div>
    <span className="font-bold text-green-900 text-xl mb-2 text-center">Offline AI</span>
    <span className="text-slate-700 text-base text-center">
      Works without internet connection in remote areas
    </span>
  </div>
</div>
<div className="flex justify-center">
  <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-center w-full max-w-xs">
    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-4">
      <BarChart3 className="w-7 h-7 text-white" />
    </div>
    <span className="font-bold text-green-900 text-xl mb-2 text-center">REST API</span>
    <span className="text-slate-700 text-base text-center">
      Easy integration with existing government systems
    </span>
  </div>
</div>
<div className="flex justify-center">
  <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-center w-full max-w-xs">
    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center mb-4">
      <Gamepad2 className="w-7 h-7 text-white" />
    </div>
    <span className="font-bold text-green-900 text-xl mb-2 text-center">Gamified Training</span>
    <span className="text-slate-700 text-base text-center">
      Interactive learning for field workers
    </span>
  </div>
</div>
{/* Bottom Row: 3 Cards */}
<div className="flex justify-center">
  {/* Blockchain Security card */}
  <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-center w-full max-w-xs">
    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center mb-4">
      <Shield className="w-7 h-7 text-white" />
    </div>
    <span className="font-bold text-green-900 text-xl mb-2 text-center">Blockchain Security</span>
    <span className="text-slate-700 text-base text-center">
      Tamper-proof immutable records with distributed ledger
    </span>
  </div>
</div>
<div className="flex justify-center">
  {/* Explainable AI card */}
  <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-center w-full max-w-xs">
    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center mb-4">
      <Brain className="w-7 h-7 text-white" />
    </div>
    <span className="font-bold text-green-900 text-xl mb-2 text-center">Explainable AI</span>
    <span className="text-slate-700 text-base text-center">
      Transparent decisions with feature highlighting
    </span>
  </div>
</div>
<div className="flex justify-center">
  {/* Instant Analytics card */}
  <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-center w-full max-w-xs">
    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-pink-500 to-yellow-500 flex items-center justify-center mb-4">
      <Zap className="w-7 h-7 text-white" />
    </div>
    <span className="font-bold text-green-900 text-xl mb-2 text-center">Instant Analytics</span>
    <span className="text-slate-700 text-base text-center">
      Real-time insights and reporting for all users.
    </span>
  </div>
</div>
  </div>
  {/* Optional: CTA Button */}
  <button className="mt-12 px-10 py-4 bg-gradient-to-r from-orange-500 to-orange-700 text-white rounded-full text-xl font-bold shadow hover:from-orange-600 hover:to-orange-800 transition">
    Explore Features <span className="ml-2">🚀</span>
  </button>
</section>
      {/* Enhanced CTA Section */}
<section className="py-32 px-4 lg:px-0 bg-gradient-to-br from-[#f5faff] via-[#f0f6ff] to-[#eaf2fb] relative z-10 overflow-hidden">
  {/* Decorative dots or blurred circles */}
  <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
  <div className="pointer-events-none absolute -bottom-40 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>

  <div className="max-w-5xl mx-auto flex flex-col items-center text-center relative z-10">
    <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-slate-900">
      Transforming India's Livestock Registry with <span className="text-blue-600">AI + Blockchain</span>
    </h2>
    <p className="text-lg text-slate-600 mb-10 max-w-2xl">
      Join the future of agricultural technology. Empower field workers with tools that work offline, scale globally, and secure data forever with unbreakable blockchain protection.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center">
      <Button
        size="lg"
        className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold px-8 py-4 rounded-full shadow-lg transition"
      >
        Start Your Journey
      </Button>
      <Button
        size="lg"
        variant="outline"
        className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 text-lg font-semibold px-8 py-4 rounded-full transition"
      >
        View Analytics
      </Button>
    </div>
    {/* Stats Row */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 w-full">
      <div className="bg-white/80 rounded-2xl shadow p-6 flex flex-col items-center">
        <div className="text-3xl font-bold text-blue-700 mb-1">10,000+</div>
        <div className="text-slate-500 text-sm">Active FLWs</div>
      </div>
      <div className="bg-white/80 rounded-2xl shadow p-6 flex flex-col items-center">
        <div className="text-3xl font-bold text-blue-700 mb-1">100+</div>
        <div className="text-slate-500 text-sm">Breed Types</div>
      </div>
      <div className="bg-white/80 rounded-2xl shadow p-6 flex flex-col items-center">
        <div className="text-3xl font-bold text-blue-700 mb-1">90%</div>
        <div className="text-slate-500 text-sm">Time Save</div>
      </div>
      <div className="bg-white/80 rounded-2xl shadow p-6 flex flex-col items-center">
        <div className="text-3xl font-bold text-blue-700 mb-1">94%+</div>
        <div className="text-slate-500 text-sm">Accuracy Rate</div>
      </div>
    </div>
    {/* Trust indicators */}
    <div className="flex flex-wrap justify-center items-center gap-6 text-slate-500 text-sm mt-2">
      <div className="flex items-center gap-1">
        <span className="text-xl">🏆</span>
        Award-Winning Technology
      </div>
      <div className="flex items-center gap-1">
        <span className="text-xl">🔒</span>
        Secure & Private
      </div>
      <div className="flex items-center gap-1">
        <span className="text-xl">🇮🇳</span>
        Made in India
      </div>
      <div className="flex items-center gap-1">
        <span className="text-xl">💡</span>
        Government Backed
      </div>
    </div>
  </div>
</section>
    </div>
  )
}