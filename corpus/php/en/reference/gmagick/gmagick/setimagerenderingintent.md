---
id: "en-php-function-gmagick-setimagerenderingintent"
language: "php"
lang: "en"
category: "function"
name: "Gmagick::setimagerenderingintent"
title: "Sets the image rendering intent"
signature: "public Gmagick Gmagick::setimagerenderingintent(int $rendering_intent)"
module: "gmagick"
source_url: "https://www.php.net/manual/en/gmagick.setimagerenderingintent.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the image rendering intent

## Description

```php
public Gmagick Gmagick::setimagerenderingintent(int $rendering_intent)
```

Sets the image rendering intent.

## Parameters

- **`$rendering_intent`** — One of the Rendering Intent constant (`Gmagick::RENDERINGINTENT_*`).

## Return Values

The `Gmagick` object.

## Errors/Exceptions

Throws an `GmagickException` on error.
