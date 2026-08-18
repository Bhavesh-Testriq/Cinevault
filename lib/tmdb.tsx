const BASE_URL = "https://api.themoviedb.org/3";

async function tmdbFetch(endpoint: string, params: Record<string, string> = {} ) {
    const query = new URLSearchParams(params);
    const res = await fetch(`${BASE_URL}${endpoint}?${query}`, {
        headers: {
            Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
            accept: "application/json"
        },
        next: {revalidate: 3600},
    })

    if(!res.ok) throw new Error(`TMDB ${res.status}: ${endpoint}`);
    return res.json();
}

export const getTrending = () => tmdbFetch("/trending/movie/week");
export const getPopular = (page = 1) => tmdbFetch("/movie/popular", {page: String(page)});
export const getTopRated = (page = 1) => tmdbFetch("/movie/top_rated", {page: String(page)});
export const getUpcoming = (page = 1) => tmdbFetch("/movie/upcoming", {page: String(page)});
export const getMovieDetails = (id: string) => tmdbFetch(`/movie/${id}`, {append_to_response: "credits, videos, similar, recommendations"});
export const searchMovies = (query: string, page = 1) => tmdbFetch("/search/movie", {query, page: String(page)});
export const discoverMovies = (params: Record<string, string>) => tmdbFetch("/discover/movie", params);

