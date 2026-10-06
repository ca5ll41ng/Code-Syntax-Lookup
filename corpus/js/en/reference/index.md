---
id: "js-en-syntax-web-javascript-reference"
language: "js"
lang: "en"
category: "syntax"
name: "JavaScript reference"
title: "JavaScript reference"
directive: "landing-page"
module: "reference\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# JavaScript reference

The JavaScript reference serves as a repository of facts about the JavaScript language. The entire language is described here in detail. As you write JavaScript code, you'll refer to these pages often (thus the title "JavaScript reference").

The JavaScript language is intended to be used within some larger environment, be it a browser, server-side scripts, or similar. For the most part, this reference attempts to be environment-agnostic and does not target a web browser environment.

If you are new to JavaScript, start with the [guide](/en-US/docs/Web/JavaScript/Guide). Once you have a firm grasp of the fundamentals, you can use the reference to get more details on individual objects and language constructs.

## Built-ins

[JavaScript standard built-in objects](/en-US/docs/Web/JavaScript/Reference/Global_Objects), along with their methods and properties.

### Value properties

- `globalThis`
- `Infinity`
- `NaN`
- `undefined`

### Function properties

- `Global_Objects/eval`
- `isFinite()`
- `isNaN()`
- `parseFloat()`
- `parseInt()`
- `decodeURI()`
- `decodeURIComponent()`
- `encodeURI()`
- `encodeURIComponent()`
- `escape()` 
- `unescape()` 

### Fundamental objects

- `Object`
- `Function`
- `Boolean`
- `Symbol`

### Error objects

- `Error`
- `AggregateError`
- `EvalError`
- `RangeError`
- `ReferenceError`
- `SuppressedError`
- `SyntaxError`
- `TypeError`
- `URIError`
- `InternalError` 

### Numbers and dates

- `Number`
- `BigInt`
- `Math`
- `Date`
- `Temporal`

### Text processing

- `String`
- `RegExp`

### Indexed collections

- `Array`
- `Int8Array`
- `Uint8Array`
- `Uint8ClampedArray`
- `Int16Array`
- `Uint16Array`
- `Int32Array`
- `Uint32Array`
- `BigInt64Array`
- `BigUint64Array`
- `Float16Array`
- `Float32Array`
- `Float64Array`

### Keyed collections

- `Map`
- `Set`
- `WeakMap`
- `WeakSet`

### Structured data

- `ArrayBuffer`
- `SharedArrayBuffer`
- `DataView`
- `Atomics`
- `JSON`

### Managing memory

- `WeakRef`
- `FinalizationRegistry`

### Control abstraction objects

- `Iterator`
- `AsyncIterator`
- `Promise`
- `GeneratorFunction`
- `AsyncGeneratorFunction`
- `Generator`
- `AsyncGenerator`
- `AsyncFunction`
- `DisposableStack`
- `AsyncDisposableStack`

### Reflection

- `AbstractModuleSource`
- `Reflect`
- `Proxy`

### Internationalization

- `Intl`
- `Intl.Collator`
- `Intl.DateTimeFormat`
- `Intl.DisplayNames`
- `Intl.DurationFormat`
- `Intl.ListFormat`
- `Intl.Locale`
- `Intl.NumberFormat`
- `Intl.PluralRules`
- `Intl.RelativeTimeFormat`
- `Intl.Segmenter`

## Statements

[JavaScript statements and declarations](/en-US/docs/Web/JavaScript/Reference/Statements)

### Control flow

- `Statements/return`
- `Statements/break`
- `Statements/continue`
- `Statements/throw`
- `Statements/if...else`
- `Statements/switch`
- `Statements/try...catch`

### Declaring variables

- `Statements/var`
- `Statements/let`
- `Statements/const`
- `Statements/using`
- `Statements/await_using`

### Functions and classes

- `Statements/function`
- `Statements/function*`
- `Statements/async_function`
- `Statements/async_function*`
- `Statements/class`

### Iterations

- `Statements/do...while`
- `Statements/for`
- `Statements/for...in`
- `Statements/for...of`
- `Statements/for-await...of`
- `Statements/while`

### Others

- `Statements/Empty`
- `Statements/block`
- `Statements/Expression_statement`
- `Statements/debugger`
- `Statements/export`
- `Statements/import`
- `Statements/import/defer`
- `Statements/import/source`
- `Statements/label`
- `Statements/with` 

## Expressions and operators

[JavaScript expressions and operators](/en-US/docs/Web/JavaScript/Reference/Operators).

### Primary expressions

