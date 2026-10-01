---
id: "en-php-function-gmagick-thumbnailimage"
language: "php"
lang: "en"
category: "function"
name: "Gmagick::thumbnailimage"
title: "Changes the size of an image"
signature: "public Gmagick Gmagick::thumbnailimage(int $width, int $height, bool $fit = false)"
module: "gmagick"
source_url: "https://www.php.net/manual/en/gmagick.thumbnailimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Changes the size of an image

## Description

```php
public Gmagick Gmagick::thumbnailimage(int $width, int $height, bool $fit = false)
```

Changes the size of an image to the given dimensions and removes any associated profiles. The goal is to produce small low cost thumbnail images suited for display on the Web. If `true` is given as a third parameter then columns and rows parameters are used as maximums for each side. Both sides will be scaled down until the match or are smaller than the parameter given for the side.

## Parameters

- **`$width`** — Image width.
- **`$height`** — Image height.

## Return Values

The `Gmagick` object.

## Errors/Exceptions

Throws an `GmagickException` on error.
