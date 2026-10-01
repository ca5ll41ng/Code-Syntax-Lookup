---
id: "en-php-function-imagick-segmentimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::segmentImage"
title: "Segments an image"
signature: "public bool Imagick::segmentImage(int $COLORSPACE, float $cluster_threshold, float $smooth_threshold, bool $verbose = false)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.segmentimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Segments an image

## Description

```php
public bool Imagick::segmentImage(int $COLORSPACE, float $cluster_threshold, float $smooth_threshold, bool $verbose = false)
```

Analyses the image and identifies units that are similar. This method is available if Imagick has been compiled against ImageMagick version 6.4.5 or newer.

## Parameters

- **`$COLORSPACE`** — One of the COLORSPACE constants.
- **`$cluster_threshold`** — A percentage describing minimum number of pixels contained in hexedra before it is considered valid.
- **`$smooth_threshold`** — Eliminates noise from the histogram.
- **`$verbose`** — Whether to output detailed information about recognised classes.

## Return Values

## Examples

**`Imagick::segmentImage()`**

```php

      
<?php
function segmentImage($imagePath, $colorSpace, $clusterThreshold, $smoothThreshold) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->segmentImage($colorSpace, $clusterThreshold, $smoothThreshold);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

segmentImage($imagePath, \Imagick::COLORSPACE_RGB, 5, 5);

?>

      
```
