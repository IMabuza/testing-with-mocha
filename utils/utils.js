// factorial
module.exports.fac = (n) => {
    var facs = [...Array(n).keys()].splice(1);

    var result = facs.reduce((total, num) => {
        return total * num;
    });
    
    return result;
}

