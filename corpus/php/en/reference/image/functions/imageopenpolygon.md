---
id: "en-php-function-function-imageopenpolygon"
language: "php"
lang: "en"
category: "function"
name: "imageopenpolygon"
title: "Draws an open polygon"
signature: "bool imageopenpolygon(GdImage $image, array $points, int $color)"
module: "image"
source_url: "https://www.php.net/manual/en/function.imageopenpolygon.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Draws an open polygon

## Description

Signature as of PHP 8.0.0 (not supported with named arguments)

```php
bool imageopenpolygon(GdImage $image, array $points, int $color)
```

Alternative signature (deprecated as of PHP 8.1.0)

```php
bool imageopenpolygon(GdImage $image, array $points, int $num_points, int $color)
```

`imageopenpolygon()` draws an open polygon on the given `$image`. Contrary to `imagepolygon()`, no line is drawn between the last and the first point.

## Parameters

- **`$image`** — A `GdImage` object, returned by one of the image creation functions, such as `imagecreatetruecolor()`.
- **`$points`** — An array containing the polygon's vertices, e.g.: | points[0] | = x0 | | --- | --- | | points[1] | = y0 | | points[2] | = x1 | | points[3] | = y1 |
- **`$num_points`** — Total number of points (vertices), which must be at least 3. — If this parameter is omitted as per the second signature, `$points` must have an even number of elements, and `$num_points` is assumed to be count($points)/2.
- **`$color`** — A color identifier created with `imagecolorallocate()`.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The parameter `$num_points` has been deprecated. |
| 8.0.0 | `$image` expects a `GdImage` instance now; previously, a valid `gd` `resource` was expected. |

## Examples

**`imageopenpolygon()` example**

```php


<?php
// Create a blank image
$image = imagecreatetruecolor(400, 300);

// Allocate a color for the polygon
$col_poly = imagecolorallocate($image, 255, 255, 255);

// Draw the polygon
imageopenpolygon($image, array(
        0,   0,
        100, 200,
        300, 200
    ),
    $col_poly);

// Output the picture to the browser
header('Content-type: image/png');

imagepng($image);
?>

    
```

The above example will output something similar to:

## See Also

 `imagepolygon()`
