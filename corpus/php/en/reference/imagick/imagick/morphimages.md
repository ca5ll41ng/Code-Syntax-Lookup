---
id: "en-php-function-imagick-morphimages"
language: "php"
lang: "en"
category: "function"
name: "Imagick::morphImages"
title: "Method morphs a set of images"
signature: "public Imagick Imagick::morphImages(int $number_frames)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.morphimages.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Method morphs a set of images

## Description

```php
public Imagick Imagick::morphImages(int $number_frames)
```

Method morphs a set of images. Both the image pixels and size are linearly interpolated to give the appearance of a meta-morphosis from one image to the next.

## Parameters

- **`$number_frames`** — The number of in-between images to generate.

## Return Values

This method returns a new Imagick object on success. Throw an `ImagickException` on error.
