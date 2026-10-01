---
id: "zh-php-function-reflectionclass-gettraits"
language: "php"
lang: "zh"
category: "function"
name: "ReflectionClass::getTraits"
title: "返回这个类所使用的 traits 数组"
signature: "public array ReflectionClass::getTraits()"
module: "reflection"
source_url: "https://www.php.net/manual/zh/reflectionclass.gettraits.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回这个类所使用的 traits 数组

## 说明

```php
public array ReflectionClass::getTraits()
```

获取该类使用的 trait 数组。

## 参数

此函数没有参数。

## 返回值

返回了数组，键是 trait 的名称，值是 trait 实例的 `ReflectionClass`。 出现错误的情况下返回 `null`。
