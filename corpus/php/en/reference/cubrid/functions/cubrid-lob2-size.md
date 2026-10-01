---
id: "en-php-function-function-cubrid-lob2-size"
language: "php"
lang: "en"
category: "function"
name: "cubrid_lob2_size"
title: "Get a lob object's size"
signature: "int cubrid_lob2_size(resource $lob_identifier)"
module: "cubrid"
source_url: "https://www.php.net/manual/en/function.cubrid-lob2-size.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get a lob object's size

## Description

```php
int cubrid_lob2_size(resource $lob_identifier)
```

The `cubrid_lob2_size()` function is used to get the size of a lob object.

## Parameters

- **`$lob_identifier`** — Lob identifier as a result of `cubrid_lob2_new()` or get from the result set.

## Return Values

It will return the size of the LOB object when it processes successfully, or `false` on failure.

## See Also

 `cubrid_lob2_read()` `cubrid_lob2_write()` `cubrid_lob2_seek()` `cubrid_lob2_seek64()` `cubrid_lob2_tell()` `cubrid_lob2_tell64()` `cubrid_lob2_size64()`
