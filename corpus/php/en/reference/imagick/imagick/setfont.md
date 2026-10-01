---
id: "en-php-function-imagick-setfont"
language: "php"
lang: "en"
category: "function"
name: "Imagick::setFont"
title: "Sets font"
signature: "public bool Imagick::setFont(string $font)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.setfont.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets font

## Description

```php
public bool Imagick::setFont(string $font)
```

Sets object's font property. This method can be used for example to set font for caption: pseudo-format. The font needs to be configured in ImageMagick configuration or a file by the name of `$font` must exist. This method should not be confused with `ImagickDraw::setFont()` which sets the font for a specific ImagickDraw object. This method is available if Imagick has been compiled against ImageMagick version 6.3.7 or newer.

## Parameters

- **`$font`** — Font name or a filename

## Return Values

Returns `true` on success.

## Examples

**A `Imagick::setFont()` example**

Example of using Imagick::setFont

```php


<?php
/* Create new imagick object */
$im = new Imagick();

/* Set the font for the object */
$im->setFont("example.ttf");

/* Create new caption */
$im->newPseudoImage(100, 100, "caption:Hello");

/* Do something with the image */
?>

    
```

## See Also

`Imagick::getFont()` `ImagickDraw::setFont()` `ImagickDraw::getFont()`
