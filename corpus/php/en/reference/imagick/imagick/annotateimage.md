---
id: "en-php-function-imagick-annotateimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::annotateImage"
title: "Annotates an image with text"
signature: "public bool Imagick::annotateImage(ImagickDraw $draw_settings, float $x, float $y, float $angle, string $text)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.annotateimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Annotates an image with text

## Description

```php
public bool Imagick::annotateImage(ImagickDraw $draw_settings, float $x, float $y, float $angle, string $text)
```

Annotates an image with text.

## Parameters

- **`$draw_settings`** — The ImagickDraw object that contains settings for drawing the text
- **`$x`** — Horizontal offset in pixels to the left of text
- **`$y`** — Vertical offset in pixels to the baseline of text
- **`$angle`** — The angle at which to write the text
- **`$text`** — The string to draw

## Return Values

Returns `true` on success.

## Examples

**Using `Imagick::annotateImage()`:**

Annotate text on an empty image

```php


<?php
/* Create some objects */
$image = new Imagick();
$draw = new ImagickDraw();
$pixel = new ImagickPixel( 'gray' );

/* New image */
$image->newImage(800, 75, $pixel);

/* Black text */
$draw->setFillColor('black');

/* Font properties */
$draw->setFont('Bookman-DemiItalic');
$draw->setFontSize( 30 );

/* Create text */
$image->annotateImage($draw, 10, 45, 0, 'The quick brown fox jumps over the lazy dog');

/* Give image a format */
$image->setImageFormat('png');

/* Output the image with headers */
header('Content-type: image/png');
echo $image;

?>

    
```

## See Also

`ImagickDraw::annotation()` `ImagickDraw::setFont()`
