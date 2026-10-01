---
id: "en-php-function-function-cubrid-lob2-close"
language: "php"
lang: "en"
category: "function"
name: "cubrid_lob2_close"
title: "Close LOB object"
signature: "bool cubrid_lob2_close(resource $lob_identifier)"
module: "cubrid"
source_url: "https://www.php.net/manual/en/function.cubrid-lob2-close.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Close LOB object

## Description

```php
bool cubrid_lob2_close(resource $lob_identifier)
```

The `cubrid_lob2_close()` function is used to close LOB object returned from `cubrid_lob2_new()` or got from the result set.

## Parameters

- **`$lob_identifier`** — Lob identifier as a result of `cubrid_lob2_new()` or get from the result set.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

 `cubrid_lob2_new()`
