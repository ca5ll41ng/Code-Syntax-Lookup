---
id: "en-php-function-imagick-commentimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::commentImage"
title: "Adds a comment to your image"
signature: "public bool Imagick::commentImage(string $comment)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.commentimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Adds a comment to your image

## Description

```php
public bool Imagick::commentImage(string $comment)
```

Adds a comment to your image.

## Parameters

- **`$comment`** — The comment to add

## Return Values

Returns `true` on success.

## Errors/Exceptions

Throws ImagickException on error.

## Examples

**Using `Imagick::commentImage()`:**

Commenting an image and retrieving the comment:

```php


<?php

/* Create new Imagick object */
$im = new imagick();

/* Create an empty image */
$im->newImage(100, 100, new ImagickPixel("red"));

/* Add comment to the image */
$im->commentImage("Hello World!");

/* Display the comment */
echo $im->getImageProperty("comment");

?>

    
```
