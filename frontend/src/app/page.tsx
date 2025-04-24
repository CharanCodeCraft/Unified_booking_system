import Image from "next/image";
import Movielist from "@/components/movielist/movielist";
import Navbar from "@/components/Navbar/Navbar";
import HomeSlider from "@/components/HomeSlider/HomeSlider";


export default function Home() {
  return (
    <div>
      <Navbar/>
      <HomeSlider/>
      <Movielist/>
    </div>
  );
}
