/**
 * @fileoverview Enforce parentheses around condition of ternary expressions
 */

'use strict';

const astUtils = require('eslint/lib/util/ast-utils');

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: 'layout',

        docs: {
            description: 'Enforce parentheses around condition of ternary expressions',
            category: 'Stylistic Issues',
            recommended: false,
            url: 'https://github.com/spothero/eslint-plugin-spothero'
        },

        schema: []
    },

    create(context) {
        const sourceCode = context.getSourceCode();

        //--------------------------------------------------------------------------
        // Helpers
        //--------------------------------------------------------------------------

        /**
         * Tests whether node is preceded by supplied tokens
         * @param {ASTNode} node - node to check
         * @returns {void}
         * @private
         */
        function reportError(node) {
            context.report({
                node,
                message: 'Expected parentheses around condition of ternary expression.'
            });
        }

        //--------------------------------------------------------------------------
        // Public
        //--------------------------------------------------------------------------

        return {
            ConditionalExpression(node) {
                const isParenthesized = astUtils.isParenthesised(sourceCode, node.test);

                if (!isParenthesized) {
                    reportError(node.test);
                }
            }
        };
    }
};
