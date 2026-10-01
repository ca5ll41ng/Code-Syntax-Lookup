---
id: "en-php-function-function-cubrid-seq-drop"
language: "php"
lang: "en"
category: "function"
name: "cubrid_seq_drop"
title: "Delete an element from sequence type column using OID"
signature: "bool cubrid_seq_drop(resource $conn_identifier, string $oid, string $attr_name, int $index)"
module: "cubrid"
source_url: "https://www.php.net/manual/en/function.cubrid-seq-drop.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Delete an element from sequence type column using OID

## Description

```php
bool cubrid_seq_drop(resource $conn_identifier, string $oid, string $attr_name, int $index)
```

The `cubrid_seq_drop()` function is used to delete an element you request from the given sequence type attribute in the database.

## Parameters

- **`$conn_identifier`** — Connection identifier.
- **`$oid`** — OID of the instance you want to work with.
- **`$attr_name`** — Name of the attribute that you want to delete an element from.
- **`$index`** — Index of the element that you want to delete (1-based).

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**`cubrid_seq_drop()` example**

```php


<?php
$conn = cubrid_connect("localhost", 33000, "demodb", "dba");

@cubrid_execute($conn, "DROP TABLE foo");
cubrid_execute($conn, "CREATE TABLE foo(a int AUTO_INCREMENT, b set(int), c sequence(int), d char(10))");
cubrid_execute($conn, "INSERT INTO foo(a, b, c, d) VALUES(1, {1,2,3}, {11,22,33,333}, 'a')");

$req = cubrid_execute($conn, "SELECT * FROM foo", CUBRID_INCLUDE_OID);

cubrid_move_cursor($req, 1, CUBRID_CURSOR_FIRST);
$oid = cubrid_current_oid($req);

$attr = cubrid_col_get($conn, $oid, "c");
var_dump($attr);

cubrid_seq_drop($conn, $oid, "c", 4);

$attr = cubrid_col_get($conn, $oid, "c");
var_dump($attr);

cubrid_close_request($req);
cubrid_disconnect($conn);
?>

   
```

The above example will output:

```text


array(4) {
  [0]=>
  string(2) "11"
  [1]=>
  string(2) "22"
  [2]=>
  string(2) "33"
  [3]=>
  string(3) "333"
}
array(3) {
  [0]=>
  string(2) "11"
  [1]=>
  string(2) "22"
  [2]=>
  string(2) "33"
}

   
```

## See Also

 `cubrid_seq_insert()` `cubrid_seq_put()`
