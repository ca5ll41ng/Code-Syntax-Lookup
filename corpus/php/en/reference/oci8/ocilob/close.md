---
id: "en-php-function-ocilob-close"
language: "php"
lang: "en"
category: "function"
name: "OCILob::close"
title: "Closes LOB descriptor"
signature: "public bool OCILob::close()"
module: "oci8"
source_url: "https://www.php.net/manual/en/ocilob.close.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Closes LOB descriptor

## Description

```php
public bool OCILob::close()
```

Closes descriptor of LOB or FILE. This function should be used only with `ocilob.writetemporary`.

## Parameters

This function has no parameters.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0, PECL OCI8 3.0.0 | The `OCI-Lob` class was renamed to `OCILob` to align with PHP naming standards. |

## See Also

`ocilob.writetemporary`
