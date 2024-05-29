import Header from "@/components/header/Header";
import Image from "next/image"; 
import imghotel from '/public/assets/imagemhotel/hotel-presidente-4s (1).jpg'


export default function Home() {
  return (
    <main>
      <Header/>   
      <div className="relative w-full h-[calc(100vh-80px)] mt-4 overflow-hidden"> 
        <Image
          src={imghotel} alt="ImgHotel" layout="responsive" objectFit="cover" className="w-full h-full"
        />
      </div>
    </main>
  );
}
