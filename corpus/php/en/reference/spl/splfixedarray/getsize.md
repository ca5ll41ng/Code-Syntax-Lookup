---
id: "en-php-function-splfixedarray-getsize"
language: "php"
lang: "en"
category: "function"
name: "SplFixedArray::getSize"
title: "Gets the size of the array"
signature: "public int SplFixedArray::getSize()"
module: "spl"
source_url: "https://www.php.net/manual/en/splfixedarray.getsize.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets the size of the array

## Description

```php
public int SplFixedArray::getSize()
```

Gets the size of the array.

## Parameters

This function has no parameters.

## Return Values

Returns the size of the array, as an `int`.

## Examples

**`SplFixedArray::getSize()` example**

```php


<?php
$array = new SplFixedArray(5);
echo $array->getSize()."\n";
$array->setSize(10);
echo $array->getSize()."\n";
?>

    
```

The above example will output:

```text


5
10

    
```

## Notes

> This method is functionally equivalent to `SplFixedArray::count()`

## See Also

 `SplFixedArray::count()`
