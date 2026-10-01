---
id: "zh-php-function-function-oci-field-type-raw"
language: "php"
lang: "zh"
category: "function"
name: "oci_field_type_raw"
title: "返回字段的原始 Oracle 数据类型"
signature: "int|false oci_field_type_raw(resource $statement, string|int $column)"
module: "oci8"
source_url: "https://www.php.net/manual/zh/function.oci-field-type-raw.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回字段的原始 Oracle 数据类型

## 说明

```php
int|false oci_field_type_raw(resource $statement, string|int $column)
```

返回 `$column` 的 Oracle 原始“SQLT”数据类型。

如果想要字段的类型名称，然后使用 `oci_field_type()` 代替。

## 参数

- **`$statement`** — 有效的 OCI 语句标识符。
- **`$column`** — 可以是字段的索引（从1开始），也可以是名称。

## 返回值

返回数字类型的 Oracle 的原始数据类型， 或者在失败时返回 `false`

## 示例

**`oci_field_type_raw()` 示例**

```php


<?php

// Create the table with:
//   CREATE TABLE mytab (number_col NUMBER, varchar2_col varchar2(1), clob_col CLOB, date_col DATE);

$conn = oci_connect("hr", "hrpwd", "localhost/XE");
if (!$conn) {
    $m = oci_error();
    trigger_error(htmlentities($m['message']), E_USER_ERROR);
}

$stid = oci_parse($conn, 'select * from mytab');
oci_execute($stid, OCI_DESCRIBE_ONLY);  // Use OCI_DESCRIBE_ONLY if not fetching rows
$n = oci_num_fields($stid);
for ($i = 1; $i <= $n; ++$i) {
    echo oci_field_name($stid, $i) . " is raw type: " . oci_field_type_raw($stid, $i) . "<br>\n";
}

// Output is:
//    NUMBER_COL is raw type: 2
//    VARCHAR2_COL is raw type: 1
//    CLOB_COL is raw type: 112
//    DATE_COL is raw type: 12

oci_free_statement($stid);
oci_close($conn);

?>
    
```
