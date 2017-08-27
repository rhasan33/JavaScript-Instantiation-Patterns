'use strict'

/**
 * *** JS functional instantiation ***
 * 
 * First we need to create a function in order to 
 * create functional instantiation
 * 
 * Next crate an empty object in the function.
 * 
 * We have to add properties and methods of that object.
 * 
 * at the end we return that object.
 */

let employee = (profession, designition, dob) => {
    let obj = {}

    obj.jobSector = profession

    obj.jobDescription = designition

    obj.age = function() {
        let today = new Date()

        let ageTimeDiff = today.getTime() - dob.getTime()

        return Math.floor(ageTimeDiff / (1000 * 60 * 60 * 24 * 365.25))
        
    }

    return obj
}

// preparing the params
let arr = ['IT', 'Software Engineer', new Date('1989', '2', '16')]

// here is the functional instantiation
let employeeInfo = employee(...arr)

document.write("He is : " + employeeInfo.age() + " years old.")