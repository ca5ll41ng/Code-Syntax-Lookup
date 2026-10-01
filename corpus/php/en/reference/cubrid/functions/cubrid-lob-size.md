---
id: "en-php-function-function-cubrid-lob-size"
language: "php"
lang: "en"
category: "function"
name: "cubrid_lob_size"
title: "Get BLOB/CLOB data size"
signature: "string cubrid_lob_size(resource $lob_identifier)"
module: "cubrid"
source_url: "https://www.php.net/manual/en/function.cubrid-lob-size.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get BLOB/CLOB data size

## Description

```php
string cubrid_lob_size(resource $lob_identifier)
```

`cubrid_lob_size()` is used to get BLOB/CLOB data size.

## Parameters

- **`$lob_identifier`** — LOB identifier.

## Return Values

A string representing LOB data size, when process is successful, or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.4.0 | Change return value type from int to string. |

## Examples

**`cubrid_lob_size()` example**

```php


<?php
$lobs = cubrid_lob_get($con, "SELECT doc_content FROM doc WHERE doc_id=5");
echo "Doc size:".cubrid_lob_size($lobs[0]);
cubrid_lob_export($conn, $lobs[0], "doc_5.txt");
cubrid_lob_close($lobs);
?>

   
```

## See Also

 `cubrid_lob_get()` `cubrid_lob_close()` `cubrid_lob_export()` `cubrid_lob_send()`
