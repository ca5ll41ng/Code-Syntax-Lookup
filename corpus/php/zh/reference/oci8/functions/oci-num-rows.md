---
id: "zh-php-function-function-oci-num-rows"
language: "php"
lang: "zh"
category: "function"
name: "oci_num_rows"
title: "返回语句执行后受影响的行数"
signature: "int|false oci_num_rows(resource $statement)"
module: "oci8"
source_url: "https://www.php.net/manual/zh/function.oci-num-rows.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回语句执行后受影响的行数

## 说明

```php
int|false oci_num_rows(resource $statement)
```

获取语句执行后受影响的行数。

## 参数

- **`$statement`** — 有效的 OCI 语句标识符。

## 返回值

返回 int 类型的受影响的行数， 或者在失败时返回 `false`。

## 示例

**`oci_num_rows()` 示例**

```php


<?php

$conn = oci_connect("hr", "hrpwd", "localhost/XE");
if (!$conn) {
    $m = oci_error();
    trigger_error(htmlentities($m['message']), E_USER_ERROR);
}

$stid = oci_parse($conn, "create table emp2 as select * from employees");
oci_execute($stid);
echo oci_num_rows($stid) . " rows inserted.<br />\n";
oci_free_statement($stid);

$stid = oci_parse($conn, "delete from emp2");
oci_execute($stid, OCI_DEFAULT);
echo oci_num_rows($stid) . " rows deleted.<br />\n";
oci_commit($conn);
oci_free_statement($stid);

$stid = oci_parse($conn, "drop table emp2");
oci_execute($stid);
oci_free_statement($stid);

oci_close($conn);

?>

    
```

## 注释

> 本函数*并不*返回 SELECT 查询出来的行数！对于 SELECT 语句本函数将返回用 `oci_fetch*()` 函数从缓冲区获取的行数。
