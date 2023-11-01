const myName = (name, lastname) =>  `${name} ${lastname}`
console.log(myName('Felipe', 'Javier'))



const sumaValores = (arr) => {
  let sum = 0
  for(let i = 0; i < arr.length ; i++){
    sum += arr[i]
  }
  return sum
}
const nums = [5,4,3,0,2]
console.log(sumaValores(nums))



const sumNums = (...arr) => {
  let sum = 0
  for(let value of arr) {
    sum += value
  }
  return sum
}
console.log(sumNums(1, 2, 3, 4, 10))



const toUpperCase = (arr) => {
 let newArr = []
 for(const element of arr){
  newArr.push(element.toUpperCase())
 }
 return newArr
}
const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
console.log(toUpperCase(countries))



const toLowerCase = (arr) => {
  let newArr = []
  for(const element of arr){
    newArr.push(element.toLowerCase())
  }
  return newArr
}
console.log(toLowerCase(countries))



const weightOfObject = (mass, gravity = 9.81) => mass * gravity + 'N'
console.log('Weight of an object in Newton: ', weightOfObject(100))



const miNombre = (firstName, secondName) => {
  return `${firstName} ${secondName}`
}
console.log(miNombre('felipe', 'javier'))



const addNumbers = (num1, num2) => {
  return num1 + num2
}
console.log(addNumbers(1, 2))



const findMax = (...args) => {
  let maxArr = []
  for(const element of args){
    maxArr.push(element)
  }
  let sortNums = maxArr.sort(function(a, b){return a - b})
  let maxNum = sortNums.pop()
  return maxNum
}
console.log(findMax(0, -10, -2))



const printArray = (args) => {
  return args.split("")
  // return [...args]  <--- funciona igual
}
console.log(printArray("array"))



const reverseArray = (arr) => {
  let array = []
  for(i = arr.length-1 ; i >= 0 ; i--){
    let valueIndex = arr[i]
    array.push(valueIndex)
  }
  return array
}
console.log(reverseArray(['A', 'B', 'C']))



const capitalizeArray = (arr) => {
  let capitalized = []
  for (const element of arr){
    // let letter = element.charAt(0).toUpperCase() + element.slice(1)  <---- forma larga
    // let word = element.slice(1)  
    // capitalized.push(letter + word)  
    // capitalized.push(letter)  
    capitalized.push(element.charAt(0).toUpperCase() + element.slice(1))
  }
  return capitalized
}
console.log(capitalizeArray(['finland', 'sweden', 'norway', 'denmark', 'iceland']))



const sumOfArgs = (...arr) => {
  let final = 0
  for (const element of arr){
    final  += element
  }
  return final
}
console.log(sumOfArgs(1,2,3))


const hexaColor = () => {
  const str = '0123456789abcdef'
  let hexa = '#'
  let index
  for (let i = 0; i < 6; i++) {
    index = Math.floor(Math.random() * str.length)
    hexa += str[index]
  }
  return hexa
}

console.log(hexaColor())