- `this`
- [Literals](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#literals)
- `Array`
- `Operators/Object_initializer`
- `Operators/function`
- `Operators/class`
- `Operators/function*`
- `Operators/async_function`
- `Operators/async_function*`
- `RegExp`
- `Template_literals`
- `Operators/Grouping`

### Left-hand-side expressions

- `Operators/Property_accessors`
- `Operators/Optional_chaining`
- `new`
- `Operators/new.target`
- `Operators/import.meta`
- `Operators/super`
- `Operators/import`
- `Operators/import/defer`
- `Operators/import/source`

### Increment and decrement

- `Operators/Increment`
- `Operators/Decrement`
- `Operators/Increment`
- `Operators/Decrement`

### Unary operators

- `delete`
- `Operators/void`
- `Operators/typeof`
- `Operators/Unary_plus`
- `Operators/Unary_negation`
- `Operators/Bitwise_NOT`
- `Operators/Logical_NOT`
- `Operators/await`

### Arithmetic operators

- `Operators/Exponentiation`
- `Operators/Multiplication`
- `Operators/Division`
- `Operators/Remainder`
- `Operators/Addition` (Plus)
- `Operators/Subtraction`

### Relational operators

- `Operators/Less_than` (Less than)
- `Operators/Greater_than` (Greater than)
- `Operators/Less_than_or_equal`
- `Operators/Greater_than_or_equal`
- `instanceof`
- `Operators/in`

### Equality operators

- `Operators/Equality`
- `Operators/Inequality`
- `Operators/Strict_equality`
- `Operators/Strict_inequality`

### Bitwise shift operators

- `Operators/Left_shift`
- `Operators/Right_shift`
- `Operators/Unsigned_right_shift`

### Binary bitwise operators

- `Operators/Bitwise_AND`
- `Operators/Bitwise_OR`
- `Operators/Bitwise_XOR`

### Binary logical operators

- `Operators/Logical_AND`
- `Operators/Logical_OR`
- `Operators/Nullish_coalescing`

### Conditional (ternary) operator

- `Operators/Conditional_operator`

### Assignment operators

- `Operators/Assignment`
- `Operators/Multiplication_assignment`
- `Operators/Division_assignment`
- `Operators/Remainder_assignment`
- `Operators/Addition_assignment`
- `Operators/Subtraction_assignment`
- `Operators/Left_shift_assignment`
- `Operators/Right_shift_assignment`
- `Operators/Unsigned_right_shift_assignment`
- `Operators/Bitwise_AND_assignment`
- `Operators/Bitwise_XOR_assignment`
- `Operators/Bitwise_OR_assignment`
- `Operators/Exponentiation_assignment`
- `Operators/Logical_AND_assignment`
- `Operators/Logical_OR_assignment`
- `Operators/Nullish_coalescing_assignment`
- [`[a, b] = arr`, `{ a, b } = obj`](/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring)

### Yield operators

- `Operators/yield`
- `Operators/yield*`

### Spread syntax

- `Operators/Spread_syntax`

### Comma operator

- `Operators/Comma_operator`

## Functions

[JavaScript functions.](/en-US/docs/Web/JavaScript/Reference/Functions)

- `Functions/Arrow_functions`
- `Functions/Default_parameters`
- `Functions/rest_parameters`
- `Functions/arguments`
- `Functions/Method_definitions`
- `Functions/get`
- `Functions/set`

## Classes

[JavaScript classes.](/en-US/docs/Web/JavaScript/Reference/Classes)

- `Classes/constructor`
- `Classes/extends`
- [Private elements](/en-US/docs/Web/JavaScript/Reference/Classes/Private_elements)
- [Public class fields](/en-US/docs/Web/JavaScript/Reference/Classes/Public_class_fields)
- `Classes/static`
- [Static initialization blocks](/en-US/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)

## Regular expressions

[JavaScript regular expressions.](/en-US/docs/Web/JavaScript/Reference/Regular_expressions)

- [Backreference: `\1`, `\2`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Backreference)
- [Capturing group: `(...)`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
- [Character class: `[...]`, `[^...]`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
- [Character class escape: `\d`, `\D`, `\w`, `\W`, `\s`, `\S`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape)
- [Character escape: `\n`, `\u{...}`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
- [Disjunction: `|`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)
- [Input boundary assertion: `^`, `$`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion)
- [Literal character: `a`, `b`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character)
- [Lookahead assertion: `(?=...)`, `(?!...)`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion)
- [Lookbehind assertion: `(?<=...)`, `(?<!...)`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion)
- [Modifier: `(?ims-ims:...)`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Modifier)
- [Named backreference: `\k<name>`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference)
- [Named capturing group: `(?<name>...)`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)
- [Non-capturing group: `(?:...)`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group)
- [Quantifier: `*`, `+`, `?`, `{n}`, `{n,}`, `{n,m}`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier)
- [Unicode character class escape: `\p{...}`, `\P{...}`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)
- [Wildcard: `.`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Wildcard)
- [Word boundary assertion: `\b`, `\B`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion)

## Additional reference pages

- [JavaScript technologies overview](/en-US/docs/Web/JavaScript/Reference/JavaScript_technologies_overview)
- [Execution model](/en-US/docs/Web/JavaScript/Reference/Execution_model)
- `Lexical_grammar`
- [Data types and data structures](/en-US/docs/Web/JavaScript/Guide/Data_structures)
- [Iteration protocols](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)
- [Trailing commas](/en-US/docs/Web/JavaScript/Reference/Trailing_commas)
- [Errors](/en-US/docs/Web/JavaScript/Reference/Errors)
- `Strict_mode`
- `Deprecated_and_obsolete_features`
