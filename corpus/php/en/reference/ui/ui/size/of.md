---
id: "en-php-function-ui-size-of"
language: "php"
lang: "en"
category: "function"
name: "UI\\Size::of"
title: "Point Coercion"
signature: "public static UI\\Size UI\\Size::of(float $size)"
module: "ui"
source_url: "https://www.php.net/manual/en/ui-size.of.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Point Coercion

## Description

```php
public static UI\Size UI\Size::of(float $size)
```

```php
public static UI\Size UI\Size::of(UI\Point $point)
```

Shall return a UI\Size object where width and height are equal to those supplied, either in float or UI\Point form

## Parameters

- **`$size`** — The value for width and height
- **`$point`** — The Point to convert

## Return Values

The resulting Size
