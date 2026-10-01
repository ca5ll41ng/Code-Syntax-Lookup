---
id: "en-php-function-gmagick-setsamplingfactors"
language: "php"
lang: "en"
category: "function"
name: "Gmagick::setsamplingfactors"
title: "Sets the image sampling factors"
signature: "public Gmagick Gmagick::setsamplingfactors(array $factors)"
module: "gmagick"
source_url: "https://www.php.net/manual/en/gmagick.setsamplingfactors.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the image sampling factors

## Description

```php
public Gmagick Gmagick::setsamplingfactors(array $factors)
```

Sets the image sampling factors.

## Parameters

- **`$factors`** — An array of `float`s representing the sampling factor for each color component (in RGB order).

## Return Values

The `Gmagick` object.

## Errors/Exceptions

Throws an `GmagickException` on error.
