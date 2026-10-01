---
id: "en-php-function-ocilob-tell"
language: "php"
lang: "en"
category: "function"
name: "OCILob::tell"
title: "Returns the current position of internal pointer of large object"
signature: "public int|false OCILob::tell()"
module: "oci8"
source_url: "https://www.php.net/manual/en/ocilob.tell.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the current position of internal pointer of large object

## Description

```php
public int|false OCILob::tell()
```

Gets the current position of a LOB's internal pointer.

## Parameters

This function has no parameters.

## Return Values

Returns current position of a LOB's internal pointer or `false` if an error occurred.

## Changelog

|  |  |
| --- | --- |
| 8.0.0, PECL OCI8 3.0.0 | The `OCI-Lob` class was renamed to `OCILob` to align with PHP naming standards. |

## See Also

`ocilob.rewind` `ocilob.size` `ocilob.eof`
