const init = () => {
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

    Object.defineProperty(Array.prototype, "myReduce", {
        value: function (callback, initialValue) {
            let accumulator = initialValue || this[0];
            let index = initialValue ? 0 : 1;
            for (let i = index; i < this.length; i++) {
                accumulator = callback(accumulator, this[i], i, this);
            }
            return accumulator;
        },
        enumerable: false,
        writable: true,
        configurable: true,
    });
}

export default init;