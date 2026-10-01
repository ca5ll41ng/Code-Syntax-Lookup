---
id: "en-php-function-imagick-getimagelength"
language: "php"
lang: "en"
category: "function"
name: "Imagick::getImageLength"
title: "Returns the image length in bytes"
signature: "public int Imagick::getImageLength()"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.getimagelength.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the image length in bytes

## Description

```php
public int Imagick::getImageLength()
```

Returns the image length in bytes

## Parameters

This function has no parameters.

## Return Values

Returns an int containing the current image size.

## Examples

**Using `Imagick::getImageLength()`:**

Getting image length in bytes

```php


<?php
$image = new Imagick('test.jpg');
echo $image->getImageLength() . ' bytes';
?>

    
```
