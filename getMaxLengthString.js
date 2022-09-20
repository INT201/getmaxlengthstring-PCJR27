const { template } = require('@babel/core')
  function getMaxLengthString(arrayOfString){
    if(arrayOfString === null || arrayOfString===undefined){
      return undefined
    }
    let result =[]
    for(const max of arrayOfString){
      if(result.length===0){
        result=[max]
      }else if (result[0].length<=max.length){
        if(result[0].length === max.length){
          result.push(max)
        }else
          result =[max]  
    }
  }

  return result
}

module.exports = getMaxLengthString
