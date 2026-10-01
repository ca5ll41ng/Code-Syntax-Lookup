---
id: "zh-php-function-reflectionclass-newinstancewithoutconstructor"
language: "php"
lang: "zh"
category: "function"
name: "ReflectionClass::newInstanceWithoutConstructor"
title: "创建新的类实例而不调用它的构造函数"
signature: "public object ReflectionClass::newInstanceWithoutConstructor()"
module: "reflection"
source_url: "https://www.php.net/manual/zh/reflectionclass.newinstancewithoutconstructor.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 创建新的类实例而不调用它的构造函数

## 说明

```php
public object ReflectionClass::newInstanceWithoutConstructor()
```

创建一个新的类的实例而不调用它的构造函数。

## 参数

## 返回值

## 错误／异常

如果这个类是必须调用构造函数来实例化的内置类，将导致 `ReflectionException`。此异常仅限于 final 的内置类。

## 参见

`ReflectionClass::newInstance()` `ReflectionClass::newInstanceArgs()`
