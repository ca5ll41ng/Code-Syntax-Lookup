---
id: "en-php-function-function-db2-result"
language: "php"
lang: "en"
category: "function"
name: "db2_result"
title: "Returns a single column from a row in the result set"
signature: "mixed|null db2_result(resource $stmt, int|string $column)"
module: "ibm_db2"
source_url: "https://www.php.net/manual/en/function.db2-result.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns a single column from a row in the result set

## Description

```php
mixed|null db2_result(resource $stmt, int|string $column)
```

Use `db2_result()` to return the value of a specified column in the current row of a result set. You must call `db2_fetch_row()` before calling `db2_result()` to set the location of the result set pointer.

## Parameters

- **`$stmt`** — A valid `stmt` resource.
- **`$column`** — Either an integer mapping to the 0-indexed field in the result set, or a string matching the name of the column.

## Return Values

Returns the value of the requested field if the field exists in the result set. Returns `null` if the field does not exist, and issues a warning.

## Examples

**A `db2_result()` example**

The following example demonstrates how to iterate through a result set with `db2_fetch_row()` and retrieve columns from the result set with `db2_result()`.

```php


<?php
$sql = 'SELECT name, breed FROM animals WHERE weight < ?';
$stmt = db2_prepare($conn, $sql);
db2_execute($stmt, array(10));
while (db2_fetch_row($stmt)) {
    $name = db2_result($stmt, 0);
    $breed = db2_result($stmt, 'BREED');
    print "$name $breed";
}
?>

   
```

The above example will output:

```text


cat Pook
gold fish Bubbles
budgerigar Gizmo
goat Rickety Ride

   
```

## See Also

 `db2_fetch_array()` `db2_fetch_assoc()` `db2_fetch_both()` `db2_fetch_object()` `db2_fetch_row()`
