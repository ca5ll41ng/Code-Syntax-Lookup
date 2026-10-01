---
id: "zh-php-function-function-oci-commit"
language: "php"
lang: "zh"
category: "function"
name: "oci_commit"
title: "提交未完成的数据库事务"
signature: "bool oci_commit(resource $connection)"
module: "oci8"
source_url: "https://www.php.net/manual/zh/function.oci-commit.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 提交未完成的数据库事务

## 说明

```php
bool oci_commit(resource $connection)
```

为 Oracle `$connection` 提交未完成的事务。提交结束当前事务并使所有更改永久化。释放所有持有的锁。

当使用 `OCI_NO_AUTO_COMMIT` flag 通过 `oci_execute()` 执行第一个更改数据的 SQL 语句时，事务开始。其他语句所做的进一步数据更改成为同一事务的一部分。在事务提交或回滚之前，事务中所做的数据更改是临时的。在提交之前，数据库的其他用户将看不到更改。

插入或更新数据时，出于关系数据一致性和性能原因，建议使用事务。

## 参数

- **`$connection`** — `oci_connect()`、`oci_pconnect()` 或 `oci_new_connect()` 返回的 Oracle 连接标识符。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 示例

**`oci_commit()` 示例**

```php


<?php

// Insert into several tables, rolling back the changes if an error occurs

$conn = oci_connect('hr', 'welcome', 'localhost/XE');

$stid = oci_parse($conn, "INSERT INTO mysalary (id, name) VALUES (1, 'Chris')");

// The OCI_NO_AUTO_COMMIT flag tells Oracle not to commit the INSERT immediately
$r = oci_execute($stid, OCI_NO_AUTO_COMMIT);
if (!$r) {    
    $e = oci_error($stid);
    trigger_error(htmlentities($e['message']), E_USER_ERROR);
}

$stid = oci_parse($conn, 'INSERT INTO myschedule (startday) VALUES (12)');
$r = oci_execute($stid, OCI_NO_AUTO_COMMIT);
if (!$r) {    
    $e = oci_error($stid);
    oci_rollback($conn);  // rollback changes to both tables
    trigger_error(htmlentities($e['message']), E_USER_ERROR);
}

// Commit the changes to both tables
$r = oci_commit($conn);
if (!$r) {
    $e = oci_error($conn);
    trigger_error(htmlentities($e['message']), E_USER_ERROR);
}

?>

    
```

## 注释

> 当关闭连接或脚本结束时（看哪个先）事务会自动回滚。需要明确地调用 `oci_commit()` 来提交事务。
>
> Any call to `oci_execute()` that uses `OCI_COMMIT_ON_SUCCESS` mode explicitly or by default will commit any previous uncommitted transaction.
>
> 任何 Oracle DDL 语句（例如 `CREATE` 或 `DROP`）都会自动提交任何未提交的事务。

## 参见

`oci_execute()` `oci_rollback()`
