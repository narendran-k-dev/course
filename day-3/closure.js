const checkingfun = () => {
    let apple = 0; 
    const insidefun = () => {
        apple++;
        return apple;
    }
    return insidefun();
}

const mult = (o)=>{
    return function (x){
        return x *2 
    }
}
console.log(mult(2))

console.log(checkingfun()); 
