---
id: "en-php-function-ds-pair-isempty"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Pair::isEmpty"
title: "Returns whether the pair is empty"
signature: "public bool Ds\\Pair::isEmpty()"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-pair.isempty.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns whether the pair is empty

## Description

```php
public bool Ds\Pair::isEmpty()
```

Returns whether the pair is empty.

## Parameters

This function has no parameters.

## Return Values

Returns `true` if the pair is empty, `false` otherwise.

## Examples

**`Ds\Pair::isEmpty()` example**

```php


<?php
$a = new \Ds\Pair("a", 1);
$b = new \Ds\Pair();

var_dump($a->isEmpty());
var_dump($b->isEmpty());
?>

   
```

The above example will output something similar to:

```text


bool(false)
bool(true)

   
```
