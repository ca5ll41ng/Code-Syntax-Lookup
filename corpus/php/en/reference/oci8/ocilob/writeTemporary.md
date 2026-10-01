---
id: "en-php-function-ocilob-writetemporary"
language: "php"
lang: "en"
category: "function"
name: "OCILob::writeTemporary"
title: "Writes a temporary large object"
signature: "public bool OCILob::writeTemporary(string $data, int $type = OCI_TEMP_CLOB)"
module: "oci8"
source_url: "https://www.php.net/manual/en/ocilob.writetemporary.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Writes a temporary large object

## Description

```php
public bool OCILob::writeTemporary(string $data, int $type = OCI_TEMP_CLOB)
```

Creates a temporary large object and writes `$data` to it.

You should use `ocilob.close` when you are done with this object.

## Parameters

- **`$data`** — The data to write.
- **`$type`** — Can be one of the following: `OCI_TEMP_BLOB` is used to create temporary BLOBs `OCI_TEMP_CLOB` is used to create temporary CLOBs

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0, PECL OCI8 3.0.0 | The `OCI-Lob` class was renamed to `OCILob` to align with PHP naming standards. |

## See Also

`ocilob.close`
