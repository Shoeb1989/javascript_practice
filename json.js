function loadposts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPost(data))
}

function displayPost(posts){
    const postCOntainer = document.getElementById('post-container');
    for ( const post of posts){
        const postdiv = document.createElement('div')
        div.innerText = `
        <h4>User-${post.user}</h4>
        <h5>post:{post.title}</h5>

    }
}
