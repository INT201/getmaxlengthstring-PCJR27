const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {

 
  if(arrayOfString === null || arrayOfString === undefined){
    return undefined
  }
  let answerMax =[]
  let answer =arrayOfString[0]
  for (const values of arrayOfString){
    if (answerMax.length === 0){
     answerMax = [values]
    }
    else if (values.length >= answerMax[0].length){
     if(values.length == answerMax[0].length){
       answerMax.push(values)
     }
     else{
       answerMax = [values] 
     }
    }
  }
    return answerMax
  
}
console.log(getMaxLengthString(['hello', 'hi', 'hey', 'Good Evening', 'Good Morning','Good Mornind']))
console.log(getMaxLengthString(['hello','hi']))
module.exports = getMaxLengthString

