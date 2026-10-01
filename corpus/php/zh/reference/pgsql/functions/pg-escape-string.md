---
id: "zh-php-function-function-pg-escape-string"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sanitizer"}
name: "pg_escape_string"
title: "转义字符串以供查询"
signature: "string pg_escape_string([PgSql\\Connection $connection = ...], string $string)"
module: "pgsql"
source_url: "https://www.php.net/manual/zh/function.pg-escape-string.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 转义字符串以供查询

## 说明

```php
string pg_escape_string([PgSql\Connection $connection = ...], string $string)
```

`pg_escape_string()` 转义用于查询数据库的字符串。它返回不带引号的 PostgreSQL 格式的转义字符串。`pg_escape_literal()` 是为 PostgreSQL 转义 SQL 参数的首选方法。`addslashes()` 不得与 PostgreSQL 一起使用。如果列的类型是 bytea，则必须改用 `pg_escape_bytea()`。`pg_escape_identifier()` 必须用于转义标识符（例如表名、字段名）

## 参数

- **`$connection`** — An `PgSql\Connection` instance. When `$connection` is unspecified, the default connection is used. The default connection is the last connection made by `pg_connect()` or `pg_pconnect()`. > As of PHP 8.1.0, using the default connection is deprecated.
- **`$string`** — 包含要转义的 `string`。

## 返回值

包含转义数据的 `string`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在 `$connection` 参数接受 `PgSql\Connection` 实例，之前接受 `resource`。 |

## 示例

**`pg_escape_string()` 示例**

```php


<?php 
  // 连接到数据库
  $dbconn = pg_connect('dbname=foo');
  
  // 读入文本文件（包含撇号和反斜线）
  $data = file_get_contents('letter.txt');
  
  // 转义文本数据
  $escaped = pg_escape_string($data);
  
  // 将其插入数据库
  pg_query("INSERT INTO correspondence (name, data) VALUES ('My letter', '{$escaped}')");
?>

    
```

## 参见

`pg_escape_bytea()`
