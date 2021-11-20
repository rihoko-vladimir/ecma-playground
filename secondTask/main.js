const Robot = function (name) {
    this.name = name;
};

function add(op1, op2) {
    this.name = this.name || "Human";
    return this.name + " can count to " + (op1 + op2);
}

function showName() {
}

console.log(add(0, 1));

const voltron = new Robot("Voltron");

console.log(add.call(voltron, 1, 2));

console.log(add.apply(voltron, [20, 30]));

console.log(add.bind(voltron, "drinking", "beer")());