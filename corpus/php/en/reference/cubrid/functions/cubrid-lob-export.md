---
id: "en-php-function-function-cubrid-lob-export"
language: "php"
lang: "en"
category: "function"
name: "cubrid_lob_export"
title: "Export BLOB/CLOB data to file"
signature: "bool cubrid_lob_export(resource $conn_identifier, resource $lob_identifier, string $path_name)"
module: "cubrid"
source_url: "https://www.php.net/manual/en/function.cubrid-lob-export.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Export BLOB/CLOB data to file

## Description

```php
bool cubrid_lob_export(resource $conn_identifier, resource $lob_identifier, string $path_name)
```

`cubrid_lob_export()` is used to get BLOB/CLOB data from CUBRID database, and saves its contents to a file. To use this function, you must use `cubrid_lob_get()` first to get BLOB/CLOB info from CUBRID.

## Parameters

- **`$conn_identifier`** — Connection identifier.
- **`$lob_identifier`** — LOB identifier.
- **`$path_name`** — Path name of the file.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**`cubrid_lob_export()` example**

```php


<?php
$conn = cubrid_connect ("localhost", 33000, "demodb", "dba");

cubrid_execute($conn,"DROP TABLE if exists doc");
cubrid_execute($conn,"CREATE TABLE doc (id INT, doc_content CLOB)");
cubrid_execute($conn,"INSERT INTO doc VALUES (5,'hello,cubrid')");

$lobs = cubrid_lob_get($conn, "SELECT doc_content FROM doc WHERE id=5");
echo "Doc size: ".cubrid_lob_size($lobs[0])." bytes";
cubrid_lob_export($conn, $lobs[0], "doc_5.txt");
cubrid_lob_close($lobs);
cubrid_disconnect($conn);
?>

   
```

## See Also

 `cubrid_lob_get()` `cubrid_lob_close()` `cubrid_lob_size()` `cubrid_lob_send()`
