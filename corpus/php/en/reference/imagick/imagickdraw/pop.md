---
id: "en-php-function-imagickdraw-pop"
language: "php"
lang: "en"
category: "function"
name: "ImagickDraw::pop"
title: "Destroys the current ImagickDraw in the stack, and returns to the previously pushed ImagickDraw"
signature: "public bool ImagickDraw::pop()"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagickdraw.pop.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Destroys the current ImagickDraw in the stack, and returns to the previously pushed ImagickDraw

## Description

```php
public bool ImagickDraw::pop()
```

> This function is currently not documented; only its argument list is available.

Destroys the current ImagickDraw in the stack, and returns to the previously pushed ImagickDraw. Multiple ImagickDraws may exist. It is an error to attempt to pop more ImagickDraws than have been pushed, and it is proper form to pop all ImagickDraws which have been pushed.

## Return Values

Returns `true` on success or `false` on failure.
