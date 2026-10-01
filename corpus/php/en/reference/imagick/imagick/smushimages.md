---
id: "en-php-function-imagick-smushimages"
language: "php"
lang: "en"
category: "function"
name: "Imagick::smushImages"
title: "Takes all images from the current image pointer to the end of the image list and smushs them"
signature: "public Imagick Imagick::smushImages(bool $stack, int $offset)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.smushimages.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Takes all images from the current image pointer to the end of the image list and smushs them

## Description

```php
public Imagick Imagick::smushImages(bool $stack, int $offset)
```

Takes all images from the current image pointer to the end of the image list and smushs them to each other top-to-bottom if the stack parameter is true, otherwise left-to-right.

## Parameters

- **`$stack`**
- **`$offset`**

## Return Values

The new smushed image.

## Examples

**`Imagick::smushImages()`**

```php

      
<?php
function smushImages($imagePath, $imagePath2) {

    $imagick = new \Imagick(realpath($imagePath));
    $imagick2 = new \Imagick(realpath($imagePath2));

    $imagick->addimage($imagick2);
    $smushed = $imagick->smushImages(false, 50);
    $smushed->setImageFormat('jpg');
    header("Content-Type: image/jpg");
    echo $smushed->getImageBlob();
}

?>

      
```
