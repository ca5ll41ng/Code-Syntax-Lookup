---
id: "en-php-function-ocilob-free"
language: "php"
lang: "en"
category: "function"
name: "OCILob::free"
title: "Frees resources associated with the LOB descriptor"
signature: "public bool OCILob::free()"
module: "oci8"
source_url: "https://www.php.net/manual/en/ocilob.free.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Frees resources associated with the LOB descriptor

## Description

```php
public bool OCILob::free()
```

Frees resources associated with the descriptor, previously allocated with `oci_new_descriptor()`.

## Parameters

This function has no parameters.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0, PECL OCI8 3.0.0 | The `OCI-Lob` class was renamed to `OCILob` to align with PHP naming standards. |
