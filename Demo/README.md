# Demo

> Demo

## getting start

```bash
npm install
```

## file structure

* `src/*`: all source code
* `entry.js`: entrance of the Weex page
* `build/*`: some build scripts
* `dist/*`: where places generated code
* `assets/*`: some assets for Web preview
* `index.html`: a page with Web preview and qrcode of Weex js bundle
* `weex.html`: Web render
* `.babelrc`: babel config (preset-2015 by default)
* `.eslintrc`: eslint config (standard by default)

## npm scripts

```bash
# build both two js bundles for Weex and Web
npm run build

#
npm install

# build the two js bundles and watch file changes
npm run dev

# start a Web server at 8081 port
npm run serve

# start weex-devtool for debugging with native
npm run debug
```

## notes

You can config more babel, ESLint and PostCSS plugins in `webpack.config.js`.

## result
 ![image](https://github.com/IAMA-J/learning-weex/edit/master/Demo/src/img/a.png)
  ![image](https://github.com/IAMA-J/learning-weex/edit/master/Demo/src/img/b.png)
   ![image](https://github.com/IAMA-J/learning-weex/edit/master/Demo/src/img/c.png)
