This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify




# A React and MongoDB starter kit for neuefische students

## Installation
1. Clone this repo and rename the folder
1. `rm -rf .git && git init` to start a fresh git repo
1. Replace all placeholder code in `package.json`
1. Check dependencies in `package.json` and remove everything you don't need
1. Run `npm install`
1. Change `DB_URL` setting in `.env` to your needs
1. Create a new repository on github.
1. Add this repo as a remote to your local repo, e.g.: `git remote add origin git@github.com:<my-user>/<my-repo>.git`
1. Commit and push your changes `git push -u origin master` 

## Development
1. Start your MongoDB! `mongod`
1. In a separate terminal window run `npm start`
1. In case you need custom environment variables, create a file `.env.local`. See further instructions [here](https://facebook.github.io/create-react-app/docs/adding-custom-environment-variables)

## Get an overview
- The folders `src` and `public` contain the frontend code, the rest is backend
- Check available scripts in `package.json`
- Update `.prettierrc` to your needs
- Happy Hacking!

## Deployment (make your app visible to the world)
1. Create an account on [heroku](https://heroku.com)
1. Install [heroku cli tools](https://devcenter.heroku.com/articles/heroku-cli)
1. Verify the installation with `heroku -v`
1. Login to heroku with `heroku login`
1. Inside your local app folder run `heroku create`. Heroku will give you a web and git url for your app. A new remote named `heroku` has been added to your git repo 
1. Run `git push heroku master` inside your app folder to deploy your app on heroku.
1. Alternatively you can connect heroku with your github repository in the `deploy tab` of your app settings on heroku. You should enable automatic deployment on every update on your github master branch.
1. Open your app with `heroku open` inside your local app folder

### Connect a mongo db
1. Create an account on [mongodb atlas](https://www.mongodb.com/cloud/atlas)
1. Create a cluster with user and password
1. Whitelist all IPs in the security tab of your cluster
1. Add `DB_URL` and other env/config vars in your heroku app settings e.g.: `key: DB_URL` with `value: mongodb+srv://<username>:<password>@cluster0-ckdgx.mongodb.net/<your-cluster>?retryWrites=true`. You can find this under `connect` in your mongo cluster.
