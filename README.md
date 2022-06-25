# Mini MicroService App


# Project Setup:
* React Install in ```client``` folder
* Node, express, axios and nodemon install ```npm install axios cors express nodemon``` as well as ```npm init -y``` in ```comments and posts``` folders.
# Implementation of Post Service Creation:

* For example, if we imagine we have a post service where 4 row and they are:

  * <b>Path</b> :
     * /posts
     * /posts

  * <b>Method</b> :
     * POST
     * GET 

  * <b>Body?</b> :

     * { title: string }
     * [ - ]

  * <b>Goal</b> :

     * Create a new post 
     * Retrieve all posts

# Testing the Posts Service:

 * We can test our post api by using Post Man API by running post and get ethod http which would created a post and by requesting get we will get all our posts which has been created.

 # Implementation of Comments Service:

 * For example, if we imagine we have a comments service where 4 row and they are:

  * <b>Path</b> :
     * /posts/:id/comments
     * /posts/:id/comments

  * <b>Method</b> :
     * POST
     * GET 

  * <b>Body?</b> :

     * { content: string }
     * [ - ]

  * <b>Goal</b> :

     * Create a comment associated with the given post ID.
     * Retrieve all comments associated with the given post ID.

## Let's build our idea to post our comments:

   * <b>commentsByPostId:</b>
      * '35p5pj' ----> 
      * {id: 'j325', content: 'great post'}  ---> comment
      * {id: 'a5a5', content: 'neat!'}

      * { 'a5uha5' } ---> This is ID of a post ----> 
         * {id: '15ji', content: 'informative'}  
         * {id: '43iji', content: 'yes'}

         * BOTH ARE array of comments
# Quick Comments Service Test:

  * Now I had test API using Postman.
  * Check the request by using GET/POST Method Http

# React Project Setup:

  * React App:
      * <b>Posts Service:</b>
         * Router ----> Posts Feature

      * <b>Comments Service:</b>
         * Router ----> Comments Feature
      
      * App ----> 
         * PostList  
            * Comment List
            * Comment Create
         * PostCreate

      * Installation : axios
# Building Post Submission Method:

  * Added BootstrapCDN in index.html file and create the PostCreate file to build our logic.
  * Check Chrome devtools Network and check the XHR request when you try to submit any title on frontend by clicking the button.

# Handling CORS Errors:

  * Install npm install cors package in backend comments and posts folder.
  * Import cors into comments and posts index.js files.
  * Check again and Chrome devtools network and try to posts again if you see 201 status then posts has been created successfully.

# Fetching and Rendering Posts:
  
  * Check the PostList file which has been fetched and render into frontend.

# Creating Comments and Displaying Comments:

 * Check CommentCreate file and check your logic to post and see Chrome Devtools Network that its showing status 201.
 * To show your comments that you created check commentList file logic which display in our frontend.

 # Request Minimization Strategies:

 # An Async Solution:

 # Common Questions Around Async Events:

 # Event Bus Overview:









