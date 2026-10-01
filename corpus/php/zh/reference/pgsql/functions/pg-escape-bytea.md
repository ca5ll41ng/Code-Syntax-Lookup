---
id: "zh-php-function-function-pg-escape-bytea"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sanitizer"}
name: "pg_escape_bytea"
title: "转义字符串以插入到 bytea 字段"
signature: "string pg_escape_bytea([PgSql\\Connection $connection = ...], string $string)"
module: "pgsql"
source_url: "https://www.php.net/manual/zh/function.pg-escape-bytea.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 转义字符串以插入到 bytea 字段

## 说明

```php
string pg_escape_bytea([PgSql\Connection $connection = ...], string $string)
```

`pg_escape_bytea()` 转义 bytea 数据类型的字符串。返回转义后的字符串。

> 当 `SELECT` bytea 类型时，PostgreSQL 返回前缀为“\”的八进制字节值（例如 \032）。用户需要手动转换为二进制格式。
>
> 本函数需要 PostgreSQL 7.2 及其更高版本。在 PostgreSQL 7.2.0 和 7.2.1 版中，如果使用了多字节支持，必须强制转换 bytea 类型。即 `INSERT INTO test_table (image) VALUES ('$image_escaped'::bytea);`，在 PostgreSQL 7.2.2 及其更高版本不需要强制转换。异常情况是当客户端和后端字符编码不匹配时，可能会有多字节流错误。然后用户必须强制转换 bytea 以避免此错误。

## 参数

- **`$connection`** — An `PgSql\Connection` instance. When `$connection` is unspecified, the default connection is used. The default connection is the last connection made by `pg_connect()` or `pg_pconnect()`. > As of PHP 8.1.0, using the default connection is deprecated.
- **`$string`** — 包含要插入到 bytea 列中的文本或二进制数据的 `string`。

## 返回值

包含转义数据的 `string`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在 `$connection` 参数接受 `PgSql\Connection` 实例，之前接受 `resource`。 |

## 示例

**`pg_escape_bytea()` 示例**

```php


<?php 
  // 连接到数据库
  $dbconn = pg_connect('dbname=foo');
  
  // 读入二进制文件
  $data = file_get_contents('image1.jpg');
  
  // 转义二进制数据
  $escaped = pg_escape_bytea($data);
  
  // 将其插入数据库
  pg_query("INSERT INTO gallery (name, data) VALUES ('Pine trees', '{$escaped}')");
?>

    
```

## 参见

`pg_unescape_bytea()` `pg_escape_string()`
