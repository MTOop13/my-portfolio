import Image from "next/image";
import Head from "next/head";
import Header from "./header/page"; 
import Contact from "./contact/page";
import Link from "next/link";
import Projects from "./projects/page";


export default function Home() {
  return (
    <div>
      
      <Head>
        <title>موقعي الشخصي | محمد فؤاد المخلافي</title>
        <meta name="description" content="مطور ويب متخصص في Next.js" />
      </Head>


      <main className="flex flex-col items-center justify-center flex-grow text-center py-20">

          <Image
            src="/profile.jpg"
            width={200}
            height={200}
            alt="صورة شخصية"
            className="rounded-full border-4 border-blue-500 shadow-lg transform transition-transform duration-300 hover:scale-110"
          />
        <h1 className="text-4xl font-bold mt-4 text-white">مرحبًا، أنا محمد فؤاد المخلافي   </h1>
          <p className="text-white-600 text-lg mt-2  text-xl font-semibold  mb-4 w-1/2">

          
        </p>
        <Projects />
      </main>
    
   
   

      <Contact/>
    </div>
  );
}
