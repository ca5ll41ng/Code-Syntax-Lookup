---
id: "js-en-syntax-web-javascript-reference-statements"
language: "js"
lang: "en"
category: "syntax"
name: "Statements and declarations"
title: "Statements and declarations"
directive: "landing-page"
module: "reference\\statements\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Statements"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Statements and declarations

JavaScript code is built from statements and declarations, which can contain expressions. This reference groups the constructs used to control execution and declare bindings. A statement can span multiple lines, and a line can contain multiple statements.

## Statements and declarations by category

For an alphabetical listing see the sidebar on the left.

### Control flow

- `Statements/return`
  - : Specifies the value to be returned by a function.
- `Statements/break`
  - : Terminates the current loop, switch, or label statement and transfers program control to the statement following the terminated statement.
- `Statements/continue`
  - : Terminates execution of the statements in the current iteration of the current or labeled loop, and continues execution of the loop with the next iteration.
- `Statements/throw`
  - : Throws a user-defined exception.
- `Statements/if...else`
  - : Executes a statement if a specified condition is true. If the condition is false, another statement can be executed.
- `Statements/switch`
  - : Evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case.
- `Statements/try...catch`
  - : Marks a block of statements to try, and specifies a response, should an exception be thrown.

### Declaring variables

- `Statements/var`
  - : Declares a variable, optionally initializing it to a value.
- `Statements/let`
  - : Declares a block-scoped variable, optionally initializing it to a value.
- `Statements/const`
  - : Declares a block-scoped variable that cannot be re-assigned, which must be initialized at declaration.
- `Statements/using`
  - : Declares a variable like `const` that is _synchronously disposed_.
- `Statements/await_using`
  - : Declares a variable like `const` that is _asynchronously disposed_.

### Functions and classes

- `Statements/function`
  - : Declares a function with the specified parameters.
- `Statements/function*`
  - : Generator Functions enable writing [iterators](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) more easily.
- `Statements/async_function`
  - : Declares an async function with the specified parameters.
- `Statements/async_function*`
  - : Asynchronous Generator Functions enable writing async [iterators](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) more easily.
- `Statements/class`
  - : Declares a class.

### Iterations

- `Statements/do...while`
  - : Creates a loop that executes a specified statement until the test condition evaluates to false. The condition is evaluated after executing the statement, resulting in the specified statement executing at least once.
- `Statements/for`
  - : Creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement executed in the loop.
- `Statements/for...in`
  - : Iterates over the enumerable properties of an object, in arbitrary order. For each distinct property, statements can be executed.
- `Statements/for...of`
  - : Iterates over iterable objects (including `Array`, array-like objects, [iterators and generators](/en-US/docs/Web/JavaScript/Guide/Iterators_and_generators)), invoking a custom iteration hook with statements to be executed for the value of each distinct property.
- `Statements/for-await...of`
  - : Iterates over async iterable objects, array-like objects, [iterators and generators](/en-US/docs/Web/JavaScript/Guide/Iterators_and_generators), invoking a custom iteration hook with statements to be executed for the value of each distinct property.
- `Statements/while`
  - : Creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated before executing the statement.

### Others

- `Statements/Empty`
  - : An empty statement is used to provide no statement, although the JavaScript syntax would expect one.
- `Statements/block`
  - : A block statement is used to group zero or more statements. The block is delimited by a pair of curly braces.
- `Statements/Expression_statement`
  - : An expression statement evaluates an expression and discards its result. It allows the expression to perform side effects, such as executing a function or updating a variable.
- `Statements/debugger`
  - : Invokes any available debugging functionality. If no debugging functionality is available, this statement has no effect.
- `Statements/export`
  - : Used to export functions to make them available for imports in external modules, and other scripts.
- `Statements/import`
  - : Used to import functions exported from an external module, another script.
- `Statements/import/defer`
  - : Loads a module as a namespace, deferring synchronous evaluation until the returned namespace's properties are accessed.
- `Statements/import/source`
  - : Results in an object representing the module's compiled source, without loading its dependencies, linking it, or evaluating it.
- `Statements/label`
  - : Provides a statement with an identifier that you can refer to using a `break` or `continue` statement.
- `Statements/with` 
  - : Extends the scope chain for a statement.

## What are statements, declarations, and expressions?

