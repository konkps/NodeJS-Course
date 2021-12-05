# NodeJS-Course 1-node-farm

### Summary

This is a project to serve html pages and dynamic html templates.

There are examples on `http`, `url`, `fs` js libraries, and `slugify` , `nodemon` 3rd party libraries

---
### NPM basic commands
`npm -v`

`npm i` or `npm install -production`

`npm install --save-dev nodemon`

`npm install -g nodemon`

`npm uninstall <package_name>`

`npm outdated` shows a list of packages can be updated that is based on dependencies on package.json

| Parameter | Description                   |           |
| :-------- | :--------------               | :-------- |
| {"slugify": "^1.6.3"},  |     example     |           |
| ` * `     | we want latest majorVersion   |           | 
| ` ^ `     | we want latest minorVersion   |  default  |    
| `` ` ``   | we want latest patch          |  safest   |
 
`npm update <package_name>`

 ---
### VS Code setting up

**Prettier - Code formatter**

settings --> search format  --> default formatter then alt+shift+F  or tick Format on Save

use `.prettierrc` file for common configuration when working with a team

other plugins ESLint, TODO Highlight