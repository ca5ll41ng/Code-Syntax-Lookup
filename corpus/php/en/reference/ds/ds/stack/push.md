---
id: "en-php-function-ds-stack-push"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Stack::push"
title: "Pushes values onto the stack"
signature: "public void Ds\\Stack::push(mixed $values)"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-stack.push.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Pushes values onto the stack

## Description

```php
public void Ds\Stack::push(mixed $values)
```

Pushes `$values` onto the stack.

## Parameters

- **`$values`** — The values to push onto the stack.

## Return Values

No value is returned.

## Examples

**`Ds\Stack::push()` example**

```php


<?php
$stack = new \Ds\Stack();

$stack->push("a");
$stack->push("b");
$stack->push("c", "d");
$stack->push(...["e", "f"]);

print_r($stack);
?>

   
```

The above example will output something similar to:

```text


Ds\Stack Object
(
    [0] => a
    [1] => b
    [2] => c
    [3] => d
    [4] => e
    [5] => f
)

   
```
