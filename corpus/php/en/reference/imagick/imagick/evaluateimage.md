---
id: "en-php-function-imagick-evaluateimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::evaluateImage"
title: "Applies an expression to an image"
signature: "public bool Imagick::evaluateImage(int $op, float $constant, int $channel = Imagick::CHANNEL_DEFAULT)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.evaluateimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Applies an expression to an image

## Description

```php
public bool Imagick::evaluateImage(int $op, float $constant, int $channel = Imagick::CHANNEL_DEFAULT)
```

Applies an arithmetic, relational, or logical expression to an image. Use these operators to lighten or darken an image, to increase or decrease contrast in an image, or to produce the "negative" of an image.

## Parameters

- **`$op`** — The evaluation operator
- **`$constant`** — The value of the operator
- **`$channel`** — Provide any channel constant that is valid for your channel mode. To apply to more than one channel, combine channeltype constants using bitwise operators. Refer to this list of channel constants.

## Return Values

Returns `true` on success.

## Errors/Exceptions

Throws ImagickException on error.

## Examples

**Using `Imagick::evaluateImage()`**

Using evaluateImage to reduce opacity in an image.

```php


<?php
// Create new object with the image
$im = new Imagick('example-alpha.png');

// Reduce the alpha by 50%
$im->evaluateImage(Imagick::EVALUATE_DIVIDE, 2, Imagick::CHANNEL_ALPHA);

// Output the image
header("Content-Type: image/png");
echo $im;
?>

   
```
