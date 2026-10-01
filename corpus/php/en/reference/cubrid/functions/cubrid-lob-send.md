---
id: "en-php-function-function-cubrid-lob-send"
language: "php"
lang: "en"
category: "function"
name: "cubrid_lob_send"
title: "Read BLOB/CLOB data and send straight to browser"
signature: "bool cubrid_lob_send(resource $conn_identifier, resource $lob_identifier)"
module: "cubrid"
source_url: "https://www.php.net/manual/en/function.cubrid-lob-send.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Read BLOB/CLOB data and send straight to browser

## Description

```php
bool cubrid_lob_send(resource $conn_identifier, resource $lob_identifier)
```

`cubrid_lob_send()` reads BLOB/CLOB data and passes it straight through to the browser. To use this function, you must use `cubrid_lob_get()` first to get BLOB/CLOB info from CUBRID.

## Parameters

- **`$conn_identifier`** — Connection identifier.
- **`$lob_identifier`** — LOB identifier.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**`cubrid_lob_send()` example**

```php


<?php
$conn = cubrid_connect ("localhost", 33000, "demodb", "dba");

cubrid_execute($conn,"DROP TABLE if exists doc");
cubrid_execute($conn,"CREATE TABLE doc (id INT, doc_content CLOB)");
cubrid_execute($conn,"INSERT INTO doc VALUES (5,'hello,cubrid')");

$lobs = cubrid_lob_get($conn, "SELECT doc_content FROM doc WHERE id=5");

cubrid_lob_send($conn, $lobs[0]);
cubrid_lob_close($lobs);
cubrid_disconnect($conn);
?>

   
```

## See Also

 `cubrid_lob_get()` `cubrid_lob_close()` `cubrid_lob_size()` `cubrid_lob_export()`
