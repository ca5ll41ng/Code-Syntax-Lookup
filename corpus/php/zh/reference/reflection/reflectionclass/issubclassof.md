---
id: "zh-php-function-reflectionclass-issubclassof"
language: "php"
lang: "zh"
category: "function"
name: "ReflectionClass::isSubclassOf"
title: "检查是否为子类"
signature: "public bool ReflectionClass::isSubclassOf(ReflectionClass|string $class)"
module: "reflection"
source_url: "https://www.php.net/manual/zh/reflectionclass.issubclassof.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检查是否为子类

## 说明

```php
public bool ReflectionClass::isSubclassOf(ReflectionClass|string $class)
```

检查类是否为指定类的子类，或者实现了指定的接口。

## 参数

- **`$class`** — 要检查的 `string` 形式的类名或者类的 `ReflectionClass` 对象。

## 返回值

如果类是指定类或接口的子类，则返回 `true`，否则返回 `false`。

## 参见

`ReflectionClass::isInterface()` `ReflectionClass::implementsInterface()` `is_subclass_of()` `get_parent_class()`
