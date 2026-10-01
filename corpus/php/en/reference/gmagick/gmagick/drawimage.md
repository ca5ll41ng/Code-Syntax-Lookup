---
id: "en-php-function-gmagick-drawimage"
language: "php"
lang: "en"
category: "function"
name: "Gmagick::drawimage"
title: "Renders the GmagickDraw object on the current image"
signature: "public Gmagick Gmagick::drawimage(GmagickDraw $GmagickDraw)"
module: "gmagick"
source_url: "https://www.php.net/manual/en/gmagick.drawimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Renders the GmagickDraw object on the current image

## Description

```php
public Gmagick Gmagick::drawimage(GmagickDraw $GmagickDraw)
```

Renders the `GmagickDraw` object on the current image.

## Parameters

- **`$GmagickDraw`** — The drawing operations to render on the image.

## Return Values

The drawn `Gmagick` object.

## Errors/Exceptions

Throws an `GmagickException` on error.
