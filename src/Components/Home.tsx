import FeaturedCollection from "./FeaturedCollection";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Testimonials from "./Testimonials";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import type { Perfume } from "../types";
import { PageLoading } from "./PageLoading";

const Home = () => {
  const [perfumes, setPerfumes] = useState<Perfume[]>([]);
  const [isLoadingPerfumes, setIsLoadingPerfumes] = useState(true);

  useEffect(() => {
    const fetchPerfumes = async () => {
      setIsLoadingPerfumes(true);
      const { data, error } = await supabase.from("Perfumes").select("*");
      setIsLoadingPerfumes(false);
      if (data) setPerfumes(data);
      if (error) console.error("Error fetching:", error);
    };

    fetchPerfumes();
  }, []);

  return (
    <main className="bg-[#F5F5F0] w-full">
      <Navbar />
      <div className="w-full h-[600px] relative flex items-center justify-center overflow-hidden bg-[#F5F5F0] mt-0.5">
        
        <h1 className="font-body text-4xl md:text-5xl text-center z-10 px-6 max-w-[600px] leading-tight">
          <span className="text-red-600">Hand</span>crafted in small batches using the world's 
          <span className="text-amber-500"> finest</span> botanical oils. 
          Welcome to luxury you can actually wear.
        </h1>

     <img
      src="/sunDrawing.jpg"
      alt="sun"
      className="
        absolute w-[250px] lg:w-[300px]
        top-10 left-20 lg:left-10
        rotate-[-10deg] opacity-100
        z-0 rounded-2xl shadow-xl
        transition-transform hover:scale-105 duration-300

        max-[1262px]:rotate-0
        max-[1195px]:hidden
      "
    />

    
    <img
      src="/happy.jpg"
      alt="happy"
      className="
        absolute w-[250px] lg:w-[300px]
        bottom-10 right-10
        rotate-[8deg]
        z-20 rounded-2xl shadow-xl
        transition-transform hover:scale-105 duration-300
        opacity-80 lg:opacity-80 xl:opacity-100

        max-[1158px]:hidden
      "
  />
        
    <img
    src="/blur.jpg"
    alt="blur"
    className="
      absolute w-[200px] lg:w-[280px]
      top-10 right-20
      rotate-[-5deg]
      z-0 opacity-60
      rounded-2xl shadow-xl
      transition-transform hover:scale-105 duration-300
      xl:opacity-[100]

      max-[1195px]:top-90
      max-[1195px]:opacity-[80%]
      max-[1158px]:hidden
      max-[1195px]:left-15
      max-[1195px]:right-auto
      max-[1195px]:opacity-100
    "
  />

      </div>
      {isLoadingPerfumes ? (
        <PageLoading message="Loading collection…" />
      ) : (
        <FeaturedCollection perfumes={perfumes} />
      )}
      <Testimonials />
      <Footer />
    </main>
  );
};
export default Home