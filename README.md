# Retro Game Front End Project



## Get Started

You will be invited to the project first. Then, you have to setup ssh for this project

Prerequisites:

- Node 18+
- Yarn 1.22+
- Setup ssh 

To set up the app execute the following commands.

```bash
git clone git@github.com:voyager-inc/retro_game.git
cd retro_game
cp .env.example .env
yarn install
```

##### `yarn dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

##### `yarn build`

Builds the app for production to the `.next` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

##### `yarn start`

Runs the app in the production mode.\
Require `yarn build` before

## 🗄️ Project Structure

The code in the root folder looks like this:

```sh
src
|
+-- husky             # You can catch hooks when you commit or push, see more at https://typicode.github.io/husky/#/
|
+-- .next             # build folder of NextJS, see more at https://nextjs.org/docs/app/building-your-application/deploying
|
+-- .vscode           # vscode editor configuration
|
+-- public            # folder contains static file which is not used by your app when it compiles
|
+-- src               # main source code
```

Most of the code lives in the `src` folder and looks like this:

```sh
src
|
+-- apis              # all of the application APIs and their routes
|
+-- assets            # assets folder can contain all the static files such as images, fonts, etc.
|
+-- components        # shared components used across the entire application
|
+-- constants         # shared constants used across the entire application
|
+-- hooks             # shared hooks used across the entire application
|
+-- lib               # re-exporting different libraries preconfigured for the application
|
+-- app               # routes defined by NextJS
|
+-- stores            # global state stores with Redux
|
+-- types             # base types used across the application
|
+-- utils             # shared utility functions
```

## Rule

Should review code before merging
### For new feature

Create a new branch from the `develop` branch, branch name follows patterns "feature/taskno + task name".
Ex: feature/PRO-10 Login

#### Push code

Feature branch should sync code from `develop` branch before push


#### Create Pull Request

Create PR from feature branch merge to `develop` branch

### For fixing bug task

Should confirm where should branch checkout from. Branch name follows patterns "fix/taskno + task name".
Ex: fix/PRO-10 Login


### For hot fix task

Should confirm where should branch checkout from. Branch name follows patterns "hotfix/taskno + task name".
Ex: hotfix/PRO-10 Login