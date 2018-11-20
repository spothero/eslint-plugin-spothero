# eslint-plugin-spothero

SpotHero custom eslint plugin and rules

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
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
        "spothero/rule-name": 2
    }
}
```

## Supported Rules

* ternary-parentheses: Require Ternary Expressions to have condition enclosed by parentheses




