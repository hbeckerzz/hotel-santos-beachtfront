import { ButtonDemo } from "@/components/buttonDemo/buttonDemo";
import { CarouselDemo1 } from "@/components/carouselDemo/carouselDemo1";
import { CarouselDemo2 } from "@/components/carouselDemo/carouselDemo2";
import { CarouselDemo3 } from "@/components/carouselDemo/carouselDemo3";
import { CarouselDemo4 } from "@/components/carouselDemo/carouselDemo4";
import SuiteDescription from "@/components/descricoes/descriptionBrancaCasal";
import SuiteDescription3 from "@/components/descricoes/descriptionBrancaFamilia";
import SuiteDescription1 from "@/components/descricoes/descriptionNauticaCasal";
import SuiteDescription2 from "@/components/descricoes/descriptionNauticaFamilia";
import Header from "@/components/header/Header";




export default function Acomodacao(){
    return(
        <main>
            <Header/>
            <div className="grid grid-cols-2 border-2 border-black my-8 w-[98%] mx-auto">
                <CarouselDemo1/> 
                <SuiteDescription/>
                <ButtonDemo/>

            </div>
            <div className="grid grid-cols-2 border-2 border-black my-8 w-[98%] mx-auto">
                <CarouselDemo2/>
                <SuiteDescription3/>
                <ButtonDemo/>
            </div>
            <div className="grid grid-cols-2 border-2 border-black my-8 w-[98%] mx-auto">
                <CarouselDemo3/>
                <SuiteDescription1/>
                <ButtonDemo/>
            </div>
            <div className="grid grid-cols-2 border-2 border-black my-8 w-[98%] mx-auto">
                <CarouselDemo4/>
                <SuiteDescription2/>
                <ButtonDemo/>
            </div>
        </main>
    )
}