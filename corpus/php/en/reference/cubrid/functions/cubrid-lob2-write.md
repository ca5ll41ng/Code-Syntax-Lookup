---
id: "en-php-function-function-cubrid-lob2-write"
language: "php"
lang: "en"
category: "function"
name: "cubrid_lob2_write"
title: "Write to a lob object"
signature: "bool cubrid_lob2_write(resource $lob_identifier, string $buf)"
module: "cubrid"
source_url: "https://www.php.net/manual/en/function.cubrid-lob2-write.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Write to a lob object

## Description

```php
bool cubrid_lob2_write(resource $lob_identifier, string $buf)
```

The `cubrid_lob2_write()` function reads as much as data from `$buf` and stores it to the LOB object. Note that this function can only append characters now.

## Parameters

- **`$lob_identifier`** — Lob identifier as a result of `cubrid_lob2_new()` or get from the result set.
- **`$buf`** — Data that need to be written to the lob object.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**`cubrid_lob2_write()` example 1**

```php


<?php
// test_lob (id INT, contents CLOB)

$conn = cubrid_connect("localhost", 33000, "demodb", "dba", "");

cubrid_execute($conn,"DROP TABLE if exists test_lob");
cubrid_execute($conn,"CREATE TABLE test_lob (id INT, contents CLOB)");

$req = cubrid_prepare($conn, "INSERT INTO test_lob VALUES(2, ?)");

$lob = cubrid_lob2_new($conn, 'CLOB');
$len = cubrid_lob2_write($lob, "Hello world");

cubrid_lob2_bind($req, 1, $lob);
cubrid_execute($req);

cubrid_disconnect($conn);
?>

   
```

**`cubrid_lob2_write()` example 2**

```php


<?php
// test_lob (id INT, contents CLOB)

$conn = cubrid_connect("localhost", 33000, "demodb", "dba", "");

cubrid_execute($conn,"DROP TABLE if exists test_lob");
cubrid_execute($conn,"CREATE TABLE test_lob (id INT, contents CLOB)");

$req = cubrid_prepare($conn, "INSERT INTO test_lob VALUES(1, ?)");
$lob1 = cubrid_lob2_new($conn, 'CLOB');
$len = cubrid_lob2_write($lob1, "cubrid php driver");
cubrid_lob2_bind($req, 1, $lob1);
cubrid_execute($req);

$req = cubrid_execute($conn, "select * from test_lob");

$row = cubrid_fetch_row($req, CUBRID_LOB);
$lob2 = $row[1];
cubrid_lob2_seek($lob2, 0, CUBRID_CURSOR_LAST);

$pos = cubrid_lob2_tell($lob2);
print "pos before write: $pos\n";

cubrid_lob2_write($lob2, "Hello world");

$pos = cubrid_lob2_tell($lob2);
print "pos after write: $pos\n";

cubrid_disconnect($conn);
?>

   
```

## See Also

 `cubrid_lob2_read()` `cubrid_lob2_seek()` `cubrid_lob2_seek64()` `cubrid_lob2_tell()` `cubrid_lob2_tell64()` `cubrid_lob2_size()` `cubrid_lob2_size64()`
