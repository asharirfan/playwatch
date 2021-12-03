module.exports = {
	title: 'PlayWatch',
	description: 'A Next.js project for movie/tv shows enthusiasts',
	nofollow: false,
	noindex: false,
	search: `https://api.themoviedb.org/3/search/multi?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US`,
	tmdbImgBaseUrl: 'https://image.tmdb.org/t/p/',
	trendingMoviesByDay: `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US`,
	trendingMoviesByWeek: `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US`,
	trendingPersonsByDay: `https://api.themoviedb.org/3/trending/person/day?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US`,
	trendingPersonsByWeek: `https://api.themoviedb.org/3/trending/person/week?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US`,
	trendingTvShowsByDay: `https://api.themoviedb.org/3/trending/tv/day?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US`,
	trendingTvShowsByWeek: `https://api.themoviedb.org/3/trending/tv/week?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US`,
	getMovie: `https://api.themoviedb.org/3/movie`,
	getPerson: `https://api.themoviedb.org/3/person`,
	getTvShow: `https://api.themoviedb.org/3/tv`
};
