---
id: "en-php-function-gmagickdraw-arc"
language: "php"
lang: "en"
category: "function"
name: "GmagickDraw::arc"
title: "Draws an arc"
signature: "public GmagickDraw GmagickDraw::arc(float $sx, float $sy, float $ex, float $ey, float $sd, float $ed)"
module: "gmagick"
source_url: "https://www.php.net/manual/en/gmagickdraw.arc.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Draws an arc

## Description

```php
public GmagickDraw GmagickDraw::arc(float $sx, float $sy, float $ex, float $ey, float $sd, float $ed)
```

Draws an arc falling within a specified bounding rectangle on the image.

## Parameters

- **`$sx`** — starting x ordinate of bounding rectangle
- **`$sy`** — starting y ordinate of bounding rectangle
- **`$ex`** — ending x ordinate of bounding rectangle
- **`$ey`** — ending y ordinate of bounding rectangle
- **`$sd`** — starting degrees of rotation
- **`$ed`** — ending degrees of rotation

## Return Values

The `GmagickDraw` object.
