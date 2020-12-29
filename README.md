# Christmas-wishlist-client

Part of the NodeJS coding challenge at [Glitch Santa App](https://glitch.com/~nodejs-santa-app)
Anyone can attempt this challenge by remixing their own using the link above and following the instructions. 

Even though it is a very small application, I learned a lot about how to use MaterialUI and wouldn't mind trying to use it for some biggger projects in the future.

## 

## Scripts
Running the application:
    
    npm start

Linting

    npm run lint

The rest of the scripts that can be run is used with E2E testing.

## E2E Tests

**End to End tests** has been written with the [Cypress Framework](https://www.cypress.io/). I highly recommend other developers who are interested in testing to give Cypress a try
as it is easy very easy to use and understand. The documentation is also great making it easy it getting started writing end to end tests.

Note that **BOTH the client and server has to be running in order for the tests to work**. Without the server side running the http requests will fail, and without the client running the tests
will not be running at all.

### Commands
Runs Cypress using the graphical test runner
    
    npm run cypress:open
    
Run from the Command line
    
    npm run test:e2e

Videos of the tests being executed will be saved to the directory cypress/videos.
