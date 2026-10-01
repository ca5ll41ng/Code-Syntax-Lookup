---
id: "en-php-function-splfixedarray-construct"
language: "php"
lang: "en"
category: "function"
name: "SplFixedArray::__construct"
title: "Constructs a new fixed array"
signature: "public SplFixedArray::__construct(int $size = 0)"
module: "spl"
source_url: "https://www.php.net/manual/en/splfixedarray.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Constructs a new fixed array

## Description

```php
public SplFixedArray::__construct(int $size = 0)
```

Initializes a fixed array with a number of `null` values equal to `$size`.

## Parameters

- **`$size`** — The size of the fixed array. This expects a number between `0` and `PHP_INT_MAX`.

## Errors/Exceptions

Throws a `ValueError` when `$size` is a negative integer.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | Now throws a `ValueError` if `$size` is a negative; previously it threw a `InvalidArgumentException`. |

## Examples

**`SplFixedArray::__construct()` example**

```php


<?php
$array = new SplFixedArray(5);

$array[1] = 2;
$array[4] = "foo";

foreach($array as $v) {
  var_dump($v);
}
?>

    
```

The above example will output:

```text


NULL
int(2)
NULL
NULL
string(3) "foo"

    
```
