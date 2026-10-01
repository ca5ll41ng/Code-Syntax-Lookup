---
id: "en-php-function-function-variant-date-to-timestamp"
language: "php"
lang: "en"
category: "function"
name: "variant_date_to_timestamp"
title: "Converts a variant date/time value to Unix timestamp"
signature: "int|null variant_date_to_timestamp(variant $variant)"
module: "com"
source_url: "https://www.php.net/manual/en/function.variant-date-to-timestamp.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Converts a variant date/time value to Unix timestamp

## Description

```php
int|null variant_date_to_timestamp(variant $variant)
```

Converts `$variant` from a `VT_DATE` (or similar) value into a Unix timestamp. This allows easier interoperability between the Unix-ish parts of PHP and COM.

## Parameters

- **`$variant`** — The variant.

## Return Values

Returns a unix timestamp, or `null` on failure.

## See Also

`variant_date_from_timestamp()` `date()` `strftime()`
