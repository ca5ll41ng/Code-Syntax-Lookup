---
id: "en-php-function-gmagick-addimage"
language: "php"
lang: "en"
category: "function"
name: "Gmagick::addimage"
title: "Adds new image to Gmagick object image list"
signature: "public Gmagick Gmagick::addimage(Gmagick $source)"
module: "gmagick"
source_url: "https://www.php.net/manual/en/gmagick.addimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Adds new image to Gmagick object image list

## Description

```php
public Gmagick Gmagick::addimage(Gmagick $source)
```

Adds new image to Gmagick object from the current position of the source object. After the operation iterator position is moved at the end of the list.

## Parameters

- **`$source`** — The source Gmagick object

## Return Values

The Gmagick object with image added

## Errors/Exceptions

Throws an `GmagickException` on error.
