---
id: "js-en-syntax-web-javascript-reference-operators"
language: "js"
lang: "en"
category: "syntax"
name: "Expressions and operators"
title: "Expressions and operators"
directive: "landing-page"
module: "reference\\operators\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Operators"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Expressions and operators

This chapter documents all the JavaScript language operators, expressions and keywords.

## Expressions and operators by category

For an alphabetical listing see the sidebar on the left.

### Primary expressions

Basic keywords and general expressions in JavaScript. These expressions have the highest precedence (higher than [operators](/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence)).

- `this`
  - : The `this` keyword refers to a special property of an execution context.
- [Literals](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#literals)
  - : Basic `null`, boolean, number, and string literals.
- `Array`
  - : Array initializer/literal syntax.
- `Operators/Object_initializer`
  - : Object initializer/literal syntax.
- `Operators/function`
  - : The `function` keyword defines a function expression.
- `Operators/class`
  - : The `class` keyword defines a class expression.
- `Operators/function*`
  - : The `function*` keyword defines a generator function expression.
- `Operators/async_function`
  - : The `async function` defines an async function expression.
- `Operators/async_function*`
  - : The `async function*` keywords define an async generator function expression.
- `RegExp`
  - : Regular expression literal syntax.
- `Template_literals`
  - : Template literal syntax.
- `Operators/Grouping`
  - : Grouping operator.

### Left-hand-side expressions

Left values are the destination of an assignment.

- `Operators/Property_accessors`
  - : Member operators provide access to a property or method of an object (`object.property` and `object["property"]`).
- `Operators/Optional_chaining`
  - : The optional chaining operator returns `undefined` instead of causing an error if a reference is [nullish](/en-US/docs/Glossary/Nullish) ([`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null) or [`undefined`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)).
- `new`
  - : The `new` operator creates an instance of a constructor.
- `Operators/new.target`
  - : In constructors, `new.target` refers to the constructor that was invoked by `new`.
- `Operators/import.meta`
  - : An object exposing context-specific metadata to a JavaScript module.
- `Operators/super`
  - : The `super` keyword calls the parent constructor or allows accessing properties of the parent object.
- `Operators/import`
  - : The `import()` syntax allows loading a module asynchronously and dynamically into a potentially non-module environment.
- `Operators/import/defer`
  - : The `import.defer()` syntax loads a module dynamically, deferring synchronous evaluation until the returned namespace's properties are accessed.
- `Operators/import/source`
  - : The `import.source()` syntax results in an object representing the module's compiled source, without loading its dependencies, linking it, or evaluating it.

### Increment and decrement

Postfix/prefix increment and postfix/prefix decrement operators.

- `Operators/Increment`
  - : Postfix increment operator.
- `Operators/Decrement`
  - : Postfix decrement operator.
- `Operators/Increment`
  - : Prefix increment operator.
- `Operators/Decrement`
  - : Prefix decrement operator.

### Unary operators

A unary operation is an operation with only one operand.

- `delete`
  - : The `delete` operator deletes a property from an object.
- `Operators/void`
  - : The `void` operator evaluates an expression and discards its return value.
- `Operators/typeof`
  - : The `typeof` operator determines the type of a given object.
- `Operators/Unary_plus`
  - : The unary plus operator converts its operand to Number type.
- `Operators/Unary_negation`
  - : The unary negation operator converts its operand to Number type and then negates it.
- `Operators/Bitwise_NOT`
  - : Bitwise NOT operator.
- `Operators/Logical_NOT`
  - : Logical NOT operator.
- `Operators/await`
  - : Pause and resume an async function and wait for the promise's fulfillment/rejection.

### Arithmetic operators

Arithmetic operators take numerical values (either literals or variables) as their operands and return a single numerical value.

- `Operators/Exponentiation`
  - : Exponentiation operator.
- `Operators/Multiplication`
  - : Multiplication operator.
- `Operators/Division`
  - : Division operator.
- `Operators/Remainder`
  - : Remainder operator.
- `Operators/Addition` (Plus)
  - : Addition operator.
- `Operators/Subtraction`
  - : Subtraction operator.

### Relational operators

A comparison operator compares its operands and returns a boolean value based on whether the comparison is true.

- `Operators/Less_than` (Less than)
  - : Less than operator.
- `Operators/Greater_than` (Greater than)
  - : Greater than operator.
- `Operators/Less_than_or_equal`
  - : Less than or equal operator.
- `Operators/Greater_than_or_equal`
  - : Greater than or equal operator.
- `instanceof`
  - : The `instanceof` operator determines whether an object is an instance of another object.
- `Operators/in`
  - : The `in` operator determines whether an object has a given property.

> [!NOTE]
> `=>` is [not an operator](#what_are_operators), but the notation for [Arrow functions](/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

### Equality operators

The result of evaluating an equality operator is always of type boolean based on whether the comparison is true.

- `Operators/Equality`
  - : Equality operator.
- `Operators/Inequality`
  - : Inequality operator.
- `Operators/Strict_equality`
  - : Strict equality operator.
- `Operators/Strict_inequality`
  - : Strict inequality operator.

### Bitwise shift operators

Operations to shift all bits of the operand.

- `Operators/Left_shift`
  - : Bitwise left shift operator.
- `Operators/Right_shift`
  - : Bitwise right shift operator.
- `Operators/Unsigned_right_shift`
  - : Bitwise unsigned right shift operator.

### Binary bitwise operators

Bitwise operators treat their operands as a set of 32 bits (zeros and ones) and return standard JavaScript numerical values.

- `Operators/Bitwise_AND`
  - : Bitwise AND.
- `Operators/Bitwise_OR`
  - : Bitwise OR.
- `Operators/Bitwise_XOR`
  - : Bitwise XOR.

### Binary logical operators

Logical operators implement boolean (logical) values and have [short-circuiting](/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence#short-circuiting) behavior.

- `Operators/Logical_AND`
  - : Logical AND.
- `Operators/Logical_OR`
  - : Logical OR.
- `Operators/Nullish_coalescing`
  - : Nullish Coalescing Operator.

### Conditional (ternary) operator

- `Operators/Conditional_operator`
  - : The conditional operator returns one of two values based on the logical value of the condition.

### Assignment operators

An assignment operator assigns a value to its left operand based on the value of its right operand.

- `Operators/Assignment`
  - : Assignment operator.
- `Operators/Multiplication_assignment`
  - : Multiplication assignment.
- `Operators/Division_assignment`
  - : Division assignment.
- `Operators/Remainder_assignment`
  - : Remainder assignment.
- `Operators/Addition_assignment`
  - : Addition assignment.
- `Operators/Subtraction_assignment`
  - : Subtraction assignment
- `Operators/Left_shift_assignment`
  - : Left shift assignment.
- `Operators/Right_shift_assignment`
  - : Right shift assignment.
- `Operators/Unsigned_right_shift_assignment`
  - : Unsigned right shift assignment.
- `Operators/Bitwise_AND_assignment`
  - : Bitwise AND assignment.
- `Operators/Bitwise_XOR_assignment`
  - : Bitwise XOR assignment.
- `Operators/Bitwise_OR_assignment`
  - : Bitwise OR assignment.
- `Operators/Exponentiation_assignment`
  - : Exponentiation assignment.
- `Operators/Logical_AND_assignment`
  - : Logical AND assignment.
- `Operators/Logical_OR_assignment`
  - : Logical OR assignment.
- `Operators/Nullish_coalescing_assignment`
  - : Nullish coalescing assignment.
- [`[a, b] = arr`, `{ a, b } = obj`](/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring)
  - : Destructuring allows you to assign the properties of an array or object to variables using syntax that looks similar to array or object literals.

### Yield operators

- `Operators/yield`
  - : Pause and resume a generator function.
- `Operators/yield*`
  - : Delegate to another generator function or iterable object.

### Spread syntax

- `Operators/Spread_syntax`
  - : Spread syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected. In an object literal, the spread syntax enumerates the properties of an object and adds the key-value pairs to the object being created.

### Comma operator

- `Operators/Comma_operator`
  - : The comma operator allows multiple expressions to be evaluated in a single statement and returns the result of the last expression.

## What are operators?

As the [What are statements, declarations, and expressions?](/en-US/docs/Web/JavaScript/Reference/Statements#what_are_statements_declarations_and_expressions) section explains, an expression is a fundamental building block that evaluates to a value. Statements, declarations, and expressions can all define specific slots where expressions are accepted. Where an expression contains slots for further nested expressions, the part(s) that are not slots are known as operators.

For example, the syntax for an [addition](/en-US/docs/Web/JavaScript/Reference/Operators/Addition) expression is `expression + expression` (if you read the spec, the operands are called _AdditiveExpression_ and _MultiplicativeExpression_, which are both subsets of _Expression_, but that's the spec's mechanism for defining [precedence and associativity](/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence) and is irrelevant for our purposes). Apart from the two expression slots, the code entity it introduces is just `+`: the _addition operator_. Similarly, the syntax for a [yield](/en-US/docs/Web/JavaScript/Reference/Operators/yield) expression is `yield expression`, so `yield` is known as the operator. In other words, each operator corresponds to an expression.

MDN also regards expressions without slots such as [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null) as operators per the definition above, although we nearly always just refer to them as "syntax" or "expression".

An expression does not need to take a fixed number of slots. For example, the array literal expression, `[expression, expression, expression]`, can take an arbitrary number of expression slots. The `[,,]` part might be called an "operator". MDN avoids this usage, but you may see it in functional programming languages like [Haskell](https://www.haskell.org/onlinereport/haskell2010/haskellch3.html).

The definition of operators gets fuzzier with certain other code entities: what if an expression has a slot that's not an expression, or a code entity combined with an expression does not make an expression? Do we still refer to that code entity as an operator?

- In the [optional chaining](/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining) expression `foo?.bar`, `foo` is an expression, but `bar` must be an identifier and is not evaluated to a value. Do we still regard `?.` as an operator?
- In the [arrow function](/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) expression `arg => body`, `body` might be an expression (although it can also be a block body), and `arg` is just an argument list. Do we still regard `=>` as an operator?
- In the [spread syntax](/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) `...foo`, `foo` is an expression, but the whole thing is not an expression because it does not evaluate to a value—it only makes sense in certain other expressions like function calls, array literals, and object literals. Do we still regard `...` as an operator?

The term "operator" is not precisely defined in JavaScript, so MDN does not give a definitive answer. Our approach is to group all these constructs under "Operators" but avoid formally referring to them as operators. Many useful concepts about operators, such as [precedence](/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence), still apply to them regardless of their exact nature.

## Specifications

## Browser compatibility

## See also

- [Operator precedence](/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence)
