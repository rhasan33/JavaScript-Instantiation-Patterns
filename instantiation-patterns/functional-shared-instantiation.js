'use strict'

/**
 * *** JS functional shared instantiation ***
 * 
 * Like functional instantiation, we will create an emppty object inside a function.
 * 
 * We will define PROPERTIES of the object only, not any methods.
 * 
 * Methods will be defined in another object
 * 
 * Then we will extend our object with the method(s)
 * 
 * The last part is the object will be returned from the fuction
 */

const methods =  {
    age: (dob) => {
        let today = new Date()
        let ageTimeDiff = today.getTime() - dob.getTime()
        return Math.floor(ageTimeDiff / (1000 * 60 * 60 * 24 * 365.25))
    }
}

let employee = (profession, designition) => {
    let obj = {}
    obj.jobSector = profession
    obj.jobDescription = designition
    Object.assign(obj, methods)
    return obj
}


// preparing the params
let arr = ['IT', 'Software Engineer']

// here is the functional instantiation
let employeeInfo = employee(...arr)

document.write("He is : " + employeeInfo.age(new Date('1989', '2', '16')) + " years old.")
