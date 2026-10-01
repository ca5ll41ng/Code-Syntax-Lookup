---
id: "en-php-function-locale-isrighttoleft"
language: "php"
lang: "en"
category: "function"
name: "Locale::isRightToLeft"
aliases: ["locale_is_right_to_left"]
title: "Check whether a locale uses a right-to-left writing system"
signature: "public static bool Locale::isRightToLeft(string $locale = \"\")"
module: "intl"
source_url: "https://www.php.net/manual/en/locale.isrighttoleft.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Check whether a locale uses a right-to-left writing system

## Description

Object-oriented style

```php
public static bool Locale::isRightToLeft(string $locale = "")
```

Procedural style

```php
bool locale_is_right_to_left(string $locale = "")
```

Determines whether a locale uses a right-to-left writing system.

This method relies on the ICU library and evaluates the dominant script associated with the locale.

## Parameters

- **`$locale`** — The locale identifier. If empty, the default locale is used.

## Return Values

Returns `true` if the locale uses a right-to-left writing system, or `false` otherwise.

## Changelog

|  |  |
| --- | --- |
| 8.5.0 | Added `Locale::isRightToLeft()`. |

## Examples

**Checking text direction for a locale**

```php


<?php

var_dump(Locale::isRightToLeft('en-US'));
var_dump(Locale::isRightToLeft('ar'));

   
```

The above example will output:

```text


bool(false)
bool(true)

   
```
