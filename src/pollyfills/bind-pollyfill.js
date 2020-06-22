Function.prototype.customBind = function (...arg) {
    let ref = this;
    let params = arg.slice(1);
    return function (...innerArg) {
        ref.apply(arg[0], [...params, ...innerArg]);
    }
}

let person = {
    firstName: "Vivek",
    lastName: "Chowdhury",
    city: "New Delhi",
};


function manipulation(phonenumber, country) {
    console.log('Name :', this.firstName, ' ', this.lastName);
    console.log('City :', this.city);
    console.log('Phone number ', phonenumber);
    console.log('Country ', country);
}

function startCustomBinding() {
    let test = manipulation.customBind(person, '9717833999');
    // let test = manipulation.bind(person);
    test('India');
}