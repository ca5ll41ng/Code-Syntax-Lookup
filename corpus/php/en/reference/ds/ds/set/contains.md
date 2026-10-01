---
id: "en-php-function-ds-set-contains"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Set::contains"
title: "Determines if the set contains all values"
signature: "public bool Ds\\Set::contains(mixed $values)"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-set.contains.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Determines if the set contains all values

## Description

```php
public bool Ds\Set::contains(mixed $values)
```

Determines if the set contains all values.

> Values of type `object` are supported. If an object implements `Ds\Hashable`, equality will be determined by the object's equals function. If an object does not implement `Ds\Hashable`, objects must be references to the same instance to be considered equal.

> All comparisons are strict (type and value).

## Parameters

- **`$values`** — Values to check.

## Return Values

`false` if any of the provided `$values` are not in the set, `true` otherwise.

## Examples

**`Ds\Set::contains()` example**

```php


<?php
$set = new \Ds\Set([1, 2, 3]);

var_dump($set->contains(1));                // true
var_dump($set->contains(1, 2));             // true
var_dump($set->contains(...[1, 2]));        // true

var_dump($set->contains("1"));              // false
var_dump($set->contains(...[1, 2, 3, 4]));  // false

var_dump($set->contains(...[]));            // true
?>

   
```

The above example will output something similar to:

```text


bool(true)
bool(true)
bool(true)
bool(false)
bool(false)
bool(true)

   
```
