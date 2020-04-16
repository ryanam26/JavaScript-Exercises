const inventory = {
    sunglasses: 1900,
    pants: 1088,
    bags: 1344
  };
  
  console.log(inventory.sunglasses)
  
  // Promise funtion:
  const myExecutor = (resolve, reject) => {
    if (inventory.sunglasses > 0) {
      resolve("Sunglasses order processed.")
    } else {
      reject("That item is sold out.")
    }
  };
  
  const orderSunglasses = () => {
    const order = new Promise(myExecutor);
    return order
  };
  
  const orderPromise = orderSunglasses()
  
  console.log(orderPromise)
  
  