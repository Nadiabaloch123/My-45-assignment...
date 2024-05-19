//QUESTION NO:40
//Album: Write a function called make_album() that builds a Object describing a music album...etc
//ANSWER...
function make_album(artist, title, tracks) {
    const album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
const album = make_album('Artist 1', 'Album Title 1');
console.log(album);
const album2 = make_album('Artist 2', 'Album Title 2');
console.log(album2);
const album3 = make_album('Artist 3', 'Album Title 3', 12);
console.log(album3);
export {};
