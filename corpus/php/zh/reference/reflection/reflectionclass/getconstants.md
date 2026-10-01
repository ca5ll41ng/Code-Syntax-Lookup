---
id: "zh-php-function-reflectionclass-getconstants"
language: "php"
lang: "zh"
category: "function"
name: "ReflectionClass::getConstants"
title: "获取常量"
signature: "public array ReflectionClass::getConstants(int|null $filter = null)"
module: "reflection"
source_url: "https://www.php.net/manual/zh/reflectionclass.getconstants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取常量

## 说明

```php
public array ReflectionClass::getConstants(int|null $filter = null)
```

从类中获取所有已定义的常量，而不管它们的可见性如何。

## 参数

- **`$filter`** — 可选过滤器，传入过滤所需的可见性常量。可用 ReflectionClassConstant 常量 进行配置，默认为所有可见性常量。

## 返回值

常量的`数组`，常量名是数组的键，常量的值是数组的值。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 添加 `$filter` 。 |

## 参见

`ReflectionClass::getConstant()`
