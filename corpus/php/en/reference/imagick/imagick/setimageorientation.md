---
id: "en-php-function-imagick-setimageorientation"
language: "php"
lang: "en"
category: "function"
name: "Imagick::setImageOrientation"
title: "Sets the image orientation"
signature: "public bool Imagick::setImageOrientation(int $orientation)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.setimageorientation.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the image orientation

## Description

```php
public bool Imagick::setImageOrientation(int $orientation)
```

Sets the image orientation.

## Parameters

- **`$orientation`** — One of the orientation constants

## Return Values

Returns `true` on success.

## Examples

**`Imagick::setImageOrientation()`**

```php

      
<?php
//Doesn't appear to do anything
function setImageOrientation($imagePath, $orientationType) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->setImageOrientation($orientationType);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>

      
```
