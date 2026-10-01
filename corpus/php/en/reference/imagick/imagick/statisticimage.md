---
id: "en-php-function-imagick-statisticimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::statisticImage"
title: "Modifies image using a statistics function"
signature: "public bool Imagick::statisticImage(int $type, int $width, int $height, int $channel = Imagick::CHANNEL_DEFAULT)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.statisticimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Modifies image using a statistics function

## Description

```php
public bool Imagick::statisticImage(int $type, int $width, int $height, int $channel = Imagick::CHANNEL_DEFAULT)
```

Replace each pixel with corresponding statistic from the neighborhood of the specified width and height.

## Parameters

- **`$type`**
- **`$width`**
- **`$height`**
- **`$channel`**

## Return Values

Returns `true` on success.

## Examples

**`Imagick::statisticImage()`**

```php

      
<?php
function statisticImage($imagePath, $statisticType, $width, $height, $channel) {
    $imagick = new \Imagick(realpath($imagePath));

    $imagick->statisticImage(
        $statisticType,
        $width,
        $height,
        $channel
    );

    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

statisticImage($imagePath, \Imagick::STATISTIC_MEDIAN, 5, 5, \Imagick::CHANNEL_DEFAULT);

?>

      
```
