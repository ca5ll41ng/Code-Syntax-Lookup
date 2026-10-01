---
id: "en-php-function-function-imageaffinematrixget"
language: "php"
lang: "en"
category: "function"
name: "imageaffinematrixget"
title: "Get an affine transformation matrix"
signature: "array|false imageaffinematrixget(int $type, array|float $options)"
module: "image"
source_url: "https://www.php.net/manual/en/function.imageaffinematrixget.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get an affine transformation matrix

## Description

```php
array|false imageaffinematrixget(int $type, array|float $options)
```

Returns an affine transformation matrix.

## Parameters

- **`$type`** — One of the `IMG_AFFINE_{*}` constants.
- **`$options`** — If `$type` is `IMG_AFFINE_TRANSLATE` or `IMG_AFFINE_SCALE`, `$options` has to be an `array` with keys `x` and `y`, both having `float` values. — If `$type` is `IMG_AFFINE_ROTATE`, `IMG_AFFINE_SHEAR_HORIZONTAL` or `IMG_AFFINE_SHEAR_VERTICAL`, `$options` has to be a `float` specifying the angle.

## Return Values

An affine transformation matrix (an array with keys `0` to `5` and float values) or `false` on failure.

## Examples

**`imageaffinematrixget()` example**

```php


<?php
$matrix = imageaffinematrixget(IMG_AFFINE_TRANSLATE, array('x' => 2, 'y' => 3));
print_r($matrix);
?>

    
```

The above example will output:

```text


Array
(
    [0] => 1
    [1] => 0
    [2] => 0
    [3] => 1
    [4] => 2
    [5] => 3
)

    
```

## See Also

 `imageaffine()` `imageaffinematrixconcat()`
