// api/tmdb.js - Récupération des métadonnées TMDB

const TMDB_API_KEY = '4ea5e6978e74d65ab972c6df5de05e19';
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

export async function getTMDBMetadata(imdbId, type = 'movie') {
  try {
    const findUrl = `${TMDB_BASE_URL}/find/${imdbId}?api_key=${TMDB_API_KEY}&language=fr-FR&external_source=imdb_id`;
    const findResponse = await fetch(findUrl);
    const findData = await findResponse.json();

    let tmdbId = null;
    let result = null;

    if (type === 'movie' && findData.movie_results && findData.movie_results.length > 0) {
      result = findData.movie_results[0];
      tmdbId = result.id;
    } else if (type === 'series' && findData.tv_results && findData.tv_results.length > 0) {
      result = findData.tv_results[0];
      tmdbId = result.id;
    }

    if (!result) {
      return null;
    }

    const detailsUrl = type === 'movie'
      ? `${TMDB_BASE_URL}/movie/${tmdbId}?api_key=${TMDB_API_KEY}&language=fr-FR`
      : `${TMDB_BASE_URL}/tv/${tmdbId}?api_key=${TMDB_API_KEY}&language=fr-FR`;

    const detailsResponse = await fetch(detailsUrl);
    const details = await detailsResponse.json();

    return {
      description: details.overview || result.overview,
      genres: details.genres ? details.genres.map(g => g.name) : [],
      releaseInfo: type === 'movie'
        ? (details.release_date ? details.release_date.substring(0, 4) : null)
        : (details.first_air_date ? details.first_air_date.substring(0, 4) + (details.last_air_date && details.last_air_date !== details.first_air_date ? '-' + details.last_air_date.substring(0, 4) : '-') : null),
      imdbRating: details.vote_average ? details.vote_average.toFixed(1) : null,
      tmdbId: tmdbId
    };
  } catch (error) {
    console.error('Error fetching TMDB metadata:', error);
    return null;
  }
}

export async function getEpisodeOverview(imdbId, season, episode) {
  try {
    const findUrl = `${TMDB_BASE_URL}/find/${imdbId}?api_key=${TMDB_API_KEY}&external_source=imdb_id`;
    const findResponse = await fetch(findUrl);
    const findData = await findResponse.json();

    if (!findData.tv_results || findData.tv_results.length === 0) {
      return null;
    }

    const tmdbId = findData.tv_results[0].id;
    const episodeUrl = `${TMDB_BASE_URL}/tv/${tmdbId}/season/${season}/episode/${episode}?api_key=${TMDB_API_KEY}&language=fr-FR`;

    const episodeResponse = await fetch(episodeUrl);
    const episodeData = await episodeResponse.json();

    return {
      overview: episodeData.overview || '',
      title: episodeData.name || `Épisode ${episode}`,
      released: episodeData.air_date ? new Date(episodeData.air_date).toISOString() : null
    };
  } catch (error) {
    console.error('Error fetching episode overview:', error);
    return null;
  }
}
