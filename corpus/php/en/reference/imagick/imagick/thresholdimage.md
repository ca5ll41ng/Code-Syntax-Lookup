---
id: "en-php-function-imagick-thresholdimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::thresholdImage"
title: "Changes the value of individual pixels based on a threshold"
signature: "public bool Imagick::thresholdImage(float $threshold, int $channel = Imagick::CHANNEL_DEFAULT)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.thresholdimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Changes the value of individual pixels based on a threshold

## Description

```php
public bool Imagick::thresholdImage(float $threshold, int $channel = Imagick::CHANNEL_DEFAULT)
```

Changes the value of individual pixels based on the intensity of each pixel compared to threshold. The result is a high-contrast, two color image.

## Parameters

- **`$threshold`**
- **`$channel`**

## Return Values

Returns `true` on success.

## Examples

**`Imagick::thresholdImage()`**

```php

      
<?php
function thresholdimage($imagePath, $threshold, $channel) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->thresholdimage($threshold * \Imagick::getQuantum(), $channel);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>

      
```
