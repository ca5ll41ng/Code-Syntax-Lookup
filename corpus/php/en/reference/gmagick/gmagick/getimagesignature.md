---
id: "en-php-function-gmagick-getimagesignature"
language: "php"
lang: "en"
category: "function"
name: "Gmagick::getimagesignature"
title: "Generates an SHA-256 message digest"
signature: "public string Gmagick::getimagesignature()"
module: "gmagick"
source_url: "https://www.php.net/manual/en/gmagick.getimagesignature.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Generates an SHA-256 message digest

## Description

```php
public string Gmagick::getimagesignature()
```

Generates an SHA-256 message digest for the image pixel stream.

## Parameters

This function has no parameters.

## Return Values

Returns a string containing the SHA-256 hash of the file.

## Errors/Exceptions

Throws an `GmagickException` on error.
