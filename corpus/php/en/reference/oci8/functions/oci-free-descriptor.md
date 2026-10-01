---
id: "en-php-function-function-oci-free-descriptor"
language: "php"
lang: "en"
category: "function"
name: "oci_free_descriptor"
title: "Frees a descriptor"
signature: "bool oci_free_descriptor(OCILob $lob)"
module: "oci8"
source_url: "https://www.php.net/manual/en/function.oci-free-descriptor.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Frees a descriptor

## Description

```php
bool oci_free_descriptor(OCILob $lob)
```

Frees a descriptor allocated by `oci_new_descriptor()`.

## Parameters

- **`$lob`** — Descriptor allocated by `oci_new_descriptor()`.

## Return Values

Returns `true` on success or `false` on failure.

## Notes

> This function is commonly used as a method OCILOB::free.

## See Also

OCILOB::free
