import {movieLists, newReleases} from "./data.js";
import init from "./functions.js";

init();

let filteredArray = movieLists.myMap(((element) => {
        return element.videos;
    })
);

filteredArray = filteredArray.map((element) => element.map((movie) => ({
    id: movie.id,
    title: movie.title,
    boxart: movie.boxarts.myFilter((boxArt) => boxArt.width === 150 && boxArt.height === 200)[0],
}))).flat(1);

console.log([1, 2, 3].myReduce(function (memo, item) {
    return memo + item;
}));

console.log("\n")

console.log( [1,2,3].reduce(function(memo, item) { return memo + item; }, 10));

console.log("\n");

console.log(JSON.stringify(filteredArray));

console.log("\n");

console.log(JSON.stringify(newReleases.myFilter((element) => element.rating[0] === 5.0)));

console.log("\n");