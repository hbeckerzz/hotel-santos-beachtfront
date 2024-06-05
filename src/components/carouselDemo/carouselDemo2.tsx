import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export interface CarouselDemo2 {
  title: string;
  imageUrl: string;
  description: string;
  subtitle?: string;
}

// Exemplo de dados do carrossel
const carouselData: CarouselDemo2[] = [
  {
    title: "Slide 1",
    imageUrl: "https://i.ibb.co/dcHqmPH/Quarto-10.jpg",
    description: "Descrição do Slide 1",
  },
  {
    title: "Slide 2",
    imageUrl: "https://i.ibb.co/hdyYDRQ/Quarto-11.jpg",
    description: "Descrição do Slide 2",
  },
  {
    title: "Slide 3",
    imageUrl: "https://i.ibb.co/wCh1qpY/Quarto-12.jpg",
    description: "Descrição do Slide 3",
  },
  {
    title: "Slide 4",
    imageUrl: "https://i.ibb.co/TBB45x9/Quarto-8.jpg",
    description: "Descrição do Slide 4",
  },
  {
    title: "Slide 5",
    imageUrl: 'https://i.ibb.co/WGF51CS/imagem-2024-06-04-220511809.png',
    description: "Descrição do Slide 5",
  },
];

export function CarouselDemo2() {
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