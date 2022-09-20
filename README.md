Hey!

Thanks for your interest in joining Hack4Impact BU! We require prospective Impact team members to complete this coding challenge for two reasons: 1) So they have a basic understanding of some possible obstacles they will face when working on one of our partner’s projects and 2) to see if the Impact Team is currently the right place for you.

As much as this is an examination to join the Impact Team, this in turn assesses your current abilities as well. If you find this challenge a bit too difficult or you would like to have more exposure to these technologies & those similar feel free to contact us at bostonuniversity@hack4impact.org and express interest in joining the Junior Development Team.

Without further ado, please complete the following (note, appropriate places for these actions items to be completed will be denoted with comments in the code):

1. Preliminary:

- create your own git repository
- fork this repository and connect to your remote repo

2. In the backend directory:

- In your terminal run 'npm init -y; npm install nodemon -g; npm install cors mongoose express'

  NOTE: after this, you can run 'npx nodemon server' in the terminal to run the server when you please. nodemon allows us to run the server and concurrently update it when we save our 'backend' directory files.

- Initialize the Express app

- Create a database on MongoDB & connect it to your application

- Create a ‘task’ schema (‘taskSchema’) with a 'String' data type & make it required.

- Create PUT (update operation) & DELETE (delete operation) request routes

3. In the frontend directory:

- In your terminal run 'npm i axios'

- Create the update (PUT request) & delete (DELETE request) functions in services/taskServices.ts

- Create update (PUT request) & delete (DELETE request) operations (using the previous 2 functions)

- Create ‘CreateTask’ component (this should make a POST request, hence using the create operation already implemented in services/taskServices.ts)

Please, provide us access (hack4impact-bu) when you are finished in order to review your repository. Feel free to change the design if you’d like or host it if you'd like (bonus points!). We look forward to your submission!
