---
id: "zh-php-function-pdostatement-fetchobject"
language: "php"
lang: "zh"
category: "function"
name: "PDOStatement::fetchObject"
title: "获取下一行并作为一个对象返回"
signature: "public object|false PDOStatement::fetchObject(string|null $class = \"stdClass\", array $constructorArgs = [])"
module: "pdo"
source_url: "https://www.php.net/manual/zh/pdostatement.fetchobject.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取下一行并作为一个对象返回

## 说明

```php
public object|false PDOStatement::fetchObject(string|null $class = "stdClass", array $constructorArgs = [])
```

获取下一行并作为一个对象返回。此函数（方法）是使用 `PDO::FETCH_CLASS` 或 `PDO::FETCH_OBJ` 风格的 `PDOStatement::fetch()` 的一种替代。

当获取对象时，它的属性从各自的列值中分配，然后调用它的构造函数。

## 参数

- **`$class`** — 创建类的名称。
- **`$constructorArgs`** — 此数组的元素被传递给构造方法。

## 返回值

返回一个属性名对应于列名的所要求类的实例， 或者在失败时返回 `false`.

## 错误／异常

如果属性 `PDO::ATTR_ERRMODE` 设置为 `PDO::ERRMODE_WARNING`，则发出级别为 `E_WARNING` 的错误。

如果属性 `PDO::ATTR_ERRMODE` 设置为 `PDO::ERRMODE_EXCEPTION`，则抛出 `PDOException`。

## 参见

`PDOStatement::fetch()`
