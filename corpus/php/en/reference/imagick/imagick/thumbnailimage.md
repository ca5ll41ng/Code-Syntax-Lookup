---
id: "en-php-function-imagick-thumbnailimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::thumbnailImage"
title: "Changes the size of an image"
signature: "public bool Imagick::thumbnailImage(int $columns, int $rows, bool $bestfit = false, bool $fill = false, bool $legacy = false)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.thumbnailimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Changes the size of an image

## Description

```php
public bool Imagick::thumbnailImage(int $columns, int $rows, bool $bestfit = false, bool $fill = false, bool $legacy = false)
```

Changes the size of an image to the given dimensions and removes any associated profiles. The goal is to produce small, low cost thumbnail images suited for display on the Web. If `true` is given as a third parameter then columns and rows parameters are used as maximums for each side. Both sides will be scaled down until they match or are smaller than the parameter given for the side.

> The behavior of the parameter `$bestfit` changed in Imagick 3.0.0. Before this version given dimensions 400x400 an image of dimensions 200x150 would be left untouched. In Imagick 3.0.0 and later the image would be scaled up to size 400x300 as this is the "best fit" for the given dimensions. If `$bestfit` parameter is used both width and height must be given.

## Parameters

- **`$columns`** — Image width
- **`$rows`** — Image height
- **`$bestfit`** — Whether to force maximum values
- **`$fill`** — If the image does not fill the box completely then the box is filled with image's background color.
- **`$legacy`** — Round the smaller dimension down instead to the closest integer.

## Return Values

Returns `true` on success.

## Errors/Exceptions

Throws ImagickException on error.

## Examples

**`Imagick::thumbnailImage()`**

```php

      
<?php
function thumbnailImage($imagePath) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->setbackgroundcolor('rgb(64, 64, 64)');
    $imagick->thumbnailImage(100, 100, true, true);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>

      
```
