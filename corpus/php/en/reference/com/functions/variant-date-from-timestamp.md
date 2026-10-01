---
id: "en-php-function-function-variant-date-from-timestamp"
language: "php"
lang: "en"
category: "function"
name: "variant_date_from_timestamp"
title: "Returns a variant date representation of a Unix timestamp"
signature: "variant variant_date_from_timestamp(int $timestamp)"
module: "com"
source_url: "https://www.php.net/manual/en/function.variant-date-from-timestamp.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns a variant date representation of a Unix timestamp

## Description

```php
variant variant_date_from_timestamp(int $timestamp)
```

Converts `$timestamp` from a unix timestamp value into a variant of type `VT_DATE`. This allows easier interopability between the unix-ish parts of PHP and COM.

## Parameters

- **`$timestamp`** — A unix timestamp.

## Return Values

Returns a `VT_DATE` variant.

## See Also

`variant_date_to_timestamp()` `mktime()` `time()`
