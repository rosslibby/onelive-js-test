# onelive-test

This is a simple test to make sure you are familiar with the following:
  - [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  - [NodeJS](https://nodejs.org/en/)
  - [REST](https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm)
  - [Git](https://git-scm.com/)

## Instructions
Requirements:
  - [NodeJS](https://nodejs.org/en/)
  - NPM (should install with Node)
  
**Getting started**
  1. Clone the repo
  2. Checkout the `develop` branch
  3. Install node dependencies
  4. Add the provided `env.txt` file to your project root, **and rename it to `.env`**. Not `env.env`, just `.env` with nothing before the dot
  5. Complete the **task** (described below)
  6. Commmit your changes to the `develop` branch with a meaningful commit message

**Task**

Build an application in the `app.js` file that does the following:
  - Sends a `GET` request to the provided endpoint (refer to documentation below)
  - If the request is successful (HTTP code `200`), output the customer's email address to the console
  - If the request is not successful, output an error message to the console

**dependencies**

`rest` : [documentation](https://www.npmjs.com/package/rest) *use this to make your `GET` request*

`dotenv` : [documentation](https://www.npmjs.com/package/dotenv)
