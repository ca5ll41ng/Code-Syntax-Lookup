---
id: "en-php-function-imagick-identifyimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::identifyImage"
title: "Identifies an image and fetches attributes"
signature: "public array Imagick::identifyImage(bool $appendRawOutput = false)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.identifyimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Identifies an image and fetches attributes

## Description

```php
public array Imagick::identifyImage(bool $appendRawOutput = false)
```

Identifies an image and returns the attributes. Attributes include the image width, height, size, and others.

## Parameters

- **`$appendRawOutput`** — If `true` then the raw output is appended to the array.

## Return Values

Identifies an image and returns the attributes. Attributes include the image width, height, size, and others.

## Errors/Exceptions

Throws ImagickException on error.

## Examples

**Example Result Format**

```text


Array
(
    [imageName] => /some/path/image.jpg
    [format] => JPEG (Joint Photographic Experts Group JFIF format)
    [geometry] => Array
        (
            [width] => 90
            [height] => 90
        )

    [type] => TrueColor
    [colorSpace] => RGB
    [resolution] => Array
        (
            [x] => 300
            [y] => 300
        )

    [units] => PixelsPerInch
    [fileSize] => 1.88672kb
    [compression] => JPEG
    [signature] => 9a6dc8f604f97d0d691c0286176ddf992e188f0bebba98494b2146ee2d7118da
)

   
```
