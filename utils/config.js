module.exports = {
	title: 'PlayWatch',
	description: 'A Next.js project for movie/tv shows enthusiasts',
	nofollow: false,
	noindex: false,
	tmdbImgBaseUrl: 'https://image.tmdb.org/t/p/',
	trendingMoviesByDay: `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
	trendingMoviesByWeek: `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
	trendingTvShowsByDay: `https://api.themoviedb.org/3/trending/tv/day?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
	trendingTvShowsByWeek: `https://api.themoviedb.org/3/trending/tv/week?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
};
