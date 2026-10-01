---
id: "zh-php-function-function-pg-set-client-encoding"
language: "php"
lang: "zh"
category: "function"
name: "pg_set_client_encoding"
title: "设定客户端编码"
signature: "int pg_set_client_encoding([PgSql\\Connection $connection = ...], string $encoding)"
module: "pgsql"
source_url: "https://www.php.net/manual/zh/function.pg-set-client-encoding.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设定客户端编码

## 说明

```php
int pg_set_client_encoding([PgSql\Connection $connection = ...], string $encoding)
```

`pg_set_client_encoding()` 设定客户端编码，成功返回 0，出错返回 -1。

PostgreSQL 会自动将后端数据库编码中的数据转换成前端编码。

> 本函数以前的名字为 `pg_setclientencoding()`。

## 参数

- **`$connection`** — An `PgSql\Connection` instance. When `$connection` is unspecified, the default connection is used. The default connection is the last connection made by `pg_connect()` or `pg_pconnect()`. > As of PHP 8.1.0, using the default connection is deprecated.
- **`$encoding`** — 必需的客户端编码。`SQL_ASCII`、`EUC_JP`、`EUC_CN`、`EUC_KR`、`EUC_TW`、`UNICODE`、`MULE_INTERNAL`、`LATINX` (X=1...9)、`KOI8`、`WIN`、`ALT`、`SJIS`、`BIG5` 或 `WIN1250` 中的一个。 — 确切有效的编码列表取决于 PostgreSQL 版本，因此查阅 PostgreSQL 手册获取更具体的列表。

## 返回值

成功时返回 `0` 失败时返回 `-1`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在 `$connection` 参数接受 `PgSql\Connection` 实例，之前接受 `resource`。 |

## 示例

**`pg_set_client_encoding()` 示例**

```php


<?php

$conn = pg_pconnect("dbname=publisher");
if (!$conn) {
  echo "An error occurred.\n";
  exit;
}

// Set the client encoding to UNICODE.  Data will be automatically
// converted from the backend encoding to the frontend.
pg_set_client_encoding($conn, "UNICODE");

$result = pg_query($conn, "SELECT author, email FROM authors");
if (!$result) {
  echo "An error occurred.\n";
  exit;
}

// Write out UTF-8 data
while ($row = pg_fetch_row($result)) {
  echo "Author: $row[0]  E-mail: $row[1]";
  echo "<br />\n";
}
 
?>

    
```

## 参见

`pg_client_encoding()`
