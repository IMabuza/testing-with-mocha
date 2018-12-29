const utils = require('./utils');

it('should add two numbers', ()=>{
    var res = utils.add(33, 11);

    if(res !== 44){
        throw new Error(`Expected 44 but got ${res}`);
    }
})

it('it should calculate the factorial of n', () => {
    var factorial = utils.fac(5);

    if(factorial !== 24){
        throw new Error(`Expected 21 but got ${factorial}`);
    }
})