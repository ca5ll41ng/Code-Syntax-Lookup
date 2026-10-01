---
id: "zh-php-function-reflectionclass-getstaticproperties"
language: "php"
lang: "zh"
category: "function"
name: "ReflectionClass::getStaticProperties"
title: "获取静态（static）属性"
signature: "public array ReflectionClass::getStaticProperties()"
module: "reflection"
source_url: "https://www.php.net/manual/zh/reflectionclass.getstaticproperties.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取静态（static）属性

## 说明

```php
public array ReflectionClass::getStaticProperties()
```

获取静态（static）属性。

## 参数

此函数没有参数。

## 返回值

静态（static）的属性，类型是 `array`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.3.0 | `ReflectionClass::getStaticProperties()` 的返回类型已经从 `array` 更改为 `?array`。 |

## 参见

`ReflectionClass::getStaticPropertyValue()` `ReflectionClass::setStaticPropertyValue()`
