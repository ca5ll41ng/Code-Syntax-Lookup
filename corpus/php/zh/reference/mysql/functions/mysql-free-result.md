---
id: "zh-php-function-function-mysql-free-result"
language: "php"
lang: "zh"
category: "function"
name: "mysql_free_result"
title: "释放结果内存"
signature: "bool mysql_free_result(resource $result)"
module: "mysql"
source_url: "https://www.php.net/manual/zh/function.mysql-free-result.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 释放结果内存

## 说明

```php
bool mysql_free_result(resource $result)
```

`mysql_free_result()` 将释放所有与结果标识符 `$result` 所关联的内存。

`mysql_free_result()` 仅需要在考虑到返回很大的结果集时会占用多少内存时调用。在脚本结束后所有关联的内存都会被自动释放。

成功时返回 `true`， 或者在失败时返回 `false`。

为向下兼容仍然可以使用 `mysql_freeresult()`，但反对这样做。

## 参数

- **`$result`** — `resource` 型的结果集。此结果集来自对 `mysql_query()` 的调用。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

If a non-resource is used for the `$result`, an error of level E_WARNING will be emitted. It's worth noting that `mysql_query()` only returns a `resource` for SELECT, SHOW, EXPLAIN, and DESCRIBE queries.

## 示例

**A `mysql_free_result()` example**

```php


<?php
$result = mysql_query("SELECT id,email FROM people WHERE id = '42'");
if (!$result) {
    echo 'Could not run query: ' . mysql_error();
    exit;
}
/* Use the result, assuming we're done with it afterwards */
$row = mysql_fetch_assoc($result);

/* Now we free up the result and continue on with our script */
mysql_free_result($result);

echo $row['id'];
echo $row['email'];
?>

   
```

## 注释

> 为了向下兼容，可以使用下列已废弃的别名： `mysql_freeresult()`

## 参见

 `mysql_query()` `is_resource()`
