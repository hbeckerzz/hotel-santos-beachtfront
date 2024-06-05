import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export interface CarouselDemo1 {
  title: string;
  imageUrl: string;
  description: string;
  subtitle?: string;
}

// Exemplo de dados do carrossel
const carouselData: CarouselDemo1[] = [
  {
    title: "Slide 1",
    imageUrl: "https://i.ibb.co/LN7jf9y/imagem-2024-06-04-221236704.png",
    description: "Descrição do Slide 1",
  },
  {
    title: "Slide 2",
    imageUrl: "https://i.ibb.co/xDSDPmS/imagem-2024-06-04-220813062.png",
    description: "Descrição do Slide 2",
  },
  {
    title: "Slide 3",
    imageUrl: "https://i.ibb.co/DVdV1zF/imagem-2024-06-04-221000567.png",
    description: "Descrição do Slide 3",
  },
  {
    title: "Slide 4",
    imageUrl: "https://i.ibb.co/dDw3Tm8/imagem-2024-06-04-221125288.png",
    description: "Descrição do Slide 4",
  },
  {
    title: "Slide 5",
    imageUrl: 'https://i.ibb.co/WGF51CS/imagem-2024-06-04-220511809.png',
    description: "Descrição do Slide 5",
  },
];

export function CarouselDemo1() {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {carouselData.map((item, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}