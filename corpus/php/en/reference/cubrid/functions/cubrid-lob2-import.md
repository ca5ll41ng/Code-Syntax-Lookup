---
id: "en-php-function-function-cubrid-lob2-import"
language: "php"
lang: "en"
category: "function"
name: "cubrid_lob2_import"
title: "Import BLOB/CLOB data from a file"
signature: "bool cubrid_lob2_import(resource $lob_identifier, string $file_name)"
module: "cubrid"
source_url: "https://www.php.net/manual/en/function.cubrid-lob2-import.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Import BLOB/CLOB data from a file

## Description

```php
bool cubrid_lob2_import(resource $lob_identifier, string $file_name)
```

The `cubrid_lob2_import()` function is used to save the contents of BLOB/CLOB data from a file. To use this function, you must use `cubrid_lob2_new()` or fetch a lob object from CUBRID database first. If the file does not exist, the operation will fail. This function will not influence the cursor position of the lob object. It operates the entire lob object.

## Parameters

- **`$lob_identifier`** — Lob identifier as a result of `cubrid_lob2_new()` or get from the result set.
- **`$filename`** — File name you want to import BLOB/CLOB data. It also supports the path of the file.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**`cubrid_lob2_export()` example**

```php


<?php

$conn = cubrid_connect("localhost", 33000, "demodb", "dba", "");

cubrid_execute($conn,"DROP TABLE if exists test_lob");
cubrid_execute($conn,"CREATE TABLE test_lob (id INT, contents CLOB)");

$req = cubrid_prepare($conn, "INSERT INTO test_lob VALUES (?, ?)");
cubrid_bind($req, 1, 1);

$lob = cubrid_lob2_new($conn, "clob");
cubrid_lob2_import($lob, "doc_1.txt");
cubrid_lob2_bind($req, 2, $lob, 'CLOB'); // or cubrid_lob2_bind($req, 2, $lob);

cubrid_execute($req);

cubrid_lob2_close($lob);
cubrid_disconnect($conn);
?>

   
```

## See Also

 `cubrid_lob2_new()` `cubrid_lob2_close()` `cubrid_lob2_export()` `cubrid_lob2_bind()`
