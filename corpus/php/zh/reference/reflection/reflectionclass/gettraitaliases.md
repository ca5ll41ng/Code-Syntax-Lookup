---
id: "zh-php-function-reflectionclass-gettraitaliases"
language: "php"
lang: "zh"
category: "function"
name: "ReflectionClass::getTraitAliases"
title: "返回 trait 别名数组"
signature: "public array ReflectionClass::getTraitAliases()"
module: "reflection"
source_url: "https://www.php.net/manual/zh/reflectionclass.gettraitaliases.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回 trait 别名数组

## 说明

```php
public array ReflectionClass::getTraitAliases()
```

获取当前类中定义的 trait 方法别名数组。

## 参数

此函数没有参数。

## 返回值

返回数组，新的方法名位于键中，原始名称（格式是 `"TraitName::original"`）位于数组的值中。
