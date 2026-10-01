---
id: "en-php-function-ocilob-eof"
language: "php"
lang: "en"
category: "function"
name: "OCILob::eof"
title: "Tests for end-of-file on a large object's descriptor"
signature: "public bool OCILob::eof()"
module: "oci8"
source_url: "https://www.php.net/manual/en/ocilob.eof.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Tests for end-of-file on a large object's descriptor

## Description

```php
public bool OCILob::eof()
```

Tells whether the internal pointer of large object is at the end of LOB.

## Parameters

This function has no parameters.

## Return Values

Returns `true` if internal pointer of large object is at the end of LOB. Otherwise returns `false`.

## Changelog

|  |  |
| --- | --- |
| 8.0.0, PECL OCI8 3.0.0 | The `OCI-Lob` class was renamed to `OCILob` to align with PHP naming standards. |

## Notes

> This function will return an Oracle error if `ocilob.setbuffering` is enabled on the LOB.

## See Also

`ocilob.size`
