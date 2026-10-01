---
id: "en-php-function-ds-set-isempty"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Set::isEmpty"
title: "Returns whether the set is empty"
signature: "public bool Ds\\Set::isEmpty()"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-set.isempty.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns whether the set is empty

## Description

```php
public bool Ds\Set::isEmpty()
```

Returns whether the set is empty.

## Parameters

This function has no parameters.

## Return Values

Returns `true` if the set is empty, `false` otherwise.

## Examples

**`Ds\Set::isEmpty()` example**

```php


<?php
$a = new \Ds\Set([1, 2, 3]);
$b = new \Ds\Set();

var_dump($a->isEmpty());
var_dump($b->isEmpty());
?>

   
```

The above example will output something similar to:

```text


bool(false)
bool(true)

   
```
