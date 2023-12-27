"use client";
import { Movie } from "../../typings";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import getImagePath from "@/lib/getImagePath";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

type Props = {
  movies: Movie[];
};

const CarouselsBanner = ({ movies }: Props) => {
  return (
    <div className="lg:-mt-40 cursor-pointer">
      <Carousel
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnInteraction: true,
          }),
        ]}
      >
        <CarouselContent>
          {movies.map((movie) => (
            <CarouselItem key={movie.id}>
              <div className="relative">
                <Image
                  src={getImagePath(movie.backdrop_path, true)}
                  alt={movie.title}
                  width={1920}
                  height={1080}
                  key={movie.id}
                />

                <div className="hidden lg:inline absolute mt-0 top-0 pt-40 xl:pt-52 left-0 lg:mt-40 bg-transparent z-20 h-full w-full bg-gradient-to-r from-[#1A1C29] via-transparent to-transparent p-10 space-y-5 text-white">
                  <h2 className="text-5xl font-bold max-w-xl z-50">
                    {movie.title}
                  </h2>
                  <p className="max-w-xl line-clamp-3">{movie.overview}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/25 to-gray-300 dark:to-[#1A1C29]" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default CarouselsBanner;
