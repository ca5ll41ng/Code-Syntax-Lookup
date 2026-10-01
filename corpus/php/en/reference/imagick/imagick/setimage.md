---
id: "en-php-function-imagick-setimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::setImage"
title: "Replaces image in the object"
signature: "public bool Imagick::setImage(Imagick $replace)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.setimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Replaces image in the object

## Description

```php
public bool Imagick::setImage(Imagick $replace)
```

Replaces the current image sequence with the image from replace object.

## Parameters

- **`$replace`** — The replace Imagick object

## Return Values

Returns `true` on success.

## Errors/Exceptions

Throws ImagickException on error.

## Examples

**A `Imagick::setImage()` example**

An example of using Imagick::setImage()

```php


<?php
/* Create the objects */
$image = new Imagick('source.jpg');
$replace = new Imagick('replace.jpg');

/* source.jpg is replaced with replace.jpg */
$image->setImage($replace);

/* output the image */
header('Content-type: image/jpeg');
echo $image;

?>

    
```
