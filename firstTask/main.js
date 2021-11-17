Object.defineProperty(Array.prototype, "myMap", {
    value: function myMap(callback) {
        const newArray = [];
        for (const index in this) {
            newArray.push(callback(this[index]));
        }
        return newArray;
    },
    configurable: false,
    writable: false,
});

Object.defineProperty(Array.prototype, "myFilter", {
    value: function (callback) {
        const newArray = [];
        for (const index in this) {
            if (callback(this[index])) {
                newArray.push(this[index]);
            }
        }
        return newArray;
    },
    enumerable: false,
    writable: true,
    configurable: true,
});

const myTestArray = [{ok: "not ok",}, {hello: "good bye",},];

let newReleases = [{
    "id": 70111470,
    "title": "Die Hard",
    "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
    "rating": [4.0],
    "bookmark": []
}, {
    "id": 654356453,
    "title": "Bad Boys",
    "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
    "rating": [5.0],
    "bookmark": [{ id: 432534, time: 65876586 }]
}, {
    "id": 65432445,
    "title": "The Chamber",
    "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
    "rating": [4.0],
    "bookmark": []
}, {
    "id": 675465,
    "title": "Fracture",
    "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
    "rating": [5.0],
    "bookmark": [{ id: 432534, time: 65876586 }]
}];
console.log(newReleases.myFilter((element)=>element.rating[0]===5.0));