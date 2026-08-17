import Card from "@/components/Card";
import Carousel from "@/components/Carousel";
import MovieCarousel from "@/components/MovieCarousel";

export default function Home() {
  return (
    <main className="px-20 mb-10">
      <Carousel />

      <div className="mt-10">
        <h4 className="text-2xl mb-2">Trending Movies</h4>
        <MovieCarousel />
      </div>
      <div className="mt-10">
        <h4 className="text-2xl mb-2">Popular Movies</h4>
        <MovieCarousel />
      </div>
      <div className="mt-10">
        <h4 className="text-2xl mb-2">Top Rated Movies</h4>
        <MovieCarousel />
      </div>
    </main>
  );
}
