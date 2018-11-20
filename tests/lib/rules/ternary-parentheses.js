/**
 * @fileoverview Tests for complexity rule.
 * @author Boiar Qin
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/ternary-parentheses"),
    RuleTester = require("eslint/lib/testers/rule-tester");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();

ruleTester.run("ternary-parentheses", rule, {
    valid: [
        "var o = (a) ? b : c;",
        "var o = (a)\n ? b\n : c;",
        "var o = (a && z) ? b : c;",
        "var o = (a && z)\n ? b\n : c;",
        "var o = (a\n && z)\n ? b\n : c;",
        "var o = (a && y || z) ? b : c;",
        "var o = (a && (y || z))\n ? b\n : c;"
    ],
    invalid: [
        {
            code: "var o = a ? b : c;",
            errors: [{ message: "Expected parentheses around condition of ternary expression." }]
        },
        {
            code: "var o = a\n ? b\n : c;",
            errors: [{ message: "Expected parentheses around condition of ternary expression." }]
        }
    ]
});
