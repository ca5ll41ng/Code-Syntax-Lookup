---
id: "en-php-function-imagick-setpointsize"
language: "php"
lang: "en"
category: "function"
name: "Imagick::setPointSize"
title: "Sets point size"
signature: "public bool Imagick::setPointSize(float $point_size)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.setpointsize.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets point size

## Description

```php
public bool Imagick::setPointSize(float $point_size)
```

Sets object's point size property. This method can be used for example to set font size for caption: pseudo-format. This method is available if Imagick has been compiled against ImageMagick version 6.3.7 or newer.

## Parameters

- **`$point_size`** — Point size

## Return Values

Returns `true` on success.

## Examples

**A `Imagick::setPointSize()` example**

Example of using Imagick::setPointSize

```php


<?php
/* Create new imagick object */
$im = new Imagick();

/* Set the font for the object */
$im->setFont("example.ttf");

/* Set the point size */
$im->setPointSize(12);

/* Create new caption */
$im->newPseudoImage(100, 100, "caption:Hello");

/* Do something with the image */
?>

    
```

## See Also

`Imagick::getPointSize()`
