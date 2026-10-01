---
id: "en-php-function-gmagick-setimagechanneldepth"
language: "php"
lang: "en"
category: "function"
name: "Gmagick::setimagechanneldepth"
title: "Sets the depth of a particular image channel"
signature: "public Gmagick Gmagick::setimagechanneldepth(int $channel, int $depth)"
module: "gmagick"
source_url: "https://www.php.net/manual/en/gmagick.setimagechanneldepth.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the depth of a particular image channel

## Description

```php
public Gmagick Gmagick::setimagechanneldepth(int $channel, int $depth)
```

Sets the depth of a particular image channel.

## Parameters

- **`$channel`** — One of the Channel constant (`Gmagick::CHANNEL_*`).
- **`$depth`** — The image depth in bits.

## Return Values

The `Gmagick` object.

## Errors/Exceptions

Throws an `GmagickException` on error.
