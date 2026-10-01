---
id: "en-php-function-ocilob-load"
language: "php"
lang: "en"
category: "function"
name: "OCILob::load"
title: "Returns large object's contents"
signature: "public string|false OCILob::load()"
module: "oci8"
source_url: "https://www.php.net/manual/en/ocilob.load.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns large object's contents

## Description

```php
public string|false OCILob::load()
```

Returns large object's contents. As script execution is terminated when the memory_limit is reached, ensure that the LOB does not exceed this limit. In most cases it's recommended to use `ocilob.read` instead.

## Parameters

This function has no parameters.

## Return Values

Returns the contents of the object, or `false` on errors.

## Changelog

|  |  |
| --- | --- |
| 8.0.0, PECL OCI8 3.0.0 | The `OCI-Lob` class was renamed to `OCILob` to align with PHP naming standards. |

## See Also

`ocilob.read`
