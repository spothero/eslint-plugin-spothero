# @spothero/eslint-plugin-spothero
Custom ESLint rules written by and in use at SpotHero.

## Installation
You'll first need to install [ESLint](http://eslint.org):

```
$ npm install eslint --save-dev
```

Next, install `@spothero/eslint-plugin-spothero`:

```
$ npm install @spothero/eslint-plugin-spothero --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `@spothero/eslint-plugin-spothero` globally.

## Usage
Add `@spothero/eslint-plugin-spothero` to the plugins section of your `.eslintrc` configuration file:

```json
{
    "plugins": [
        "@spothero/eslint-plugin-spothero"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "@spothero/spothero/rule-name": 2
    }
}
```

## Supported Rules
* [@spothero/spothero/ternary-parentheses](docs/rules/ternary-parentheses.md): Require ternary expressions to have condition enclosed by parentheses




