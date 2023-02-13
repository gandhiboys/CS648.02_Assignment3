//1
favourite_movies = ['Top Gun Maverick', 'Night at the Museum', 'Limelight', 'Wings', 'Fear'];
console.log(favourite_movies[1]);

//2
movies = new Array(5);
movies[0] = favourite_movies[0];
movies[1] = favourite_movies[1];
movies[2] = favourite_movies[2];
movies[3] = favourite_movies[3];
movies[4] = favourite_movies[4];
console.log(movies[0]);

//3
movies.splice(2, 0, 'Race');
console.log(movies.length);

//4
var movies = []; 
movies = [favourite_movies[0], favourite_movies[1], favourite_movies[2], favourite_movies[3], favourite_movies[4]];
movies.shift();
console.log(movies);

//5
var movies = [];
movies[0] = favourite_movies[0];
movies[1] = favourite_movies[1];
movies[2] = favourite_movies[2];
movies[3] = favourite_movies[3];
movies[4] = favourite_movies[4];
movies[5] = 'Shades';
movies[6] = 'Dark';
for(let i=0; i<movies.length; i++){
    console.log(movies[i]);
}

//6
for (const movie of movies){
    console.log(movie);   
}

//7
movies.sort();
for (const movie of movies){
    console.log(movie);
}

//8
var leastFavMovies = []
leastFavMovies[0] = 'Up';
leastFavMovies[1] = 'Masterclass';
leastFavMovies[2] = 'Matrix';
console.log('Movies I like: ');
for(let i=0; i<favourite_movies.length; i++){
    console.log(favourite_movies[i]);
}
console.log('Movies I regret watching: ');
for(let i=0; i<leastFavMovies.length; i++){
    console.log(leastFavMovies[i]);
}

//9
var movies = favourite_movies.concat(leastFavMovies);
movies.sort();
console.log(movies.reverse());

//10
let lastElement = movies.pop();
console.log(lastElement);

//11
var shifted = movies.shift()
console.log(shifted);

//12
for(let i=0; i<movies.length; i++){
    if (leastFavMovies.includes(movies[i])){
        console.log(i);
        movies[i] = 'Mermaids';
    }
}
console.log(movies);

//13
var movies = [['Fear', 1],
    ['Mermaids', 2],
    ['Wings', 3],
    ['Exam', 4],
    ['Sleepy', 5]
];
var movieNames = movies.filter(function(movie) {
  return typeof movie[0] === 'string';
});
for (movieName of movieNames){
  console.log(movieName[0]);    
}

//14
var employees = []
employees[0] = 'ZAK';
employees[1] = 'JESSICA';
employees[2] = 'MARK';
employees[3] = 'FRED';
employees[4] = 'SALLY';
console.log("Employees: ")
function employeeName(employees){
    for (const employee of employees){
        console.log(employee);
    }
}
employeeName(employees);

//15
function filterValues(array) {
  return array.filter(function(value) {
    return value !== false && value !== null && value !== 0 && value !== '';
  });
}
console.log(filterValues([58, '', 'abcd', true, null, false, 0]));

//16
var numbers = [4, 6, 1, 2, 65, 34, 56,24, 60, 38];
function randomItem(numbers){
console.log(numbers[Math.floor(Math.random() * 10)]);    
}
randomItem(numbers);

//17
function maxItem(numbers){
    console.log(Math.max(...numbers));
}
maxItem(numbers);