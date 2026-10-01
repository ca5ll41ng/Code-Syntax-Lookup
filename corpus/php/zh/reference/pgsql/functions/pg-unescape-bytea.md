---
id: "zh-php-function-function-pg-unescape-bytea"
language: "php"
lang: "zh"
category: "function"
name: "pg_unescape_bytea"
title: "反转义 bytea 类型的二进制数据"
signature: "string pg_unescape_bytea(string $string)"
module: "pgsql"
source_url: "https://www.php.net/manual/zh/function.pg-unescape-bytea.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 反转义 bytea 类型的二进制数据

## 说明

```php
string pg_unescape_bytea(string $string)
```

`pg_unescape_bytea()` 反转义 PostgreSQL bytea 数据值。返回反转义后的字符串，可能包含二进制数据。

> 当 `SELECT` bytea 类型时，PostgreSQL 返回前缀为“\”的八进制字节值（例如 \032）。用户需要手动将其转换回二进制格式。

## 参数

- **`$string`** — `string`，包含 PostgreSQL bytea 数据，需要转换为 PHP 二进制字符串。

## 返回值

包含反转义数据的 `string`。

## 示例

**`pg_unescape_bytea()` 示例**

```php


<?php 
  // Connect to the database
  $dbconn = pg_connect('dbname=foo');
  
  // Get the bytea data
  $res = pg_query("SELECT data FROM gallery WHERE name='Pine trees'");  
  $raw = pg_fetch_result($res, 'data');
  
  // Convert to binary and send to the browser
  header('Content-type: image/jpeg');
  echo pg_unescape_bytea($raw);
?>

    
```

## 参见

`pg_escape_bytea()` `pg_escape_string()`
