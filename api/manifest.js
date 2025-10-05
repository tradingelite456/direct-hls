// api/manifest.js - Manifest unifié
export default function handler(req, res) {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  
  if (req.method === 'OPTIONS') {
    res.statusCode = 200;
    return res.end();
  }

  const manifest = {
    id: "community.directhls",
    version: "1.0.0",
    name: "Direct HLS Addon",
    description: "Streaming direct via HLS pour films et séries",
    catalogs: [
      {
        type: "series",
        id: "directhls_series",
        name: "Télé-Réalité",
        extra: [
          {
            name: "genre",
            isRequired: false,
            options: ["Reality", "Drama", "Divertissement"]
          }
        ]
      },
      {
        type: "movie",
        id: "netflix_movies",
        name: "Netflix",
        extra: [
          {
            name: "genre",
            isRequired: false,
            options: ["Action", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Drama", "Fantasy", "History", "Sci-Fi", "Sport", "Thriller"]
          }
        ]
      },
      {
        type: "series",
        id: "netflix_series",
        name: "Netflix",
        extra: [
          {
            name: "genre",
            isRequired: false,
            options: ["Action", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Drama", "Fantasy", "History", "Sci-Fi", "Sport", "Thriller"]
          }
        ]
      },
      {
        type: "movie",
        id: "prime_movies",
        name: "Amazon Prime",
        extra: [
          {
            name: "genre",
            isRequired: false,
            options: ["Action", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Drama", "Fantasy", "History", "Sci-Fi", "Sport", "Thriller"]
          }
        ]
      },
      {
        type: "series",
        id: "prime_series",
        name: "Amazon Prime",
        extra: [
          {
            name: "genre",
            isRequired: false,
            options: ["Action", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Drama", "Fantasy", "History", "Sci-Fi", "Sport", "Thriller"]
          }
        ]
      },
      {
        type: "movie",
        id: "disney_movies",
        name: "Disney+",
        extra: [
          {
            name: "genre",
            isRequired: false,
            options: ["Action", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Drama", "Fantasy", "History", "Sci-Fi", "Sport", "Thriller"]
          }
        ]
      },
      {
        type: "series",
        id: "disney_series",
        name: "Disney+",
        extra: [
          {
            name: "genre",
            isRequired: false,
            options: ["Action", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Drama", "Fantasy", "History", "Sci-Fi", "Sport", "Thriller"]
          }
        ]
      },
      {
        type: "movie",
        id: "appletv_movies",
        name: "Apple TV+",
        extra: [
          {
            name: "genre",
            isRequired: false,
            options: ["Action", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Drama", "Fantasy", "History", "Sci-Fi", "Sport", "Thriller"]
          }
        ]
      },
      {
        type: "series",
        id: "appletv_series",
        name: "Apple TV+",
        extra: [
          {
            name: "genre",
            isRequired: false,
            options: ["Action", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Drama", "Fantasy", "History", "Sci-Fi", "Sport", "Thriller"]
          }
        ]
      },
      {
        type: "movie",
        id: "canal_movies",
        name: "Canal+",
        extra: [
          {
            name: "genre",
            isRequired: false,
            options: ["Action", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Drama", "Fantasy", "History", "Sci-Fi", "Sport", "Thriller"]
          }
        ]
      },
      {
        type: "series",
        id: "canal_series",
        name: "Canal+",
        extra: [
          {
            name: "genre",
            isRequired: false,
            options: ["Action", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Drama", "Fantasy", "History", "Sci-Fi", "Sport", "Thriller"]
          }
        ]
      },
      {
        type: "movie",
        id: "hbo_movies",
        name: "HBO Max",
        extra: [
          {
            name: "genre",
            isRequired: false,
            options: ["Action", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Drama", "Fantasy", "History", "Sci-Fi", "Sport", "Thriller"]
          }
        ]
      },
      {
        type: "series",
        id: "hbo_series",
        name: "HBO Max",
        extra: [
          {
            name: "genre",
            isRequired: false,
            options: ["Action", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Drama", "Fantasy", "History", "Sci-Fi", "Sport", "Thriller"]
          }
        ]
      }
    ],
    resources: ["catalog", "meta", "stream"],
    types: ["movie", "series"],
    idPrefixes: ["tt"]
  };

  res.statusCode = 200;
  res.end(JSON.stringify(manifest));
}
