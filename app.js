/*
 * The following code is documented
 * line-by-line so that you know
 * exactly what is going on
 *
 * Terminology:
 * 'node module': a generic plugin
 * that somebody else wrote that
 * can be used in pretty much any
 * project
 *
 * 'dependency': something that is
 * required in order to run the
 * app properly
 *
 * 'REST': REpresentation State
 * Transfer. It is basically how
 * the internet works: if you
 * type 'http://google.com' in
 * the address bar, your web
 * browser sends a GET request
 * to 'http://google.com', and
 * in response, Google's server
 * grants the request by sending
 * back a web page
 */

require('dotenv').config()  // imports the node module 'dotenv'
                            // This particular module lets this app
                            // read the data from the '.env' file
                            // that you added to the project root.
                            // The .env is used to store data that
                            // you do not want to share with anyone
                            // else, including other developers

let rest = require('rest')  // imports the node module 'rest', which
                            // contains methods for making RESTful
                            // API calls such as GET, POST, PUT

let endpoint = process.env.ENDPOINT // finds the variable 'ENDPOINT'
                                    // in the '.env' file and sets it
                                    // as the variable 'endpoint', so
                                    // any time you see 'endpoint' in
                                    // this app, it is referring to
                                    // the data it got from the .env
                                    // file. The code 'process.env.'
                                    // runs only because of the
                                    // included node module 'dotenv',
                                    // imported above

// your code here
rest(endpoint).then((res) => {  // This code comes straight from the
                                // 'rest' documentation, which I
                                // linked to. The `rest()` function,
                                // from the 'rest' node module, sends
                                // a GET request to whatever is inside
                                // of the parentheses, in this case
                                // to the endpoint specified in '.env'.
                                // 'then()' tells the app what to do
                                // after receiving a response from the
                                // server, and in this case, the app
                                // must perform a function.
                                // () => {} is an empty function
                                // definition, and the 'res' inside of
                                // it is an arbitrary word that passes
                                // in the response from the server

    if (res.status.code === 200) {  // This if statement is checking to
                                    // see if the status code (that is
                                    // always returned in an HTTP request)
                                    // is 200. I used `===` instead of `==`
                                    // because `===` checks type as well as
                                    // value, whereas `==` checks only value,

        let entity = JSON.parse(res.entity)[0]  // This line simply takes the string
                                                // that contains the data we want, and
                                                // converts it to a JSON object so that
                                                // we can navigate it more easily. It
                                                // then takes that object and accesses
                                                // the first element of it, hence the [0]

        let email = JSON.parse(entity).customer.email   // This line parses the string we
                                                        // just abstracted from the outer
                                                        // object and then accesses its
                                                        // 'customer' property, after which
                                                        // it accesses the 'email' property
                                                        // and sets it to its own variable

        console.log(email)  // This line outputs the email
                            // to the console
    }
    else    // This line deals with any status code that was not 200
        console.log('Could not connect to the API :(')  // This line outputs an error message
}) // This is the end