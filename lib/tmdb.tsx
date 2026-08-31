const BASE_URL = "https://api.themoviedb.org/3";

async function tmdbFetch(endpoint: string, params: Record<string, string> = {}) {
    const query = new URLSearchParams({
        ...params,
        // include_adult: "false",
    }).toString();

    const res = await fetch(`${BASE_URL}${endpoint}?${query}`, {
        headers: {
            Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
            accept: "application/json",
        },
        next: { revalidate: 3600 },
    });

    if (!res.ok) throw new Error(`TMDB ${res.status}: ${endpoint}`);

    return await res.json();
}

export const getTrending = () => tmdbFetch("/trending/movie/week");

export const getPopular = (page = 1) =>
    tmdbFetch("/movie/popular", { page: String(page) });

export const getTopRated = (page = 1) =>
    tmdbFetch("/movie/top_rated", { page: String(page) });

export const getMovieDetails = (id: string) =>
    tmdbFetch(`/movie/${id}`, {
        append_to_response: "credits,videos,similar,recommendations",
    });

export const searchMovies = (query: string, page = 1) =>
    tmdbFetch("/search/movie", { query, page: String(page) });

export const discoverMovies = (params: Record<string, string>) =>
    tmdbFetch("/discover/movie", params);

export const getMovieVideos = (id: string) => 
    tmdbFetch(`/movie/${id}/videos`, { language: "en-US" })


export function getTrailer(videos: { results: any[] } | undefined) {
    if (!videos?.results.length) return null;

    const youtubeVideos = videos.results.filter((video) => video.site === "YouTube");

    return (
        youtubeVideos.find((v) => v.type === "Trailer" && v.official) ??
        youtubeVideos.find(v => v.type === "Trailer") ??
        youtubeVideos[0]
    )
}