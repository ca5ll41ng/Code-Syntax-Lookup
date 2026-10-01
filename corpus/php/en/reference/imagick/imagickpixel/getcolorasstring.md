---
id: "en-php-function-imagickpixel-getcolorasstring"
language: "php"
lang: "en"
category: "function"
name: "ImagickPixel::getColorAsString"
title: "Returns the color as a string"
signature: "public string ImagickPixel::getColorAsString()"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagickpixel.getcolorasstring.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the color as a string

## Description

```php
public string ImagickPixel::getColorAsString()
```

Returns the color of the ImagickPixel object as a string.

## Parameters

This function has no parameters.

## Return Values

Returns the color of the ImagickPixel object as a string.

## Examples

**Basic `Imagick::getColorAsString()` usage**

```php


<?php

//Create an ImagickPixel with the predefined color 'brown'
$color = new ImagickPixel('brown');

$color->setColorValue(Imagick::COLOR_ALPHA, 64 / 256.0);

$colorInfo = $color->getColorAsString();

print_r($colorInfo);
?>

    
```

The above example will output:

```text


rgb(165,42,42)

    
```

## Notes

> Alpha not returned
>
> This function does not return the alpha value of the color in the string.
