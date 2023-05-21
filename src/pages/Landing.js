import React from 'react'
import { motion } from 'framer-motion'

const Landing = () => {
  return (
    <motion.div initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}>
      Landing
      </motion.div>
  )
}

export default Landing