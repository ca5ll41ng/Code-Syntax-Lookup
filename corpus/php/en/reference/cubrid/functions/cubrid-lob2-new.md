---
id: "en-php-function-function-cubrid-lob2-new"
language: "php"
lang: "en"
category: "function"
name: "cubrid_lob2_new"
title: "Create a lob object"
signature: "resource cubrid_lob2_new([resource $conn_identifier = ...], string $type = \"BLOB\")"
module: "cubrid"
source_url: "https://www.php.net/manual/en/function.cubrid-lob2-new.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create a lob object

## Description

```php
resource cubrid_lob2_new([resource $conn_identifier = ...], string $type = "BLOB")
```

The `cubrid_lob2_new()` function is used to create a lob object (both BLOB and CLOB). This function should be used before you bind a lob object.

## Parameters

- **`$conn_identifier`** — Connection identifier. If the connection identifier is not specified, the last connection opened by `cubrid_connect()` or `cubrid_connect_with_url()` is assumed.
- **`$type`** — It may be "BLOB" or "CLOB", it won't be case-sensitive. The default value is "BLOB".

## Return Values

Lob identifier when it is successful, or `false` on failure.

## See Also

 `cubrid_lob2_close()`
