---
id: "zh-php-function-function-pg-flush"
language: "php"
lang: "zh"
category: "function"
name: "pg_flush"
title: "刷新链接中已处理的数据查询"
signature: "int|bool pg_flush(PgSql\\Connection $connection)"
module: "pgsql"
source_url: "https://www.php.net/manual/zh/function.pg-flush.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 刷新链接中已处理的数据查询

## 说明

```php
int|bool pg_flush(PgSql\Connection $connection)
```

`pg_flush()` 刷新任何已经处理的等待发送到链接的数据查询。

## 参数

- **`$connection`** — `PgSql\Connection` 实例。

## 返回值

如果刷新成功或者没有数据等待刷新返回 `true` ， 如果返回 `0` 为部分刷新或者更多未被刷新,刷新失败为 `false`

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 现在 `$connection` 参数接受 `PgSql\Connection` 实例，之前接受 `resource`。 |
