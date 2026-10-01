---
id: "zh-php-function-mysqli-commit"
language: "php"
lang: "zh"
category: "function"
name: "mysqli::commit"
aliases: ["mysqli_commit"]
title: "提交当前事务"
signature: "public bool mysqli::commit(int $flags = 0, string|null $name = null)"
module: "mysqli"
source_url: "https://www.php.net/manual/zh/mysqli.commit.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 提交当前事务

## 说明

面向对象风格

```php
public bool mysqli::commit(int $flags = 0, string|null $name = null)
```

过程化风格

```php
bool mysqli_commit(mysqli $mysql, int $flags = 0, string|null $name = null)
```

提交当前数据库连接的事务。

## 参数

- **`$mysql`** — 仅以过程化样式：由 `mysqli_connect()` 或 `mysqli_init()` 返回的 `mysqli` 对象。
- **`$flags`** — `MYSQLI_TRANS_COR_{*}` 常量的位掩码。
- **`$name`** — 如果提供，则执行 `COMMIT/*name*/`。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 错误／异常

If mysqli error reporting is enabled (`MYSQLI_REPORT_ERROR`) and the requested operation fails, a warning is generated. If, in addition, the mode is set to `MYSQLI_REPORT_STRICT`, a `mysqli_sql_exception` is thrown instead.

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$name` 现在允许为 null。 |

## 示例

参阅 `mysqli::begin_transaction()` 示例。

## 注释

> 此方法在不支持事务的表类型中不生效，如 MyISAM 或 ISAM。

## 参见

`mysqli_autocommit()` `mysqli_begin_transaction()` `mysqli_rollback()` `mysqli_savepoint()`
