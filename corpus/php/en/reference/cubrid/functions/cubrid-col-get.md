---
id: "en-php-function-function-cubrid-col-get"
language: "php"
lang: "en"
category: "function"
name: "cubrid_col_get"
title: "Get contents of collection type column using OID"
signature: "array cubrid_col_get(resource $conn_identifier, string $oid, string $attr_name)"
module: "cubrid"
source_url: "https://www.php.net/manual/en/function.cubrid-col-get.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get contents of collection type column using OID

## Description

```php
array cubrid_col_get(resource $conn_identifier, string $oid, string $attr_name)
```

The `cubrid_col_get()` function is used to get contents of the elements of the collection type (set, multiset, sequence) attribute you requested as an array.

## Parameters

- **`$conn_identifier`** — Connection identifier.
- **`$oid`** — OID of the instance that you want to read.
- **`$attr_name`** — Attribute name that you want to read from the instance.

## Return Values

Array (0-based numerical array) containing the elements you requested, when process is successful;

`false` (to distinguish the error from the situation of attribute having empty collection or NULL, in case of error, a warning message is shown; in such case you can check the error by using `cubrid_error_code()`), when process is unsuccessful.

## Examples

**`cubrid_col_get()` example**

```php


<?php
$conn = cubrid_connect("localhost", 33000, "demodb", "dba");

@cubrid_execute($conn, "DROP TABLE foo");
cubrid_execute($conn, "CREATE TABLE foo(a int AUTO_INCREMENT, b set(int), c list(int), d char(10))");
cubrid_execute($conn, "INSERT INTO foo(a, b, c, d) VALUES(1, {1,2,3}, {11,22,33,333}, 'a')");

$req = cubrid_execute($conn, "SELECT * FROM foo", CUBRID_INCLUDE_OID);

cubrid_move_cursor($req, 1, CUBRID_CURSOR_FIRST);
$oid = cubrid_current_oid($req);

$attr = cubrid_col_get($conn, $oid, "b");
var_dump($attr);

$size = cubrid_col_size($conn, $oid, "b");
var_dump($size);

cubrid_close_request($req);
cubrid_disconnect($conn);
?>

   
```

The above example will output:

```text


array(3) {
  [0]=>
  string(1) "1"
  [1]=>
  string(1) "2"
  [2]=>
  string(1) "3"
}
int(3)

   
```
