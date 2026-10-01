---
id: "en-php-function-ds-set-remove"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Set::remove"
title: "Removes all given values from the set"
signature: "public void Ds\\Set::remove(mixed $values)"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-set.remove.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Removes all given values from the set

## Description

```php
public void Ds\Set::remove(mixed $values)
```

Removes all given `$values` from the set, ignoring any that are not in the set.

## Parameters

- **`$values`** — The values to remove.

## Return Values

No value is returned.

## Examples

**`Ds\Set::remove()` example**

```php


<?php
$set = new \Ds\Set([1, 2, 3, 4, 5]);

$set->remove(1);            // Remove 1
$set->remove(1, 2);         // Can't find 1, but remove 2
$set->remove(...[3, 4]);    // Remove 3 and 4

var_dump($set);
?>

   
```

The above example will output something similar to:

```text


object(Ds\Set)#1 (1) {
  [0]=>
  int(5)
}

   
```
