---
id: "zh-php-function-pdostatement-setattribute"
language: "php"
lang: "zh"
category: "function"
name: "PDOStatement::setAttribute"
title: "设置一个语句属性"
signature: "public bool PDOStatement::setAttribute(int $attribute, mixed $value)"
module: "pdo"
source_url: "https://www.php.net/manual/zh/pdostatement.setattribute.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置一个语句属性

## 说明

```php
public bool PDOStatement::setAttribute(int $attribute, mixed $value)
```

给语句设置一个属性。当前，没有通用的属性可以设置，只有驱动特定的属性：

- `PDO::ATTR_CURSOR_NAME` （Firebird 和 ODBC 特性）： 为 `UPDATE ... WHERE CURRENT OF` 设置游标名称。

请注意，驱动特定的属性*不得*与其他驱动程序一起使用。

## 参数

- **`$attribute`** — 要修改的属性。
- **`$value`** — 设置 `$attribute` 的值，属性的不同导致需要的类型也会不同。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 参见

`PDO::getAttribute()` `PDO::setAttribute()` `PDOStatement::getAttribute()`
