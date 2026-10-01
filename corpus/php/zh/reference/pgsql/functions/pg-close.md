---
id: "zh-php-function-function-pg-close"
language: "php"
lang: "zh"
category: "function"
name: "pg_close"
title: "关闭 PostgreSQL 连接"
signature: "true pg_close(PgSql\\Connection|null $connection = null)"
module: "pgsql"
source_url: "https://www.php.net/manual/zh/function.pg-close.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 关闭 PostgreSQL 连接

## 说明

```php
true pg_close(PgSql\Connection|null $connection = null)
```

`pg_close()` 关闭与指定 `$connection` 实例关联的 PostgreSQL 数据库的非持久连接。

> 通常不需要使用 `pg_close()`，因为打开的非持久连接会在脚本结束时自动关闭。

如果连接上有打开的 `PgSql\Lob` 实例，请不要在关闭所有 `PgSql\Lob` 实例之前关闭连接。

## 参数

- **`$connection`** — An `PgSql\Connection` instance. When `$connection` is `null`, the default connection is used. The default connection is the last connection made by `pg_connect()` or `pg_pconnect()`. > As of PHP 8.1.0, using the default connection is deprecated.

## 返回值

总是返回 `true`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.2.0 | 现在返回类型为 `true`；之前是 `bool`。 |
| 8.1.0 | 现在 `$connection` 参数接受 `PgSql\Connection` 实例，之前接受 `resource`。 |
| 8.0.0 | `$connection` 现在可以为 null。 |

## 示例

**`pg_close()` 示例**

```php


<?php
$dbconn = pg_connect("host=localhost port=5432 dbname=mary")
   or die("Could not connect");
echo "Connected successfully";
pg_close($dbconn);
?>

    
```

以上示例会输出：

```text


Connected successfully

    
```

## 参见

`pg_connect()`
