function bmicalculator(weight,height){
    let bmi = Math.round(weight / (height * height));
    return bmi;
}

  let bmi = bmicalculator(65, 1.8);
  console.log(bmi);