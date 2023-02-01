console.log( " person 1: shows ticket" )
console.log( " person 2: shows ticket" )

const promisewifebringingticket = new Promise((resolve,reject) => {
    setTimeout(()=>{
resolve('ticket')
    },2000)
})

const getpopcorn=promisewifebringingticket.then((t) => {
    console.log(' wife: here is the ticket')
    console.log(' husband: lets get in')
    console.log( ' wife: But i am hungry')
    return new Promise((resolve,reject)=>{
   resolve(`${t} popcorn`)
    })
})

const getbutter= getpopcorn.then((t) => {
    console.log(' husband: i got some popcorn')
    console.log(' husband: now we should go in')
    console.log(' wife: but i need butter on my popcorn')
    return new Promise((resolve,reject) => {
        resolve(`${t} butter`)
    })
})

const getColdDrink = getbutter.then((t) => {
    console.log('husband: here is your popcorn with butter')
    console.log(' wife: lets get a cold drink too')
    console.log(' husband: sure')

    return new Promise((resolve, reject)=>{
        resolve(`${t} cold drink`)
    })
})

getColdDrink.then((t)=> {
    console.log (t)
})

console.log( " person 4: shows ticket" )
console.log( " person 5: shows ticket" )