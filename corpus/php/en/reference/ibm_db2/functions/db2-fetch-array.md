---
id: "en-php-function-function-db2-fetch-array"
language: "php"
lang: "en"
category: "function"
danger: {"type":"source"}
name: "db2_fetch_array"
title: "Returns an array, indexed by column position, representing a row in a result set"
signature: "array|false db2_fetch_array(resource $stmt, int $row_number = -1)"
module: "ibm_db2"
source_url: "https://www.php.net/manual/en/function.db2-fetch-array.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns an array, indexed by column position, representing a row in a result set

## Description

```php
array|false db2_fetch_array(resource $stmt, int $row_number = -1)
```

Returns an array, indexed by column position, representing a row in a result set. The columns are 0-indexed.

## Parameters

- **`$stmt`** — A valid `stmt` resource containing a result set.
- **`$row_number`** — Requests a specific 1-indexed row from the result set. Passing this parameter results in a PHP warning if the result set uses a forward-only cursor.

## Return Values

Returns a 0-indexed array with column values indexed by the column position representing the next or requested row in the result set. Returns `false` if there are no rows left in the result set, or if the row requested by `$row_number` does not exist in the result set.

## Examples

**Iterating through a forward-only cursor**

If you call `db2_fetch_array()` without a specific row number, it automatically retrieves the next row in the result set.

```php


<?php

$sql = "SELECT id, name, breed, weight FROM animals ORDER BY breed";
$stmt = db2_prepare($conn, $sql);
$result = db2_execute($stmt);

while ($row = db2_fetch_array($stmt)) {
    printf ("%-5d %-16s %-32s %10s\n",
        $row[0], $row[1], $row[2], $row[3]);
}
?>

    
```

The above example will output:

```text


0     Pook             cat                                    3.20
5     Rickety Ride     goat                                   9.70
2     Smarty           horse                                350.00

    
```

**Retrieving specific rows with `db2_fetch_array()` from a scrollable cursor**

If your result set uses a scrollable cursor, you can call `db2_fetch_array()` with a specific row number. The following example retrieves every other row in the result set, starting with the second row.

```php


<?php

$sql = "SELECT id, name, breed, weight FROM animals ORDER BY breed";
$result = db2_exec($stmt, $sql, array('cursor' => DB2_SCROLLABLE));

$i=2;
while ($row = db2_fetch_array($result, $i)) {
    printf ("%-5d %-16s %-32s %10s\n",
        $row[0], $row[1], $row[2], $row[3]);
    $i = $i + 2;
}
?>

    
```

The above example will output:

```text


0     Pook             cat                                    3.20
5     Rickety Ride     goat                                   9.70
2     Smarty           horse                                350.00

    
```

## See Also

 `db2_fetch_assoc()` `db2_fetch_both()` `db2_fetch_object()` `db2_fetch_row()` `db2_result()`
