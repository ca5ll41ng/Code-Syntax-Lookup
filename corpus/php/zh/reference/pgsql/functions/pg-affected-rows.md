---
id: "zh-php-function-function-pg-affected-rows"
language: "php"
lang: "zh"
category: "function"
name: "pg_affected_rows"
title: "返回受影响的记录数（元组）"
signature: "int pg_affected_rows(PgSql\\Result $result)"
module: "pgsql"
source_url: "https://www.php.net/manual/zh/function.pg-affected-rows.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回受影响的记录数（元组）

## 说明

```php
int pg_affected_rows(PgSql\Result $result)
```

`pg_affected_rows()` 返回受 `INSERT`、`UPDATE` 和 `DELETE` 查询影响的元组数（实例/记录/行）。

服务器返回 SELECT 的行数。

> 此函数过去称为 `pg_cmdtuples()`。

## 参数

- **`$result`** — `PgSql\Result` 实例，由 `pg_query()`、`pg_query_params()` 或者 `pg_execute()`（等）返回。

## 返回值

受查询影响的行数。如果没有元组受到影响，它将返回 `0`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在 `$result` 参数接受 `PgSql\Result` 实例，之前接受 `resource`。 |

## 示例

**`pg_affected_rows()` 示例**

```php


<?php
$result = pg_query($conn, "INSERT INTO authors VALUES ('Orwell', 2002, 'Animal Farm')");

$cmdtuples = pg_affected_rows($result);

echo $cmdtuples . " tuples are affected.\n";
?>

    
```

以上示例会输出：

```text


1 tuples are affected.

    
```

## 参见

`pg_query()` `pg_query_params()` `pg_execute()` `pg_num_rows()`
