---
id: "en-php-function-ds-stack-copy"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Stack::copy"
title: "Returns a shallow copy of the stack"
signature: "public Ds\\Stack Ds\\Stack::copy()"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-stack.copy.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns a shallow copy of the stack

## Description

```php
public Ds\Stack Ds\Stack::copy()
```

Returns a shallow copy of the stack.

## Parameters

This function has no parameters.

## Return Values

Returns a shallow copy of the stack.

## Examples

**`Ds\Stack::copy()` example**

```php


<?php
$a = new \Ds\Stack([1, 2, 3]);
$b = $a->copy();

// Updating the copy doesn't affect the original
$b->push(4);

print_r($a);
print_r($b);
?>

   
```

The above example will output something similar to:

```text


Ds\Stack Object
(
    [0] => 3
    [1] => 2
    [2] => 1
)
Ds\Stack Object
(
    [0] => 4
    [1] => 3
    [2] => 2
    [3] => 1
)

   
```
