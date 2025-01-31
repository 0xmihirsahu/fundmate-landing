import type React from "react"
import { motion } from "framer-motion"

export const Gradient: React.FC = () => (
  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-30 blur-3xl" />
)

export const HexGrid: React.FC = () => (
  <div className="absolute inset-0 overflow-hidden">
    <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern
          id="hexagons"
          width="50"
          height="43.4"
          patternUnits="userSpaceOnUse"
          patternTransform="scale(2) rotate(0)"
        >
          <path
            d="M25,17.3 L38.5,8.7 L38.5,25.9 L25,34.5 L11.5,25.9 L11.5,8.7 Z"
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.1"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hexagons)" />
    </svg>
  </div>
)

export const FloatingTokens: React.FC = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {["BTC", "ETH", "APT", "SOL"].map((token, index) => (
      <motion.div
        key={token}
        className="absolute"
        initial={{ x: `${index * 25}%`, y: `${index * 25}%` }}
        animate={{
          x: [`${index * 25}%`, `${(index + 1) * 25}%`, `${index * 25}%`],
          y: [`${index * 25}%`, `${(index + 1) * 25}%`, `${index * 25}%`],
        }}
        transition={{
          duration: 10 + index * 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      >
        <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-white font-bold">
          {token}
        </div>
      </motion.div>
    ))}
  </div>
)

