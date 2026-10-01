---
id: "zh-php-function-pdostatement-getattribute"
language: "php"
lang: "zh"
category: "function"
name: "PDOStatement::getAttribute"
title: "检索语句属性"
signature: "public mixed PDOStatement::getAttribute(int $name)"
module: "pdo"
source_url: "https://www.php.net/manual/zh/pdostatement.getattribute.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检索语句属性

## 说明

```php
public mixed PDOStatement::getAttribute(int $name)
```

得到语句的属性。当前，不存在通用的属性，只有驱动特定的属性：

- `PDO::ATTR_CURSOR_NAME` （Firebird 和 ODBC 特性）： 获取 `UPDATE ... WHERE CURRENT OF` 的游标名称。

请注意，驱动特定的属性*不得*与其他驱动程序一起使用。

## 参数

- **`$name`** — 要查询的属性。

## 返回值

返回属性值。

## 参见

`PDO::getAttribute()` `PDO::setAttribute()` `PDOStatement::setAttribute()`
