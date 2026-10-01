---
id: "en-php-function-ds-set-copy"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Set::copy"
title: "Returns a shallow copy of the set"
signature: "public Ds\\Set Ds\\Set::copy()"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-set.copy.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns a shallow copy of the set

## Description

```php
public Ds\Set Ds\Set::copy()
```

Returns a shallow copy of the set.

## Parameters

This function has no parameters.

## Return Values

Returns a shallow copy of the set.

## Examples

**`Ds\Set::copy()` example**

```php


<?php
$a = new \Ds\Set([1, 2, 3]);
$b = $a->copy();

// Updating the copy doesn't affect the original
$b->add(4);

print_r($a);
print_r($b);
?>

   
```

The above example will output something similar to:

```text


Ds\Set Object
(
    [0] => 1
    [1] => 2
    [2] => 3
)
Ds\Set Object
(
    [0] => 1
    [1] => 2
    [2] => 3
    [3] => 4
)

   
```