All JavaScript programs are composed of a sequence of top-level constructs, using one of the syntaxes listed above. These are known as [_statements_](https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#prod-Statement) and [_declarations_](https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#prod-Declaration). In MDN docs, we often colloquially refer to both as _statements_, but they are technically two disjoint sets of grammars.

The following are declarations:

- `Statements/let`
- `Statements/const`
- `Statements/using`
- `Statements/await_using`
- `Statements/function`
- `Statements/function*`
- `Statements/async_function`
- `Statements/async_function*`
- `Statements/class`
- `Statements/export` (Note: it can only appear at the top-level of a [module](/en-US/docs/Web/JavaScript/Guide/Modules))
- `Statements/import` (Note: it can only appear at the top-level of a [module](/en-US/docs/Web/JavaScript/Guide/Modules))

Everything else in the [list above](#statements_and_declarations_by_category) is a statement.

The terms "statement" and "declaration" have a precise meaning in the formal syntax of JavaScript that affects where they may be placed in code. For example, in most control-flow structures, the body only accepts statements — such as the two arms of an [`if...else`](/en-US/docs/Web/JavaScript/Reference/Statements/if...else):

```js-nolint
if (condition)
  statement1;
else
  statement2;
```

If you use a declaration instead of a statement, it would be a `SyntaxError`. For example, a [`let`](/en-US/docs/Web/JavaScript/Reference/Statements/let) declaration is not a statement, so you can't use it in its bare form as the body of an `if` statement.

```js-nolint example-bad
if (condition)
  let i = 0; // SyntaxError: Lexical declaration cannot appear in a single-statement context
```

On the other hand, [`var`](/en-US/docs/Web/JavaScript/Reference/Statements/var) is a statement, so you can use it on its own as the `if` body.

```js-nolint example-good
if (condition)
  var i = 0;
```

You can see declarations as ""binding" identifiers to values", and statements as "carrying out actions". The fact that `var` is a statement instead of a declaration is a special case, because it doesn't follow normal lexical scoping rules and may create side effects — in the form of creating global variables, mutating existing `var`-defined variables, and defining variables that are visible outside of its block (because `var`-defined variables aren't block-scoped).

As another example, [labels](/en-US/docs/Web/JavaScript/Reference/Statements/label) can only be attached to statements.

```js-nolint example-bad
label: const a = 1; // SyntaxError: Lexical declaration cannot appear in a single-statement context
```

> [!NOTE]
> There's a legacy grammar that allows [function declarations to have labels](/en-US/docs/Web/JavaScript/Reference/Statements/label#labeled_function_declarations), but it's only standardized for compatibility with web reality.

To get around this, you can wrap the declaration in braces — this makes it part of a [block statement](/en-US/docs/Web/JavaScript/Reference/Statements/block).

```js example-good
label: {
  const a = 1;
}

if (condition) {
  let i = 0;
}
```

In JavaScript, statements and declarations produce values, but these values are almost never observable (other than `Global_Objects/eval`). Their purpose is to manipulate the surrounding environment and produce side effects—creating variable bindings, outputting things, modifying variable values, etc. The values they use come from evaluating [_expressions_](https://tc39.es/ecma262/multipage/ecmascript-language-expressions.html#prod-Expression).

Expressions are not top-level constructs; they can only be used in specific slots inside statements and declarations, such as `if (expression)`, `const x = expression`, etc. The [expression statement](/en-US/docs/Web/JavaScript/Reference/Statements/Expression_statement) syntax allows most expressions to be used as statements, but that's just a statement with a single expression slot.

You can map out JavaScript syntax structures using just statements, declarations, and expressions:

- Statements can contain statements, declarations, and expressions (like `if (expression) statement` and block statements `{ statement; declaration }`)
- Declarations can contain statements, declarations, and expressions (like `function x() { statement; declaration }` and `const x = expression`)
- Expressions can contain statements, declarations, and expressions (like `() => { statement; declaration }` and `console.log(expression)`)

In the reference documentation for each piece of syntax, we describe all its "slots" and say whether each slot is a statement, declaration, or expression.

_Operators_ is another important concept in JavaScript grammar, but they do not work like building blocks. See [What are operators?](/en-US/docs/Web/JavaScript/Reference/Operators#what_are_operators) for more information.

## Browser compatibility

## See also

- [Expressions and operators](/en-US/docs/Web/JavaScript/Reference/Operators)
