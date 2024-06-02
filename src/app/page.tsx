import Header from "@/components/header/Header";
import Image from "next/image";
import imghotel from '/public/assets/imagemhotel/hotel-presidente-4s (1).jpg';
import Quadrado from "@/components/quadradoinfo/quadrado";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header/>
      <div className="relative w-full flex-grow mt-4">
        <Image
          src={imghotel}
          alt="ImgHotel"
          layout="responsive"
          objectFit="cover"
          className="w-full h-[calc(100vh-80px)]"
        />
        <Quadrado />
      </div>
    </main>
  );
}
