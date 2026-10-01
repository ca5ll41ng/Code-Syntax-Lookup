---
id: "en-php-function-imagick-adaptivethresholdimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::adaptiveThresholdImage"
title: "Selects a threshold for each pixel based on a range of intensity"
signature: "public bool Imagick::adaptiveThresholdImage(int $width, int $height, int $offset)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.adaptivethresholdimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Selects a threshold for each pixel based on a range of intensity

## Description

```php
public bool Imagick::adaptiveThresholdImage(int $width, int $height, int $offset)
```

Selects an individual threshold for each pixel based on the range of intensity values in its local neighborhood. This allows for thresholding of an image whose global intensity histogram doesn't contain distinctive peaks.

## Parameters

- **`$width`** — Width of the local neighborhood.
- **`$height`** — Height of the local neighborhood.
- **`$offset`** — The mean offset

## Return Values

Returns `true` on success.

## Examples

**`Imagick::adaptiveThresholdImage()`**

```php

      
<?php
function adaptiveThresholdImage($imagePath, $width, $height, $adaptiveOffset) {
    $imagick = new \Imagick(realpath($imagePath));
    $adaptiveOffsetQuantum = intval($adaptiveOffset * \Imagick::getQuantum());
    $imagick->adaptiveThresholdImage($width, $height, $adaptiveOffsetQuantum);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>

      
```
