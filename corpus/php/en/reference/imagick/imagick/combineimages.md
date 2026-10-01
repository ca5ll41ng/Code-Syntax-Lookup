---
id: "en-php-function-imagick-combineimages"
language: "php"
lang: "en"
category: "function"
name: "Imagick::combineImages"
title: "Combines one or more images into a single image"
signature: "public Imagick Imagick::combineImages(int $channelType)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.combineimages.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Combines one or more images into a single image

## Description

```php
public Imagick Imagick::combineImages(int $channelType)
```

Combines one or more images into a single image. The grayscale value of the pixels of each image in the sequence is assigned in order to the specified channels of the combined image. The typical ordering would be image 1 => Red, 2 => Green, 3 => Blue, etc.

## Parameters

- **`$channelType`** — Provide any channel constant that is valid for your channel mode. To apply to more than one channel, combine channeltype constants using bitwise operators. Refer to this list of channel constants.

## Return Values

Returns `true` on success.

## Errors/Exceptions

Throws ImagickException on error.
