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

* Run ```kubectl version``` to check your kubernetes version.
* To interact with kubenetes cluster run ```kubectl```.
* 


# Important Kubernetes Terminology:

* <b>Kubernetes</b>:  A collection of nodes + a master to manage them.
* <b>Node</b>: A virtual machine that will run our containers.
* <b>Pod</b>: More or less a running container. Technically, a pod can run multiple containers (we won't do this).
* <b>Deployment</b>: Monitors a set of pods, make sure they are running and restarts them if they crash.
* <b>Service</b>: Provides an easy to remember URL to access a running container.

# Kubernetes Config Files:

* Kubernetes about the difference Deployments, Pods and Services (referred to as 'Objects') that we want to create.

* Written YAML Syntax.
* Always store these files with our project source code - they are documentation.
* We can create Objects without config files - do not do this. Config files provide a precise definition of what your cluster is running.
* Kubernetes docs will tell you to run direct commands to create objects - only do this for testing purposes.
* Blog posts will tell you to run direct commands to create objects - close the blog post!


# Creating a Pod:

* Go to cd posts folder and run ```docker build -t fislam/posts:0.0.1 .```.
* Then create infra folder and k8s folder and create posts.yaml file.
* Next after creating config file and run ```kubectl apply -f posts.yaml```.

* Make your switch your kubernetes into docker-desktop which located in ubuntu top bar of your laptop, check docker icon. If you see this issues in terminal 
   ```Unable to connect to the server: dial tcp 192.168.49.2:8443: i/o timeout.``` 
Don't run previous command if you see if settings is in minikube.


* Then run ```kubectl get pods```.


# ErrImagePull, ErrImageNeverPull and ImagePullBackoff Errors:

* If your pods are showing ErrImagePull, ErrImageNeverPull, or ImagePullBackOff errors after running kubectl apply, the simplest solution is to provide an imagePullPolicy to the pod.

* First, run kubectl delete -f infra/k8s/

* Then, update your pod manifest:

 ``` 
   spec:
    containers:
     - name: posts
       image: cygnet/posts:0.0.1
       imagePullPolicy: Never
 ```
* Then, run kubectl apply -f infra/k8s/

* This will ensure that Kubernetes will use the image built locally from your image cache instead of attempting to pull from a registry.

#### Minikube Users:

* If you are using a vm driver, you will need to tell Kubernetes to use the Docker daemon running inside of the single node cluster instead of the host.

* Run the following command:

 ```
   eval $(minikube docker-env)
 ```

* Note - This command will need to be repeated anytime you close and restart the terminal session.

* Afterward, you can build your image:

 ```
    docker build -t USERNAME/REPO .
 ```

* Update, your pod manifest as shown above and then run:
 ```
   kubectl apply -f infra/k8s/
 ```
* https://minikube.sigs.k8s.io/docs/commands/docker-env/


# Understanding a Pod Spec:

* Run ```k get pods``` or, ```kubectl get pods``` on the terminal to see the pods.
# Some Common Kubectl Commands:  [Including Docker Commands]
* ```kubectl get pods``` This means Print out information about all of the running pods pods.   -------> ```docker ps```

* ```kubectl exec -it [pod_name][cmd]``` <b>For example:</b> ```kubectl exec -it posts sh```.  Execute the given command in a running pod -------> ```docker exec -it[container id][cmd]```

*  ```kubectl logs [pod_name]``` <b>For example:</b> ```kubectl logs posts```. Print out logs from the given pods -------> ```docker logs[container id]```

*  ```kubectl delete pod[pod_name]``` <b>For example:</b> ```kubectl delete pod posts```.   Deletes the given pod.

* ```kubectl apply -f[config file name]``` Tells Kubernetes to process the config.

*  ```kubectl describe pod[pod_name]```  <b>For example:</b> ```kubectl describe pod posts```. Print out some information about the running pod.

* ```code ~/.zshrc``` [Optional]

# Kubernetes Deployments:

* Deployment has 3 pods and in there all container running image posts image.
* Common Commands:
   * ```kubectl get deployments``` ----> List all the running deployments
   * ```kubectl describe deployment[depl name]``` -----> Print out details about a specific deployment.
   * ```kubectl apply -f [config file name]``` -----> Create a deployment out of a config file.
   * ```kubectl delete deployment[depl_name]``` ----> Delete a deployment.
   * ```kubectl describe deployment posts-depl```

   * ```kubectl delete deployment posts-depl```
   * 

# Updating Kubernetes Deployment:

* Updating the image used by a deployment - method #1:
    * Make a changes to your project code.
    * Rebuild the image, specifying a new image version.
    * In the deployment config file, update the version of the image.
    * Run the command ```kubectl apply -f [depl file name]```.


    * Run now this command in posts folder : ```docker build -t fislam/posts:0.0.5 .```.
    * The run ``` kubectl apply -f posts-depl.yaml```.
    * Next run ```kubectl get pods``` or ```kubectl get deployments```.
    * Next run ```kubectl logs posts-depl-79fb497cc5-rrpqv```.

* Method 2 : 
    * The deployment must be using the 'latest' tag in the pod spec version.
    * Make an update to your code.
    * Build the image.
    * Push the image to docker hub.
    * Run the command: ```kubectl rollout restart deployment[depl_name]```.
    
    * After changes in posts/index file, go to posts folder via terminal then run ```docker build -t fislam/posts .``` or, ```docker build -t islamh/posts .```.
    * Run to push your build images into your current docker account:```docker push fislam/posts``` or, ```docker push islamh/posts```.
    * ```kubectl get deployments```.
    * ```kubectl rollout restart deployment posts-depl```.
    * ```kubectl get pods```.
    * ```kubectl logs posts-depl-fc478f9c7-xcmzq``` Or, ```kubectl logs <name>```.
    
    * Our cluster is running the latest version of our code.

# Networking with Services:

   * ```kubectl get pods```.
   * Example: There were 3 pods in Node and 1st one is running Container with Posts image, 2nd one is Same as 1st one.Here Service is providing them. 3rd one is running only Event-Bus. Here event bus is getting from service. 

   * Finally we can say that, Services provide networking between pods.

### There are 4 types of services:
   * <b>Cluster IP :</b> Sets up an easy to remember URL to access a pod. It only exposes pods in cluster. 
   
   *  <b>Node Port :</b> Makes a pod accessible from outside the cluster. Usually only used for dev purposes.

   * <b>Load Balancer :</b> Makes a pod accessible from outside the cluster. This is the right way to expose a pod to the outside world.

   * <b>External Name :</b> Redirects an in-cluster request to a CNAME url...don't worry about this one...
# Creating s NodePort Service:

  * Create a kubernetes node port service which file name is post-srv.yaml

# Accessing NodePort Services:

  * ``` cd infra/k8s ```

  * ``` kubectl apply -f posts-srv.yaml ```

  * ``` kubectl get services ```

  * ``` kubectl describe service posts-srv ```.

# Setting up Cluster IP Services:

  * In Node we have 2 Pod one is Posts and another one is Event-bus. They both have Cluster IP services.

  * Now 1st Pod which is Posts is connected with ----> 2nd Cluster IP services.

  * Then 2nd Pod which is Event Bus that will be connected with Cluster IP services.and get back again into 1st Pod which was Posts.

# Building a Deployment for the Event Bus:

  * <b>Goals :</b> 
       * Build an image for the Event Bus.

       * Push the image to Docker Hub

       * Create a deployment for Event Bus.

       * Create a Cluster IP service for Evemt Bus and Posts

       * Wire ti all up!

  * Go to event-bus folder and run this command to build docker ```docker build -t islamh/event-bus .```. 

  * Then run to push the docker ```docker push islamh/event-bus``` command.

  # Adding ClusterIP Services:

  * Now go to infrak8s folder and run ```kubectl apply -f event-bus-depl.yaml``` Or ```kubectl apply -f posts-depl.yaml --validate=false```.

  * To check your created pods run ```kubectl get pods```.

  * Now if you run again it will show unchanged ```kubectl apply -f event-bus-depl.yaml```.
  * ```kubectl get services```.
  * Then work on same logic into posts-depl file and run ```kubectl apply -f posts-depl.yaml``` Or, ```kubectl apply -f posts-depl.yaml --validate=false```.

# How to Communicate between services and Updating Service Addresses:

  * After adding metadata name removing go to event-bus folder localhost run ```docker build -t islamh/event-bus .```.

  * ```docker push islamh/event-bus```.
  * Now go to posts folder and run ```docker build -t islamh/posts .```.

  * ```docker push islamh/posts```.
  * ```kubectl get deployments```.
  * ```kubectl rollout restart deployment posts-depl```.
  * ```kubectl rollout restart deployment event-bus-depl```
  * ```kubectl get pods```.
  
# Verifying Communication:

  * Work on Postman API and in localhost add kubernetes ports e.g. 30700 (http://localhost:30700/posts) and run ```kubectl get services```.
  * ```kubectl get pods```.
  * ```kubectl logs posts-depl-549fd655b7-fvj62```.
  
# Adding Query, Moderation and Comments:

  * <b>STEPS</b>: Adding More Services: 
     * For 'comments', 'query', 'moderation'...
     * Update the URL's in each to reach out to the 'event-bus-srv'.
     * Build images + push them to docker hub.
     * Create a deployment + clusterrip service for each.
     * Update the event-bus to once again send events to 'comments', 'query', and 'moderation'...

  * Make all localhost into event-bus-srv.
  * Go to cd comments and run ```docker build -t islamh/comments .```.
  * Push the docker ```docker push islamh/comments```.

  * Go to moderation folder and run ```docker build -t islamh/moderation .```.
  * Do push ```docker push islamh/moderation```.

  Go to query folder and run ```docker build -t islamh/query .```. 
  * Do push ```docker push islamh/query```.

  * After creating moderation, comments, query file in k8s folder and then run ```kubectl apply -f .``` or ```kubectl apply -f . --validate=false```.

  * Next run ```kubectl get pods```.
  * Next run ```kubectl describe pods query-depl-7c5f94ff5f-nh8sd```.
  * Run ```kubectl get services```.

# Testing Communication:

  * Change localhost into kubenetes all services name as portwise. 

  * Run ```docker build -t islamh/event-bus .```.

  * Push it into docker ```docker push islamh/event-bus```.

  * Run ```kubectl rollout restart deployment```.
  * Run ```kubectl get deployments```.
  * Run ```kubectl rollout restart deployment event-bus-depl```.
  * Run ```kubectl get pods```.

  * To test your APi in Postman run this command ```kubectl get services``` to get port number and put it with localhost 

  * Run ```kubectl get pods``` and then run ```kubectl logs comments-depl-6df57bb86f-g2t8t``` or, ```kubectl logs event-bus-depl-75d6f76857-b5jm9``` or, ```kubectl logs moderation-depl-5465db6599-nxrpv```.
# Load Balancer Services and Load Balancers and Ingress:

  * Load Balancer Service : Tells Kubernetes to reach out to its provider and provision a load balancer. Gets traffic in to a single pod.

  * Ingree or Ingress Controller : A pod with a set of routing rules to distribute traffic to other services.
  * Our cluster has cloud provider (AWS, GC, Azure) and provision it with Load Balancer services.

# Important - DO NOT SKIP - Ingress Nginx Installation Info:
  
  * Installing Ingress Nginx. In the video, it is shown that there is a required mandatory command that needed to be run for all providers. This has since been removed, so, the provider-specific commands (Docker Desktop, Minikube, etc) are all that is required. Many students are incorrectly installing the wrong library and are meeting errors and issues. Please triple-check that you are installing Ingress Nginx and not Nginx Ingress, which is a totally different and incompatible library.

  * Note - Windows students should be using Docker Desktop with WSL2 and not Minikube. The Minikube instructions provided below are intended for Linux users only.

 * Installation - Docker Desktop (macOS and Windows WSL2)

[Link](https://kubernetes.github.io/ingress-nginx/deploy/#quick-start)

  * Installation - Minikube (Linux)

[Link](https://kubernetes.github.io/ingress-nginx/deploy/#minikube)

# Ingress v1 API Required Update:

  * When running kubectl apply in the upcoming lecture, you may encounter a warning or error about the v1beta1 API version that is being used.

  * The v1 Ingress API is now required as of Kubernetes v1.22 and the v1beta1 will no longer work.

  * Only a few very minor changes are needed:

[Link](https://kubernetes.io/docs/concepts/services-networking/ingress/)

  * Notably, a pathType needs to be added, and how we specify the backend service name and port has changed:

```
      apiVersion: networking.k8s.io/v1
      kind: Ingress
      metadata:
        name: ingress-srv
        annotations:
          kubernetes.io/ingress.class: nginx
      spec:
        rules:
          - host: posts.com
            http:
              paths:
                - path: /posts
                  pathType: Prefix
                  backend:
                    service:
                      name: posts-clusterip-srv
                      port:
                        number: 4000
```
  * The zip resources attached to each lecture will contain the updated v1 API Ingress code if you need it.

# Installing Ingress-Nginx:

  * Go to NGINX Ingress Controller in google browser.
  
  [Link](https://kubernetes.github.io/ingress-nginx/deploy/)

  [Link](https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.3.0/deploy/static/provider/cloud/deploy.yaml)

  [Link](https://kubernetes.io/docs/concepts/services-networking/ingress/)


# Writing Ingress Config Files:

  * Create ingress-srv.yaml file into k8s folder.

  * Go to k8s directory and run ls.
  * Then run, ```kubectl apply -f ingress-srv.yaml```.


# Important Note About Port 80:


  * Editing our hosts file so that we can access posts.com/posts in our browser. If you are unable to access the application you may have something already running on port 80, which is the default port for the ingress. Before doing anything, please make sure you have properly installed the ingress-nginx controller for your particular Kubernetes client.

  * Once you have confirmed that you have indeed installed/enabled the ingress-nginx controller, you'll need to identify if something is running on port 80 and shut it down. Some students have even had applications from other courses or personal projects still running. For Windows Pro users, both SQL Server Reporting Services (MSSQLSERVER) and the World Wide Web Publishing Service / IIS Server have been the most common services causing a conflict.

  * To determine what might be using this port, in your terminal run:

 * Windows
 * Using Powershell with elevated permissions:
```
    netstat -anb
```

 * Scroll to the top of the returned output and find the listing for port 80. If Docker is properly listening on port 80 you should see:

  * TCP   0.0.0.0:80   0.0.0.0:0   LISTENING [com.docker.backend.exe]

 * If something else is listed for TCP 0.0.0.0:80, you'll need to shut that service down.

  * macOS
  ```  
    sudo lsof -i tcp:80
  ```

  * If Docker is properly listening on port 80 you should see something very similar:

```
    COMMAND    PID USER   FD   TYPE             DEVICE SIZE/OFF NODE NAME

    com.docker 8263 user  113u  IPv6 0xa20e89998489120d      0t0  TCP *:http (LISTEN)

```

* If something else is listed for TCP *:http, you'll need to shut that service down.



* Note - Minikube users on Windows and macOS should also make sure that they aren't using the docker driver which is not compatible with an ingress as noted here: [Link](https://www.udemy.com/course/microservices-with-node-js-and-react/learn/lecture/23145358#questions)


# Hosts File Tweak:

  * Run ```code etc/hosts``` into k8s folder.

  * Put this into hosts file :

  ```
     # localhost is used to configure the loopback interface.
      # when the system is booting. Do not change this entry.
      ## 
      127.0.0.1 localhost
      255.255.255.255 broadcast
      ::1             localhost
      # Added by Docker Desktop
      # To allow the same kube context to work on the host and the container:
      127.0.0.1 kubernetes.docker.internal
      # End of section

      127.0.0.1 posts.com

```

* Go to browser http://posts.com/posts

# Important Note to Add Environment Variable:

 * The next video is going to show the deployment of the React app to our Kubernetes cluster.  The React app will be running in a Docker container.

  * Unfortunately, create-react-app currently has two bugs that prevent it from running correctly in a docker container:

[Link](https://github.com/facebook/create-react-app/issues/8688)

[Link](https://github.com/facebook/create-react-app/issues/11779)

  * To solve this, we have to add two environment variables to the Dockerfile in the client folder.  Find the Dockerfile in the client folder and make the following change:

```
  FROM node:16-alpine
 
    # Add the following lines
      ENV CI=true
      ENV WDS_SOCKET_PORT=0
      
      WORKDIR /app
      COPY package.json ./
      RUN npm install
      COPY ./ ./
      
      CMD ["npm", "start"]
```

Then save the file.  That's it!  Continue on to the next step.


# Deploying the React App:

  * Run ```code etc/hosts``` into k8s folder.

  * Go to client directory via terminal and run ```docker build -t islamh/client .```

  * Then run ```docker push fislam/client``` or, ```docker push islamh/client```
  * Then run ```kubectl apply -f client-depl.yaml``` Or, ```kubectl apply -f client-depl.yaml --validate=false```.


# Unique Route Paths:

 * Now we will setup all the routing rules for the all the micro services inside our cluster.

 * Go to client directory run ```docker build -t islamh/client .```
 * Then run ```docker push islamh/client```
 * To restart the cluster run ```kubectl rollout restart deployment client-depl```
 
 * Go to posts directory via terminal and run ```docker build -t islamh/posts .```
 * Then run ```docker push islamh/posts```
 * The  run ```kubectl rollout restart deployment posts-depl```

# Final Route Config:

  * Go to k8s directory via terminal and run ```kubectl apply -f ingress-srv.yaml```  or, ```kubectl apply -f ingress-srv.yaml --validate=false```


  * Run ```kubectl get pods``` you can see which pods are running in the kubernetes.
  * 

# Introduction Skaffold:

  * Automates many tasks in a kubernetes dev environment.

  * Makes it really easy to update code in a running pod.

  * Makes it really easy to create/delete all objects tied to a project at once.
  * skaffold.dev
  * https://skaffold.dev/
  * Install skaffold into your local system.
  * Go to blog directory via terminal and run ```skaffold```.
  * Create a ```skaffold.yaml``` file and use your configuration.

# Skaffold Setup:

  * Go to blog directory via terminal and run ```skaffold dev```.

# A Few notes on Skaffold:

  * Go to blog directory via terminal and run ```skaffold dev```.

  * Then run ```kubectl get deployments```
  * Then run ```kubectl get services``` .
  * Then run ```skaffold dev```.

  * [Notes]: If you find this error : 
  
  ```
    build [islamh/client] failed: Got permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock: Get "http://%2Fvar%2Frun%2Fdocker.sock/v1.24/version": dial unix /var/run/docker.sock: connect: permission denied
  ```

   * Then run ```sudo chmod 666 /var/run/docker.sock``` will help you to solve the problem.





