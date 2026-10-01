---
id: "en-php-function-splfixedarray-toarray"
language: "php"
lang: "en"
category: "function"
name: "SplFixedArray::toArray"
title: "Returns a PHP array from the fixed array"
signature: "public array SplFixedArray::toArray()"
module: "spl"
source_url: "https://www.php.net/manual/en/splfixedarray.toarray.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns a PHP array from the fixed array

## Description

```php
public array SplFixedArray::toArray()
```

Returns a PHP array from the fixed array.

## Parameters

This function has no parameters.

## Return Values

Returns a PHP `array`, similar to the fixed array.

## Examples

**`SplFixedArray::toArray()` example**

```php


<?php
$fa = new SplFixedArray(3);
$fa[0] = 0;
$fa[2] = 2;
var_dump($fa->toArray());
?>

    
```

The above example will output:

```text


array(3) {
  [0]=>
  int(0)
  [1]=>
  NULL
  [2]=>
  int(2)
}

    
```
