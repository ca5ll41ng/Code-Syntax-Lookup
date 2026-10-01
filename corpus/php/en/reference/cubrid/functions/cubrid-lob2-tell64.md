---
id: "en-php-function-function-cubrid-lob2-tell64"
language: "php"
lang: "en"
category: "function"
name: "cubrid_lob2_tell64"
title: "Tell the cursor position of the LOB object"
signature: "string cubrid_lob2_tell64(resource $lob_identifier)"
module: "cubrid"
source_url: "https://www.php.net/manual/en/function.cubrid-lob2-tell64.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Tell the cursor position of the LOB object

## Description

```php
string cubrid_lob2_tell64(resource $lob_identifier)
```

The `cubrid_lob2_tell64()` function is used to tell the cursor position of the LOB object. If the size of a lob object is larger than an integer data can be stored, you can use this function and it will return the position information as a string.

## Parameters

- **`$lob_identifier`** — Lob identifier as a result of `cubrid_lob2_new()` or get from the result set.

## Return Values

It will return the cursor position on the LOB object as a string when it processes successfully, or `false` on failure.

## See Also

 `cubrid_lob2_read()` `cubrid_lob2_write()` `cubrid_lob2_seek()` `cubrid_lob2_seek64()` `cubrid_lob2_tell()` `cubrid_lob2_size()` `cubrid_lob2_size64()`
