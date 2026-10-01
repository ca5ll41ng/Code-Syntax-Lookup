---
id: "en-php-function-ocilob-seek"
language: "php"
lang: "en"
category: "function"
name: "OCILob::seek"
title: "Sets the internal pointer of the large object"
signature: "public bool OCILob::seek(int $offset, int $whence = OCI_SEEK_SET)"
module: "oci8"
source_url: "https://www.php.net/manual/en/ocilob.seek.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the internal pointer of the large object

## Description

```php
public bool OCILob::seek(int $offset, int $whence = OCI_SEEK_SET)
```

Sets the internal pointer of the large object.

## Parameters

- **`$offset`** — Indicates the amount of bytes, on which internal pointer should be moved from the position, pointed by `$whence`.
- **`$whence`** — May be one of: `OCI_SEEK_SET` - sets the position equal to `$offset` `OCI_SEEK_CUR` - adds `$offset` bytes to the current position `OCI_SEEK_END` - adds `$offset` bytes to the end of large object (use negative value to move to a position before the end of large object)

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0, PECL OCI8 3.0.0 | The `OCI-Lob` class was renamed to `OCILob` to align with PHP naming standards. |

## See Also

`ocilob.rewind` `ocilob.tell` `ocilob.eof`
