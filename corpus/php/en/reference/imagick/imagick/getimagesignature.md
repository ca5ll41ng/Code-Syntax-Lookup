---
id: "en-php-function-imagick-getimagesignature"
language: "php"
lang: "en"
category: "function"
name: "Imagick::getImageSignature"
title: "Generates an SHA-256 message digest"
signature: "public string Imagick::getImageSignature()"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.getimagesignature.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Generates an SHA-256 message digest

## Description

```php
public string Imagick::getImageSignature()
```

Generates an SHA-256 message digest for the image pixel stream.

## Parameters

This function has no parameters.

## Return Values

Returns a string containing the SHA-256 hash of the file.

## Errors/Exceptions

Throws ImagickException on error.
