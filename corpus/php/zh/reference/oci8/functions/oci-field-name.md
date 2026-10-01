---
id: "zh-php-function-function-oci-field-name"
language: "php"
lang: "zh"
category: "function"
name: "oci_field_name"
title: "返回 statement 中的字段名"
signature: "string|false oci_field_name(resource $statement, string|int $column)"
module: "oci8"
source_url: "https://www.php.net/manual/zh/function.oci-field-name.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回 statement 中的字段名

## 说明

```php
string|false oci_field_name(resource $statement, string|int $column)
```

返回 `$column` 的名称。

## 参数

- **`$statement`** — 有效的 OCI 语句标识符。
- **`$column`** — 字段索引（从 1 开始）或者名称。

## 返回值

返回字符串形式的名称， 或者在失败时返回 `false`

## 示例

**`oci_field_name()` 示例**

```php


<?php

// 创建表：
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

    echo "<tr>";
    echo "<td>$column_name</td>";
    echo "<td>$column_type</td>";
    echo "</tr>\n";
}

echo "</table>\n";

// 输出：
//    Name           Type
//    NUMBER_COL    NUMBER
//    VARCHAR2_COL  VARCHAR2
//    CLOB_COL      CLOB
//    DATE_COL      DATE

oci_free_statement($stid);
oci_close($conn);

?>

    
```

## 参见

`oci_num_fields()` `oci_field_type()` `oci_field_size()`
