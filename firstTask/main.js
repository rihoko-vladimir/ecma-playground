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
    "bookmark": [{id: 432534, time: 65876586}]
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
    "bookmark": [{id: 432534, time: 65876586}]
}];

let movieLists = [{
    name: "Instant Queue",
    videos: [{
        "id": 70111470,
        "title": "Die Hard",
        "boxarts": [{
            width: 150,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg"
        }, {
            width: 200,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg"
        }],
        "url": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
        "bookmark": []
    }, {
        "id": 654356453,
        "title": "Bad Boys",
        "boxarts": [{
            width: 200,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg"
        }, {
            width: 150,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg"
        }],
        "url": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
        "bookmark": [{id: 432534, time: 65876586}]
    }]
}, {
    name: "New Releases",
    videos: [{
        "id": 65432445,
        "title": "The Chamber",
        "boxarts": [{
            width: 150,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg"
        }, {
            width: 200,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg"
        }],
        "url": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
        "bookmark": []
    }, {
        "id": 675465,
        "title": "Fracture",
        "boxarts": [{
            width: 200,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg"
        }, {
            width: 150,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg"
        }, {
            width: 300,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg"
        }],
        "url": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
        "bookmark": [{id: 432534, time: 65876586}]
    }]
}];

let filteredArray = movieLists.myMap(((element) => {
        return element.videos;
    })
);

filteredArray = filteredArray.map((element) => element.map((movie) => ({
    id: movie.id,
    title: movie.title,
    boxart: movie.boxarts.myFilter((boxArt) => boxArt.width === 150 && boxArt.height === 200)[0],
}))).flat(1);
console.log(filteredArray);

console.log(newReleases.myFilter((element) => element.rating[0] === 5.0));