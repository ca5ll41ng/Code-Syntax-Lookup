---
id: "en-php-function-ocilob-export"
language: "php"
lang: "en"
category: "function"
name: "OCILob::export"
title: "Exports LOB's contents to a file"
signature: "public bool OCILob::export(string $filename, int|null $offset = null, int|null $length = null)"
module: "oci8"
source_url: "https://www.php.net/manual/en/ocilob.export.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Exports LOB's contents to a file

## Description

```php
public bool OCILob::export(string $filename, int|null $offset = null, int|null $length = null)
```

Exports LOB contents to a file.

## Parameters

- **`$filename`** — Path to the file.
- **`$offset`** — Indicates from where to start exporting.
- **`$length`** — Indicates the length of data to be exported.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0, PECL OCI8 3.0.0 | `$offset` and `$length` are now nullable. |
| 8.0.0, PECL OCI8 3.0.0 | The `OCI-Lob` class was renamed to `OCILob` to align with PHP naming standards. |

## See Also

`ocilob.import`
