// app/page.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, Users, Shield, Zap, Wallet } from 'lucide-react';

const features = [
  {
    title: "Secure Messaging with Payments",
    description: "End-to-end encrypted chat + instant crypto payments",
    icon: MessageSquare
  },
  {
    title: "Group Transactions",
    description: "Create groups and split payments easily",
    icon: Users
  },
  {
    title: "No Middlemen",
    description: "Fully decentralized",
    icon: Shield
  },
  {
    title: "Fast & Scalable",
    description: "Built on Aptos for near-instant transactions",
    icon: Zap
  }
];

const steps = [
  {
    title: "Sign In with Your Wallet or Email",
    description: "Easy user onboarding with account abstraction",
    icon: Wallet
  },
  {
    title: "Start a Conversation",
    description: "Chat like any messenger app",
    icon: MessageSquare
  },
  {
    title: "Send & Receive Crypto",
    description: "One-tap payments within the chat",
    icon: ArrowRight
  },
  {
    title: "Manage Groups & Split Bills",
    description: "Easily handle group expenses",
    icon: Users
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const FloatingAnimation = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    animate={{
      y: [0, -10, 0],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    {children}
  </motion.div>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative px-6 lg:px-8 py-24 md:py-32"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6"
            >
              Send Crypto. Chat Securely.
              <br/>
              <span className="text-blue-600">Simplify Payments.</span>
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="mt-6 text-lg md:text-xl leading-8 text-gray-600 max-w-2xl mx-auto"
            >
              FundMate is the easiest way to send payments and messages seamlessly in Web3.
              We handle the token swaps - you focus on the moments that matter.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="mt-10"
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full bg-blue-600 px-8 py-4 text-white font-semibold hover:bg-blue-700 transition-colors"
                onClick={() => {
                  window.location.href = 'https://fund-mate-nine.vercel.app/';
                }}
              >
                Try FundMate
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div 
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900">Key Features</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <FloatingAnimation>
                  <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
                </FloatingAnimation>
                <h3 className="text-xl text-gray-900 font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* How It Works Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-24 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div 
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
              >
                <div className="flex flex-col items-center text-center">
                  <FloatingAnimation>
                    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                      <step.icon className="w-8 h-8 text-blue-600" />
                    </div>
                  </FloatingAnimation>
                  <h3 className="text-xl text-gray-900 font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-24 bg-blue-600"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.h2 
            variants={itemVariants}
            className="text-3xl font-bold text-white mb-8"
          >
            Ready to Experience Seamless Web3 Payments? 
          </motion.h2>
          <motion.button 
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full bg-white px-8 py-4 text-blue-600 font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Started Now
          </motion.button>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">FundMate</h3>
              <p className="text-gray-400">Simplifying Web3 payments and communication</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Features</li>
                <li>Security</li>
                <li>Pricing</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>About</li>
                <li>Blog</li>
                <li>Careers</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Privacy</li>
                <li>Terms</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}