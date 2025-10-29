// api/router.js

// === Helpers ===
function sendJSON(res, obj, status = 200) {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Cache-Control", "public, max-age=3600");
  res.statusCode = status;
  res.end(JSON.stringify(obj));
}

function stripJson(s) {
  return s.replace(/\.json$/, "");
}

function fetchPosterFromIMDb(id) {
  return `https://images.metahub.space/poster/small/${id}/img`;
}

function fetchLogoFromIMDb(id) {
  return `https://images.metahub.space/logo/medium/${id}/img`;
}

function fetchBackgroundFromIMDb(id) {
  return `https://images.metahub.space/background/medium/${id}/img`;
}

function fetchEpisodeThumbnail(seriesId, season, episode) {
  return `https://episodes.metahub.space/${seriesId}/${season}/${episode}/w780.jpg`;
}

// === Catalogue ===
const catalogData = [
  {
    id: "ttseries_villa",
    type: "series",
    name: "La Villa des coeurs brisés",
    poster: "https://photos.tf1.fr/217/289/program-card-coaching-emine-maissanne-ep21-1a6928-eb1200-0@3x.jpg",
    background: "https://images1.persgroep.net/rcs/-zRbIHTq5GfByBRo528B0boVfxY/diocontent/260937823/_fitwidth/1400?appId=038a353bad43ac27fd436dc5419c256b&quality=0.8&format=webp",
    logo: "https://photos.tf1.fr/220/110/logo-programme-la-villa-2025-0e5a1d-72c6f5-0@3x.png",  
    description: "Ils sont plébiscités par le public pour avoir vécu des histoires d'amour qui se sont mal terminées... Nous allons les aider à reprendre confiance en eux et leur donner toutes les clés pour séduire, afin qu'ils puissent, enfin, trouver le GRAND AMOUR !",
    genres: ["Reality", "Drama"],
    releaseInfo: "2025",
    imdbRating: "6.5",
    // Episodes organisés par saison
    episodes: {
      10: [

           {
          id: "ttseries_villa:10:1",
          title: "Épisode 1",
          season: 10,
          episode: 1,
          overview: "Épisode 1 de la saison 10",
          released: "2025-08-10T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/1200/720/la-villa-des-coeurs-brises-saison-10-episode-01-du-11-aout-2025-90165525-1755069694-b9ffe9-36fe10-0@1x.jpg",
          stream: "https://preeminent-zuccutto-7d84c8.netlify.app/S10E1/S10E1.m3u8"
        },
            {
          id: "ttseries_villa:10:2",
          title: "Épisode 2",
          season: 10,
          episode: 2,
          overview: "Épisode 2 de la saison 10",
          released: "2025-08-11T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/1200/720/la-villa-des-coeurs-brises-saison-10-episode-02-du-11-aout-2025-23214497-1755069707-05f308-86b4ce-0@1x.jpg",
          stream: "https://velvety-rugelach-5ae261.netlify.app/S10E2.m3u8"
        },
        {
          id: "ttseries_villa:10:3",
          title: "Épisode 3",
          season: 10,
          episode: 3,
          overview: "Épisode 3 de la saison 10",
          released: "2025-08-12T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/950/534/la-villa-des-coeurs-brises-saison-10-episode-03-du-12-aout-2025-11366497-1755070020-7c51f2-a7e98d-0@2x.jpg",
          stream: "https://splendorous-taffy-ba0b65.netlify.app/S10E3.m3u8"
        },

           {
          id: "ttseries_villa:10:4",
          title: "Épisode 4",
          season: 10,
          episode: 4,
          overview: "Épisode 4 de la saison 10",
          released: "2025-08-13T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/950/534/la-villa-des-coeurs-brises-saison-10-episode-04-du-13-aout-2025-60236528-1755070104-e37445-5ba6af-0@1x.jpg",
          stream: "https://cheery-sawine-575a8f.netlify.app/S10E4.m3u8"
        },
        {
          id: "ttseries_villa:10:5",
          title: "Épisode 5",
          season: 10,
          episode: 5,
          overview: "Épisode 5 de la saison 10",
          released: "2025-08-14T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/950/534/la-villa-des-coeurs-brises-saison-10-episode-05-du-14-aout-2025-53256673-1755151264-55e317-632fcf-0@3x.jpg",
          stream: "https://zesty-croquembouche-215d40.netlify.app/S10E5.m3u8"
        },

          {
          id: "ttseries_villa:10:6",
          title: "Épisode 6",
          season: 10,
          episode: 6,
          overview: "Épisode 6 de la saison 10",
          released: "2025-08-15T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/1200/720/la-villa-des-coeurs-brises-saison-10-episode-06-du-15-aout-2025-75913350-1755498259-3e6008-c85024-0@1x.webp",
          stream: "https://cool-kitsune-85a095.netlify.app/S10E6.m3u8"
        },
        {
          id: "ttseries_villa:10:7",
          title: "Épisode 7",
          season: 10,
          episode: 7,
          overview: "Épisode 7 de la saison 10",
          released: "2025-08-18T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/1200/720/la-villa-des-coeurs-brises-saison-10-episode-07-du-18-aout-2025-31199021-1755498284-9e1cc7-c86ce7-0@1x.jpg",
          stream: "https://animated-blini-0b7203.netlify.app/S10E7.m3u8"
        },
            {
          id: "ttseries_villa:10:8",
          title: "Épisode 8",
          season: 10,
          episode: 8,
          overview: "Épisode 8 de la saison 10",
          released: "2025-08-19T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/1200/720/la-villa-des-coeurs-brises-saison-10-episode-08-du-19-aout-2025-58700996-1755589590-e62065-87a548-0@1x.webp",
          stream: "https://polite-liger-ac90a3.netlify.app/S10E8.m3u8"
        },
        {
          id: "ttseries_villa:10:9",
          title: "Épisode 9",
          season: 10,
          episode: 9,
          overview: "Épisode 9 de la saison 10",
          released: "2025-08-20T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/1200/720/la-villa-des-coeurs-brises-saison-10-episode-09-du-20-aout-2025-49388030-1755687532-735302-189899-0@1x.jpg",
          stream: "https://rococo-fenglisu-db2b7e.netlify.app/S10E9.m3u8"
        },

          {
          id: "ttseries_villa:10:10",
          title: "Épisode 10",
          season: 10,
          episode: 10,
          overview: "Épisode 10 de la saison 10",
          released: "2025-08-21T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/1200/720/la-villa-des-coeurs-brises-saison-10-episode-10-du-21-aout-2025-71447607-1755760241-68f4ed-0c1989-0@1x.jpg",
          stream: "https://benevolent-beignet-f0dfab.netlify.app/S10E10.m3u8"
        },
        {
          id: "ttseries_villa:10:11",
          title: "Épisode 11",
          season: 10,
          episode: 11,
          overview: "Épisode 11 de la saison 10",
          released: "2025-08-22T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/1200/720/la-villa-des-coeurs-brises-saison-10-episode-11-du-22-aout-2025-07016282-1755847088-3dd892-aefad7-0@1x.webp",
          stream: "https://neon-pony-05b704.netlify.app/S10E11.m3u8"
        },

         {
          id: "ttseries_villa:10:12",
          title: "Épisode 12",
          season: 10,
          episode: 12,
          overview: "Épisode 12 de la saison 10",
          released: "2025-08-25T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/1200/720/la-villa-des-coeurs-brises-saison-10-episode-12-du-25-aout-2025-79395394-1756192375-8bad02-591a5d-0@1x.jpg",
          stream: "https://lucky-cassata-616d0c.netlify.app/S10E12.m3u8"
        },
        {
          id: "ttseries_villa:10:13",
          title: "Épisode 13",
          season: 10,
          episode: 13,
          overview: "Épisode 13 de la saison 10",
          released: "2025-08-26T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/1200/720/la-villa-des-coeurs-brises-saison-10-episode-13-du-26-aout-2025-07980971-1756188319-65a87f-048d64-0@1x.webp",
          stream: "https://illustrious-rolypoly-4f16b8.netlify.app/S10E13.m3u8"
        },
      {
          id: "ttseries_villa:10:14",
          title: "Épisode 14",
          season: 10,
          episode: 14,
          overview: "Épisode 14 de la saison 10",
          released: "2025-08-27T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/548/308/la-villa-des-coeurs-brises-saison-10-episode-14-du-27-aout-2025-47599360-1756282917-a88048-ff31fb-0@3x.jpg",
          stream: "https://magenta-trifle-c3506b.netlify.app/S10E14.m3u8"
        },
        {
          id: "ttseries_villa:10:15",
          title: "Épisode 15",
          season: 10,
          episode: 15,
          overview: "Épisode 15 de la saison 10",
          released: "2025-08-28T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/1200/720/la-villa-des-coeurs-brises-saison-10-episode-15-du-28-aout-2025-64115472-1756367686-9c703c-0872da-0@1x.webp",
          stream: "https://timely-lolly-490ca8.netlify.app/S10E15.m3u8"
        },

        
       {
          id: "ttseries_villa:10:16",
          title: "Épisode 16",
          season: 10,
          episode: 16,
          overview: "Épisode 16 de la saison 10",
          released: "2025-08-29T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/950/534/la-villa-des-coeurs-brises-saison-10-episode-16-du-29-aout-2025-71089926-1756454557-a189cc-85d6e8-0@2x.webp",
          stream: "https://subtle-beignet-21581a.netlify.app/S10E16.m3u8"
        },
        {
          id: "ttseries_villa:10:17",
          title: "Épisode 17",
          season: 10,
          episode: 17,
          overview: "Épisode 17 de la saison 10",
          released: "2025-09-01T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/1200/720/la-villa-des-coeurs-brises-saison-10-episode-17-du-1-septembre-2025-79086667-1756712108-719d4d-8d9ef6-0@1x.jpg",
          stream: "https://superlative-cupcake-a669e2.netlify.app/S10E17.m3u8"
        },
        
          {
          id: "ttseries_villa:10:18",
          title: "Épisode 18",
          season: 10,
          episode: 18,
          overview: "Épisode 18 de la saison 10",
          released: "2025-09-02T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/950/534/la-villa-des-coeurs-brises-saison-10-episode-18-du-2-septembre-2025-68780722-1756799320-8eb1c1-7da9b1-0@3x.jpg",
          stream: "https://melodious-malasada-dc46b9.netlify.app/S10E18.m3u8"
        },
        {
          id: "ttseries_villa:10:19",
          title: "Épisode 19",
          season: 10,
          episode: 19,
          overview: "Épisode 19 de la saison 10",
          released: "2025-09-03T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/1200/720/la-villa-des-coeurs-brises-saison-10-episode-19-du-3-septembre-2025-45502972-1756884112-d56387-e0bfa0-0@1x.jpg",
          stream: "https://timely-truffle-6ae782.netlify.app/S10E19.m3u8"
        },
        
        {
          id: "ttseries_villa:10:20",
          title: "Épisode 20",
          season: 10,
          episode: 20,
          overview: "Épisode 20 de la saison 10",
          released: "2025-09-04T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/950/534/la-villa-des-coeurs-brises-saison-10-episode-20-du-4-septembre-2025-22517739-1757057517-be7616-60b660-0@1x.jpg",
          stream: "https://euphonious-sunburst-bb4226.netlify.app/S10E20.m3u8"
        },
        {
          id: "ttseries_villa:10:21",
          title: "Épisode 21",
          season: 10,
          episode: 21,
          overview: "Épisode 21 de la saison 10",
          released: "2025-09-05T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/950/534/la-villa-des-coeurs-brises-saison-10-episode-21-du-5-septembre-2025-16143143-1757057560-04aab9-2ff192-0@1x.webp",
          stream: "https://dulcet-granita-d67f95.netlify.app/S10E21.m3u8"
        },
        
        {
          id: "ttseries_villa:10:22",
          title: "Épisode 22",
          season: 10,
          episode: 22,
          overview: "Épisode 22 de la saison 10",
          released: "2025-09-08T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/330/186/avant-premiere-la-villa-saison-10-episode-18-du-2-septembre-2025-31586572-1756106139-48428a-e6db9f-0@3x.jpg",
          stream: "https://dainty-bienenstitch-92bfd0.netlify.app/Video.m3u8"
        },
        {
          id: "ttseries_villa:10:23",
          title: "Épisode 23",
          season: 10,
          episode: 23,
          overview: "Épisode 23 de la saison 10",
          released: "2025-09-09T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/1200/720/avant-premiere-la-villa-saison-10-episode-23-du-9-septembre-2025-78936117-1756712122-39e62b-3fa70b-0@1x.jpg",
          stream: "https://super-creponne-012bcc.netlify.app/S10E23.m3u8"
        },
        {
          id: "ttseries_villa:10:24",
          title: "Épisode 24",
          season: 10,
          episode: 24,
          overview: "Épisode 24 de la saison 10",
          released: "2025-09-10T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/330/186/avant-premiere-la-villa-saison-10-episode-24-du-10-septembre-2025-04968679-1757397549-d001c6-d4b157-0@3x.jpg",
          stream: "https://chic-twilight-494a45.netlify.app/master.m3u8"
        },
        {
          id: "ttseries_villa:10:25",
          title: "Épisode 25",
          season: 10,
          episode: 25,
          overview: "Épisode 25 de la saison 10",
          released: "2025-09-11T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/330/186/avant-premiere-la-villa-saison-10-episode-25-du-11-septembre-2025-62314241-1757397519-942251-12921b-0@3x.webp",
          stream: "https://stately-youtiao-b39da3.netlify.app/master.m3u8"
        },
        {
          id: "ttseries_villa:10:26",
          title: "Épisode 26",
          season: 10,
          episode: 26,
          overview: "Épisode 26 de la saison 10",
          released: "2025-09-12T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/330/186/avant-premiere-la-villa-saison-10-episode-26-du-12-septembre-2025-35469899-1757402771-a96be3-6e890b-0@3x.webp",
          stream: "https://stirring-marshmallow-f14089.netlify.app/master.m3u8"
        },
        {
          id: "ttseries_villa:10:27",
          title: "Épisode 27",
          season: 10,
          episode: 27,
          overview: "Épisode 27 de la saison 10",
          released: "2025-09-13T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/330/186/la-villa-des-coeurs-brises-saison-10-episode-27-du-15-septembre-2025-87848099-1757958813-57d813-8af2ca-0@3x.jpg",
          stream: "https://elegant-syrniki-d416bb.netlify.app/master.m3u8"
        },
        {
          id: "ttseries_villa:10:28",
          title: "Épisode 28",
          season: 10,
          episode: 28,
          overview: "Épisode 28 de la saison 10",
          released: "2025-09-16T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/330/186/la-villa-des-coeurs-brises-saison-10-episode-28-du-16-septembre-2025-81396062-1758033387-f4c788-290e4a-0@3x.webp",
          stream: "https://stellular-nasturtium-349902.netlify.app/master.m3u8"
        },
        {
          id: "ttseries_villa:10:29",
          title: "Épisode 29",
          season: 10,
          episode: 29,
          overview: "Épisode 29 de la saison 10",
          released: "2025-09-17T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/330/186/avant-premiere-la-villa-saison-10-episode-29-du-17-septembre-2025-80793336-1757668511-0e0301-84b7f6-0@3x.webp",
          stream: "https://curious-cupcake-aa33e2.netlify.app/master.m3u8"
        },
         {
          id: "ttseries_villa:10:30",
          title: "Épisode 30",
          season: 10,
          episode: 30,
          overview: "Épisode 30 de la saison 10",
          released: "2025-09-18T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/330/186/avant-premiere-la-villa-saison-10-episode-30-du-18-septembre-2025-08894233-1757921658-c4fd52-037537-0@3x.webp",
          stream: "https://darling-tapioca-723401.netlify.app/master.m3u8"
        },
         {
          id: "ttseries_villa:10:31",
          title: "Épisode 31",
          season: 10,
          episode: 31,
          overview: "Épisode 31 de la saison 10",
          released: "2025-09-19T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/330/186/avant-premiere-la-villa-saison-10-episode-31-du-19-septembre-2025-37152138-1757397339-6e5b23-ac4083-0@3x.jpg",
          stream: "https://beautiful-genie-f83a9d.netlify.app/master.m3u8"
        },
         {
          id: "ttseries_villa:10:32",
          title: "Épisode 32",
          season: 10,
          episode: 32,
          overview: "Épisode 32 de la saison 10",
          released: "2025-09-20T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/330/186/avant-premiere-la-villa-saison-10-episode-32-du-22-septembre-2025-40038583-1757905813-6121f6-213eb1-0@3x.jpg",
          stream: "https://monumental-dodol-df2c20.netlify.app/master.m3u8"
        },
         {
          id: "ttseries_villa:10:33",
          title: "Épisode 33",
          season: 10,
          episode: 33,
          overview: "Épisode 33 de la saison 10",
          released: "2025-09-21T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/330/186/avant-premiere-la-villa-saison-10-episode-33-du-23-septembre-2025-31902648-1757905784-d9c4f0-d1adf7-0@3x.jpg",
          stream: "https://quiet-capybara-50244f.netlify.app/master.m3u8"
        },
         {
          id: "ttseries_villa:10:34",
          title: "Épisode 34",
          season: 10,
          episode: 34,
          overview: "Épisode 34 de la saison 10",
          released: "2025-09-24T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/330/186/avant-premiere-la-villa-saison-10-episode-34-du-24-septembre-2025-81035680-1758111918-9e466a-49b2be-0@3x.jpg",
          stream: "https://phenomenal-dodol-7148d4.netlify.app/master.m3u8"
        },
         {
          id: "ttseries_villa:10:35",
          title: "Épisode 35",
          season: 10,
          episode: 35,
          overview: "Épisode 35 de la saison 10",
          released: "2025-09-25T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/330/186/avant-premiere-la-villa-saison-10-episode-35-du-25-septembre-2025-90412389-1758111884-132788-26a8a2-0@3x.jpg",
          stream: "https://tangerine-sunburst-795d8d.netlify.app/master.m3u8"
        },
         {
          id: "ttseries_villa:10:36",
          title: "Épisode 36",
          season: 10,
          episode: 36,
          overview: "Épisode 36 de la saison 10",
          released: "2025-09-26T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/330/186/avant-premiere-la-villa-saison-10-episode-36-du-26-septembre-2025-79545661-1758111871-0a62a9-2f3d38-0@3x.jpg",
          stream: "https://heartfelt-trifle-bf3b55.netlify.app/master.m3u8"
        },
         {
          id: "ttseries_villa:10:37",
          title: "Épisode 37",
          season: 10,
          episode: 37,
          overview: "Épisode 37 de la saison 10",
          released: "2025-09-27T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/330/186/avant-premiere-la-villa-saison-10-episode-37-du-29-septembre-2025-59418831-1758702852-aee04b-4c0021-0@3x.jpg",
          stream: "https://admirable-pony-f170c2.netlify.app/master.m3u8"
        },
         {
          id: "ttseries_villa:10:38",
          title: "Épisode 38",
          season: 10,
          episode: 38,
          overview: "Épisode 38 de la saison 10",
          released: "2025-09-28T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/330/186/avant-premiere-la-villa-saison-10-episode-38-du-30-septembre-2025-20373680-1758702827-85fe2d-0092cf-0@3x.jpg",
          stream: "https://fantastic-treacle-85dcb0.netlify.app/master.m3u8"
        },
         {
          id: "ttseries_villa:10:39",
          title: "Épisode 39",
          season: 10,
          episode: 39,
          overview: "Épisode 39 de la saison 10",
          released: "2025-09-30T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/330/186/avant-premiere-la-villa-saison-10-episode-39-du-1-octobre-2025-38599584-1758807587-14c0f0-b33bbc-0@3x.jpg",
          stream: "https://eclectic-jalebi-0548b9.netlify.app/master.m3u8"
        },
         {
          id: "ttseries_villa:10:40",
          title: "Épisode 40",
          season: 10,
          episode: 40,
          overview: "Épisode 40 de la saison 10",
          released: "2025-10-01T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/330/186/avant-premiere-la-villa-saison-10-episode-40-du-2-octobre-2025-62793645-1759129357-87317b-416f94-0@3x.jpg",
          stream: "https://cool-queijadas-bd6520.netlify.app/master.m3u8"
        },
         {
          id: "ttseries_villa:10:41",
          title: "Épisode 41",
          season: 10,
          episode: 41,
          overview: "Épisode 41 de la saison 10",
          released: "2025-10-02T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/330/186/avant-premiere-la-villa-saison-10-episode-41-du-3-octobre-2025-28133267-1759129375-3b484e-225e60-0@3x.jpg",
          stream: "https://polite-pasca-75f801.netlify.app/master.m3u8"
        },
         {
          id: "ttseries_villa:10:42",
          title: "Épisode 42",
          season: 10,
          episode: 42,
          overview: "Épisode 42 de la saison 10",
          released: "2025-10-04T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/330/186/avant-premiere-la-villa-saison-10-episode-42-du-6-octobre-2025-88848561-1759129401-646d81-3e1a7e-0@3x.jpg",
          stream: "https://celadon-arithmetic-e60bd6.netlify.app/master.m3u8"
        },
         {
          id: "ttseries_villa:10:43",
          title: "Épisode 43",
          season: 10,
          episode: 43,
          overview: "Épisode 43 de la saison 10",
          released: "2025-10-07T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/330/186/avant-premiere-la-villa-saison-10-episode-43-du-7-octobre-2025-83224339-1759129415-ec11e0-3d50fc-0@3x.jpg",
          stream: "https://lambent-cranachan-48dfa7.netlify.app/master.m3u8"
        },
         {
          id: "ttseries_villa:10:44",
          title: "Épisode 44",
          season: 10,
          episode: 44,
          overview: "Épisode 44 de la saison 10",
          released: "2025-10-08T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/330/186/avant-premiere-la-villa-saison-10-episode-44-du-8-octobre-2025-83607981-1759734236-8b77a3-a6ad4e-0@3x.jpg",
          stream: "https://rococo-gumdrop-433480.netlify.app/master.m3u8"
        },
         {
          id: "ttseries_villa:10:45",
          title: "Épisode 45",
          season: 10,
          episode: 45,
          overview: "Épisode 45 de la saison 10",
          released: "2025-10-09T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/330/186/avant-premiere-la-villa-saison-10-episode-45-du-9-octobre-2025-62257142-1759734290-0d7120-3fcfe6-0@3x.jpg",
          stream: "https://wonderful-fox-1a1747.netlify.app/master.m3u8"
        },
         {
          id: "ttseries_villa:10:46",
          title: "Épisode 46",
          season: 10,
          episode: 46,
          overview: "Épisode 46 de la saison 10",
          released: "2025-10-10T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/330/186/avant-premiere-la-villa-saison-10-episode-46-du-10-octobre-2025-45780109-1759734302-4d108a-1de1bb-0@3x.jpg",
          stream: "https://polite-pegasus-9899bd.netlify.app/master.m3u8"
        },
         {
          id: "ttseries_villa:10:47",
          title: "Épisode 47",
          season: 10,
          episode: 47,
          overview: "Épisode 47 de la saison 10",
          released: "2025-10-11T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/330/186/avant-premiere-la-villa-saison-10-episode-47-du-13-octobre-2025-31971403-1759734313-399be4-886461-0@3x.jpg",
          stream: "https://legendary-starship-ec9b9c.netlify.app/master.m3u8"
        },
         {
          id: "ttseries_villa:10:48",
          title: "Épisode 48",
          season: 10,
          episode: 48,
          overview: "Épisode 48 de la saison 10",
          released: "2025-10-12T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/330/186/avant-premiere-la-villa-saison-10-episode-48-du-14-octobre-2025-27910182-1759734340-08239a-5bf323-0@3x.jpg",
          stream: "https://thriving-eclair-9a6b81.netlify.app/master.m3u8"
        },
         {
          id: "ttseries_villa:10:51",
          title: "Épisode 51",
          season: 10,
          episode: 51,
          overview: "Épisode 51 de la saison 10",
          released: "2025-10-17T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/330/186/avant-premiere-la-villa-saison-10-episode-51-du-17-octobre-2025-56689452-1760341493-14554b-21892f-0@3x.jpg",
          stream: "https://zingy-parfait-cf29f2.netlify.app/master.m3u8"
        },
         {
          id: "ttseries_villa:10:52",
          title: "Épisode 52",
          season: 10,
          episode: 52,
          overview: "Épisode 52 de la saison 10",
          released: "2025-10-19T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/330/186/avant-premiere-la-villa-saison-10-episode-52-du-20-octobre-2025-98242842-1760341628-3f67d2-09c63c-0@3x.jpg",
          stream: "https://warm-entremet-a7a0df.netlify.app/master.m3u8"
        },
         {
          id: "ttseries_villa:10:53",
          title: "Épisode 53",
          season: 10,
          episode: 53,
          overview: "Épisode 53 de la saison 10",
          released: "2025-10-20T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/330/186/avant-premiere-la-villa-saison-10-episode-53-du-21-octobre-2025-54944996-1760517199-e852fb-d14ec9-0@3x.jpg",
          stream: "https://dazzling-heliotrope-d218e9.netlify.app/master.m3u8"
        },
         {
          id: "ttseries_villa:10:54",
          title: "Épisode 54",
          season: 10,
          episode: 54,
          overview: "Épisode 54 de la saison 10",
          released: "2025-10-24T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/330/186/avant-premiere-la-villa-saison-10-episode-53-du-21-octobre-2025-54944996-1760517199-e852fb-d14ec9-0@3x.jpg",
          stream: "https://poetic-cendol-6fcb8a.netlify.app/master.m3u8"
        },
         {
          id: "ttseries_villa:10:55",
          title: "Épisode 55",
          season: 10,
          episode: 55,
          overview: "Épisode 55 de la saison 10",
          released: "2025-10-25T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/330/186/avant-premiere-la-villa-saison-10-episode-55-du-23-octobre-2025-30327074-1760687201-9da537-8dc065-0@3x.jpg",
          stream: "https://incomparable-nasturtium-ea472d.netlify.app/master.m3u8"
        },
         {
          id: "ttseries_villa:10:56",
          title: "Épisode 56",
          season: 10,
          episode: 56,
          overview: "Épisode 56 de la saison 10",
          released: "2025-10-26T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/330/186/avant-premiere-la-villa-saison-10-episode-55-du-23-octobre-2025-30327074-1760687201-9da537-8dc065-0@3x.jpg",
          stream: "https://warm-pegasus-dd222e.netlify.app/master.m3u8"
        },
         {
          id: "ttseries_villa:10:57",
          title: "Épisode 57",
          season: 10,
          episode: 57,
          overview: "Épisode 57 de la saison 10",
          released: "2025-10-27T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/330/186/avant-premiere-la-villa-saison-10-episode-57-du-27-octobre-2025-08667722-1760967506-8915b4-7af3f3-0@3x.jpg",
          stream: "https://gleeful-bonbon-7b458d.netlify.app/master.m3u8"
        },
         {
          id: "ttseries_villa:10:58",
          title: "Épisode 58",
          season: 10,
          episode: 58,
          overview: "Épisode 58 de la saison 10",
          released: "2025-10-28T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/330/186/avant-premiere-la-villa-saison-10-episode-58-du-28-octobre-2025-21265064-1760967518-e1e562-770c2b-0@3x.jpg",
          stream: "https://singular-kitsune-fea974.netlify.app/master.m3u8"
        },
         {
          id: "ttseries_villa:10:59",
          title: "Épisode 59",
          season: 10,
          episode: 59,
          overview: "Épisode 59 de la saison 10",
          released: "2025-10-29T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/330/186/villa-59-0c988b-0c3ef6-0@3x.jpg",
          stream: "https://polite-medovik-7cca10.netlify.app/master.m3u8"
        },
         {
          id: "ttseries_villa:10:60",
          title: "Épisode 60",
          season: 10,
          episode: 60,
          overview: "Épisode 60 de la saison 10",
          released: "2025-10-30T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/330/186/villa-60-25b103-4f9437-0@3x.jpg",
          stream: "https://incandescent-gecko-2b35cc.netlify.app/master.m3u8"
        },
         {
          id: "ttseries_villa:10:61",
          title: "Épisode 61",
          season: 10,
          episode: 61,
          overview: "Épisode 61 de la saison 10",
          released: "2025-10-31T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/330/186/villa-61-6194e3-f967cc-0@3x.jpg",
          stream: "https://chimerical-moxie-7339a5.netlify.app/master.m3u8"
        }
      ]
    }
  },

 {
    id: "ttseries_jlc8",
    type: "series",
    name: "JLC Family Seule",
    poster: "https://photos.tf1.fr/217/289/program-card-jlc-s08-ep-2-1-46699f-c8e84a-0@3x.jpg",
    background: "https://photos.tf1.fr/1920/1080/background-ott-jlc-family-seule-67fe2d-a97444-0@3x.jpg",
    logo: "https://photos.tf1.fr/220/110/logo-programme-jlc-family-seule-1c7d6e-bb5be1-0@3x.png",  
    description: "À l'approche de ses 33 ans, Jazz se trouve à un carrefour déterminant de sa vie personnelle. Si elle a l'habitude que sa vie soit sans cesse commentée et que son quotidien soit millimétré, actuellement ce qui la préoccupe profondément, c'est de savoir s'il reste une chance pour son couple avec Laurent ?",
    genres: ["Divertissement"],
    releaseInfo: "2025",
    // Episodes organisés par saison
    episodes: {
      8: [

           {
          id: "ttseries_jlc8:8:0",
          title: "Teaser Saison 8",
          season: 8,
          episode: 0,
          overview: "À l'approche de ses 33 ans, Jazz se trouve à un carrefour déterminant de sa vie personnelle.",
          released: "2025-09-08T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/950/534/les-premieres-images-de-la-saison-12d9e8-c34c7e-0@3x.jpg",
          stream: "https://effulgent-pothos-877322.netlify.app/S8E0.m3u8"
        },
        {
          id: "ttseries_jlc8:8:1",
          title: "Episode 1",
          season: 8,
          episode: 1,
          overview: "À l'approche de ses 33 ans, Jazz se trouve à un carrefour déterminant de sa vie.",
          released: "2025-09-15T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/330/186/2107706_jlcseule_vignettereplay_ep01-a16271-830f1c-0@3x.jpg",
          stream: "https://tubular-bunny-a4e45f.netlify.app/master.m3u8"
        },
        {
          id: "ttseries_jlc8:8:2",
          title: "Episode 2",
          season: 8,
          episode: 2,
          overview: "À l'approche de ses 33 ans, Jazz se trouve à un carrefour déterminant.",
          released: "2025-09-16T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/330/186/2107707_jlcseule_vignettereplay_ep02-7afc7b-b4fa26-0@3x.jpg",
          stream: "https://glistening-chaja-cf55c6.netlify.app/master.m3u8"
        }
      ]
    }
  },

  // === NETFLIX ===
  {
    id: "tt35300972",
    type: "movie",
    name: "Lune de miel avec ma mère",
    poster: fetchPosterFromIMDb("tt35300972"),
    background: fetchBackgroundFromIMDb("tt35300972"),
    logo: fetchLogoFromIMDb("tt35300972"),
    description: "Lorsque sa fiancée le jette sur l'autel pour son ex, un jeune homme n'a d'autre choix que de partir en lune de miel romantique avec sa mère.",
    genres: ["Comedy"],
    releaseInfo: "2025",
    imdbRating: "5.6",
    stream: "https://pulse.topstrime.online/movie/1361622/o4rzet/master.m3u8",
    catalog: "netflix"
  },
  {
    id: "tt3421514",
    type: "movie",
    name: "Supercondriaque",
    poster: fetchPosterFromIMDb("tt3421514"),
    background: fetchBackgroundFromIMDb("tt3421514"),
    logo: fetchLogoFromIMDb("tt3421514"),
    description: "Le besoin frénétique de propreté d'un hypocondriaque déchaîné est mis à rude épreuve lorsqu'il est pris pour un héros de guerre se préparant à la révolution.",
    genres: ["Comedy"],
    releaseInfo: "2014",
    imdbRating: "6.0",
    stream: "https://gentle-stroopwafel-f8eef0.netlify.app/master.m3u8",
    catalog: "netflix"
  },
  {
    id: "tt27675583",
    type: "movie",
    name: "Almost Cops",
    poster: fetchPosterFromIMDb("tt27675583"),
    background: fetchBackgroundFromIMDb("tt27675583"),
    logo: fetchLogoFromIMDb("tt27675583"),
    description: "Lorsqu'un enquêteur trop zélé et un ex-détective imprudent sont forcés de travailler ensemble, le chaos s'installe dans les rues de Rotterdam. Au fil du temps, ils découvrent qu'ils ont plus en commun qu'ils ne le pensaient..",
    genres: ["Comedy", "Action"],
    releaseInfo: "2025",
    imdbRating: "4.9",
    stream: "https://pulse.topstrime.online/movie/1374534/k5sr6f/master.m3u8",
    catalog: "netflix"
  },
   {
    id: "tt10456740",
    type: "movie",
    name: "Balle Perdue",
    poster: fetchPosterFromIMDb("tt10456740"),
    background: fetchBackgroundFromIMDb("tt10456740"),
    logo: fetchLogoFromIMDb("tt10456740"),
    description: "Petit génie de la mécanique, Lino est réputé pour ses voitures-bélier, jusqu'au jour où il se fait arrêter pour un braquage qui tourne mal.",
    genres: ["Action"],
    releaseInfo: "2020",
    imdbRating: "6.4",
    stream: "https://pulse.topstrime.online/movie/706503/9b4mru/master.m3u8",
    catalog: "netflix"
  },
   {
    id: "tt14465706",
    type: "movie",
    name: "Balle perdue 2",
    poster: fetchPosterFromIMDb("tt14465706"),
    background: fetchBackgroundFromIMDb("tt14465706"),
    logo: fetchLogoFromIMDb("tt14465706"),
    description: "Après la mort de Charras, Lino et Julia prennent la relève et forment la nouvelle unité des stupéfiants. Déterminé à retrouver les assassins de son frère, Lino poursuit sa traque et ne laisse personne se mettre en travers de son chemin.",
    genres: ["Action"],
    releaseInfo: "2022",
    imdbRating: "6.3",
    stream: "https://pulse.topstrime.online/movie/948276/fngfyb/master.m3u8",
    catalog: "netflix"
  },
  {
    id: "tt29768333",
    type: "movie",
    name: "Balle perdue 3",
    poster: fetchPosterFromIMDb("tt29768333"),
    background: fetchBackgroundFromIMDb("tt29768333"),
    logo: fetchLogoFromIMDb("tt29768333"),
    description: "Dans le sud de la France, Lino est un chauffeur de fuite, un ex-taulard et un cambrioleur qui construit des voitures à des fins criminelles.",
    genres: ["Action"],
    releaseInfo: "2025",
    imdbRating: "6.3",
    stream: "https://pulse.topstrime.online/movie/1144430/pygy75/master.m3u8",
    catalog: "netflix"
  },
  {
    id: "tt12001534",
    type: "movie",
    name: "Le Murder Club du jeudi",
    poster: fetchPosterFromIMDb("tt12001534"),
    background: fetchBackgroundFromIMDb("tt12001534"),
    logo: fetchLogoFromIMDb("tt12001534"),
    description: "Quatre amis septuagénaires vivent dans une communauté de retraités et résolvent des affaires non résolues pour le plaisir.",
    genres: ["Comedy"],
    releaseInfo: "2025",
    imdbRating: "6.5",
    stream: "https://pulse.topstrime.online/movie/744653/m96tzk/master.m3u8",
    catalog: "netflix"
  },
  {
    id: "tt8785038",
    type: "movie",
    name: "Couic !",
    poster: fetchPosterFromIMDb("tt8785038"),
    background: fetchBackgroundFromIMDb("tt8785038"),
    logo: fetchLogoFromIMDb("tt8785038"),
    description: "Bull, un gentil chien ordinaire, apprend qu'il va être castré. Bull se dit qu'il doit vivre une ultime aventure avec ses meilleurs amis pour fêter les dernières 24 heures avec ses bijoux de famille.",
    genres: ["Comedy"],
    releaseInfo: "2025",
    imdbRating: "5.2",
    stream: "https://shiny-zabaione-b12d33.netlify.app/master.m3u8",
    catalog: "netflix"
  },
  {
    id: "tt1674782",
    type: "movie",
    name: "Karate Kid: Legends",
    poster: fetchPosterFromIMDb("tt1674782"),
    background: fetchBackgroundFromIMDb("tt1674782"),
    logo: fetchLogoFromIMDb("tt1674782"),
    description: "Li Fong, un adolescent qui fréquente l'école de kung-fu de M. Han en Chine, doit déménager à New York avec sa mère. Celle-ci souhaite que son fils intègre une école prestigieuse et qu'il mette de côté son sport de combat.",
    genres: ["Action"],
    releaseInfo: "2025",
    imdbRating: "6.3",
    stream: "https://pulse.topstrime.online/movie/1011477/pj6wor/master.m3u8",
    catalog: "netflix"
  },
  {
    id: "tt13443470",
    type: "series",
    name: "Mercredi",
    poster: fetchPosterFromIMDb("tt13443470"),
    background: fetchBackgroundFromIMDb("tt13443470"),
    logo: fetchLogoFromIMDb("tt13443470"),
    description: "Suit les années d'études de Mercredi Addams, alors qu'elle tente de maîtriser ses nouvelles capacités psychiques, de déjouer et de résoudre le mystère qui a impliqué ses parents.",
    genres: ["Action", "Comedy", "Fantastic"],
    releaseInfo: "2022-",
    imdbRating: "8.0",
    catalog: "netflix",
    episodes: {
      1: [
        {
          id: "tt13443470:1:1",
          title: "Mercredi",
          season: 1,
          episode: 1,
          overview: "Lorsqu'une farce délicieusement méchante fait renvoyer Mercredi, ses parents l'envoient à l'Académie Nevermore, le pensionnat où ils sont tombés amoureux.",
          released: "2022-11-23T00:00:00.000Z",
          thumbnail: fetchEpisodeThumbnail("tt13443470", 1, 1),
          stream: "https://pulse.topstrime.online/tv/119051/rdxfvx/S1/E1/master.m3u8"
        },
        {
          id: "tt13443470:1:2",
          title: "Mercredi",
          season: 1,
          episode: 2,
          overview: "Le shérif interroge Mercredi sur les événements étranges de la nuit. Plus tard, Mercredi est confronté à un rival féroce dans la course à la Poe Cup.",
          released: "2022-11-23T00:00:00.000Z",
          thumbnail: fetchEpisodeThumbnail("tt13443470", 1, 2),
          stream: "https://pulse.topstrime.online/tv/119051/rblyo2/S1/E2/master.m3u8"
        },
        {
          id: "tt13443470:1:3",
          title: "Mercredi",
          season: 1,
          episode: 3,
          overview: "Mercredi découvre par hasard une société secrète. Pendant la journée de sensibilisation, les exclus de Nevermore se mêlent aux normies de Jéricho dans le monde des pèlerins.",
          released: "2022-11-23T00:00:00.000Z",
          thumbnail: fetchEpisodeThumbnail("tt13443470", 1, 3),
          stream: "https://pulse.topstrime.online/tv/119051/v3vqw4/S1/E3/master.m3u8"
        },
        {
          id: "tt13443470:1:4",
          title: "Mercredi",
          season: 1,
          episode: 4,
          overview: "Mercredi invite Xavier au bal de la Rave'N, suscitant la jalousie de Tyler - mais la Chose a quelque chose dans sa manche. Pendant ce temps, Eugène surveille la grotte.",
          released: "2022-11-23T00:00:00.000Z",
          thumbnail: fetchEpisodeThumbnail("tt13443470", 1, 4),
          stream: "https://pulse.topstrime.online/tv/119051/y080h1/S1/E4/master.m3u8"
        },
        {
          id: "tt13443470:1:5",
          title: "Mercredi",
          season: 1,
          episode: 5,
          overview: "Pendant le week-end des parents, Mercredi fouille dans le passé de sa famille - et fait accidentellement arrêter son père. Enid ressent la pression de devenir un loup.",
          released: "2022-11-23T00:00:00.000Z",
          thumbnail: fetchEpisodeThumbnail("tt13443470", 1, 5),
          stream: "https://pulse.topstrime.online/tv/119051/feqros/S1/E5/master.m3u8"
        },
        {
          id: "tt13443470:1:6",
          title: "Mercredi",
          season: 1,
          episode: 6,
          overview: "Les amis de Mercredi lui organisent une fête d'anniversaire surprise. Ils veulent bien faire, mais elle préférerait marquer cette triste occasion en résolvant les meurtres.",
          released: "2022-11-23T00:00:00.000Z",
          thumbnail: fetchEpisodeThumbnail("tt13443470", 1, 6),
          stream: "https://pulse.topstrime.online/tv/119051/4f0xlr/S1/E6/master.m3u8"
        },
        {
          id: "tt13443470:1:7",
          title: "Mercredi",
          season: 1,
          episode: 7,
          overview: "L'excentrique oncle Fester lui rend visite et partage sa théorie sur le monstre. Mercredi accepte à contrecoeur un rendez-vous avec Tyler dans la crypte de Crackstone.",
          released: "2022-11-23T00:00:00.000Z",
          thumbnail: fetchEpisodeThumbnail("tt13443470", 1, 7),
          stream: "https://pulse.topstrime.online/tv/119051/lt5pvl/S1/E7/master.m3u8"
        },
        {
          id: "tt13443470:1:8",
          title: "Mercredi",
          season: 1,
          episode: 8,
          overview: "Mercredi a des ennuis avec le principal Weems, mais ce n'est que le début de ses problèmes. Pour combattre un mal ancien, elle aura besoin de l'aide de tous ses amis.",
          released: "2022-11-23T00:00:00.000Z",
          thumbnail: fetchEpisodeThumbnail("tt13443470", 1, 8),
          stream: "https://pulse.topstrime.online/tv/119051/cya5bi/S1/E8/master.m3u8"
        }
      ],
  2: [
    {
      id: "tt13443470:2:1",
      title: "Mercredi",
      season: 2,
      episode: 1,
      overview: "Après des vacances d'été productives, une Mercredi maussade retrouve Nevermore, auréolée malgré elle du statut d'héroïne et cible d'un regard malveillant et harceleur.",
      released: "2025-08-06T00:00:00.000Z",
      thumbnail: fetchEpisodeThumbnail("tt13443470", 2, 1),
      stream: "https://pulse.topstrime.online/tv/119051/zfm5xe/S2/E1/master.m3u8"
    },
        {
          id: "tt13443470:2:2",
          title: "Mercredi",
          season: 2,
          episode: 2,
          overview: "Le chaos règne sur le campus alors que Nevermore célèbre sa journée annuelle de farces; mercredi affronte un vieil ennemi et gagne un allié indésirable.",
          released: "2025-08-06T00:00:00.000Z",
          thumbnail: fetchEpisodeThumbnail("tt13443470", 2, 2),
          stream: "https://pulse.topstrime.online/tv/119051/musbbc/S2/E2/master.m3u8"
        },
        {
          id: "tt13443470:2:3",
          title: "Mercredi",
          season: 2,
          episode: 3,
          overview: "Dépouillée de ses capacités et du livre de Goody, Mercredi est obligée de faire un travail de détective à l'ancienne lors d'un voyage de camping scolaire.",
          released: "2025-08-06T00:00:00.000Z",
          thumbnail: fetchEpisodeThumbnail("tt13443470", 2, 3),
          stream: "https://pulse.topstrime.online/tv/119051/fihpzg/S2/E3/master.m3u8"
        },
        {
          id: "tt13443470:2:4",
          title: "Mercredi",
          season: 2,
          episode: 4,
          overview: "Fester et Thing s'engagent dans l'affaire de mercredi ; en essayant de cacher un secret, Bianca tombe sur un autre.",
          released: "2025-08-06T00:00:00.000Z",
          thumbnail: fetchEpisodeThumbnail("tt13443470", 2, 4),
          stream: "https://pulse.topstrime.online/tv/119051/zh7ine/S2/E4/master.m3u8"
        },
        {
          id: "tt13443470:2:5",
          title: "Mercredi",
          season: 2,
          episode: 5,
          overview: "Wednesday Addams enquête sur des mystères à l'école Nevermore tout en gérant ses relations familiales complexes.",
          released: "2025-09-03T00:00:00.000Z",
          thumbnail: fetchEpisodeThumbnail("tt13443470", 2, 5),
          stream: "https://pulse.topstrime.online/tv/119051/g0bs80/S2/E5/master.m3u8"
        },
        {
          id: "tt13443470:2:6",
          title: "Mercredi",
          season: 2,
          episode: 6,
          overview: "Une rencontre avec un esprit du passé de Nevermore donne à Wednesday et Enid une nouvelle perspective l'un sur l'autre - et met l'un de leurs camarades de classe en danger.",
          released: "2025-09-03T00:00:00.000Z",
          thumbnail: fetchEpisodeThumbnail("tt13443470", 2, 6),
          stream: "https://pulse.topstrime.online/tv/119051/d6g8kc/S2/E6/master.m3u8"
        },
        {
          id: "tt13443470:2:7",
          title: "Mercredi",
          season: 2,
          episode: 7,
          overview: "Alors que le gala de l'école approche, mercredi déterre des informations sur Dort, Enid essaie de ne pas se laisser distancer et Morticia s'engage dans une bataille de volontés avec Grand-mère.",
          released: "2025-09-03T00:00:00.000Z",
          thumbnail: fetchEpisodeThumbnail("tt13443470", 2, 7),
          stream: "https://pulse.topstrime.online/tv/119051/p7tzot/S2/E7/master.m3u8"
        },
        {
          id: "tt13443470:2:8",
          title: "Mercredi",
          season: 2,
          episode: 8,
          overview: "Lorsque des secrets de famille enfouis sont découverts, Mercredi doit courir contre la montre pour empêcher qu'une sombre prophétie ne se réalise.",
          released: "2025-09-03T00:00:00.000Z",
          thumbnail: fetchEpisodeThumbnail("tt13443470", 2, 8),
          stream: "https://pulse.topstrime.online/tv/119051/m15l7h/S2/E8/master.m3u8"
        }
     ]
    }
  },

  // === AMAZON PRIME VIDEO ===
  {
    id: "tt34190272",
    type: "movie",
    name: "Ennemis",
    poster: fetchPosterFromIMDb("tt34190272"),
    background: fetchBackgroundFromIMDb("tt34190272"),
    logo: fetchLogoFromIMDb("tt34190272"),
    description: "Que feriez-vous pour votre ennemi ? Voici l'histoire de deux adolescents du quartier, victimes et bourreaux, harcelés et maltraités, qui ont grandi en ennemis irréconciliables.",
    genres: ["Drama"],
    releaseInfo: "2025",
    imdbRating: "6.8",
    stream: "https://pulse.topstrime.online/movie/1285406/umd7qg/master.m3u8",
    catalog: "prime"
  },
   {
    id: "tt26452781",
    type: "movie",
    name: "Marked Men",
    poster: fetchPosterFromIMDb("tt26452781"),
    background: fetchBackgroundFromIMDb("tt26452781"),
    logo: fetchLogoFromIMDb("tt26452781"),
    description: "Shaw aime Rule depuis qu'elle l'a vu, mais Rule ne la voit pas comme un partenaire idéal. Une nuit de beuverie et de secrets les amène à se demander s'ils peuvent être ensemble sans ruiner leur relation - ou l'un l'autre.",
    genres: ["Romantic"],
    releaseInfo: "2025",
    imdbRating: "5.2",
    stream: "https://heartfelt-tulumba-056f93.netlify.app/master.m3u8",
    catalog: "prime"
  },
  {
    id: "tt23060698",
    type: "movie",
    name: "La nuit des clowns",
    poster: fetchPosterFromIMDb("tt23060698"),
    background: fetchBackgroundFromIMDb("tt23060698"),
    logo: fetchLogoFromIMDb("tt23060698"),
    description: "En quête d'un nouveau départ, Quinn et son père s'installent dans une petite ville du Midwest. Ils apprennent rapidement que la communauté fracturée traverse une période difficile après la perte d'une précieuse usine dans un incendie.",
    genres: ["Horror"],
    releaseInfo: "2025",
    imdbRating: "5.6",
    stream: "https://pulse.topstrime.online/movie/713364/yl5689/master.m3u8",
    catalog: "prime"
  },
  {
    id: "tt31184028",
    type: "movie",
    name: "Together",
    poster: fetchPosterFromIMDb("tt31184028"),
    background: fetchBackgroundFromIMDb("tt31184028"),
    logo: fetchLogoFromIMDb("tt31184028"),
    description: "Tim et Millie sont ensemble depuis des années quand ils décident de tout abandonner pour s'installer à la campagne. Une force surnaturelle transforme leur rêve en cauchemar, menaçant leur relation et leur amour..",
    genres: ["Horror"],
    releaseInfo: "2025",
    imdbRating: "6.8",
    stream: "https://pulse.topstrime.online/movie/1242011/k2jkz3/master.m3u8",
    catalog: "prime"
  },
  {
    id: "tt14760886",
    type: "movie",
    name: "Free fall",
    poster: fetchPosterFromIMDb("tt14760886"),
    background: fetchBackgroundFromIMDb("tt14760886"),
    logo: fetchLogoFromIMDb("tt14760886"),
    description: "Dans un futur proche, l'humanité a réussi à explorer l'espace grâce à l'énorme station Delta en orbite autour de la Terre. Le réparateur Maksim Bortnikov est séparé des autres lors d'une éruption solaire et se retrouve seul dans l'espace..",
    genres: ["Fiction"],
    releaseInfo: "2025",
    imdbRating: "5.2",
    stream: "https://pulse.topstrime.online/movie/650033/x3aj83/master.m3u8",
    catalog: "prime"
  },
  {
    id: "tt4045450",
    type: "movie",
    name: "Souviens-toi... l'été dernier",
    poster: fetchPosterFromIMDb("tt4045450"),
    background: fetchBackgroundFromIMDb("tt4045450"),
    logo: fetchLogoFromIMDb("tt4045450"),
    description: "Un groupe d'amis se retrouve terrorisé par un individu qui les harcèle, et qui semble au courant d'un incident macabre qui concerne leur passé.",
    genres: ["Horror"],
    releaseInfo: "2025",
    imdbRating: "5.1",
    stream: "https://pulse.topstrime.online/movie/1083433/qhq61h/master.m3u8",
    catalog: "prime"
  },
  {
    id: "tt15004066",
    type: "movie",
    name: "Atoman",
    poster: fetchPosterFromIMDb("tt15004066"),
    background: fetchBackgroundFromIMDb("tt15004066"),
    logo: fetchLogoFromIMDb("tt15004066"),
    description: "Un astrolabe mystique doté du pouvoir de détruire le monde est volé dans la cité perdue d'Atlantis, située dans les montagnes de l'Atlas. Un homme, derniers descendants des Atlantes doit empêcher le cataclysme imminent.",
    genres: ["Action"],
    releaseInfo: "2025",
    imdbRating: "1.8",
    stream: "https://pulse.topstrime.online/movie/869048/inhwy5/master.m3u8",
    catalog: "prime"
  },
   {
    id: "tt30017619",
    type: "movie",
    name: "Les Bad Guys 2",
    poster: fetchPosterFromIMDb("tt30017619"),
    background: fetchBackgroundFromIMDb("tt30017619"),
    logo: fetchLogoFromIMDb("tt30017619"),
    description: "Les criminels animaliers s'efforcent de se faire à leur nouvelle vie de gentils. Bientôt, ils sont tirés de leur retraite et forcés de faire un dernier travail par une équipe entièrement féminine..",
    genres: ["Anime"],
    releaseInfo: "2025",
    imdbRating: "7.1",
    stream: "https://pulse.topstrime.online/movie/1175942/9504aw/master.m3u8",
    catalog: "prime"
  },
   {
    id: "tt31176520",
    type: "movie",
    name: "Eddington",
    poster: fetchPosterFromIMDb("tt31176520"),
    background: fetchBackgroundFromIMDb("tt31176520"),
    logo: fetchLogoFromIMDb("tt31176520"),
    description: "En mai 2020, un affrontement entre le shérif et le maire d'une petite ville met le feu aux poudres et fait se dresser les voisins les uns contre les autres à Eddington, au Nouveau-Mexique.",
    genres: ["Drama"],
    releaseInfo: "2025",
    imdbRating: "6.7",
    stream: "https://pulse.topstrime.online/movie/648878/p5l1ku/master.m3u8",
    catalog: "prime"
  },
  {
    id: "tt21317634",
    type: "movie",
    name: "Bride Hard",
    poster: fetchPosterFromIMDb("tt21317634"),
    background: fetchBackgroundFromIMDb("tt21317634"),
    logo: fetchLogoFromIMDb("tt21317634"),
    description: "Lorsque des mercenaires prennent en otage les invités d'un mariage somptueux, ils ne se doutent pas de ce qui les attend, car la demoiselle d'honneur est en fait une agente secrète prête à tout pour sauver le mariage de sa meilleure amie.",
    genres: ["Action", "Comedy"],
    releaseInfo: "2025",
    imdbRating: "4.3",
    stream: "https://pulse.topstrime.online/movie/1124619/v5hfbp/master.m3u8",
    catalog: "prime"
  },
   {
    id: "tt12908150",
    type: "movie",
    name: "Life of Chuck",
    poster: fetchPosterFromIMDb("tt12908150"),
    background: fetchBackgroundFromIMDb("tt12908150"),
    logo: fetchLogoFromIMDb("tt12908150"),
    description: "Une histoire de vie et de genre basée sur la nouvelle de Stephen King, qui raconte trois chapitres de la vie d'un homme ordinaire nommé Charles Krantz.",
    genres: ["Action", "Drama"],
    releaseInfo: "2024",
    imdbRating: "7.3",
    stream: "https://pulse.topstrime.online/movie/842924/d3b1j8/master.m3u8",
    catalog: "prime"
  },
  {
    id: "tt18069420",
    type: "movie",
    name: "Les Schtroumpfs - Le Film",
    poster: fetchPosterFromIMDb("tt18069420"),
    background: fetchBackgroundFromIMDb("tt18069420"),
    logo: fetchLogoFromIMDb("tt18069420"),
    description: "Lorsque le Grand Schtroumpf est mystérieusement kidnappé par les vilains sorciers Razamel et Gargamel, la Schtroumpfette et son meilleur ami le Schtroumpf Sans-Nom partent en mission pour le retrouver.",
    genres: ["Anime", "Comedy"],
    releaseInfo: "2025",
    imdbRating: "4.3",
    stream: "https://pulse.topstrime.online/movie/936108/e0932k/master.m3u8",
    catalog: "prime"
  },
  {
    id: "tt32843349",
    type: "movie",
    name: "Sorry, Baby",
    poster: fetchPosterFromIMDb("tt32843349"),
    background: fetchBackgroundFromIMDb("tt32843349"),
    logo: fetchLogoFromIMDb("tt32843349"),
    description: "Quelque chose est arrivé à Agnès. Tandis que le monde avance sans elle, son amitié avec Lydie demeure un refuge précieux. Entre rires et silences, leur lien indéfectible lui permet d'entrevoir ce qui vient après..",
    genres: ["Drama", "Comedy"],
    releaseInfo: "2025",
    imdbRating: "7.1",
    stream: "https://pulse.topstrime.online/movie/1205515/eef5bc/master.m3u8",
    catalog: "prime"
  },
  {
    id: "tt0944947",
    type: "series",
    name: "Game of Thrones",
    poster: fetchPosterFromIMDb("tt0944947"),
    background: fetchBackgroundFromIMDb("tt0944947"),
    logo: fetchLogoFromIMDb("tt0944947"),
    description: "Neuf familles nobles se battent pour le contrôle des terres mythiques de Westeros, tandis qu'un ancien ennemi revient après avoir été endormi pendant des millénaires.",
    genres: ["Action", "Adventure", "Drama"],
    releaseInfo: "2011-2019",
    imdbRating: "9.2",
    catalog: "prime",
    episodes: {
      1: [
        {
          id: "tt0944947:1:1",
          title: "Winter Is Coming",
          season: 1,
          episode: 1,
          overview: "Eddard Stark est déchiré entre sa famille et un vieil ami lorsqu'on lui demande de servir à la cour du roi Robert Baratheon.",
          released: "2011-04-17T00:00:00.000Z",
          thumbnail: fetchEpisodeThumbnail("tt0944947", 1, 1),
          stream: "https://pulse.topstrime.online/tv/1399/1/1/82nb0j/master.m3u8"
        }
      ]
    }
  },

  // === DISNEY+ ===
  {
    id: "tt20969586",
    type: "movie",
    name: "Thunderbolt",
    poster: fetchPosterFromIMDb("tt20969586"),
    background: fetchBackgroundFromIMDb("tt20969586"),
    logo: fetchLogoFromIMDb("tt20969586"),
    description: "Un monde sans Avengers ne signifie pas qu'il n'y a pas de groupe de super-héros. Il y a un groupe et ils s'appellent les Thunderbolts.",
    genres: ["Action", "Adventure", "Fantasy"],
    releaseInfo: "2025",
    imdbRating: "7.1",
    stream: "https://pulse.topstrime.online/movie/986056/82nb0j/master.m3u8",
    catalog: "disney"
  },
    {
    id: "tt4900148",
    type: "movie",
    name: "Elio",
    poster: fetchPosterFromIMDb("tt4900148"),
    background: fetchBackgroundFromIMDb("tt4900148"),
    logo: fetchLogoFromIMDb("tt4900148"),
    description: "Elio a du mal à s'intégrer jusqu'à ce qu'il soit transporté par des extraterrestres et devienne l'élu pour être l'ambassadeur de la Terre, tandis que sa mère Olga travaille sur le projet top secret de décodage des messages extraterrestres.",
    genres: ["Anime", "Adventure"],
    releaseInfo: "2025",
    imdbRating: "6.7",
    stream: "https://pulse.topstrime.online/movie/1022787/su92dr/master.m3u8",
    catalog: "disney"
  },
   {
    id: "tt31241595",
    type: "movie",
    name: "Zombies 4: Dawn of the Vampires",
    poster: fetchPosterFromIMDb("tt31241595"),
    background: fetchBackgroundFromIMDb("tt31241595"),
    logo: fetchLogoFromIMDb("tt31241595"),
    description: "Zed et Addison découvrent les mondes en guerre de Sunnyside et Shadyside lors d'un voyage d'été après leur première année d'université, rencontrant deux nouveaux groupes de monstres.",
    genres: ["Anime", "Adventure"],
    releaseInfo: "2025",
    imdbRating: "5.6",
    stream: "https://pulse.topstrime.online/movie/1243341/ybuk9j/master.m3u8",
    catalog: "disney"
  },
  {
    id: "tt9140560",
    type: "series",
    name: "WandaVision",
    poster: fetchPosterFromIMDb("tt9140560"),
    background: fetchBackgroundFromIMDb("tt9140560"),
    logo: fetchLogoFromIMDb("tt9140560"),
    description: "Série mêlant sitcoms classiques et univers cinématographique Marvel dans laquelle Wanda Maximoff et Vision vivent une vie de banlieue idyllique.",
    genres: ["Action", "Comedy", "Drama"],
    releaseInfo: "2021",
    imdbRating: "7.9",
    catalog: "disney",
    episodes: {
      1: [
        {
          id: "tt9140560:1:1",
          title: "Filmed Before a Live Studio Audience",
          season: 1,
          episode: 1,
          overview: "Wanda et Vision s'installent dans leur nouvelle maison.",
          released: "2021-01-15T00:00:00.000Z",
          thumbnail: fetchEpisodeThumbnail("tt9140560", 1, 1),
          stream: "https://pulse.topstrime.online/tv/85271/1/1/82nb0j/master.m3u8"
        }
      ]
    }
  },

  // === APPLE TV+ ===
  {
    id: "tt35077924",
    type: "movie",
    name: "On ira",
    poster: fetchPosterFromIMDb("tt35077924"),
    background: fetchBackgroundFromIMDb("tt35077924"),
    logo: fetchLogoFromIMDb("tt35077924"),
    description: "Comédie dramatique sur le sujet délicat du suicide assisté. Marie, l'héroïne de 80 ans, est lassée de sa maladie. Elle part en Suisse avec des proches pour se faire euthanasier, mais leur ment sur l'objectif réel du voyage.",
    genres: ["Comedy"],
    releaseInfo: "2025",
    imdbRating: "6.7",
    stream: "https://pulse.topstrime.online/movie/1003504/i09w9p/master.m3u8",
    catalog: "appletv"
  },
  {
    id: "tt32535595",
    type: "movie",
    name: "Doux Jésus",
    poster: fetchPosterFromIMDb("tt32535595"),
    background: fetchBackgroundFromIMDb("tt32535595"),
    logo: fetchLogoFromIMDb("tt32535595"),
    description: "Sœur Lucie, une religieuse dévouée, décide de fuir son couvent au bout de vingt ans pour retrouver son amour de jeunesse. C'est pour elle le début d'une aventure extraordinaire qui va mettre sa foi à l'épreuve",
    genres: ["Comedy"],
    releaseInfo: "2025",
    imdbRating: "4.9",
    stream: "https://pulse.topstrime.online/movie/1284514/2wos5f/master.m3u8",
    catalog: "appletv"
  },
   {
    id: "tt31194612",
    type: "movie",
    name: "Highest 2 Lowest",
    poster: fetchPosterFromIMDb("tt31194612"),
    background: fetchBackgroundFromIMDb("tt31194612"),
    logo: fetchLogoFromIMDb("tt31194612"),
    description: "Soumis à une demande de rançon et confronté à un terrible dilemme moral, un puissant magnat de l'industrie musicale doit se battre pour sa famille et son héritage.",
    genres: ["Drama"],
    releaseInfo: "2025",
    imdbRating: "5.6",
    stream: "https://rainbow-dragon-dc7db7.netlify.app/master.m3u8",
    catalog: "appletv"
  },
   {
    id: "tt33610694",
    type: "movie",
    name: "Le Routard",
    poster: fetchPosterFromIMDb("tt33610694"),
    background: fetchBackgroundFromIMDb("tt33610694"),
    logo: fetchLogoFromIMDb("tt33610694"),
    description: "Yann rêve de voyager. Quand le Guide du Routard recrute, il saute sur l'occasion et décroche le poste. Première mission : 40 adresses à Marrakech en 5 jours. Problème : il n'a jamais voyagé. Ce job de rêve va vite tourner au cauchemar.",
    genres: ["Comedy"],
    releaseInfo: "2025",
    imdbRating: "4.6",
    stream: "https://pulse.topstrime.online/movie/1191666/b17ttv/master.m3u8",
    catalog: "appletv"
  },
  {
    id: "tt10234724",
    type: "series",
    name: "Ted Lasso",
    poster: fetchPosterFromIMDb("tt10234724"),
    background: fetchBackgroundFromIMDb("tt10234724"),
    logo: fetchLogoFromIMDb("tt10234724"),
    description: "Un entraîneur de football américain est embauché pour diriger une équipe de football britannique, malgré son absence totale d'expérience.",
    genres: ["Comedy", "Drama", "Sport"],
    releaseInfo: "2020-2023",
    imdbRating: "8.8",
    catalog: "appletv",
    episodes: {
      1: [
        {
          id: "tt10234724:1:1",
          title: "Pilot",
          season: 1,
          episode: 1,
          overview: "Ted Lasso, un entraîneur de football américain, arrive en Angleterre pour diriger un club de football.",
          released: "2020-08-14T00:00:00.000Z",
          thumbnail: fetchEpisodeThumbnail("tt10234724", 1, 1),
          stream: "https://pulse.topstrime.online/tv/97546/1/1/82nb0j/master.m3u8"
        }
      ]
    }
  },

  // === CANAL+ ===
  {
    id: "tt1160419",
    type: "movie",
    name: "Dune",
    poster: fetchPosterFromIMDb("tt1160419"),
    background: fetchBackgroundFromIMDb("tt1160419"),
    logo: fetchLogoFromIMDb("tt1160419"),
    description: "Paul Atreides, jeune homme aussi doué que brillant, est destiné à connaître un destin hors du commun.",
    genres: ["Action", "Adventure", "Drama"],
    releaseInfo: "2021",
    imdbRating: "8.0",
    stream: "https://pulse.topstrime.online/movie/438631/82nb0j/master.m3u8",
    catalog: "canal"
  },
  {
    id: "tt2861424",
    type: "series",
    name: "Rick and Morty",
    poster: fetchPosterFromIMDb("tt2861424"),
    background: fetchBackgroundFromIMDb("tt2861424"),
    logo: fetchLogoFromIMDb("tt2861424"),
    description: "Un génie alcoolique et son petit-fils pas très futé embarquent dans des aventures inter-dimensionnelles.",
    genres: ["Animation", "Adventure", "Comedy"],
    releaseInfo: "2013-",
    imdbRating: "9.1",
    catalog: "canal",
    episodes: {
      1: [
        {
          id: "tt2861424:1:1",
          title: "Pilot",
          season: 1,
          episode: 1,
          overview: "Rick emmène Morty dans une aventure inter-dimensionnelle.",
          released: "2013-12-02T00:00:00.000Z",
          thumbnail: fetchEpisodeThumbnail("tt2861424", 1, 1),
          stream: "https://pulse.topstrime.online/tv/60625/1/1/82nb0j/master.m3u8"
        }
      ]
    }
  },

  // === HBO MAX ===
  {
    id: "tt35705226",
    type: "movie",
    name: "Moon Le Panda",
    poster: fetchPosterFromIMDb("tt35705226"),
    background: fetchBackgroundFromIMDb("tt35705226"),
    logo: fetchLogoFromIMDb("tt35705226"),
    description: "Tian,12 ans est envoyé chez sa grand-mère en Chine à cause de ses mauvais résultats à l'école. Il se lie d'amitié en secret avec un panda qu'il nomme Moon. C'est le début d'une incroyable aventure qui va changer à tout jamais sa vie",
    genres: ["Action", "Comedy"],
    releaseInfo: "2025",
    imdbRating: "5.3",
    stream: "https://pulse.topstrime.online/movie/1178532/j7uu5w/master.m3u8",
    catalog: "hbo"
  },
   {
    id: "tt5950044",
    type: "movie",
    name: "Superman",
    poster: fetchPosterFromIMDb("tt5950044"),
    background: fetchBackgroundFromIMDb("tt5950044"),
    logo: fetchLogoFromIMDb("tt5950044"),
    description: "Ce film suit le super-héros en titre alors qu'il réconcilie son héritage avec son éducation humaine. Il incarne la vérité, la justice et les lendemains qui chantent dans un monde qui considère la gentillesse comme démodée.",
    genres: ["Action"],
    releaseInfo: "2025",
    imdbRating: "7.1",
    stream: "https://pulse.topstrime.online/movie/1061474/9pbrb4/master.m3u8",
    catalog: "hbo"
  },
  {
    id: "tt26581740",
    type: "movie",
    name: "Évanouis",
    poster: fetchPosterFromIMDb("tt26581740"),
    background: fetchBackgroundFromIMDb("tt26581740"),
    logo: fetchLogoFromIMDb("tt26581740"),
    description: "Lorsque tous les enfants d'une même classe, sauf un, disparaissent mystérieusement la même nuit et exactement à la même heure, une communauté se demande qui ou quoi se cache derrière leur disparition.",
    genres: ["Action", "Horror"],
    releaseInfo: "2025",
    imdbRating: "7.6",
    stream: "https://pulse.topstrime.online/movie/1078605/uonl8b/master.m3u8",
    catalog: "hbo"
  },
  {
    id: "tt33398195",
    type: "movie",
    name: "Les ailes collées",
    poster: fetchPosterFromIMDb("tt33398195"),
    background: fetchBackgroundFromIMDb("tt33398195"),
    logo: fetchLogoFromIMDb("tt33398195"),
    description: "Le jour de son mariage, Paul est confronté au retour inattendu de Joseph, qu'il avait perdu de vue vingt ans plus tôt. Le souvenir brûlant de leur rencontre cet été 1983 le submerge de doutes quant aux choix de sa vie et aux émotions suscitées par cette relation interdite",
    genres: ["Drama"],
    releaseInfo: "2025",
    imdbRating: "6.7",
    stream: "https://pulse.topstrime.online/movie/1313219/thaany/master.m3u8",
    catalog: "hbo"
  },
  {
    id: "tt30840798",
    type: "movie",
    name: "The Phoenician Scheme",
    poster: fetchPosterFromIMDb("tt30840798"),
    background: fetchBackgroundFromIMDb("tt30840798"),
    logo: fetchLogoFromIMDb("tt30840798"),
    description: "Une sombre histoire d'espionnage qui suit une relation père-fille tendue au sein d'une entreprise familiale. Les rebondissements tournent autour de la trahison et des choix moraux.",
    genres: ["Drama"],
    releaseInfo: "2025",
    imdbRating: "6.7",
    stream: "https://pulse.topstrime.online/movie/1137350/ouwbz1/master.m3u8",
    catalog: "hbo"
  },
  {
    id: "tt0903747",
    type: "series",
    name: "Breaking Bad",
    poster: fetchPosterFromIMDb("tt0903747"),
    background: fetchBackgroundFromIMDb("tt0903747"),
    logo: fetchLogoFromIMDb("tt0903747"),
    description: "Un professeur de chimie atteint d'un cancer se lance dans la fabrication de méthamphétamine pour assurer l'avenir financier de sa famille.",
    genres: ["Crime", "Drama", "Thriller"],
    releaseInfo: "2008-2013",
    imdbRating: "9.5",
    catalog: "hbo",
    episodes: {
      1: [
        {
          id: "tt0903747:1:1",
          title: "Pilot",
          season: 1,
          episode: 1,
          overview: "Walter White, professeur de chimie, apprend qu'il a un cancer du poumon.",
          released: "2008-01-20T00:00:00.000Z",
          thumbnail: fetchEpisodeThumbnail("tt0903747", 1, 1),
          stream: "https://pulse.topstrime.online/tv/1396/1/1/82nb0j/master.m3u8"
        }
      ]
    }
  }

];

