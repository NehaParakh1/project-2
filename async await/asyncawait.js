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

const getbutter = new Promise((resolve,reject) => {
    resolve(' butter')
})

const getColdDrink = new Promise((resolve,reject) => {
    resolve(' cold drink')
})

let ticket= await promisewifebringingticket
console.log(' wife: here is the ticket')
console.log(' husband: lets get in')
console.log( ' wife: But i am hungry')

let popcorn= await getpopcorn
console.log(' husband: i got some popcorn')
console.log(' husband: now we should go in')
console.log(' wife: but i need butter on my popcorn')

let butter= await getbutter
console.log(' husband: i got some butter in the popcorn')
console.log(' wife: i need cold drink along with it')

let coldDrink = await getColdDrink
console.log('husband: here is your cold drink')
console.log(' wife: thanks, lets get inside then')
console.log(' husband: sure')


return ticket;
}

premovie().then((m) => {
    console.log(`person 3: shows ${m}`);
})

console.log( " person 4: shows ticket" )
console.log( " person 5: shows ticket" )