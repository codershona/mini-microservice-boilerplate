# Mini MicroService App


# Project Setup:
* React Install in ```client``` folder
* Node, express, axios and nodemon install ```npm install axios cors express nodemon``` as well as ```npm init -y``` in ```comments and posts``` folders.
* Always run ```npm start``` for frontend and backend to see in localhost:3000.

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

  * GET /posts/ ----> post -----> GET/posts/:id/comments
  * Posts and Comments Feature(Posts Service + Comments Service)
  * Microservice Solution 1: Sync Communication
  * Microservice Solution 2: Async Communication
 # An Async Solution:

 * Microservice Solution 2: Async Communication(Application Behaviour: Event Broker and its goals it to receive notifications from different services. Take those notifications or those events and route them off to all the other services that we are running. That means in short, Receives events send them on to interested parties)

 * POST /posts ----> EventBroker ---> type: PostCreated ---> {id: 'a1343', title: 'new Post'}

 * POST /posts/:id/comments ----> EventBus ---> type: CommentCreated ---> {id: 'a1343', content: 'a comment', postId: '24dsaa'}

 # Common Questions Around Async Events:

  * Wait, so you are saying we need to create a new service every time we need to join some data?
    * <b>ANSWER:</b> Absolutely not! In reality, might not even have posts & comments in separate services in the 1st place.
   
   * Who cares that each service is independent?
     * <b>ANSWER:</b> Independent services + the reliability that brings is one of the core reasons of using microservices in the 1st place.

   * This is so over the top complicated for little benefit?
     * <b>ANSWER:</b> Seems that way now! Adding in some features starts to get really easy when use this architecture.

   * This system won't correctly in the following scenario.
     * <b>ANSWER:</b> There are some very special things we need to consider with this design. I have got solutions for most maybe? of the concerns you may have.

 # Event Bus Overview:
 
 * Many different implementations. RabbitMQ, Kafka, NATS...
 * Receives events, publishes them to listeners.
 * Many different subtle features that make async communication way easier or way harder.
 * We are going to build own event bus using Express. It will not implement the vast majority of features a normal bus has. 
 * Yes, for our next app we will use a production grade, open source event bus.
 * POST /events -----> POST to localhost:4000/events OR, POST to localhost:4001/events OR, POST to localhost:4002/events.

# A Basic Event Bus Implementation:

* Check the events folder and run npm init -y and install this packages: express, nodemon, axios, cors.Then create index.js file. 

# Emitting Event:

* Emitting means pass off/ send out/eject.
* Check posts index file and we added axios and async logic.

# Emitting Comments Creation Events and Receiving Events are same
# Creating Data Query Service:
* Run mkdir query as new folder and check in into it.
* Then start creating backend service.
* Install nodemon, express, cors axios.

# Parsing Incoming Events:
# Creating the Moderation Service:
* Run mkdir query as new folder and check in into it.
* Run npm init -y and then install nodemon express axios 
# Handling Moderation
# Updating Comment Content
# Rendering Comments by Status
# Dealing with Missing Events
# Implenting Events Sync and its action

# Running Services with Docker:
## Deployment Issues:
* For Example, My computer/Virtual Machine has 4 service which is below:

   * (Docker Container) Posts : Port 4000

   * (Docker Container) Comments : Port 4001

   * (Docker Container) Query : Port 4002

   * (Docker Container) Moderation : Port 4003
   * (Docker Container) Comments : Port 4006 { This could be in 2nd Virtual Machine }
   * (Docker Container) Comments: 4007 { This could be in 2nd Virtual Machine }

        * (Docker Container) Port 4005 : Event Bus

# Docker but why?

* Because Docker solves these issues which are given below:
    * Running our app right now makes big assumptions about our environment.
    * Running our app requires precise knowledge of how to start it (npm start)

* As a result, Containers wrap up everything that is needed to a program + how to start and run it. 
# Why Kubernetes?

* Kubernetes is a tool for running a bunch of different containers.
* We give it some configuration to describe how we want our containers to run and interact with each other.

* Kubernetes Cluster: Virtual Machine ===> Node[Container(Posts Service)] + Node[Container(Posts Service)] + Node[Container(Posts Service)] ==> Master [Program to manage everything in the cluster]

* Master ----> Config Files ===> Please run 2 copies of Posts & Please allow copies of Posts to be accessible from network.


# Dockerizing with the Posts Service:

* FROM ====> node:alpine [Specify base image]
* WORKDIR ====> /app [Set the working directory to '/app' in the container. All following commands will be issued relative to this dir]
* COPY ====> package.json ./ [Copy over only the package.json files]
* Run ====> npm install [Install all dependencies]
* COPY ====> npm install ./ ./ [Copy over all of our remaining source code]
* CMD ====> ["npm", "start"] [Set the command to run when the container starts up]

* Then, Run this command after creating Dockerfile and .dockerignore file in Post service ```docker build .```

* Next, Run ```docker images``` and check your latest created image ID.
* Finally run the command ```docker run <image ID>``` and your will see nodemon is running on the port you had used in posts/index.js file.

# Reviewing some basic commands:

* ```docker build -t fislam/posts .``` -----> [Build an image based on the dockerfile in the current directory. Tag it as 'fislam/posts']
* ```docker run [image id or image tag] for example [fislam/posts][docker run fislam/posts]``` -----> [Create and start a container based on the provided image id or tag]
* ```docker run -it[image id or image tag][cmd]``` -----> [Create and start container, but also override the default command]--> For example: [docker run -it fislam/posts sh]  ---> To exit terminal press ```Ctrl + D``` not C.
* ```docker ps``` -----> Print out information about all of the running containers]---> After running previous command on terminal, to check those containers which is running open another terminal then run this command.
* ```docker exec -it[container id] [cmd]``` -----> [Execute the given command in a running container]
* ```docker logs [container id]``` -----> [Print out logs from the given container]



# Orchestrating Collections of Services with Kubernetes:

* 

