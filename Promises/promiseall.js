const posts=[{title: 'Post One', body: 'This is post one', createdAt: new Date().getTime()}, 
{title: 'Post Two', body: 'This is post two', createdAt: new Date().getTime()}]

function createPost(post){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            posts.push({...post, createdAt: new Date().getTime()});
            const error=false;
         if(!error){
            resolve();
         }
         else{
            reject('Error: something went wrong')
         }
        },2000)
    })
}
const user={username: ' Neha', lastActivityTime: new Date(2022,10,29) }
console.log(`before updating - ${user.lastActivityTime}`)

 function updateLastActivityTime(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            let err=false;
            if(!err){
         user.lastActivityTime = new Date().getTime();
         resolve(`after updating- ${user.lastActivityTime}`);
            }
            else{
                reject('Error')
            }

        },2000)

    })
}

function deletePost(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(posts.length>0)
            {
                const lastelem= posts.pop();
                resolve(lastelem);
            }
            else{
                reject('Array is empty now')
            }
        },1000)
    })
}

Promise.all([createPost({ title: 'Post Three', body:'This is post three' }),updateLastActivityTime()]).then(([postCreated,updated]) => {
    console.log(updated)
    console.log('the final collection of posts -')
    console.log(posts)
}).catch((err) => { console.log(err)})
