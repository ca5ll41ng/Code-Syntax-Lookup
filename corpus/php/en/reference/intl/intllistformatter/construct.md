---
id: "en-php-function-intllistformatter-construct"
language: "php"
lang: "en"
category: "function"
name: "IntlListFormatter::__construct"
title: "Creates a new IntlListFormatter instance"
signature: "public IntlListFormatter::__construct(string $locale, int $type = IntlListFormatter::TYPE_AND, int $width = IntlListFormatter::WIDTH_WIDE)"
module: "intl"
source_url: "https://www.php.net/manual/en/intllistformatter.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates a new IntlListFormatter instance

## Description

```php
public IntlListFormatter::__construct(string $locale, int $type = IntlListFormatter::TYPE_AND, int $width = IntlListFormatter::WIDTH_WIDE)
```

Creates a new `IntlListFormatter` instance for the given locale.

## Parameters

- **`$locale`** — The locale to use for formatting.
- **`$type`** — The list type. One of the `IntlListFormatter::TYPE_{*}` constants: `IntlListFormatter::TYPE_AND`, `IntlListFormatter::TYPE_OR`, or `IntlListFormatter::TYPE_UNITS`.
- **`$width`** — The list width. One of the `IntlListFormatter::WIDTH_{*}` constants: `IntlListFormatter::WIDTH_WIDE`, `IntlListFormatter::WIDTH_SHORT`, or `IntlListFormatter::WIDTH_NARROW`.

## Errors/Exceptions

Throws an IntlException if the formatter cannot be created (e.g. invalid locale or ICU version is below 67).

## Changelog

|  |  |
| --- | --- |
| 8.5.0 | The class was added. |

## See Also

 `IntlListFormatter::format()`
