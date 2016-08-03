# Stencil for [λ](https://aws.amazon.com/lambda/)

A horribly simple starter template for all your serverless development on [AWS lambda](https://aws.amazon.com/lambda/) w/ [Apex](http://www.apex.run), [TypeScript](http://www.typescriptlang.org/) & [Webpack](https://webpack.github.io/).

## Prerequisite

- [NodeJS](https://nodejs.org/en/download/current/) (at least 4.3) recommend 5.x or 6.x
- [Apex.run](http://www.apex.run)
- [Amazon Web Services account](https://aws.amazon.com/)

## How it works

### Deployment

Most of the time you will be interfacing with Apex command line utility from the build process, deployment

```
$> apex deploy
$> apex build
```
### Webpack build

The way Apex run is bit different than your usual NodeJS project.
Apex runs Webpack build command inside each `functions/` folder thus if you have the following directory structure
then Webpack gets invoked for `account/index.ts` and `users/index.ts`

```
    functions/
        L account/
            index.ts
            another-file.ts
        L users/
            index.ts
            users-lib.ts
        ...
```

### Webpack configuration

The current webpack config file is minimal and pretty much everything inside is easy to understand however there's one
entry that is tightly coupled with Apex:

`webpack.config.js`
```
var distDir = './package';

output: {
    path: distDir
}
...
```

`project.json`
```
{
    "handler": "package.default"
}
```

The `package` output path from Webpack maps to the `handler` property in Apex.

## License

MIT
