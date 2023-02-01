console.log( " person 1: shows ticket" )
console.log( " person 2: shows ticket" )

const premovie= async()=> {
    const promisewifebringingticket = new Promise((resolve,reject) => {
        setTimeout(()=>{
    resolve('ticket')
        },2000) 
})
const getpopcorn= new Promise ((resolve,reject) => {
    resolve('popcorn')
})

const getcandy = new Promise((resolve,reject) => {
    resolve('candy')
})

const getColdDrink = new Promise((resolve,reject) => {
    resolve('cold drink')
})

let ticket= await promisewifebringingticket

let [popcorn,candy,coke]= await Promise.all([getpopcorn,getcandy,getColdDrink])

console.log(`${popcorn},${candy},${coke}`)

return ticket;
}

premovie().then((m) => {
    console.log(`person 3: shows ${m}`);
})

console.log( " person 4: shows ticket" )
console.log( " person 5: shows ticket" )