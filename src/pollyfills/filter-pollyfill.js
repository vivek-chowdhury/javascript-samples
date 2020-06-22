let personList = [{
        name: "Vivek Chowdhury",
        id: 10,
        country: "India"
    },
    {
        name: "Chines Men",
        id: 25,
        country: "China"
    },
    {
        name: "American Men",
        id: 30,
        country: "America"
    },
    {
        name: "Candian Men",
        id: 47,
        country: "Canada"
    }
];


Array.prototype.customFilter = function (fn, ...args) {
    let ref = args.slice(1),
        nList = [];
    for (let i = 0; i < this.length; i++) {
        const o = fn.call(ref, this[i], i, this);
        if (o) {
            nList.push(o);
        }
    }
    return nList;
}

function runCustomFilter() {

    let x = personList.filter((a) => {
        return a.id % 2 == 0;
    });
    console.log(x);

}