---
id: "zh-php-function-pdo-intransaction"
language: "php"
lang: "zh"
category: "function"
name: "PDO::inTransaction"
title: "检查是否在事务内"
signature: "public bool PDO::inTransaction()"
module: "pdo"
source_url: "https://www.php.net/manual/zh/pdo.intransaction.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检查是否在事务内

## 说明

```php
public bool PDO::inTransaction()
```

检查驱动内的事务当前是否处于激活。此方法仅对支持事务的数据库驱动起作用。

## 参数

此函数没有参数。

## 返回值

如果当前事务处于激活，则返回 `true` ，否则返回 `false` 。
