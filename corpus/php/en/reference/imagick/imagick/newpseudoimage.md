---
id: "en-php-function-imagick-newpseudoimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::newPseudoImage"
title: "Creates a new image"
signature: "public bool Imagick::newPseudoImage(int $columns, int $rows, string $pseudoString)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.newpseudoimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates a new image

## Description

```php
public bool Imagick::newPseudoImage(int $columns, int $rows, string $pseudoString)
```

Creates a new image using ImageMagick pseudo-formats.

## Parameters

- **`$columns`** — columns in the new image
- **`$rows`** — rows in the new image
- **`$pseudoString`** — string containing pseudo image definition.

## Return Values

Returns `true` on success.

## Errors/Exceptions

Throws ImagickException on error.

## Examples

**`Imagick::newPseudoImage()`**

```php

      
<?php
function newPseudoImage($canvasType) {
    $imagick = new \Imagick();
    $imagick->newPseudoImage(300, 300, $canvasType);
    $imagick->setImageFormat("png");
    header("Content-Type: image/png");
    echo $imagick->getImageBlob();
}

//newPseudoImage('gradient:red-rgba(64, 255, 255, 0.5)');
//newPseudoImage("radial-gradient:red-blue");
newPseudoImage("plasma:fractal");

?>

      
```
