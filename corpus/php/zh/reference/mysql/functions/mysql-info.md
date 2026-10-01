---
id: "zh-php-function-function-mysql-info"
language: "php"
lang: "zh"
category: "function"
name: "mysql_info"
title: "获取最近查询的有关信息"
signature: "string mysql_info(resource $link_identifier = NULL)"
module: "mysql"
source_url: "https://www.php.net/manual/zh/function.mysql-info.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取最近查询的有关信息

## 说明

```php
string mysql_info(resource $link_identifier = NULL)
```

返回最近一条查询的详细信息。

## 参数

- **`$link_identifier`** — MySQL 连接。如不指定连接标识，则使用由 `mysql_connect()` 最近打开的连接。如果没有找到该连接，会尝试不带参数调用 `mysql_connect()` 来创建。如没有找到连接或无法建立连接，则会生成 `E_WARNING` 级别的错误。

## 返回值

在成功时返回语句信息，在失败时返回 `false`。请查看下面的示例，了解哪些语句提供信息，以及返回值可能是什么样子。未列出的语句将返回 `false`。

## 示例

**相关的 MySQL 语句**

返回字符串值的语句。这些数字仅用于说明目的；它们的值将与查询相对应。

```mysql


INSERT INTO ... SELECT ...
String format: Records: 23 Duplicates: 0 Warnings: 0
INSERT INTO ... VALUES (...),(...),(...)...
String format: Records: 37 Duplicates: 0 Warnings: 0
LOAD DATA INFILE ...
String format: Records: 42 Deleted: 0 Skipped: 0 Warnings: 0
ALTER TABLE
String format: Records: 60 Duplicates: 0 Warnings: 0
UPDATE
String format: Rows matched: 65 Changed: 65 Warnings: 0

   
```

## 注释

> `mysql_info()` 对于 INSERT ... VALUES 语句仅在该语句中列出了多个值的情况下返回非 `false` 的值。

## 参见

 `mysql_affected_rows()` `mysql_insert_id()` `mysql_stat()`
