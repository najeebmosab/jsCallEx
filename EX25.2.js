
const obj = {
    name: "mosab",
    getName: function () {
        console.log(this.name);
    },
    getDepllayName: function () {
        debugger
        setTimeout(function () {
            obj.getName();
            obj.getDepllayName();
        }, "1000");
    }
}

obj.getName();
obj.getDepllayName();