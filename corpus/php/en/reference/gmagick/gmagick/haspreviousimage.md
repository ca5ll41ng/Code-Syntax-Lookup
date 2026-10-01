---
id: "en-php-function-gmagick-haspreviousimage"
language: "php"
lang: "en"
category: "function"
name: "Gmagick::haspreviousimage"
title: "Checks if the object has a previous image"
signature: "public mixed Gmagick::haspreviousimage()"
module: "gmagick"
source_url: "https://www.php.net/manual/en/gmagick.haspreviousimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Checks if the object has a previous image

## Description

```php
public mixed Gmagick::haspreviousimage()
```

Returns `true` if the object has more images when traversing the list in the reverse direction.

## Parameters

This function has no parameters.

## Return Values

Returns `true` if the object has more images when traversing the list in the reverse direction, returns `false` if there are none.

## Errors/Exceptions

Throws an `GmagickException` on error.
