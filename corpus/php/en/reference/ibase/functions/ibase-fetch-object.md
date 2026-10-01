---
id: "en-php-function-function-ibase-fetch-object"
language: "php"
lang: "en"
category: "function"
name: "ibase_fetch_object"
title: "Get an object from a InterBase database"
signature: "object ibase_fetch_object(resource $result_id, int $fetch_flag = 0)"
module: "ibase"
source_url: "https://www.php.net/manual/en/function.ibase-fetch-object.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get an object from a InterBase database

## Description

```php
object ibase_fetch_object(resource $result_id, int $fetch_flag = 0)
```

Fetches a row as a pseudo-object from a given result identifier.

Subsequent calls to `ibase_fetch_object()` return the next row in the result set.

## Parameters

- **`$result_id`** — An InterBase result identifier obtained either by `ibase_query()` or `ibase_execute()`.
- **`$fetch_flag`** — `$fetch_flag` is a combination of the constants `IBASE_TEXT` and `IBASE_UNIXTIME` ORed together. Passing `IBASE_TEXT` will cause this function to return BLOB contents instead of BLOB ids. Passing `IBASE_UNIXTIME` will cause this function to return date/time values as Unix timestamps instead of as formatted strings.

## Return Values

Returns an object with the next row information, or `false` if there are no more rows.

## Examples

**`ibase_fetch_object()` example**

```php


<?php
$dbh = ibase_connect($host, $username, $password);
$stmt = 'SELECT * FROM tblname';
$sth = ibase_query($dbh, $stmt);
while ($row = ibase_fetch_object($sth)) {
    echo $row->email . "\n";
}
ibase_close($dbh);
?>

   
```

## See Also

 `ibase_fetch_row()` `ibase_fetch_assoc()`
