class Jukebox {
    constructor() {
        this.albums = [];
    }
    addAlbum = function(album) {
        this.albums.push(album);
    }
    favoriteAlbum = function() {
        let max = -1;
        let fav;
        for (let i = 0; i < this.albums.length; i++) {
            if (this.albums[i].played > max) {
                max = this.albums[i].played;
                fav = this.albums[i];
            }
        }
        return fav.display();
    }
}

class Album {
    constructor(artist, title) {
        this.artist = artist;
        this.title = title;
        this.played = 0;
    }
    play() {
        this.played += 1;
    }
    display() {
        return `${this.artist} : ${this.title}. The album has been played ${this.played} times.`;
    }
}

const albumsArray = [
    {artist: "Operation Ivy", title: "Energy"},
    {artist: "Blink 182", title: "Dude Ranch"},
    {artist: "New Found Glory", title: "Sticks and Stones"}
];

const jbox = new Jukebox()

albumsArray.forEach(album => {
    const albumInstance = new Album(album.artist, album.title);
    jbox.addAlbum(albumInstance);
});

document.addEventListener("DOMContentLoaded", () => {
const albumDropdown = document.getElementById("albumDropdown");
const playButton = document.getElementById("playButton");
const showFavorite = document.getElementById("showFavorite");
const favoriteAlbum = document.getElementById("favoriteAlbum");

albumsArray.forEach(album => {
    const option = document.createElement("option");
    option.text = `${album.artist} - ${album.title}`;
    albumDropdown.appendChild(option);
});

playButton.addEventListener("click", () => {
    const selectedAlbumTitle = albumDropdown.value;
    const selectedAlbum = jbox.albums.find(album => album.title === selectedAlbumTitle);

    if (selectedAlbum) {
        selectedAlbum.play();
    }
});

showFavorite.addEventListener("click", () => {
    const favAlbum = jbox.favoriteAlbum();
    favoriteAlbum.textContent = `Your favorite album is ${favAlbum}`;
});
});

// jbox.addAlbum(album1)
// jbox.addAlbum(album2)
// jbox.addAlbum(album3)

// album1.play()
// album2.play()
// album2.play()
// album2.play()
// album2.play()
// album2.play()
// album3.play()

// console.log(`Your favorite album is: ${jbox.favoriteAlbum()}`)