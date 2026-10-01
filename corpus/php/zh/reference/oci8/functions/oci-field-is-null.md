---
id: "zh-php-function-function-oci-field-is-null"
language: "php"
lang: "zh"
category: "function"
name: "oci_field_is_null"
title: "检测当前获取的行中，字段是否为 `null`"
signature: "bool oci_field_is_null(resource $statement, string|int $column)"
module: "oci8"
source_url: "https://www.php.net/manual/zh/function.oci-field-is-null.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检测当前获取的行中，字段是否为 `null`

## 说明

```php
bool oci_field_is_null(resource $statement, string|int $column)
```

检测 `$statement` 的当前行中的指定 `$column` 是否为 `null`。

## 参数

- **`$statement`** — 有效的 OCI 语句标识符。
- **`$column`** — 字段索引（从 1 开始）或者名称。

## 返回值

如果 `$column` 是 `null`，返回 `true`，否则返回 `false`。

## 示例

**`oci_field_name()` 示例**

```php


<?php

// 创建表：
//   CREATE TABLE mytab (c1 NUMBER);
//   INSERT INTO mytab VALUES (1);
//   INSERT INTO mytab VALUES (NULL);

$conn = oci_connect("hr", "hrpwd", "localhost/XE");
if (!$conn) {
    $m = oci_error();
    trigger_error(htmlentities($m['message']), E_USER_ERROR);
}

$stid = oci_parse($conn, "SELECT * FROM mytab");
oci_execute($stid);

while (($row = oci_fetch_array($stid, OCI_RETURN_NULLS)) != false) {
    $ncols = oci_num_fields($stid);
    for ($col = 1; $col <= $ncols; $col++) {
        var_dump(oci_field_is_null($stid, $col));
    }
}

// 输出：
//    bool(false)
//    bool(true)

oci_free_statement($stid);
oci_close($conn);

?>

    
```
