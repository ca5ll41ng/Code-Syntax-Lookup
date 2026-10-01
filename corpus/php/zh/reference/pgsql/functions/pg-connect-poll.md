---
id: "zh-php-function-function-pg-connect-poll"
language: "php"
lang: "zh"
category: "function"
name: "pg_connect_poll"
title: "对正在进行尝试进行异步的 PostgreSQL 连接轮询其状态。"
signature: "int pg_connect_poll(PgSql\\Connection $connection)"
module: "pgsql"
source_url: "https://www.php.net/manual/zh/function.pg-connect-poll.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 对正在进行尝试进行异步的 PostgreSQL 连接轮询其状态。

## 说明

```php
int pg_connect_poll(PgSql\Connection $connection)
```

`pg_connect_poll()` 轮询通过 `PGSQL_CONNECT_ASYNC` 选项调用 `pg_connect()` 创建的 PostgreSQL 连接的状态。

## 参数

- **`$connection`** — `PgSql\Connection` 实例。

## 返回值

返回 `PGSQL_POLLING_FAILED`、`PGSQL_POLLING_READING`、`PGSQL_POLLING_WRITING`、`PGSQL_POLLING_OK` 或 `PGSQL_POLLING_ACTIVE`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在 `$connection` 参数接受 `PgSql\Connection` 实例，之前接受 `resource`。 |
