---
id: "en-php-function-imagick-autolevelimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::autoLevelImage"
title: "Adjusts the levels of a particular image channel"
signature: "public bool Imagick::autoLevelImage(int $channel = Imagick::CHANNEL_DEFAULT)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.autolevelimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Adjusts the levels of a particular image channel

## Description

```php
public bool Imagick::autoLevelImage(int $channel = Imagick::CHANNEL_DEFAULT)
```

Adjusts the levels of a particular image channel by scaling the minimum and maximum values to the full quantum range.

## Parameters

- **`$channel`** — Which channel should the auto-levelling should be done on.

## Return Values

Returns `true` on success.

## Examples

**`Imagick::autoLevelImage()`**

```php

      
<?php
function autoLevelImage($imagePath) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->autoLevelImage();
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>

      
```
