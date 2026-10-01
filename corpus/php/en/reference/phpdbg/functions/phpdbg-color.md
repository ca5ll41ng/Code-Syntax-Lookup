---
id: "en-php-function-function-phpdbg-color"
language: "php"
lang: "en"
category: "function"
name: "phpdbg_color"
title: "Sets the color of certain elements"
signature: "void phpdbg_color(int $element, string $color)"
module: "phpdbg"
source_url: "https://www.php.net/manual/en/function.phpdbg-color.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the color of certain elements

## Description

```php
void phpdbg_color(int $element, string $color)
```

Set the `$color` of the given `$element`.

## Parameters

- **`$element`** — One of the `PHPDBG_COLOR_{*}` constants.
- **`$color`** — The name of the color. One of `white`, `red`, `green`, `yellow`, `blue`, `purple`, `cyan` or `black`, optionally with either a trailing `-bold` or `-underline`, for instance, `white-bold` or `green-underline`.

## Return Values

No value is returned.

## See Also

 `phpdbg_prompt()`
