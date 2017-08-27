'use strict'

/**
 * *** JS prototypal instantiation ***
 * 
 * First we need to create methods in separate object
 * 
 * In our main function we will bind those methods to a object using `Object.create` method
 * 
 * Also we can define any properties of the object AFTER assign the method 
 * 
 * At the end we will return the object.  
 */

const methods =  {
    age: (dob) => {
        let today = new Date()
        let ageTimeDiff = today.getTime() - dob.getTime()
        return Math.floor(ageTimeDiff / (1000 * 60 * 60 * 24 * 365.25))
    }
    /**
     * we can assign more methods here if needed.
     */
}

let employee = (profession, designition) => {
    // creating the object and assing the methods inside the object
    let obj = Object.create(methods)
    obj.jobSector = profession
    obj.jobDescription = designition
    return obj
}


// preparing the params
let arr = ['IT', 'Software Engineer']

// here is the functional instantiation
let employeeInfo = employee(...arr)

document.write("He is : " + employeeInfo.age(new Date('1989', '2', '16')) + " years old.")