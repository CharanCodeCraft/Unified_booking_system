import Image from "next/image";
import Movielist from "@/components/movielist/movielist";
import Navbar from "@/components/Navbar/Navbar";


export default function Home() {
  return (
    <div>
      <Navbar/>
      <Movielist/>
    </div>
  );
}
