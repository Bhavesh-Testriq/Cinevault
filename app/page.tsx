import Carousel from "@/components/Carousel";
import MovieCarousel from "@/components/MovieComponents/MovieCarousel";
import { getPopular, getTopRated, getTrending } from "@/lib/tmdb";

export default async function Home() {
  const [trending, popular, topRated] = await Promise.all([getTrending(), getPopular(), getTopRated()])

  return (
    // <main className="mb-10 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
    <main className="mb-10 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
      <Carousel movies={trending.results} />
      
      <MovieCarousel title="Trending Movies" movies={trending.results} />
      <MovieCarousel title="Popular Movies" movies={popular.results} />
      <MovieCarousel title="Top Rated Movies" movies={topRated.results} />
    </main>
  );
}
