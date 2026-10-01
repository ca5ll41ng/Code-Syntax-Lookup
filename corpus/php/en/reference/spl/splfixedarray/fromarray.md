---
id: "en-php-function-splfixedarray-fromarray"
language: "php"
lang: "en"
category: "function"
name: "SplFixedArray::fromArray"
title: "Import a PHP array in a `SplFixedArray` instance"
signature: "public static SplFixedArray SplFixedArray::fromArray(array $array, bool $preserveKeys = true)"
module: "spl"
source_url: "https://www.php.net/manual/en/splfixedarray.fromarray.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Import a PHP array in a `SplFixedArray` instance

## Description

```php
public static SplFixedArray SplFixedArray::fromArray(array $array, bool $preserveKeys = true)
```

Import the PHP array `$array` in a new `SplFixedArray` instance

## Parameters

- **`$array`** — The array to import.
- **`$preserveKeys`** — Try to save the numeric indexes used in the original array.

## Return Values

Returns an instance of `SplFixedArray` containing the array content.

## Examples

**`SplFixedArray::fromArray()` example**

```php


<?php
$fa = SplFixedArray::fromArray(array(1 => 1, 0 => 2, 3 => 3));

var_dump($fa);

$fa = SplFixedArray::fromArray(array(1 => 1, 0 => 2, 3 => 3), false);

var_dump($fa);
?>

    
```

The above example will output:

```text


object(SplFixedArray)#1 (4) {
  [0]=>
  int(2)
  [1]=>
  int(1)
  [2]=>
  NULL
  [3]=>
  int(3)
}
object(SplFixedArray)#2 (3) {
  [0]=>
  int(1)
  [1]=>
  int(2)
  [2]=>
  int(3)
}

    
```
