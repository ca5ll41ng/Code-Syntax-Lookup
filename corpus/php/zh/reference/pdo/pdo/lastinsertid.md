---
id: "zh-php-function-pdo-lastinsertid"
language: "php"
lang: "zh"
category: "function"
name: "PDO::lastInsertId"
title: "返回最后插入行的ID或序列值"
signature: "public string|false PDO::lastInsertId(string|null $name = null)"
module: "pdo"
source_url: "https://www.php.net/manual/zh/pdo.lastinsertid.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回最后插入行的ID或序列值

## 说明

```php
public string|false PDO::lastInsertId(string|null $name = null)
```

返回最后插入行的 ID，或者是序列对象最后的值，取决于底层的驱动。比如，PDO_PGSQL 允许为 `$name` 参数指定任何序列对象的名称。

> 在不同的 PDO 驱动之间，此方法可能不会返回有意义或一致的结果，因为底层数据库可能不支持自增字段或序列的概念。

## 参数

- **`$name`** — 应该返回 ID 的序列对象的名称。

## 返回值

如果没有为参数 `$name` 指定序列名称，`PDO::lastInsertId()` 返回表示最后插入数据库行的 ID 的字符串。

如果为参数 `$name` 指定了序列名称，`PDO::lastInsertId()` 则返回表示从指定序列对象取回最后的值的字符串。

如果当前 PDO 驱动不支持此功能，则 `PDO::lastInsertId()` 触发一个 `IM001` SQLSTATE 。

## 错误／异常

如果属性 `PDO::ATTR_ERRMODE` 设置为 `PDO::ERRMODE_WARNING`，则发出级别为 `E_WARNING` 的错误。

如果属性 `PDO::ATTR_ERRMODE` 设置为 `PDO::ERRMODE_EXCEPTION`，则抛出 `PDOException`。