// === Manifest ===
const manifest = {
  id: "community.directhls",
  version: "1.0.0",
  catalogs: [
    {
      type: "series",
      id: "directhls_series",
      name: "Télé-Réalité"
    },
    {
      type: "movie",
      id: "netflix_movies",
      name: "Netflix Films"
    },
    {
      type: "series",
      id: "netflix_series",
      name: "Netflix Séries"
    },
    {
      type: "movie",
      id: "prime_movies",
      name: "Amazon Prime Films"
    },
    {
      type: "series",
      id: "prime_series",
      name: "Amazon Prime Séries"
    },
    {
      type: "movie",
      id: "disney_movies",
      name: "Disney+ Films"
    },
    {
      type: "series",
      id: "disney_series",
      name: "Disney+ Séries"
    },
    {
      type: "movie",
      id: "appletv_movies",
      name: "Apple TV+ Films"
    },
    {
      type: "series",
      id: "appletv_series",
      name: "Apple TV+ Séries"
    },
    {
      type: "movie",
      id: "canal_movies",
      name: "Canal+ Films"
    },
    {
      type: "series",
      id: "canal_series",
      name: "Canal+ Séries"
    },
    {
      type: "movie",
      id: "hbo_movies",
      name: "HBO Max Films"
    },
    {
      type: "series",
      id: "hbo_series",
      name: "HBO Max Séries"
    }
  ],
  resources: [
    "catalog",
    "meta",
    "stream"
  ],
  types: ["movie", "series"],
  name: "Direct HLS Addon",
  description: "Streaming direct via HLS pour films et séries",
  idPrefixes: ["tt"]
};

