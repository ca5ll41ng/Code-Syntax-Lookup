---
id: "en-php-function-ds-stack-clear"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Stack::clear"
title: "Removes all values"
signature: "public void Ds\\Stack::clear()"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-stack.clear.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Removes all values

## Description

```php
public void Ds\Stack::clear()
```

Removes all values from the stack.

## Parameters

This function has no parameters.

## Return Values

No value is returned.

## Examples

**`Ds\Stack::clear()` example**

```php


<?php
$stack = new \Ds\Stack([1, 2, 3]);
print_r($stack);

$stack->clear();
print_r($stack);
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
)

   
```
