// reverse an array without using a built in function

const reverseArray = (arr) => {
  
    let reverseArr = [];
    
    for (let i = arr.length-1; i >=0; i--) {
      reverseArr.push(arr[i]);
    }
    return reverseArr
  }
  
  const sentence = ['sense.','make', 'all', 'will', 'This'];
  
  console.log(reverseArray(sentence)) 

  
  
  
  