---
id: "zh-php-function-reflectionclass-newinstance"
language: "php"
lang: "zh"
category: "function"
name: "ReflectionClass::newInstance"
title: "从指定的参数创建新类实例"
signature: "public object ReflectionClass::newInstance(mixed $args)"
module: "reflection"
source_url: "https://www.php.net/manual/zh/reflectionclass.newinstance.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 从指定的参数创建新类实例

## 说明

```php
public object ReflectionClass::newInstance(mixed $args)
```

创建类的新的实例。给出的参数将会传递到类的构造函数。

## 参数

- **`$args`** — 接受可变数目的参数，用于传递到类的构造函数，和 `call_user_func()` 很相似。

## 返回值

## 错误／异常

如果类的构造函数不是 public 的将会导致一个 `ReflectionException`。

当 `$args` 指定了一个或多个参数，而类不具有构造函数时,将导致一个 `ReflectionException`。

## 参见

`ReflectionClass::newInstanceArgs()` `ReflectionClass::newInstanceWithoutConstructor()`
