import {boxarts, movieLists, newReleases, ratings, videos} from "./data.js";
import init from "./functions.js";

init();
console.log("Map implementation");
let filteredArray = movieLists.myMap(((element) => {
        return element.videos;
    })
);

filteredArray = filteredArray.map((element) => element.map((movie) => ({
    id: movie.id,
    title: movie.title,
    boxart: movie.boxarts.myFilter((boxArt) => boxArt.width === 150 && boxArt.height === 200)[0],
}))).flat(1);

console.log(JSON.stringify(filteredArray));

console.log("Filter implementation");

console.log(JSON.stringify(newReleases.myFilter((element) => element.rating[0] === 5.0)));

console.log("Reduce implementation");
console.log([1, 2, 3].myReduce(function (memo, item) {
    return memo + item;
}));

console.log([1, 2, 3].reduce(function (memo, item) {
    return memo + item;
}, 10));

console.log(ratings.myReduce((prevValue, currentValue) => currentValue > prevValue ? currentValue : prevValue))

console.log(boxarts.myReduce((prevValue, currentValue) => {
    let prevSquare = prevValue.height * prevValue.width;
    let currentSquare = currentValue.height * currentValue.width;
    return currentSquare > prevSquare ? currentValue : prevValue;
}).url);

console.log(videos.myReduce((previousValue, currentValue) => {
    Object.assign(previousValue, {
        [currentValue.id]: currentValue.title,
    });
    return previousValue;
}, {}));

