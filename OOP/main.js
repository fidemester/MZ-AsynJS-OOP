

import User from './UserClass.js'
import Post from './postClass.js';
import Blog from './blogClass.js';


let user1=new User("Krisztián", "Fodor", "fodk@");
console.log(user1);

let blog1=new Blog("101", "101", "Viana le victro", "EEEEEEEEE");
blog1.fetchPosts();
blog1.addPost(4);
blog1.deletePost(1)
blog1.getPostsById(54);

let post1=new Post("")

