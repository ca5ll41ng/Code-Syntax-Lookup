---
id: "en-php-function-function-imageaffinematrixconcat"
language: "php"
lang: "en"
category: "function"
name: "imageaffinematrixconcat"
title: "Concatenate two affine transformation matrices"
signature: "array|false imageaffinematrixconcat(array $matrix1, array $matrix2)"
module: "image"
source_url: "https://www.php.net/manual/en/function.imageaffinematrixconcat.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Concatenate two affine transformation matrices

## Description

```php
array|false imageaffinematrixconcat(array $matrix1, array $matrix2)
```

Returns the concatenation of two affine transformation matrices, what is useful if multiple transformations should be applied to the same image in one go.

## Parameters

- **`$matrix1`** — An affine transformation matrix (an array with keys `0` to `5` and float values).
- **`$matrix2`** — An affine transformation matrix (an array with keys `0` to `5` and float values).

## Return Values

An affine transformation matrix (an array with keys `0` to `5` and float values) or `false` on failure.

## Examples

**`imageaffinematrixconcat()` example**

```php


<?php
$m1 = imageaffinematrixget(IMG_AFFINE_TRANSLATE, array('x' => 2, 'y' => 3));
$m2 = imageaffinematrixget(IMG_AFFINE_SCALE, array('x' => 4, 'y' => 5));
$matrix = imageaffinematrixconcat($m1, $m2);
print_r($matrix);
?>

    
```

The above example will output:

```text


Array
(
    [0] => 4
    [1] => 0
    [2] => 0
    [3] => 5
    [4] => 8
    [5] => 15
)

    
```

## See Also

 `imageaffine()` `imageaffinematrixget()`
