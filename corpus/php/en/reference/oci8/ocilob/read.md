---
id: "en-php-function-ocilob-read"
language: "php"
lang: "en"
category: "function"
name: "OCILob::read"
title: "Reads part of the large object"
signature: "public string|false OCILob::read(int $length)"
module: "oci8"
source_url: "https://www.php.net/manual/en/ocilob.read.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Reads part of the large object

## Description

```php
public string|false OCILob::read(int $length)
```

Reads `$length` of bytes (BLOB) or characters (CLOB) from the current position of LOB's internal pointer.

Reading stops when `$length` of bytes have been read for a BLOB, when `$length` of characters have been read for a CLOB, or when the end of the large object is reached. Internal pointer of the large object will be shifted on the amount of bytes/characters read.

## Parameters

- **`$length`** — The length of data to read, in bytes (BLOB) or characters (CLOB). Large values will be rounded down to 1 MB.

## Return Values

Returns the contents as a string, or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0, PECL OCI8 3.0.0 | The `OCI-Lob` class was renamed to `OCILob` to align with PHP naming standards. |

## See Also

`ocilob.load` `ocilob.write`
