---
id: "en-php-function-function-cubrid-lob-close"
language: "php"
lang: "en"
category: "function"
name: "cubrid_lob_close"
title: "Close BLOB/CLOB data"
signature: "bool cubrid_lob_close(array $lob_identifier_array)"
module: "cubrid"
source_url: "https://www.php.net/manual/en/function.cubrid-lob-close.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Close BLOB/CLOB data

## Description

```php
bool cubrid_lob_close(array $lob_identifier_array)
```

`cubrid_lob_close()` is used to close all BLOB/CLOB returned from `cubrid_lob_get()`.

## Parameters

- **`$lob_identifier_array`** — LOB identifier array returned from `cubrid_lob_get()`.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**`cubrid_lob_close()` example**

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

 `cubrid_lob_get()` `cubrid_lob_size()` `cubrid_lob_export()` `cubrid_lob_send()`
