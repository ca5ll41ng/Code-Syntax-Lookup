---
id: "zh-php-function-function-oci-field-scale"
language: "php"
lang: "zh"
category: "function"
name: "oci_field_scale"
title: "返回字段范围"
signature: "int|false oci_field_scale(resource $statement, string|int $column)"
module: "oci8"
source_url: "https://www.php.net/manual/zh/function.oci-field-scale.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回字段范围

## 说明

```php
int|false oci_field_scale(resource $statement, string|int $column)
```

返回 `$column` 列索引的范围。

对于 FLOAT 列，精度为非零且范围为 -127。如果精度为 0，则列为 NUMBER。否则为 NUMBER(precision, scale)。

## 参数

- **`$statement`** — 有效的 OCI 语句标识符。
- **`$column`** — 可以是字段的索引（从1开始），也可以是名称。

## 返回值

返回 int 类型的范围， 或者在失败时返回 `false`

## 示例

**`oci_field_scale()` 示例**

```php


<?php

// Create the table with:
//   CREATE TABLE mytab (c1 NUMBER, c2 FLOAT, c3 NUMBER(4), c4 NUMBER(5,3));

$conn = oci_connect("hr", "hrpwd", "localhost/XE");
if (!$conn) {
    $m = oci_error();
    trigger_error(htmlentities($m['message']), E_USER_ERROR);
}

$stid = oci_parse($conn, "SELECT * FROM mytab");
oci_execute($stid, OCI_DESCRIBE_ONLY); // Use OCI_DESCRIBE_ONLY if not fetching rows

$ncols = oci_num_fields($stid);
for ($i = 1; $i <= $ncols; $i++) {
    echo oci_field_name($stid, $i) . " " 
        . oci_field_precision($stid, $i) . " " 
        . oci_field_scale($stid, $i) . "<br>\n";
}

// Outputs:
//   C1    0 -127
//   C2  126 -127
//   C3    4    0
//   C4    5    3

oci_free_statement($stid);
oci_close($conn);

?>

    
```

## 参见

`oci_field_precision()` `oci_field_type()`
