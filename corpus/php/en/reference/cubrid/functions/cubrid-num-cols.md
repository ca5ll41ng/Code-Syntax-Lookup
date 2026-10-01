---
id: "en-php-function-function-cubrid-num-cols"
language: "php"
lang: "en"
category: "function"
name: "cubrid_num_cols"
title: "Return the number of columns in the result set"
signature: "int cubrid_num_cols(resource $result)"
module: "cubrid"
source_url: "https://www.php.net/manual/en/function.cubrid-num-cols.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Return the number of columns in the result set

## Description

```php
int cubrid_num_cols(resource $result)
```

The `cubrid_num_cols()` function is used to get the number of columns from the query result. It can only be used when the query executed is a `SELECT` statement.

## Parameters

- **`$result`** — Result.

## Return Values

Number of columns, when process is successful.

`false`, if SQL statement is not SELECT.

## Examples

**`cubrid_num_cols()` example**

```php


<?php
$conn = cubrid_connect("localhost", 33000, "demodb", "dba");

$req = cubrid_execute($conn, "SELECT * FROM code");

$row_num = cubrid_num_rows($req);
$col_num = cubrid_num_cols($req);

printf("Row Num: %d\nColumn Num: %d\n", $row_num, $col_num);

cubrid_disconnect($conn);
?>

   
```

The above example will output:

```text


Row Num: 6
Column Num: 2

   
```

## See Also

 `cubrid_execute()` `cubrid_num_rows()`