// === Handler ===
export default function handler(req, res) {
  // CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");

  if (req.method === 'OPTIONS') {
    res.statusCode = 200;
    return res.end();
  }

  const url = new URL(req.url, `http://${req.headers.host}`);
  const pathname = url.pathname;
  const parts = pathname.split('/').filter(Boolean);

  console.log('=== REQUEST DEBUG ===');
  console.log('Full URL:', req.url);
  console.log('Pathname:', pathname);
  console.log('Parts:', parts);
  console.log('Method:', req.method);

  // Route: /manifest.json
  if (pathname === '/manifest.json' || (parts.length === 1 && parts[0] === 'manifest.json')) {
    console.log('Serving manifest');
    return sendJSON(res, manifest);
  }

  // Route: /catalog/:type/:catalogId.json or /catalog/:type/:catalogId/:extra.json
  if (parts[0] === 'catalog' && parts.length >= 3) {
    const catalogType = parts[1];
    const catalogId = stripJson(parts[2]);

    // Parse extra parameters (genre filter)
    let genreFilter = null;
    if (parts.length >= 4) {
      const extraParams = stripJson(parts[3]);
      const extraMatch = extraParams.match(/genre=([^&]+)/);
      if (extraMatch) {
        genreFilter = decodeURIComponent(extraMatch[1]);
      }
    }

    console.log('Catalog request - Type:', catalogType, 'ID:', catalogId, 'Genre:', genreFilter);

    let metas = [];

    if (catalogId === 'directhls_series') {
      metas = catalogData
        .filter(item => {
          if (item.type !== 'series' || item.catalog) return false;
          if (genreFilter && !item.genres.includes(genreFilter)) return false;
          return true;
        })
        .map(item => ({
          id: item.id,
          type: item.type,
          name: item.name,
          poster: item.poster,
          posterShape: "regular",
          description: item.description,
          genres: item.genres,
          background: item.background,
          logo: item.logo,
          releaseInfo: item.releaseInfo,
          imdbRating: item.imdbRating
        }));
    } else if (catalogId.includes('_movies')) {
      const platform = catalogId.replace('_movies', '');
      metas = catalogData
        .filter(item => {
          if (item.type !== 'movie' || item.catalog !== platform) return false;
          if (genreFilter && !item.genres.includes(genreFilter)) return false;
          return true;
        })
        .map(item => ({
          id: item.id,
          type: item.type,
          name: item.name,
          poster: item.poster,
          posterShape: "regular",
          description: item.description,
          genres: item.genres,
          background: item.background,
          logo: item.logo,
          releaseInfo: item.releaseInfo,
          imdbRating: item.imdbRating
        }));
    } else if (catalogId.includes('_series')) {
      const platform = catalogId.replace('_series', '');
      metas = catalogData
        .filter(item => {
          if (item.type !== 'series' || item.catalog !== platform) return false;
          if (genreFilter && !item.genres.includes(genreFilter)) return false;
          return true;
        })
        .map(item => ({
          id: item.id,
          type: item.type,
          name: item.name,
          poster: item.poster,
          posterShape: "regular",
          description: item.description,
          genres: item.genres,
          background: item.background,
          logo: item.logo,
          releaseInfo: item.releaseInfo,
          imdbRating: item.imdbRating
        }));
    }

    console.log('Sending catalog with', metas.length, 'items');
    return sendJSON(res, { metas });
  }

  // Route: /meta/:type/:id.json
  if (parts[0] === 'meta' && parts.length >= 3) {
    const type = parts[1];
    const id = decodeURIComponent(stripJson(parts[2]));

    console.log('Meta request - Type:', type, 'ID:', id);

    const item = catalogData.find(x => x.id === id && x.type === type);

    if (!item) {
      console.log('Item not found for meta request');
      return sendJSON(res, { meta: null }, 404);
    }

    if (item.type === 'series') {
      const videos = [];

      Object.keys(item.episodes || {}).forEach(seasonNum => {
        const seasonEpisodes = item.episodes[seasonNum];
        seasonEpisodes.forEach(episode => {
          videos.push({
            id: episode.id,
            title: episode.title,
            season: episode.season,
            episode: episode.episode,
            overview: episode.overview,
            released: episode.released,
            thumbnail: episode.thumbnail
          });
        });
      });

      const meta = {
        id: item.id,
        type: item.type,
        name: item.name,
        poster: item.poster,
        background: item.background,
        logo: item.logo,
        description: item.description,
        genres: item.genres,
        releaseInfo: item.releaseInfo,
        imdbRating: item.imdbRating,
        posterShape: "regular",
        videos: videos
      };

      console.log('Sending series meta with', videos.length, 'episodes');
      return sendJSON(res, { meta });
    } else if (item.type === 'movie') {
      const meta = {
        id: item.id,
        type: item.type,
        name: item.name,
        poster: item.poster,
        background: item.background,
        logo: item.logo,
        description: item.description,
        genres: item.genres,
        releaseInfo: item.releaseInfo,
        imdbRating: item.imdbRating,
        posterShape: "regular"
      };

      console.log('Sending movie meta');
      return sendJSON(res, { meta });
    }
  }

  // Route: /stream/:type/:id.json
  if (parts[0] === 'stream' && parts.length >= 3) {
    const type = parts[1];
    const id = decodeURIComponent(stripJson(parts[2]));

    console.log('Stream request - Type:', type, 'ID:', id);

    let streams = [];

    if (type === 'movie') {
      const movie = catalogData.find(x => x.id === id && x.type === 'movie');

      if (movie && movie.stream) {
        console.log('Found movie stream:', movie.stream);
        streams.push({
          name: "Direct HLS",
          title: movie.name,
          url: movie.stream,
          behaviorHints: {
            notWebReady: false
          }
        });
      } else {
        console.log('Movie not found or no stream URL');
      }
    } else if (type === 'series' && id.includes(':')) {
      const idParts = id.split(':');
      if (idParts.length >= 3) {
        const [seriesId, seasonNum, episodeNum] = idParts;
        const series = catalogData.find(x => x.id === seriesId && x.type === 'series');

        console.log('Looking for series:', seriesId, 'season:', seasonNum, 'episode:', episodeNum);

        if (series && series.episodes && series.episodes[seasonNum]) {
          const episode = series.episodes[seasonNum].find(e => e.episode === parseInt(episodeNum));

          if (episode && episode.stream) {
            console.log('Found episode stream:', episode.stream);
            streams.push({
              name: "Direct HLS",
              title: `${series.name} - S${seasonNum}E${episodeNum} - ${episode.title}`,
              url: episode.stream,
              behaviorHints: {
                notWebReady: false,
                bingeGroup: `directhls-${seriesId}-s${seasonNum}`
              }
            });
          } else {
            console.log('Episode not found or no stream URL');
          }
        } else {
          console.log('Series not found or no episodes for season');
        }
      }
    }

    console.log('Sending', streams.length, 'streams');
    return sendJSON(res, { streams });
  }

  // Route non trouvée
  console.log('Route not found:', pathname);
  return sendJSON(res, { error: "Route not found", path: pathname }, 404);
}
