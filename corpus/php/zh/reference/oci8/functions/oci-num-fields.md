---
id: "zh-php-function-function-oci-num-fields"
language: "php"
lang: "zh"
category: "function"
name: "oci_num_fields"
title: "返回语句中结果列的数量"
signature: "int oci_num_fields(resource $statement)"
module: "oci8"
source_url: "https://www.php.net/manual/zh/function.oci-num-fields.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回语句中结果列的数量

## 说明

```php
int oci_num_fields(resource $statement)
```

获取 `$statement` 中的列的数量。

## 参数

- **`$statement`** — 有效的 OCI 语句标识符。

## 返回值

返回 `int` 类型的列的数量。

## 示例

**`oci_num_fields()` 示例**

```php


<?php

// Create the table with:
//   CREATE TABLE mytab (id NUMBER, quantity NUMBER);

$conn = oci_connect("hr", "hrpwd", "localhost/XE");
if (!$conn) {
    $m = oci_error();
    trigger_error(htmlentities($m['message']), E_USER_ERROR);
}

$stid = oci_parse($conn, "SELECT * FROM mytab");
oci_execute($stid, OCI_DESCRIBE_ONLY); // Use OCI_DESCRIBE_ONLY if not fetching rows

$ncols = oci_num_fields($stid);
for ($i = 1; $i <= $ncols; $i++) {
    echo oci_field_name($stid, $i) . " " . oci_field_type($stid, $i) . "<br>\n";
}

// Outputs:
//    ID NUMBER
//    QUANTITY NUMBER

oci_free_statement($stid);
oci_close($conn);

?>

    
```
