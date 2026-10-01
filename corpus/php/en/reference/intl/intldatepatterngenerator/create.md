---
id: "en-php-function-intldatepatterngenerator-create"
language: "php"
lang: "en"
category: "function"
name: "IntlDatePatternGenerator::create"
aliases: ["IntlDatePatternGenerator::__construct"]
title: "Creates a new IntlDatePatternGenerator instance"
signature: "public static IntlDatePatternGenerator|null IntlDatePatternGenerator::create(string|null $locale = null)"
module: "intl"
source_url: "https://www.php.net/manual/en/intldatepatterngenerator.create.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates a new IntlDatePatternGenerator instance

## Description

```php
public static IntlDatePatternGenerator|null IntlDatePatternGenerator::create(string|null $locale = null)
```

```php
public IntlDatePatternGenerator::__construct(string|null $locale = null)
```

Creates a new `IntlDatePatternGenerator` instance.

## Parameters

- **`$locale`** — The locale. If `null` is passed, uses the ini setting intl.default_locale.

## Return Values

Returns an `IntlDatePatternGenerator` instance on success, or `null` on failure.
