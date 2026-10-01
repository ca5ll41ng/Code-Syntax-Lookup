---
id: "zh-php-function-function-mysql-unbuffered-query"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sink","attack":["sql_injection"],"cwe":["CWE-89"],"params":[1]}
name: "mysql_unbuffered_query"
title: "向 MySQL 发送 SQL 查询，无需获取和缓冲结果行"
signature: "resource mysql_unbuffered_query(string $query, resource $link_identifier = NULL)"
module: "mysql"
source_url: "https://www.php.net/manual/zh/function.mysql-unbuffered-query.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 向 MySQL 发送 SQL 查询，无需获取和缓冲结果行

## 说明

```php
resource mysql_unbuffered_query(string $query, resource $link_identifier = NULL)
```

`mysql_unbuffered_query()` 将 SQL `$query` 发送到 MySQL，而不像 `mysql_query()` 那样自动获取和缓冲结果行。对于生成大型结果集的 SQL 查询，这可以节省大量内存，并且可以在检索第一行后立即开始处理结果集，因为不必等到执行完整的 SQL 查询。要在打开多个数据库连接时使用 `mysql_unbuffered_query()`，必须指定可选参数 `$link_identifier` 来标识要使用哪个连接。

## 参数

- **`$query`** — 要执行的 SQL 查询。 — 查询中的数据应正确转义。
- **`$link_identifier`** — MySQL 连接。如不指定连接标识，则使用由 `mysql_connect()` 最近打开的连接。如果没有找到该连接，会尝试不带参数调用 `mysql_connect()` 来创建。如没有找到连接或无法建立连接，则会生成 `E_WARNING` 级别的错误。

## 返回值

对于 SELECT、SHOW、DESCRIBE 或 EXPLAIN 语句，`mysql_unbuffered_query()` 在成功时返回 `resource`，错误时返回 `false`。

对于其他类型的 SQL 语句，UPDATE、DELETE、DROP 等，`mysql_unbuffered_query()` 在成功时返回 `true`，在错误时返回 `false`。

## 注释

> `mysql_unbuffered_query()` 的好处是有代价的：在获取所有行之前，不能对 `mysql_unbuffered_query()` 返回的结果集使用 `mysql_num_rows()` 和 `mysql_data_seek()`。还必须使用相同的 `$link_identifier` 从无缓冲的 SQL 查询中获取所有结果行，然后才能将新的 SQL 查询发送到 MySQL。

## 参见

 `mysql_query()`
