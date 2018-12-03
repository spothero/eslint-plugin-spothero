# Require ternary expressions to have condition enclosed by parentheses (ternary-parentheses)

Require regex literals to escape division operators.

```js
var qux = (foo) ? bar : baz;
```

## Rule Details

This is used to emphasize the condition in the ternary expression for faster scanning of code.

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
