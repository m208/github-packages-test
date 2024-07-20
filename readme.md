Example of sharing codebase with private npm packages using GitHub

Sources:

https://docs.github.com/en/packages/quickstart

https://brianmorrison.me/blog/private-npm-packages-with-github-actions-packages/

https://medium.com/nplan/how-we-host-a-react-component-library-on-github-packages-167f0cb1cb9c

GitHub API key is required to install the package

It can be stored at .npmrc file

```
@YOUR_USERNAME:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=YOUR_TOKEN
```

Or with CLI command Login to a registry user account

```
npm login --registry=https://npm.pkg.github.com
```
