function maxInArry(numbers){
 for(let i = 0; i < numbers.length; i++){
    let largest = numbers[0]
    const index = i;
    const element = numbers[index];
    console.log(element);
    if (element > largest){
        largest = element
    }
        
  }
      return largest;

}

const hight = [167 , 190, 120, 165, 137, 265];
const tallest = maxInArry(hight);
console.log('tallest person is: ', tallest);