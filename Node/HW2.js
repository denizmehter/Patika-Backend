let myPosts = [
    { title: 'post 1', author: 'author 1', date: '2023' },
    { title: 'post 2', author: 'author 2', date: '2023' },
    { title: 'post 3', author: 'author 3', date: '2023' },
    { title: 'post 4', author: 'author 4', date: '2023' },
]

function listPosts(posts) {
    let listedPosts = posts.map(post => console.log(post.title, " - ",post.author," - ", post.date))
}

function addPosts(posts) {
    console.log("Adding new post information...")
    return new Promise((resolve,reject) => {
        posts.push({ title: 'post 5', author: 'author 5', date: '2023' })
        resolve("New information successfully added!!!")
    })
}

async function listAll(postList) {
    listPosts(postList);
    try {
        let value = await addPosts(postList);
        console.log(value);
        let finalList = await listPosts(postList);
        console.log(finalList);
    } catch (error) {
        console.log(error);
    }
}

listAll(myPosts);