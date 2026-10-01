---
id: "zh-php-function-function-oci-result"
language: "php"
lang: "zh"
category: "function"
name: "oci_result"
title: "返回所取得行中字段的值"
signature: "mixed oci_result(resource $statement, string|int $column)"
module: "oci8"
source_url: "https://www.php.net/manual/zh/function.oci-result.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回所取得行中字段的值

## 说明

```php
mixed oci_result(resource $statement, string|int $column)
```

返回由 `oci_fetch()` 所读取的当前行中 `$column` 的数据。

要获取 OCI8 扩展进行数据类型映射的细节，请参见驱动所支持的数据类型。

## 参数

- **`$statement`**
- **`$column`** — 可以使用列号（从 1 开始）或列名。列名的大小写必须是 Oracle 元数据描述该列的大小写，对于创建的不区分大小写的列来说是大写。

## 返回值

以字符串形式返回除抽象类型（ROWID、LOB 和 FILE）之外的所有内容。在出错时返回 `false`。

## 示例

**`oci_fetch()` 和 `oci_result()`**

```php


<?php

$conn = oci_connect('hr', 'welcome', 'localhost/XE');
if (!$conn) {
    $e = oci_error();
    trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
}

$sql = 'SELECT location_id, city FROM locations WHERE location_id < 1200';
$stid = oci_parse($conn, $sql);
oci_execute($stid);

while (oci_fetch($stid)) {
    echo oci_result($stid, 'LOCATION_ID') . " is ";
    echo oci_result($stid, 'CITY') . "<br>\n";
}

// Displays:
//   1000 is Roma
//   1100 is Venice

oci_free_statement($stid);
oci_close($conn);

?>

    
```

## 参见

`oci_fetch_array()` `oci_fetch_assoc()` `oci_fetch_object()` `oci_fetch_row()` `oci_fetch_all()`
