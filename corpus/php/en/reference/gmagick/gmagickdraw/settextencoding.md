---
id: "en-php-function-gmagickdraw-settextencoding"
language: "php"
lang: "en"
category: "function"
name: "GmagickDraw::settextencoding"
title: "Specifies the text code set"
signature: "public GmagickDraw GmagickDraw::settextencoding(string $encoding)"
module: "gmagick"
source_url: "https://www.php.net/manual/en/gmagickdraw.settextencoding.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Specifies the text code set

## Description

```php
public GmagickDraw GmagickDraw::settextencoding(string $encoding)
```

Specifies the code set to use for text annotations. The only character encoding which may be specified at this time is "UTF-8" for representing Unicode as a sequence of bytes. Specify an empty string to set text encoding to the system's default. Successful text annotation using Unicode may require fonts designed to support Unicode.

## Parameters

- **`$encoding`** — Character string specifying text encoding

## Return Values

The `GmagickDraw` object.
