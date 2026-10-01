---
id: "en-php-function-function-imagegetclip"
language: "php"
lang: "en"
category: "function"
name: "imagegetclip"
title: "Get the clipping rectangle"
signature: "array imagegetclip(GdImage $image)"
module: "image"
source_url: "https://www.php.net/manual/en/function.imagegetclip.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the clipping rectangle

## Description

 {{{ 

```php
array imagegetclip(GdImage $image)
```

`imagegetclip()` retrieves the current clipping rectangle, i.e. the area beyond which no pixels will be drawn.

 }}} 

## Parameters

 {{{ 

- **`$image`** — A `GdImage` object, returned by one of the image creation functions, such as `imagecreatetruecolor()`.

 }}} 

## Return Values

 {{{ 

The function returns an indexed array with the coordinates of the clipping rectangle which has the following entries:

- x-coordinate of the upper left corner
- y-coordinate of the upper left corner
- x-coordinate of the lower right corner
- y-coordinate of the lower right corner

 }}} 

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$image` expects a `GdImage` instance now; previously, a valid `gd` `resource` was expected. |

## Examples

 {{{ 

**`imagegetclip()` example**

 {{{ 

Setting and retrieving the clipping rectangle.

```php


<?php
$im = imagecreate(100, 100);
imagesetclip($im, 10,10, 89,89);
print_r(imagegetclip($im));

   
```

The above example will output:

```text


Array
(
    [0] => 10
    [1] => 10
    [2] => 89
    [3] => 89
)

   
```

 }}} 

 }}} 

## See Also

 {{{ 

 `imagesetclip()` 

 }}}
