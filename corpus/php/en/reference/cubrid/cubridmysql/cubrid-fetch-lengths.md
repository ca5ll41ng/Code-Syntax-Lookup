---
id: "en-php-function-function-cubrid-fetch-lengths"
language: "php"
lang: "en"
category: "function"
name: "cubrid_fetch_lengths"
title: "Return an array with the lengths of the values of each field from the current row"
signature: "array cubrid_fetch_lengths(resource $result)"
module: "cubrid"
source_url: "https://www.php.net/manual/en/function.cubrid-fetch-lengths.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Return an array with the lengths of the values of each field from the current row

## Description

```php
array cubrid_fetch_lengths(resource $result)
```

This function returns a numeric array with the lengths of the values of each field from the current row of the result set or it returns FALSE on failure.

> If field data type is BLOB/CLOB, you should get its length by using `cubrid_lob_size()`.

## Parameters

- **`$result`** — `$result` comes from a call to `cubrid_execute()`

## Return Values

A numeric array, when process is successful.

`false` on failure.

## Examples

**`cubrid_fetch_lengths()` example**

```php


<?php
$conn = cubrid_connect("localhost", 33000, "demodb");
$result = cubrid_execute($conn, "SELECT * FROM game WHERE host_year=2004 AND nation_code='AUS' AND medal='G'");

$row = cubrid_fetch_row($result);
print_r($row);

$lens = cubrid_fetch_lengths($result);
print_r($lens);

cubrid_disconnect($conn);
?>

   
```

The above example will output:

```text


Array
(
    [0] => 2004
    [1] => 20085
    [2] => 15118
    [3] => 30134
    [4] => AUS
    [5] => G
    [6] => 2004-8-20
)
Array
(
    [0] => 4
    [1] => 5
    [2] => 5
    [3] => 5
    [4] => 3
    [5] => 1
    [6] => 10
)

    
```
