---
id: "en-php-function-imagick-getquantumrange"
language: "php"
lang: "en"
category: "function"
name: "Imagick::getQuantumRange"
title: "Returns the Imagick quantum range"
signature: "public static array Imagick::getQuantumRange()"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.getquantumrange.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the Imagick quantum range

## Description

```php
public static array Imagick::getQuantumRange()
```

Returns the quantum range for the Imagick instance.

## Parameters

This function has no parameters.

## Return Values

Returns an associative array containing the quantum range as an `int` (`"quantumRangeLong"`) and as a `string` (`"quantumRangeString"`).

## Errors/Exceptions

Throws ImagickException on error.
