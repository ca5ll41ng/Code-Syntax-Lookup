---
id: "en-php-function-imagick-roundcorners"
language: "php"
lang: "en"
category: "function"
name: "Imagick::roundCorners"
title: "Rounds image corners"
signature: "public bool Imagick::roundCorners(float $x_rounding, float $y_rounding, float $stroke_width = 10, float $displace = 5, float $size_correction = -6)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.roundcorners.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Rounds image corners

## Description

```php
public bool Imagick::roundCorners(float $x_rounding, float $y_rounding, float $stroke_width = 10, float $displace = 5, float $size_correction = -6)
```

Rounds image corners. The first two parameters control the amount of rounding and the three last parameters can be used to fine-tune the rounding process. This method is available if Imagick has been compiled against ImageMagick version 6.2.9 or newer. This method is not available if Imagick has been compiled against ImageMagick version 7.0.0 or newer.

## Parameters

- **`$x_rounding`** — x rounding
- **`$y_rounding`** — y rounding
- **`$stroke_width`** — stroke width
- **`$displace`** — image displace
- **`$size_correction`** — size correction

## Return Values

Returns `true` on success.

## Examples

**Using `Imagick::roundCorners()`:**

Rounds the image corners

```php


<?php

$image = new Imagick();
$image->newPseudoImage(100, 100, "magick:rose");
$image->setImageFormat("png");

$image->roundCorners(5,3);
$image->writeImage("rounded.png");
?>

    
```
