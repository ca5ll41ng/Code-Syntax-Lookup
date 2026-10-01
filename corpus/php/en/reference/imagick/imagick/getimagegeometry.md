---
id: "en-php-function-imagick-getimagegeometry"
language: "php"
lang: "en"
category: "function"
name: "Imagick::getImageGeometry"
title: "Gets the width and height as an associative array"
signature: "public array Imagick::getImageGeometry()"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.getimagegeometry.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets the width and height as an associative array

## Description

```php
public array Imagick::getImageGeometry()
```

Returns the width and height as an associative array.

## Parameters

This function has no parameters.

## Return Values

Returns an array with the width/height of the image.

## Errors/Exceptions

Throws ImagickException on error.

## Examples

**Using `Imagick::getImageGeometry()`**

```php

      
<?php
$imagick = new Imagick();
$imagick->newImage(100, 200, "black");
print_r($imagick->getImageGeometry());
?>

      
```

The above example will output:

```text


Array
(
    [width] => 100
    [height] => 200
)

      
```
