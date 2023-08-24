const favouriteFilm = {
  title: "Top Gun",
  year: "1986",
  genre: "action",
  star: "Tom Cruise",
  director: "Tony Scott",
};

const { title, year, genre, star, director } = favouriteFilm;

// const title = favouriteFilm.title
// const year = favouriteFilm.year
// const genre = favouriteFilm.genre
// const star = favouriteFilm.star
// const director = favouriteFilm.director

console.log(
  `My favourite film is ${title} starring ${star}. It's an ${genre} film that was directed by ${director} and released in ${year}.`
);

///////////////////////

const dreamHoliday = {
  destination: "Finland",
  activity: "student",
  accommodation: "airBnB",
  companion: "hamza",
};

const { destination, activity, accommodation, companion } = dreamHoliday;
console.log(`I want to go to ${destination} as a ${activity} at university and i will booked my 
accomodation through ${accommodation} and want ${companion} to my side
`);

//////////////

const distanceWalkedMilesArr = [140, 153, 161, 153, 128, 148];

const conversionFactorMilesToKm = 1.6;

function convertMilesToKms() {
  return distanceWalkedMilesArr.map(function (distanceMiles, index) {
    return `Month ${index}: ${distanceMiles * conversionFactorMilesToKm}KM`;
  });
}

console.log(convertMilesToKms());

///////////////////////////////

import { playlistArr } from "/playlist.js";

/*
Challenge
1. Refactor the code below to use .map() 
   instead of the for loop.
   ⚠️ Don't worry about the commas for now.
*/

const playlistHtml = playlistArr.map(function (track) {
  return `
<section class="card">
    <div class="card-start">
        <img src="/images/${track.albumArt}">
    </div>
        <div class="card-mid">
            <h4 class="card-title">${track.title}</h4>
            <p class="card-artist">${track.artist}</p>
        </div>
    <div class="card-end">
        <p class="card-menu">...</p>
    </div>
</section>
`;
});

document.getElementById("container").innerHTML = playlistHtml;

///////////////////////////

function getTheftAlert(numberOfTransactionsHour) {
  if (numberOfTransactionsHour > 5) {
    return `You have made ${numberOfTransactionsHour} transactions 
                in the past hour. We think your card might have been 
                compromised`;
  }
}

console.log(getTheftAlert(6));
