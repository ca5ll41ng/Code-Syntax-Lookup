---
id: "en-php-function-ds-stack-peek"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Stack::peek"
title: "Returns the value at the top of the stack"
signature: "public mixed Ds\\Stack::peek()"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-stack.peek.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the value at the top of the stack

## Description

```php
public mixed Ds\Stack::peek()
```

Returns the value at the top of the stack, but does not remove it.

## Parameters

This function has no parameters.

## Return Values

The value at the top of the stack.

## Errors/Exceptions

`UnderflowException` if empty.

## Examples

**`Ds\Stack::peek()` example**

```php


<?php
$stack = new \Ds\Stack();

$stack->push("a");
$stack->push("b");
$stack->push("c");

var_dump($stack->peek());
?>

   
```

The above example will output something similar to:

```text


string(1) "c"

   
```
