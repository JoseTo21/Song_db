const Album = require("./Album");
const Artist = require("./Artist");
const Genre = require("./Genre");
const Song = require("./Song");

Genre.belongsToMany(Artist, { through: "GenreArtist" });
Artist.belongsToMany(Genre, { through: "GenreArtist" });

Album.belongsTo(Artist);
Artist.hasMany(Album);

Song.belongsTo(Album);
Album.hasMany(Song);

Song.belongsToMany(Artist, { through: "SongArtist" });
Artist.belongsToMany(Song, { through: "SongArtist" });

Song.belongsToMany(Genre, { through: "SongGenre" });
Genre.belongsToMany(Song, { through: "SongGenre" });
