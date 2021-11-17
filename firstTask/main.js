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

const myTestArray = [{ok: "not ok",}, {hello: "good bye",},];



console.log(myTestArray.myMap((element) => {
    Object.defineProperty(element, "secretValue", {
        value: "Ok, i think it works",
        writable: true,
        configurable: true,
        enumerable: true,
    })
    return element;
}));