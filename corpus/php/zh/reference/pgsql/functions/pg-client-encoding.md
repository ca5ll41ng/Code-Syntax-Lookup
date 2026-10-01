---
id: "zh-php-function-function-pg-client-encoding"
language: "php"
lang: "zh"
category: "function"
name: "pg_client_encoding"
title: "获取客户端编码"
signature: "string pg_client_encoding(PgSql\\Connection|null $connection = null)"
module: "pgsql"
source_url: "https://www.php.net/manual/zh/function.pg-client-encoding.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取客户端编码

## 说明

```php
string pg_client_encoding(PgSql\Connection|null $connection = null)
```

PostgreSQL 支持某些字符集在服务器和客户端之间自动进行字符集转换。`pg_client_encoding()` 以字符串形式返回客户端编码。返回的字符串将是标准的 PostgreSQL 编码标识符之一。

> 如果 libpq 在没有多字节编码支持的情况下编译，`pg_client_encoding()` 总是返回 `SQL_ASCII`。支持的编码取决于 PostgreSQL 版本。请参阅 PostgreSQL 文档支持的编码。
>
> 此函数过去称为 `pg_clientencoding()`。

## 参数

- **`$connection`** — An `PgSql\Connection` instance. When `$connection` is `null`, the default connection is used. The default connection is the last connection made by `pg_connect()` or `pg_pconnect()`. > As of PHP 8.1.0, using the default connection is deprecated.

## 返回值

客户端编码。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在 `$connection` 参数接受 `PgSql\Connection` 实例，之前接受 `resource`。 |
| 8.0.0 | `$connection` 现在可以为 null。 |

## 示例

**`pg_client_encoding()` 示例**

```php


<?php
// Assume $conn is a connection to a ISO-8859-1 database
$encoding = pg_client_encoding($conn);

echo "Client encoding is: ", $encoding, "\n";
?>

    
```

以上示例会输出：

```text


Client encoding is: ISO-8859-1

    
```

## 参见

`pg_set_client_encoding()`
