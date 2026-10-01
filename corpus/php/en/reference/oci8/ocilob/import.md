---
id: "en-php-function-ocilob-import"
language: "php"
lang: "en"
category: "function"
name: "OCILob::import"
title: "Imports file data to the LOB"
signature: "public bool OCILob::import(string $filename)"
module: "oci8"
source_url: "https://www.php.net/manual/en/ocilob.import.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Imports file data to the LOB

## Description

```php
public bool OCILob::import(string $filename)
```

Writes data from the `$filename` in to the current position of large object.

## Parameters

- **`$filename`** — Path to the file.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0, PECL OCI8 3.0.0 | The `OCI-Lob` class was renamed to `OCILob` to align with PHP naming standards. |

## See Also

`ocilob.export` `ocilob.write`
