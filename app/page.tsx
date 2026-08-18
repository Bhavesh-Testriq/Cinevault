import Carousel from "@/components/Carousel";
import MovieCarousel from "@/components/MovieComponents/MovieCarousel";
import { getPopular, getTopRated, getTrending, getUpcoming } from "@/lib/tmdb";

export default async function Home() {
  const [trending, popular,topRated] = await Promise.all([getTrending(), getPopular(), getTopRated()])

  return (
    <main className="px-20 mb-10">
      <Carousel movies={trending.results} />

      <MovieCarousel title="Trending" movies={trending.results} />
      <MovieCarousel title="Popular" movies={popular.results} />
      <MovieCarousel title="Top Rated" movies={topRated.results} />
      {/* <MovieSection title="Upcoming" movies={upcoming.results} /> */}
    </main>
  );
}
