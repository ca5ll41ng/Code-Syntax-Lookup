---
id: "en-php-function-function-cubrid-num-fields"
language: "php"
lang: "en"
category: "function"
name: "cubrid_num_fields"
title: "Return the number of columns in the result set"
signature: "int cubrid_num_fields(resource $result)"
module: "cubrid"
source_url: "https://www.php.net/manual/en/function.cubrid-num-fields.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Return the number of columns in the result set

## Description

```php
int cubrid_num_fields(resource $result)
```

This function returns the number of columns in the result set, on success, or it returns FALSE on failure.

## Parameters

- **`$result`** — `$result` comes from a call to `cubrid_execute()`, `cubrid_query()` and `cubrid_prepare()`

## Return Values

Number of columns, on success.

-1 if SQL sentence is not SELECT.

`false` when process is unsuccessful.

## Examples

**`cubrid_num_fields()` example**

```php


<?php
$conn = cubrid_connect("localhost", 33000, "demodb");

$req = cubrid_execute($conn, "SELECT * FROM code");

$row_num = cubrid_num_rows($req);
$col_num = cubrid_num_fields($req);

printf("Row Num: %d\nColumn Num: %d\n", $row_num, $col_num);

cubrid_disconnect($conn);
?>

   
```

The above example will output:

```text


Row Num: 6
Column Num: 2

    
```
