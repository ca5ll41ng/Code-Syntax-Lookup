---
id: "en-php-function-imagickdraw-pushdefs"
language: "php"
lang: "en"
category: "function"
name: "ImagickDraw::pushDefs"
title: "Indicates that following commands create named elements for early processing"
signature: "public bool ImagickDraw::pushDefs()"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagickdraw.pushdefs.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Indicates that following commands create named elements for early processing

## Description

```php
public bool ImagickDraw::pushDefs()
```

> This function is currently not documented; only its argument list is available.

Indicates that commands up to a terminating `ImagickDraw::popDefs()` command create named elements (e.g. clip-paths, textures, etc.) which may safely be processed earlier for the sake of efficiency.

## Return Values

No value is returned.
