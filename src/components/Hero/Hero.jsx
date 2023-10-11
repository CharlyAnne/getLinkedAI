import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Unica_One } from 'next/font/google';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  const unica = Unica_One({ subsets: ['latin'], weight: ['400'] });

  const cardVariants = {
    offscreen: {
      y: 1000,
    },
    onscreen: {
      y: 50,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 4,
      },
    },
  };

  const [timeLeft, setTimeLeft] = useState({});
};
