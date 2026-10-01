---
id: "en-php-function-ocilob-erase"
language: "php"
lang: "en"
category: "function"
name: "OCILob::erase"
title: "Erases a specified portion of the internal LOB data"
signature: "public int|false OCILob::erase(int|null $offset = null, int|null $length = null)"
module: "oci8"
source_url: "https://www.php.net/manual/en/ocilob.erase.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Erases a specified portion of the internal LOB data

## Description

```php
public int|false OCILob::erase(int|null $offset = null, int|null $length = null)
```

Erases a specified portion of the internal LOB data starting at a specified `$offset`. If called without parameters, it erases all LOB data.

For BLOBs, erasing means that the existing LOB value is overwritten with zero-bytes. For CLOBs, the existing LOB value is overwritten with spaces.

## Parameters

- **`$offset`**
- **`$length`**

## Return Values

Returns the actual number of characters/bytes erased or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0, PECL OCI8 3.0.0 | `$offset` and `$length` are now nullable. |
| 8.0.0, PECL OCI8 3.0.0 | The `OCI-Lob` class was renamed to `OCILob` to align with PHP naming standards. |

## See Also

`ocilob.truncate`
