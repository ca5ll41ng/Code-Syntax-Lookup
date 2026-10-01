---
id: "zh-php-function-pdo-setattribute"
language: "php"
lang: "zh"
category: "function"
name: "PDO::setAttribute"
title: "设置属性"
signature: "public bool PDO::setAttribute(int $attribute, mixed $value)"
module: "pdo"
source_url: "https://www.php.net/manual/zh/pdo.setattribute.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置属性

## 说明

```php
public bool PDO::setAttribute(int $attribute, mixed $value)
```

设置数据库句柄属性。下面列出了一些可用的通用属性；有些驱动可能使用另外的特定属性。 请注意，特定的驱动程序属性*不得*用于其他驱动程序。

- **`PDO::ATTR_CASE`** — 强制列名为指定的大小写。可以采用以下某个值：
  - **`PDO::CASE_LOWER`** — 强制列名小写。
  - **`PDO::CASE_NATURAL`** — 保留数据库驱动返回的列名。
  - **`PDO::CASE_UPPER`** — 强制列名大写。


- **`PDO::ATTR_ERRMODE`** — PDO 的报错方式。可以采用以下某个值：
  - **`PDO::ERRMODE_SILENT`** — 仅设置错误代码。
  - **`PDO::ERRMODE_WARNING`** — 引发 `E_WARNING` 警告。
  - **`PDO::ERRMODE_EXCEPTION`** — 抛出 `PDOException`。


- **`PDO::ATTR_ORACLE_NULLS`**
  > 此属性适用于所有驱动程序，而不仅仅是 Oracle。

 — 确定是否以及如何转换 `null` 和空字符串。可以采用以下值之一：
  - **`PDO::NULL_NATURAL`** — 不发生转换。
  - **`PDO::NULL_EMPTY_STRING`** — 空字符串转换为 `null`。
  - **`PDO::NULL_TO_STRING`** — `null` 被转换为空字符串。


- **`PDO::ATTR_STRINGIFY_FETCHES`** — 控制是否将获取的值（`null` 除外）转换为字符串。采用 `bool` 类型的值：`true` 表示启用，`false` 表示禁用（默认）。除非将 `PDO::ATTR_ORACLE_NULLS` 设置为 `PDO::NULL_TO_STRING`，否则 `null` 值保持不变。
- **`PDO::ATTR_STATEMENT_CLASS`** — 设置从 PDOStatement 派生的用户提供的语句类。 需要 `array(string classname, array(mixed constructor_args))`。
  > 不能用于持久 PDO 实例。


- **`PDO::ATTR_TIMEOUT`** — 指定超时的秒数。需要 `int` 类型的值。
  > 并非所有驱动都支持此选项，这意味着驱动和驱动之间可能会有差异。比如，SQLite 等待的时间达到此值后就放弃获取可写锁，但其他驱动可能会将此值解释为一个连接或读取超时的间隔。


- **`PDO::ATTR_AUTOCOMMIT`**
  > 仅适用于 OCI、Firebird 和 MySQL 驱动程序。

 — 是否自动提交每个单独的语句。采用 `bool` 类型的值：`true` 表示启用，`false` 表示禁用。默认为 `true`。
- **`PDO::ATTR_EMULATE_PREPARES`**
  > 仅适用于 OCI、Firebird 和 MySQL 驱动程序。

 — 是否启用或禁用预处理语句的模拟。有些驱动天然不支持或有限度地支持预处理语句。如果设置为 `true`，PDO 始终模拟预处理语句，否则 PDO 将会尝试使用本地预处理语句。如果驱动不能成功预处理当前查询，PDO 将始终回退到模拟预处理语句上。
- **`PDO::MYSQL_ATTR_USE_BUFFERED_QUERY`**
  > 仅适用于 MySQL 驱动程序。

 — 是否使用缓冲查询。采用 `bool` 类型的值：`true` 表示启用，`false` 表示禁用。默认情况下，默认为 `true`。
- **`PDO::ATTR_DEFAULT_FETCH_MODE`** — 设置默认获取模式。关于模式的说明以及如何使用可以在 `PDOStatement::fetch()` 文档找到。

## 参数

- **`$attribute`** — 要修改的属性。
- **`$value`** — 设置 `$attribute` 的值，属性的不同导致需要的类型也会不同。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 参见

`PDO::getAttribute()` `PDOStatement::getAttribute()` `PDOStatement::setAttribute()`
