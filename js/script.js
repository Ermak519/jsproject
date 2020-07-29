"use stric";


let personalMovieDB = {
    count: 0,
    movies:{},
    actors:{},
    genres:[],
    privat:false,
    start: function (){
        personalMovieDB.count = +prompt('Сколько фильмов вы посмотрели?');
        while (personalMovieDB.count == ''|| personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы посмотрели?');
        }
    },
    rememberMyFilms: function (){
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
    },
    detectPersonalLevel: function (){
        if (personalMovieDB.count < 10) {
            console.log ('Мало фильмов просмотренно');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ) {
            console.log ('Давольно много фильмов');
        } else if (personalMovieDB.count >= 30) {
            console.log ('Вы киноман');
        }
    },
    showMyDB: function (hidden){
        if (!hidden) {
            console.log(personalMovieDB); 
        }
    },
    toggleVisibleMyDB: function (){
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function (){
        for (let i = 1; i <= 3; i++) {
            let gener = prompt(`Ваш любимый жанр под номером ${i}`);

            if (gener === '' || gener == null) {
                console.log('Вы ввели некорректные данные');
                i--;
            } else {
                personalMovieDB.genres[i-1] = gener;
            }          
        }  
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i+1} - это ${item}`);
        });    
    }
};













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
