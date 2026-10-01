---
id: "en-php-function-ds-stack-isempty"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Stack::isEmpty"
title: "Returns whether the stack is empty"
signature: "public bool Ds\\Stack::isEmpty()"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-stack.isempty.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns whether the stack is empty

## Description

```php
public bool Ds\Stack::isEmpty()
```

Returns whether the stack is empty.

## Parameters

This function has no parameters.

## Return Values

Returns `true` if the stack is empty, `false` otherwise.

## Examples

**`Ds\Stack::isEmpty()` example**

```php


<?php
$a = new \Ds\Stack([1, 2, 3]);
$b = new \Ds\Stack();

var_dump($a->isEmpty());
var_dump($b->isEmpty());
?>

   
```

The above example will output something similar to:

```text


bool(false)
bool(true)

   
```
