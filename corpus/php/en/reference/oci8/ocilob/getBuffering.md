---
id: "en-php-function-ocilob-getbuffering"
language: "php"
lang: "en"
category: "function"
name: "OCILob::getBuffering"
title: "Returns current state of buffering for the large object"
signature: "public bool OCILob::getBuffering()"
module: "oci8"
source_url: "https://www.php.net/manual/en/ocilob.getbuffering.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns current state of buffering for the large object

## Description

```php
public bool OCILob::getBuffering()
```

Tells whether the buffering for the large object is on or off.

## Parameters

This function has no parameters.

## Return Values

Returns `false` if buffering for the large object is off and `true` if buffering is used.

## Changelog

|  |  |
| --- | --- |
| 8.0.0, PECL OCI8 3.0.0 | The `OCI-Lob` class was renamed to `OCILob` to align with PHP naming standards. |

## See Also

`ocilob.setbuffering`
