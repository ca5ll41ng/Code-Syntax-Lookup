---
id: "en-php-function-function-cubrid-seq-insert"
language: "php"
lang: "en"
category: "function"
name: "cubrid_seq_insert"
title: "Insert an element to a sequence type column using OID"
signature: "bool cubrid_seq_insert(resource $conn_identifier, string $oid, string $attr_name, int $index, string $seq_element)"
module: "cubrid"
source_url: "https://www.php.net/manual/en/function.cubrid-seq-insert.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Insert an element to a sequence type column using OID

## Description

```php
bool cubrid_seq_insert(resource $conn_identifier, string $oid, string $attr_name, int $index, string $seq_element)
```

The `cubrid_seq_insert()` function is used to insert an element to a sequence type attribute in a requested location.

## Parameters

- **`$conn_identifier`** — Connection identifier.
- **`$oid`** — OID of the instance you want to work with.
- **`$attr_name`** — Name of the attribute you want to insert an instance to.
- **`$index`** — Location of the element, you want to insert the element to (1-based).
- **`$seq_element`** — Content of the element that you want to insert.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**`cubrid_seq_insert()` example**

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

cubrid_seq_insert($conn, $oid, "c", 5, "44");

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
array(5) {
  [0]=>
  string(2) "11"
  [1]=>
  string(2) "22"
  [2]=>
  string(2) "33"
  [3]=>
  string(3) "333"
  [4]=>
  string(2) "44"
}

   
```

## See Also

 `cubrid_seq_drop()` `cubrid_seq_put()`
