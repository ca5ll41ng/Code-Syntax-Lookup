---
id: "en-php-function-ocilob-setbuffering"
language: "php"
lang: "en"
category: "function"
name: "OCILob::setBuffering"
title: "Changes current state of buffering for the large object"
signature: "public bool OCILob::setBuffering(bool $mode)"
module: "oci8"
source_url: "https://www.php.net/manual/en/ocilob.setbuffering.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Changes current state of buffering for the large object

## Description

```php
public bool OCILob::setBuffering(bool $mode)
```

Sets the buffering for the large object, depending on the value of the `$mode` parameter.

Use of this function may provide performance improvements by buffering small reads and writes of LOBs by reducing the number of network round-trips and LOB versions. `OCILob::flush()` should be used to flush buffers, when you have finished working with the large object.

## Parameters

- **`$mode`** — `true` for on and `false` for off.

## Return Values

Returns `true` on success or `false` on failure. Repeated calls to this method with the same flag will return `true`.

## Changelog

|  |  |
| --- | --- |
| 8.0.0, PECL OCI8 3.0.0 | The `OCI-Lob` class was renamed to `OCILob` to align with PHP naming standards. |

## See Also

`ocilob.getbuffering`
