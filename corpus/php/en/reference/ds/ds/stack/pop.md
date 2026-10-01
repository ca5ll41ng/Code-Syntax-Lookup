---
id: "en-php-function-ds-stack-pop"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Stack::pop"
title: "Removes and returns the value at the top of the stack"
signature: "public mixed Ds\\Stack::pop()"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-stack.pop.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Removes and returns the value at the top of the stack

## Description

```php
public mixed Ds\Stack::pop()
```

Removes and returns the value at the top of the stack.

## Parameters

This function has no parameters.

## Return Values

The removed value which was at the top of the stack.

## Errors/Exceptions

`UnderflowException` if empty.

## Examples

**`Ds\Stack::pop()` example**

```php


<?php
$stack = new \Ds\Stack();

$stack->push("a");
$stack->push("b");
$stack->push("c");

var_dump($stack->pop());
var_dump($stack->pop());
var_dump($stack->pop());
?>

   
```

The above example will output something similar to:

```text


string(1) "c"
string(1) "b"
string(1) "a"

   
```
