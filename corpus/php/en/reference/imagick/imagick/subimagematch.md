---
id: "en-php-function-imagick-subimagematch"
language: "php"
lang: "en"
category: "function"
name: "Imagick::subImageMatch"
title: "Searches for a subimage in the current image and returns a similarity image"
signature: "public Imagick Imagick::subImageMatch(Imagick $Imagick, [array $offset = ...], [float $similarity = ...])"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.subimagematch.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Searches for a subimage in the current image and returns a similarity image

## Description

```php
public Imagick Imagick::subImageMatch(Imagick $Imagick, [array $offset = ...], [float $similarity = ...])
```

Searches for a subimage in the current image and returns a similarity image such that an exact match location is completely white and if none of the pixels match, black, otherwise some gray level in-between. You can also pass in the optional parameters bestMatch and similarity. After calling the function similarity will be set to the 'score' of the similarity between the subimage and the matching position in the larger image, bestMatch will contain an associative array with elements x, y, width, height that describe the matching region.

## Parameters

- **`$Imagick`**
- **`$offset`**
- **`$similarity`** — A new image that displays the amount of similarity at each pixel.

## Return Values

## Examples

**`Imagick::subImageMatch()`**

```php

      
<?php
function subImageMatch($imagePath) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick2 = clone $imagick;
    $imagick2->cropimage(40, 40, 250, 110);
    $imagick2->vignetteimage(0, 1, 3, 3);

    $similarity = null;
    $bestMatch = null;
    $comparison = $imagick->subImageMatch($imagick2, $bestMatch, $similarity);

    $comparison->setImageFormat('png');
    header("Content-Type: image/png");
    echo $imagick->getImageBlob();
}

?>

      
```
