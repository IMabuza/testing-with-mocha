const expect = require('expect');
const utils = require('./utils');

// Test Factorial

it('it should calculate the factorial of n', () => {
    var factorial = utils.fac(5);
    // Use expect library for assertion
    expect(factorial).toBe(24).toBeA('number');
})

// async square

it('should square a number asynchronously', (done)=>{
    utils.asyncSquare(3, (prod) =>{
    expect(prod).toBe(10).toBeA('number');
    // call done
    done();
    });
    
})

