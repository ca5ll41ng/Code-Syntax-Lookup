---
id: "en-php-function-imagickdraw-settextencoding"
language: "php"
lang: "en"
category: "function"
name: "ImagickDraw::setTextEncoding"
title: "Specifies the text code set"
signature: "public bool ImagickDraw::setTextEncoding(string $encoding)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagickdraw.settextencoding.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Specifies the text code set

## Description

```php
public bool ImagickDraw::setTextEncoding(string $encoding)
```

> This function is currently not documented; only its argument list is available.

Specifies the code set to use for text annotations. The only character encoding which may be specified at this time is "UTF-8" for representing Unicode as a sequence of bytes. Specify an empty string to set text encoding to the system's default. Successful text annotation using Unicode may require fonts designed to support Unicode.

## Parameters

- **`$encoding`** — the encoding name

## Return Values

No value is returned.
