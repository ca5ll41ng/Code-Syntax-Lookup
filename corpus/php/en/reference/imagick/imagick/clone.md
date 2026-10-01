---
id: "en-php-function-imagick-clone"
language: "php"
lang: "en"
category: "function"
name: "Imagick::clone"
title: "Makes an exact copy of the Imagick object"
signature: "public Imagick Imagick::clone()"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.clone.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Makes an exact copy of the Imagick object

## Description

```php
public Imagick Imagick::clone()
```

Makes an exact copy of the Imagick object.

> This function has been *DEPRECATED* as of imagick 3.1.0 in favour of using the clone keyword.

## Parameters

This function has no parameters.

## Return Values

A copy of the Imagick object is returned.

## Changelog

|  |  |
| --- | --- |
| PECL imagick 3.1.0 | The method was deprecated in favour of the clone keyword. |

## Examples

**Imagick object cloning in different versions of imagick**

```php


<?php
// Cloning an Imagick object in imagick 2.x and 3.0:
$newImage = $image->clone();

// Cloning an Imagick object from 3.1.0 on:
$newImage = clone $image;
?>

    
```
