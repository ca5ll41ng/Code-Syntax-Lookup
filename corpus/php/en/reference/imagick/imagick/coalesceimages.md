---
id: "en-php-function-imagick-coalesceimages"
language: "php"
lang: "en"
category: "function"
name: "Imagick::coalesceImages"
title: "Composites a set of images"
signature: "public Imagick Imagick::coalesceImages()"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.coalesceimages.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Composites a set of images

## Description

```php
public Imagick Imagick::coalesceImages()
```

Composites a set of images while respecting any page offsets and disposal methods. GIF, MIFF, and MNG animation sequences typically start with an image background and each subsequent image varies in size and offset. Returns a new Imagick object where each image in the sequence is the same size as the first and composited with the next image in the sequence.

## Parameters

This function has no parameters.

## Return Values

Returns a new Imagick object on success.

## Errors/Exceptions

Throws ImagickException on error.
