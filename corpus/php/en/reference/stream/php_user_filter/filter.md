---
id: "en-php-function-php-user-filter-filter"
language: "php"
lang: "en"
category: "function"
name: "php_user_filter::filter"
title: "Called when applying the filter"
signature: "public int php_user_filter::filter(resource $in, resource $out, int $consumed, bool $closing)"
module: "stream"
source_url: "https://www.php.net/manual/en/php-user-filter.filter.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Called when applying the filter

## Description

```php
public int php_user_filter::filter(resource $in, resource $out, int $consumed, bool $closing)
```

This method is called whenever data is read from or written to the attached stream (such as with `fread()` or `fwrite()`).

## Parameters

- **`$in`** — `$in` is a resource pointing to a `bucket brigade` which contains one or more `bucket` objects containing data to be filtered.
- **`$out`** — `$out` is a resource pointing to a second `bucket brigade` into which your modified buckets should be placed.
- **`$consumed`** — `$consumed`, which must *always* be declared by reference, should be incremented by the length of the data which your filter reads in and alters. In most cases this means you will increment `$consumed` by `$bucket->datalen` for each `$bucket`.
- **`$closing`** — If the stream is in the process of closing (and therefore this is the last pass through the filterchain), the `$closing` parameter will be set to `true`.

## Return Values

The `filter()` method must return one of three values upon completion.

| Return Value | Meaning |
| --- | --- |
| `PSFS_PASS_ON` | Filter processed successfully with data available in the `$out` `bucket brigade`. |
| `PSFS_FEED_ME` | Filter processed successfully, however no data was available to return. More data is required from the stream or prior filter. |
| `PSFS_ERR_FATAL` (default) | The filter experienced an unrecoverable error and cannot continue. |
