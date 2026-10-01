---
id: "zh-php-function-reflectionfunctionabstract-getparameters"
language: "php"
lang: "zh"
category: "function"
name: "ReflectionFunctionAbstract::getParameters"
title: "获取参数"
signature: "public array ReflectionFunctionAbstract::getParameters()"
module: "reflection"
source_url: "https://www.php.net/manual/zh/reflectionfunctionabstract.getparameters.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取参数

## 说明

```php
public array ReflectionFunctionAbstract::getParameters()
```

获取通过 `ReflectionParameter` 数组返回参数列表。顺序为源码中定义的顺序。

## 参数

此函数没有参数。

## 返回值

由 `ReflectionParameter` 对象组成的参数列表。

## 参见

`ReflectionFunctionAbstract::getNumberOfParameters()` `func_get_args()`
