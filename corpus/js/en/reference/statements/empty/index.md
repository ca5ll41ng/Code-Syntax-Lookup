---
id: "js-en-function-web-javascript-reference-statements-empty"
language: "js"
lang: "en"
category: "function"
name: "Empty statement"
title: "Empty statement"
directive: "javascript-statement"
module: "reference\\statements\\empty\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Statements/Empty"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Empty statement

An **empty statement** is used to provide no statement, although the
JavaScript syntax would expect one.

`JavaScript Demo: Empty statement`

```js interactive-example
const array = [1, 2, 3];

// Assign all array values to 0
for (let i = 0; i < array.length; array[i++] = 0 /* empty statement */);

console.log(array);
// Expected output: Array [0, 0, 0]
```

## Syntax

```js-nolint
;
```

## Description

The empty statement is a semicolon (`;`) indicating that no statement will
be executed, even if JavaScript syntax requires one.

The opposite behavior, where you want multiple statements, but JavaScript only allows a
single one, is possible using a [block statement](/en-US/docs/Web/JavaScript/Reference/Statements/block),
which combines several statements into a single one.

## Examples

### Empty loop body

The empty statement is sometimes used with loop statements. See the following example
with an empty loop body:

```js-nolint
const arr = [1, 2, 3];

// Assign all array values to 0
for (let i = 0; i < arr.length; arr[i++] = 0) /* empty statement */ ;

console.log(arr);
// [0, 0, 0]
```

### Unintentional usage

It is a good idea to comment _intentional_ use of the empty statement, as it is
not really obvious to distinguish from a normal semicolon.

In the following example, the usage is probably not intentional:

```js-nolint example-bad
if (condition);      // Caution, this "if" does nothing!
  killTheUniverse(); // So this always gets executed!!!
```

## Specifications

## Browser compatibility

## See also

- [Block statement](/en-US/docs/Web/JavaScript/Reference/Statements/block)
