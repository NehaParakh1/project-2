const posts=[{title: 'Post One', body: 'This is post one', createdAt: new Date().getTime()}, 
{title: 'Post Two', body: 'This is post two', createdAt: new Date().getTime()}]

function getPosts(){
    setInterval(() => {    //for the value to be updated every second using set interval
let output="";
for(let i=0;i<posts.length;i++){
    output+=`<li>${posts[i].title}-Created ${Math.floor((new Date().getTime()- posts[i].createdAt)/1000)} seconds ago</li>`; 
}
document.body.innerHTML=output;
},1000);
    
}

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

const managePost = async() => {
    try{
        const displayBrowser= getPosts()
await createPost({ title: 'Post Three', body:'This is post three' })
await createPost({ title: 'Post Four', body:'This is post four' })
getPosts() 
await deletePost()
    getPosts()
await deletePost()
            getPosts()
            await deletePost()
            getPosts()
            await deletePost()
            getPosts()
            await deletePost()
            }catch(err){
                console.log(err)
        
  }
}

managePost()
