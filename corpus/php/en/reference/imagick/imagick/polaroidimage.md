---
id: "en-php-function-imagick-polaroidimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::polaroidImage"
title: "Simulates a Polaroid picture"
signature: "public bool Imagick::polaroidImage(ImagickDraw $properties, float $angle)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.polaroidimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Simulates a Polaroid picture

## Description

```php
public bool Imagick::polaroidImage(ImagickDraw $properties, float $angle)
```

Simulates a Polaroid picture. This method is available if Imagick has been compiled against ImageMagick version 6.3.2 or newer.

## Parameters

- **`$properties`** — The polaroid properties
- **`$angle`** — The polaroid angle

## Return Values

Returns `true` on success.

## Examples

**A `Imagick::polaroidImage()` example**

An example of using Imagick::polaroidImage()

```php


<?php
/* Create the object */
$image = new Imagick('source.png');

/* Set the opacity */
$image->polaroidImage(new ImagickDraw(), 25);

/* output the image */
header('Content-type: image/png');
echo $image;

?>

    
```
