// console.log(1);
// console.log(2);
// setInterval(() => {
//     console.log(3);
// }, 1000)
// console.log(4);


function a(){
    console.log('a')
    b();
    console.log('bb')
}

function b(){
    console.log('b')
    console.log('aa')
}

a();
