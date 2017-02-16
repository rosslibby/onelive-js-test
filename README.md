# onelive-test

This is a simple test to make sure you are familiar with the following:
  - <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">Javascript</a>
  - <a href="https://nodejs.org/en/" target="_blank">NodeJS</a>
  - <a href="https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm" target="_blank">REST</a>
  - <a href="https://git-scm.com/" target="_blank">Git</a>

## Instructions
**Requirements:**
  - <a href="https://nodejs.org/en/" target="_blank">NodeJS</a>
  - NPM (should install with Node)
  - Git
  
**Getting started**
  1. Clone the repo
  2. Checkout the `develop` branch
  3. Install node dependencies
  4. Add the provided `env.txt` file to your project root, **and rename it to `.env`**. Not `env.env`, not `.env.txt`, just `.env` with nothing before the dot
  5. Complete the **task** (described below)
  6. Commmit your changes to the `develop` branch with a meaningful commit message
  7. Push your changes to the `develop` branch

**Task**

Build an application in the `app.js` file that does the following:
  - Sends a `GET` request to the provided endpoint (refer to documentation below)
  - If the request is successful (HTTP code `200`), output the customer's email address to the console
  - If the request is not successful, output an error message to the console

**dependencies**

`rest` : <a href="https://www.npmjs.com/package/rest" target="_blank">documentation</a> [*use this to make your `GET` request*]

`dotenv` : <a href="https://www.npmjs.com/package/dotenv" target="_blank">documentation</a>
