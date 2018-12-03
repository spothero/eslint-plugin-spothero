/**
 * @fileoverview Tests for ternary-parentheses rule.
 */

'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require('../../../lib/rules/ternary-parentheses');
const RuleTester = require('eslint/lib/testers/rule-tester');

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const ruleTester = new RuleTester({
    parserOptions: {
        ecmaVersion: 9
    }
});

ruleTester.run('ternary-parentheses', rule, {
    valid: [
        'const o = (a) ? b : c;',
        'const o = (a)\n ? b\n : c;',
        'const o = (a && z) ? b : c;',
        'const o = (a && z)\n ? b\n : c;',
        'const o = (a\n && z)\n ? b\n : c;',
        'const o = (a && y || z) ? b : c;',
        'const o = (a && (y || z))\n ? b\n : c;'
    ],
    invalid: [
        {
            code: 'const o = a ? b : c;',
            errors: [{message: 'Expected parentheses around condition of ternary expression.'}]
        },
        {
            code: 'const o = a\n ? b\n : c;',
            errors: [{message: 'Expected parentheses around condition of ternary expression.'}]
        }
    ]
});
