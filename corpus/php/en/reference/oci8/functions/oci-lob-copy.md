---
id: "en-php-function-function-oci-lob-copy"
language: "php"
lang: "en"
category: "function"
name: "oci_lob_copy"
title: "Copies large object"
signature: "bool oci_lob_copy(OCILob $to, OCILob $from, int|null $length = null)"
module: "oci8"
source_url: "https://www.php.net/manual/en/function.oci-lob-copy.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Copies large object

## Description

```php
bool oci_lob_copy(OCILob $to, OCILob $from, int|null $length = null)
```

Copies a large object or a part of a large object to another large object. Old LOB-recipient data will be overwritten.

If you need to copy a particular part of a LOB to a particular position of a LOB, use `OCILob::seek()` to move LOB internal pointers.

## Parameters

- **`$to`** — The destination LOB.
- **`$from`** — The copied LOB.
- **`$length`** — Indicates the length of data to be copied.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0, PECL OCI8 3.0.0 | `$length` is now nullable. |

## Notes

> The OCILob class was called OCI-Lob prior to PHP 8 and PECL OCI8 3.0.0.
