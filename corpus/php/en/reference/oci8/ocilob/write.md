---
id: "en-php-function-ocilob-write"
language: "php"
lang: "en"
category: "function"
name: "OCILob::write"
title: "Writes data to the large object"
signature: "public int|false OCILob::write(string $data, int|null $length = null)"
module: "oci8"
source_url: "https://www.php.net/manual/en/ocilob.write.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Writes data to the large object

## Description

```php
public int|false OCILob::write(string $data, int|null $length = null)
```

Writes data from the parameter `$data` into the current position of LOB's internal pointer.

## Parameters

- **`$data`** — The data to write in the LOB.
- **`$length`** — If this parameter is an integer, writing will stop after `$length` bytes have been written or the end of `$data` is reached, whichever comes first.

## Return Values

Returns the number of bytes written or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0, PECL OCI8 3.0.0 | `$length` is now nullable. |
| 8.0.0, PECL OCI8 3.0.0 | The `OCI-Lob` class was renamed to `OCILob` to align with PHP naming standards. |

## See Also

`ocilob.read`
