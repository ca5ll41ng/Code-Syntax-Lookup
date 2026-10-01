---
id: "zh-php-function-function-oci-field-type"
language: "php"
lang: "zh"
category: "function"
name: "oci_field_type"
title: "返回字段的数据类型名称"
signature: "string|int|false oci_field_type(resource $statement, string|int $column)"
module: "oci8"
source_url: "https://www.php.net/manual/zh/function.oci-field-type.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回字段的数据类型名称

## 说明

```php
string|int|false oci_field_type(resource $statement, string|int $column)
```

返回字段的数据类型名称。

## 参数

- **`$statement`** — 有效的 OCI 语句标识符。
- **`$column`** — 可以是字段的索引（从1开始），也可以是名称。

## 返回值

返回 `string` 或 `integer` 类型的字段数据类型， 或者在失败时返回 `false`

## 示例

**`oci_field_type()` 示例**

```php


<?php

// Create the table with:
//   CREATE TABLE mytab (number_col NUMBER, varchar2_col varchar2(1), 
//                       clob_col CLOB, date_col DATE);

$conn = oci_connect("hr", "hrpwd", "localhost/XE");
if (!$conn) {
    $m = oci_error();
    trigger_error(htmlentities($m['message']), E_USER_ERROR);
}

$stid = oci_parse($conn, "SELECT * FROM mytab");
oci_execute($stid, OCI_DESCRIBE_ONLY); // Use OCI_DESCRIBE_ONLY if not fetching rows

echo "<table border=\"1\">\n";
echo "<tr>";
echo "<th>Name</th>";
echo "<th>Type</th>";
echo "<th>Length</th>";
echo "</tr>\n";

$ncols = oci_num_fields($stid);

for ($i = 1; $i <= $ncols; $i++) {
    $column_name  = oci_field_name($stid, $i);
    $column_type  = oci_field_type($stid, $i);
    $column_size  = oci_field_size($stid, $i);

    echo "<tr>";
    echo "<td>$column_name</td>";
    echo "<td>$column_type</td>";
    echo "<td>$column_size</td>";
    echo "</tr>\n";
}

echo "</table>\n";

// Outputs:
//    Name           Type       Length
//    NUMBER_COL    NUMBER        22
//    VARCHAR2_COL  VARCHAR2       1
//    CLOB_COL      CLOB        4000
//    DATE_COL      DATE           7

oci_free_statement($stid);
oci_close($conn);

?>

    
```

## 参见

`oci_num_fields()` `oci_field_name()` `oci_field_size()`
