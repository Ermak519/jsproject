"use stric";

let numberOfFilms;

let personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false,
};

function start(){
    numberOfFilms = +prompt('Сколько фильмов вы посмотрели?');

    while (numberOfFilms == ''|| numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы посмотрели?');
    }
}
// start();


function rememberMyFilms(){
    for (let i = 0; i < 2; i++){

        const a = prompt('Один из просмотренных фильмов?'),
              b = prompt('На сколько его оцените?');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}
// rememberMyFilms();

function detectPersonalLevel(){
    if (personalMovieDB.count < 10) {
        console.log ('Мало фильмов просмотренно');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ) {
        console.log ('Давольно много фильмов');
    } else if (personalMovieDB.count >= 30) {
        console.log ('Вы киноман');
    }
}

// detectPersonalLevel();

function showMyDB(hidden){
    if (!hidden) {
        console.log(personalMovieDB); 
    }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres(){
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`); 
    }       
}
writeYourGenres();











// let o = 0;
// while (o < 2) {
//     const a = prompt('Один из просмотренных фильмов?'),
//           b = prompt('На сколько его оцените?');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('good');
//         o++; 
//     } else {
//         console.log('bad');
//         o--;
//     }
// }
