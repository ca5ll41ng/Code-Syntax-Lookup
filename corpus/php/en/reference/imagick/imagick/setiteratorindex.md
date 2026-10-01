---
id: "en-php-function-imagick-setiteratorindex"
language: "php"
lang: "en"
category: "function"
name: "Imagick::setIteratorIndex"
title: "Set the iterator position"
signature: "public bool Imagick::setIteratorIndex(int $index)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.setiteratorindex.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set the iterator position

## Description

```php
public bool Imagick::setIteratorIndex(int $index)
```

Set the iterator to the position in the image list specified with the index parameter. This method is available if Imagick has been compiled against ImageMagick version 6.2.9 or newer.

## Parameters

- **`$index`** — The position to set the iterator to

## Return Values

Returns `true` on success.

## Examples

**Using `Imagick::setIteratorIndex()`:**

Create images, set and get the iterator index

```php


<?php
$im = new Imagick();
$im->newImage(100, 100, new ImagickPixel("red"));
$im->newImage(100, 100, new ImagickPixel("green"));
$im->newImage(100, 100, new ImagickPixel("blue"));

$im->setIteratorIndex(1);
echo $im->getIteratorIndex();
?>

    
```

## See Also

`Imagick::getIteratorIndex()` `Imagick::getImageIndex()` `Imagick::setImageIndex()`
