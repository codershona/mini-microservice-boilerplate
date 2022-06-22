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





