export default class Blog {
    posts = [];
    newPost;
    userId;
    id;
    title;
    body;

    fetch1 = fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            if (!response.ok) {
                throw Error(response.statusText)
            } else return response.json()
        })
        .catch((error) => {
            console.log('rejected', error)
        });

    constructor(userId, id, title, body, newPost) {
        userId=this.userId
        id=this.id;
        title=this.title
        body=this.body
        newPost = this.newPost;
    }

    fetchPosts() {
        this.fetch1
            .then((data) => {
                this.posts.push(data)
            })
    }

    addPost(post) {
        this.fetch1
            .then((data) => {
                data.forEach((item) => {
                    if (post === item.userId) {
                        this.newPost = item;
                    }
                })
            })
    }

    deletePost(postId) {
        this.fetch1
            .then((data) => {
                data.forEach((item) => {
                    if (postId === item.id) {
                        console.log(item)
                        //todo
                    }
                })
            })
    }

    getPostsById(postId) {
        this.fetch1
            .then((data) => {
                data.forEach((item) => {

                    if (item.id === postId) {
                        console.log(item)

                    } else if (postId > item.length) {
                        console.log(null)
                    }
                })
            })
    }

}
