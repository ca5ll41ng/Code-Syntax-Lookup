---
id: "zh-php-function-function-oci-fetch"
language: "php"
lang: "zh"
category: "function"
name: "oci_fetch"
title: "从查询中读取下一行到内部缓冲区"
signature: "bool oci_fetch(resource $statement)"
module: "oci8"
source_url: "https://www.php.net/manual/zh/function.oci-fetch.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 从查询中读取下一行到内部缓冲区

## 说明

```php
bool oci_fetch(resource $statement)
```

从查询中读取下一行到内部缓冲区，可以使用 `oci_result()` 访问，也可以使用之前用 `oci_define_by_name()` 定义的变量访问。

有关读取数据的通用信息，请参阅 `oci_fetch_array()`。

## 参数

- **`$statement`** — 有效的 OCI8 报表标识符 由 `oci_parse()` 创建，被 `oci_execute()` 或 `REF CURSOR` statement 标识执行。

## 返回值

成功时返回 `true`，如果 `$statement` 中没有更多行，则为 `false`。

## 示例

**`oci_fetch()` 与已定义的变量**

```php


<?php

$conn = oci_connect('hr', 'welcome', 'localhost/XE');
if (!$conn) {
    $e = oci_error();
    trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
}

$sql = 'SELECT location_id, city FROM locations WHERE location_id < 1200';
$stid = oci_parse($conn, $sql);

// The defines MUST be done before executing
oci_define_by_name($stid, 'LOCATION_ID', $locid);
oci_define_by_name($stid, 'CITY', $city);

oci_execute($stid);

// Each fetch populates the previously defined variables with the next row's data
while (oci_fetch($stid)) {
    echo "Location id $locid is $city<br>\n";
}

// Displays:
//   Location id 1000 is Roma
//   Location id 1100 is Venice

oci_free_statement($stid);
oci_close($conn);

?>

    
```

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

## 注释

> 不会从 Oracle 数据库隐式结果集中返回行。请改用 `oci_fetch_array()`。

## 参见

`oci_define_by_name()` `oci_fetch_all()` `oci_fetch_array()` `oci_fetch_assoc()` `oci_fetch_object()` `oci_fetch_row()` `oci_result()`
