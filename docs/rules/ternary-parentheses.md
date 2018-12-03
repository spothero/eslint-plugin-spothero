# Require ternary expressions to have condition enclosed by parentheses (ternary-parentheses)

This addresses a stylistic issue. Surrounding the condition in parentheses promotes faster scanning of code and identification of the condition within a ternary expression.

```js
var qux = (foo) ? bar : baz;
```

## Rule Details

This rule enforces parenthese around the condition in a ternary expression.

Examples of **incorrect** code for this rule:

```js
/*eslint ternary-parentheses: "error"*/

var qux = foo ? bar : baz;

var qux = foo
    ? bar
    : baz;
```

Examples of **correct** code for this rule:

```js
/*eslint ternary-parentheses: "error"*/

var qux = (foo) ? bar : baz;

var qux = (foo && fred) ? bar : baz;

var qux = (foo)
    ? bar
    : baz;
```
