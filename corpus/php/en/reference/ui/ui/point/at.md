---
id: "en-php-function-ui-point-at"
language: "php"
lang: "en"
category: "function"
name: "UI\\Point::at"
title: "Size Coercion"
signature: "public static UI\\Point UI\\Point::at(float $point)"
module: "ui"
source_url: "https://www.php.net/manual/en/ui-point.at.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Size Coercion

## Description

```php
public static UI\Point UI\Point::at(float $point)
```

```php
public static UI\Point UI\Point::at(UI\Size $size)
```

Shall return a UI\Point object where x and y are equal to those supplied, either in float or UI\Size form

## Parameters

- **`$point`** — The value for x and y
- **`$size`** — The Size to convert

## Return Values

The resulting Point
