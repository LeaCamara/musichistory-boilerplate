// Use JavaScript arrays, loops, and innerHTML to show the music you love.
// Students must use JavaScript to create a list of songs in the index.html file.
// Each student must add one song to the beginning and the end of the array.
// Loop over the array and remove any words or characters that obviously don't belong.
// Students must find and replace the > character in each item with a - character.
// Must add each string to the DOM in index.html in the main content area.   <section id="main">

// EMPTY SONGS ARRAY:
var songs = [];

// ADDING SONG INFO TO SONGS ARRAY
songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

// Add a song to BEGINNING:
songs.unshift("What a Wonderful World > by Louis Armstrong on the album What a Wonderful World");

// Add more songs to END:
songs.push("Like a Rolling Stone > by Bob Dylan on the album Highway 61 Revisited");

// Looping over the array:
// container to keep adding corrected songs to
// we put these in a new array so we can iterate over them
var newSongs = [];


for (var i = 0; i < songs.length; i ++) {
  //to replace > with -
  songs[i] = songs[i].replace(">","-");
  //to replace all the typos:
  songs[i] = songs[i].replace("*","");
  songs[i] = songs[i].replace("@","");
  songs[i] = songs[i].replace("(","");
  songs[i] = songs[i].replace("!","");
  newSongs.push(songs[i]);
  // console.log(newSongs);
  // console.log(songs[i]);
}

console.log(newSongs);

// This would also loop through and replace:

// for (var i = 0; i < songs.length; i ++) {
//    var noCarat = songs[i].replace(">", "-");
//    console.log(noCarat);
// }

// go find something in DOM that has this ID on it & hold that place with the songsInDom variable:
var songsInDom = document.getElementById("main");

// then get rid of the current placeholder text:
songsInDom.innerHTML = "";

// loop through newSongs array (since it's the one that contains the actual song content):
for (var i = 0; i < newSongs.length; i++) {
// to put the variable of corrected songs (newSongs) in that area of the webpage being held by songsInDom variable:
  songsInDom.innerHTML += "<p>" + newSongs[i] + "</p>";
}

// Maybe in the future: ??

  //make titles array
  // new variable to hold titles; make the titles by splitting the string into 2 at this point: " - by"
  // var newTitle = songs[i].split(" - by",2);
  // titles = newTitle[0];
  // console.log(titles)
  // var newArray = newTitle[1];
  // console.log(newArray)

  //make artists array
  // new variable to hold artists; make the artists by splitting the string into 2 at this point: " on the album "
  // var newArtist = newArray.split(" on the album ",2);
  // artists = newArtist[0];
  // console.log(artists)
  // albums = newArtist [1];
  // console.log(albums)
