import { motion } from "framer-motion";

import './App.css'

import profileImage from './assets/profile-image.jpeg'

// const profileImage = "https://firebasestorage.googleapis.com/v0/b/my-profile-afdb3.appspot.com/o/profile-image.jpeg?alt=media&token=6bc1522b-4ac5-470b-977c-5053d811eed9"

export default function App() {
  return (
    <div className='container'>
      <motion.img
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
        }}
        className='profile-image' src={profileImage}
      />
        {/* <img className='profile-image' src={profileImage} /> */}
      {/* </motion.image> */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.5,
          duration: 2,
        }}
      >Hi, I'm Leo. <br/>I'm a software developer.</motion.h1>
    </div>
  )
}
