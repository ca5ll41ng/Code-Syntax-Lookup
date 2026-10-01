---
id: "en-php-function-gmagick-readimagefile"
language: "php"
lang: "en"
category: "function"
name: "Gmagick::readimagefile"
title: "The readimagefile purpose"
signature: "public Gmagick Gmagick::readimagefile(resource $fp, [string $filename = ...])"
module: "gmagick"
source_url: "https://www.php.net/manual/en/gmagick.readimagefile.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The readimagefile purpose

## Description

```php
public Gmagick Gmagick::readimagefile(resource $fp, [string $filename = ...])
```

Reads an image or image sequence from an open file descriptor.

## Parameters

- **`$fp`** — The file descriptor.

## Return Values

The `Gmagick` object.

## Errors/Exceptions

Throws an `GmagickException` on error.
