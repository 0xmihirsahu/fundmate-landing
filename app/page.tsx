// app/page.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Send, 
  Users, 
  Gift, 
  ArrowRightLeft, 
  Sparkles,
  Shield,
  Zap
} from 'lucide-react';

// Types
interface Activity {
  user: string;
  amount: string;
  token: string;
  action: string;
  targetToken?: string;
}

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

// Components
const TokenIcon = ({ symbol }: { symbol: string }) => (
  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center font-bold text-sm">
    {symbol}
  </div>
);

const SwapAnimation = () => (
  <div className="relative w-full h-32 flex items-center justify-center">
    <motion.div
      animate={{
        x: [-50, 50, -50],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="absolute flex items-center gap-2"
    >
      <TokenIcon symbol="USDT" />
      <ArrowRightLeft className="text-blue-600" />
      <TokenIcon symbol="APT" />
    </motion.div>
  </div>
);

const GiftAnimation = () => (
  <motion.div
    animate={{
      scale: [1, 1.1, 1],
      rotate: [0, 5, -5, 0],
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }}
    className="relative"
  >
    <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center">
      <Gift className="w-8 h-8 text-white" />
    </div>
    <motion.div
      animate={{
        opacity: [0, 1, 0],
        y: [-10, -20],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeOut"
      }}
      className="absolute -top-2 -right-2"
    >
      <Sparkles className="w-6 h-6 text-yellow-400" />
    </motion.div>
  </motion.div>
);

const ActivityItem = ({ user, amount, token, action, targetToken }: Activity) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="flex items-center justify-between p-4 border-b border-gray-100"
  >
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold">
        {user[0]}
      </div>
      <div>
        <p className="font-semibold">{user}</p>
        <p className="text-sm text-gray-600">{action}</p>
      </div>
    </div>
    <div className="flex items-center gap-2">
      <span className="font-semibold">{amount}</span>
      <TokenIcon symbol={token} />
      {targetToken && (
        <>
          <ArrowRightLeft className="w-4 h-4 text-blue-600" />
          <TokenIcon symbol={targetToken} />
        </>
      )}
    </div>
  </motion.div>
);

const PhoneMockup = () => {
  const activities: Activity[] = [
    {
      user: "Alice",
      amount: "20",
      token: "USDT",
      targetToken: "USDC",
      action: "Paid restaurant 🍽️"
    },
    {
      user: "Bob",
      amount: "50",
      token: "APT",
      action: "Birthday gift 🎁"
    },
    {
      user: "Carol",
      amount: "100",
      token: "ETH",
      targetToken: "USDT",
      action: "Dinner split 🍕"
    },
    {
      user: "Dave",
      amount: "30",
      token: "USDC",
      action: "Movie tickets 🎬"
    }
  ];

  return (
    <div className="relative mx-auto w-[300px] h-[600px] bg-black rounded-[3rem] shadow-xl border-[5px] border-black overflow-hidden">
      <div className="absolute top-2 w-full h-0 bg-black">
        <div className="w-20 h-6 mx-auto bg-black rounded-3xl"></div>
      </div>
      <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden">
        <div className="p-3 bg-blue-600 text-white">
          <h3 className="text-lg font-semibold">Recent Activity</h3>
        </div>
        <div className="divide-y text-gray-900 divide-gray-100">
          {activities.map((activity, index) => (
            <ActivityItem key={index} {...activity} />
          ))}
        </div>
      </div>
    </div>
  );
};

const features: Feature[] = [
  {
    icon: Send,
    title: "Instant Payments",
    description: "Send money to friends instantly, in any token they prefer"
  },
  {
    icon: Users,
    title: "Group Expenses",
    description: "Split bills and manage group expenses effortlessly"
  },
  {
    icon: Gift,
    title: "Crypto Gifts",
    description: "Send beautiful crypto gifts for special occasions"
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "End-to-end encrypted messages and secure transactions"
  },
  {
    icon: ArrowRightLeft,
    title: "Auto Token Swap",
    description: "We handle token conversions at the best rates"
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Built on Aptos for near-instant transactions"
  }
];

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white px-6 lg:px-8 py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
                Social Payments,
                <span className="text-blue-600 block">Crypto Made Simple</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600">
              FundMate is the easiest way to send payments and messages seamlessly in Web3. We handle the token swaps - you focus on the moments that matter.
              </p>
              <div className="mt-8 space-y-4 sm:space-y-0 sm:flex sm:gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto rounded-full bg-blue-600 px-8 py-4 text-white font-semibold hover:bg-blue-700 transition-colors"
                  onClick={() => window.location.href="https://fund-mate-nine.vercel.app"}
                >
                  Try FundMate
                </motion.button>
                <div className="flex items-center gap-2">
                  <TokenIcon symbol="USDC" />
                  <TokenIcon symbol="USDT" />
                  <TokenIcon symbol="APT" />
                  <TokenIcon symbol="ETH" />
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <PhoneMockup />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900">Everything You Need in One App</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl text-gray-900 font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Token Swap Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-gray-900 mb-6"
              >
                Seamless Token Swaps
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-lg text-gray-600 mb-8"
              >
                Pay with any token you own. We&apos;ll automatically convert it to 
                the receiver&apos;s preferred currency at the best rates.
              </motion.p>
              <SwapAnimation />
              <GiftAnimation />
            </div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:h-96 flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl"
            >
              <div className="relative">
                <TokenIcon symbol="USDC" />
                <div className="absolute top-0 left-full ml-4">
                  <TokenIcon symbol="USDT" />
                </div>
                <div className="absolute top-full left-0 mt-4">
                  <TokenIcon symbol="APT" />
                </div>
                <div className="absolute top-full left-full ml-4 mt-4">
                  <TokenIcon symbol="ETH" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Trusted by Users Worldwide</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6">
                <p className="text-4xl font-bold text-blue-600">10k+</p>
                <p className="text-gray-600">Active Users</p>
              </div>
              <div className="p-6">
                <p className="text-4xl font-bold text-blue-600">$1M+</p>
                <p className="text-gray-600">Transactions</p>
              </div>
              <div className="p-6">
                <p className="text-4xl font-bold text-blue-600">4.9★</p>
                <p className="text-gray-600">User Rating</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-blue-600">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-6 lg:px-8 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-8">
          Ready to Experience Seamless Web3 Payments?
          </h2>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full bg-white px-8 py-4 text-blue-600 font-semibold hover:bg-gray-100 transition-colors"
          >
            Download FundMate
          </motion.button>
        </motion.div>
      </section>

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
};

export default Home;