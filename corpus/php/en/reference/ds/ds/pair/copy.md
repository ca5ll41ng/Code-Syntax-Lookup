---
id: "en-php-function-ds-pair-copy"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Pair::copy"
title: "Returns a shallow copy of the pair"
signature: "public Ds\\Pair Ds\\Pair::copy()"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-pair.copy.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns a shallow copy of the pair

## Description

```php
public Ds\Pair Ds\Pair::copy()
```

Returns a shallow copy of the pair.

## Parameters

This function has no parameters.

## Return Values

Returns a shallow copy of the pair.

## Examples

**`Ds\Pair::copy()` example**

```php


<?php
$a = new \Ds\Pair("a", 1);
$b = $a->copy();

$a->key = "x";

print_r($a);
print_r($b);
?>

   
```

The above example will output something similar to:

```text


Ds\Pair Object
(
    [key] => x
    [value] => 1
)
Ds\Pair Object
(
    [key] => a
    [value] => 1
)

   
```
