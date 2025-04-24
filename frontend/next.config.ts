import type { NextConfig } from "next";
import Image from "next/image";


const nextConfig: NextConfig = {
  /* config options here */
  images: {
   domains: ['assets-in-gm.bmscdn.com','in.bmscdn.com'], 
  },
};

export default nextConfig;
