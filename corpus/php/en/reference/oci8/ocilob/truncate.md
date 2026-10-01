---
id: "en-php-function-ocilob-truncate"
language: "php"
lang: "en"
category: "function"
name: "OCILob::truncate"
title: "Truncates large object"
signature: "public bool OCILob::truncate(int $length = 0)"
module: "oci8"
source_url: "https://www.php.net/manual/en/ocilob.truncate.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Truncates large object

## Description

```php
public bool OCILob::truncate(int $length = 0)
```

Truncates the LOB.

## Parameters

- **`$length`** — If provided, this method will truncate the LOB to `$length` bytes. Otherwise, it will completely purge the LOB.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0, PECL OCI8 3.0.0 | The `OCI-Lob` class was renamed to `OCILob` to align with PHP naming standards. |

## See Also

`ocilob.erase`
