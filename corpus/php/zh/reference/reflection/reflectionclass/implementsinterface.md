---
id: "zh-php-function-reflectionclass-implementsinterface"
language: "php"
lang: "zh"
category: "function"
name: "ReflectionClass::implementsInterface"
title: "实现接口"
signature: "public bool ReflectionClass::implementsInterface(ReflectionClass|string $interface)"
module: "reflection"
source_url: "https://www.php.net/manual/zh/reflectionclass.implementsinterface.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 实现接口

## 说明

```php
public bool ReflectionClass::implementsInterface(ReflectionClass|string $interface)
```

检查其是否实现了接口（interface）。

## 参数

- **`$interface`** — 接口（interface）的名称。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 错误／异常

如果 `$interface` 不是接口，则 `ReflectionClass::implementsInterface()` 会抛出 `ReflectionException`。

## 参见

`ReflectionClass::isInterface()` `ReflectionClass::isSubclassOf()` `interface_exists()` 对象接口
