---
id: "en-php-function-imagick-resetimagepage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::resetImagePage"
title: "Reset image page"
signature: "public bool Imagick::resetImagePage(string $page)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.resetimagepage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Reset image page

## Description

```php
public bool Imagick::resetImagePage(string $page)
```

The page definition as a string. The string is in format WxH+x+y. This method is available if Imagick has been compiled against ImageMagick version 6.3.6 or newer.

## Parameters

- **`$page`** — The page definition. For example `7168x5147+0+0`

## Return Values

Returns `true` on success.
