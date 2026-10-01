---
id: "en-php-function-imagick-setimageiterations"
language: "php"
lang: "en"
category: "function"
name: "Imagick::setImageIterations"
title: "Sets the image iterations"
signature: "public bool Imagick::setImageIterations(int $iterations)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.setimageiterations.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the image iterations

## Description

```php
public bool Imagick::setImageIterations(int $iterations)
```

Sets the number of iterations an animated image is repeated.

## Parameters

- **`$iterations`** — The number of iterations the image should loop over. Set to '0' to loop continuously.

## Return Values

Returns `true` on success.

## Errors/Exceptions

Throws ImagickException on error.

## Examples

**Basic `Imagick::setImageIterations()` usage**

```php


<?php

$imagick = new Imagick(realpath("Test.gif"));

$imagick = $imagick->coalesceImages();
$imagick->setImageIterations(1);
$imagick = $imagick->deconstructImages();

$imagick->writeImages('/path/to/save/OnceOnly.gif', true);

?>

    
```
