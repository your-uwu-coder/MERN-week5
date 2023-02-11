//Given a list of 'weak passwords' and a password (string) determine if the password is strong or weak
//if the password is in the list of weak passwords return 'Weak Password'
//if the password is not found in the list of weak passwords return 'Strong Password'
let weakPass = ['12345678', 'password', 'secretPassword', 'strongPassword', 'youllNeverGuess']
let pass = 'password'
//write a function that takes in 2 parameters (weakpasswordlist, password)

const strongOrWeakPassword = (weakPasswordList, password) => {
for (let idx = 0; idx < weakPasswordList.length; idx++) {
    // console.log(typeof(password)) 
    // console.log(typeof(weakPasswordList[idx]))
    
    if (password == weakPasswordList[idx]) {
        return 'Weak Password'
        } 
    } 
    return 'Strong Password'

}
console.log(strongOrWeakPassword(weakPass, pass));





// Algo #2 
//Reverse an array
//example reverseArr([1,2,3,4]) would return [4, 3, 2, 1]

const reverseArr = (arr) => {
    let result = []
    for (let idx = arr.length - 1 ; idx >= 0; idx--) {
        result.push(arr[idx])
    }
    return result; 
}

console.log(reverseArr([1,2,3,4]))


