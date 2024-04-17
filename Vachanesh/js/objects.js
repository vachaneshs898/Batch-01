// let, var, const 

let objOne = {
    name: "vachanesh",
    age: 31,
    job: false,
    getEducData: function() {
        return this.name;
    },
    address: {
        city: 'pune',
        contry: 'india',
        pincode: 424001
    }
}

console.log(objOne.getEducData())