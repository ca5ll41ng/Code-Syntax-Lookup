---
id: "en-php-function-splfixedarray-count"
language: "php"
lang: "en"
category: "function"
name: "SplFixedArray::count"
title: "Returns the size of the array"
signature: "public int SplFixedArray::count()"
module: "spl"
source_url: "https://www.php.net/manual/en/splfixedarray.count.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the size of the array

## Description

```php
public int SplFixedArray::count()
```

Returns the size of the array.

## Parameters

This function has no parameters.

## Return Values

Returns the size of the array.

## Examples

**`SplFixedArray::count()` example**

```php


<?php
$array = new SplFixedArray(5);
echo $array->count() . "\n";
echo count($array) . "\n";
?>

    
```

The above example will output:

```text


5
5

    
```

## Notes

> This method is functionally equivalent to `SplFixedArray::getSize()`.

> The count of elements is always equal to the set size because all values are initially initialized with `null`.

## See Also

 `SplFixedArray::getSize()`
