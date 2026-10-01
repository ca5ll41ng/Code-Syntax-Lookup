---
id: "en-php-function-function-oci-lob-is-equal"
language: "php"
lang: "en"
category: "function"
name: "oci_lob_is_equal"
title: "Compares two LOB/FILE locators for equality"
signature: "bool oci_lob_is_equal(OCILob $lob1, OCILob $lob2)"
module: "oci8"
source_url: "https://www.php.net/manual/en/function.oci-lob-is-equal.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Compares two LOB/FILE locators for equality

## Description

```php
bool oci_lob_is_equal(OCILob $lob1, OCILob $lob2)
```

Compares two LOB/FILE locators.

## Parameters

- **`$lob1`** — A LOB identifier.
- **`$lob2`** — A LOB identifier.

## Return Values

Returns `true` if these objects are equal, `false` otherwise.

## Notes

> The OCILob class was called OCI-Lob prior to PHP 8 and PECL OCI8 3.0.0.
