---
id: "en-php-function-imagick-getimageproperties"
language: "php"
lang: "en"
category: "function"
name: "Imagick::getImageProperties"
title: "Returns the image properties"
signature: "public array Imagick::getImageProperties(string $pattern = \"*\", bool $include_values = true)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.getimageproperties.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the image properties

## Description

```php
public array Imagick::getImageProperties(string $pattern = "*", bool $include_values = true)
```

Returns all associated properties that match the pattern. If `false` is passed as second parameter only the property names are returned. This method is available if Imagick has been compiled against ImageMagick version 6.3.6 or newer.

## Parameters

- **`$pattern`** — The pattern for property names.
- **`$include_values`** — Whether to return only property names. If `false` then only property names will be returned.

## Return Values

Returns an array containing the image properties or property names.

## Examples

**Using `Imagick::getImageProperties()`:**

An example of extracting EXIF information.

```php


<?php

/* Create the object */
$im = new imagick("/path/to/example.jpg");

/* Get the EXIF information */
$exifArray = $im->getImageProperties("exif:*");

/* Loop through the EXIF properties */
foreach ($exifArray as $name => $property)
{
    echo "{$name} => {$property}<br />\n"; 
}

?>

    
```
