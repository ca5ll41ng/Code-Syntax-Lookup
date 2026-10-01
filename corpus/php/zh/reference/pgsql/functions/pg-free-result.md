---
id: "zh-php-function-function-pg-free-result"
language: "php"
lang: "zh"
category: "function"
name: "pg_free_result"
title: "释放查询结果占用的内存"
signature: "bool pg_free_result(PgSql\\Result $result)"
module: "pgsql"
source_url: "https://www.php.net/manual/zh/function.pg-free-result.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 释放查询结果占用的内存

## 说明

```php
bool pg_free_result(PgSql\Result $result)
```

`pg_free_result()` 释放与指定 `PgSql\Result` 实例关联的内存和数据。

仅当脚本执行期间的内存消耗成为问题时才需要调用此函数。否则，所有结果内存将在脚本结束时自动释放。

> 本函数以前的名字为 `pg_freeresult()`。

## 参数

- **`$result`** — `PgSql\Result` 实例，由 `pg_query()`、`pg_query_params()` 或者 `pg_execute()`（等）返回。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在 `$result` 参数接受 `PgSql\Result` 实例，之前接受 `resource`。 |

## 示例

**`pg_free_result()` 示例**

```php


<?php
$db = pg_connect("dbname=users user=me");

$res = pg_query($db, "SELECT 1 UNION ALL SELECT 2");

$val = pg_fetch_result($res, 1, 0);

echo "First field in the second row is: ", $val, "\n";

pg_free_result($res);
?>

    
```

以上示例会输出：

```text


First field in the second row is: 2

    
```

## 参见

`pg_query()` `pg_query_params()` `pg_execute()` `pg_result_memory_size()`
