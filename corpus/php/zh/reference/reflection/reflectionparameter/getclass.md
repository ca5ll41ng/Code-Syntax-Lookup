---
id: "zh-php-function-reflectionparameter-getclass"
language: "php"
lang: "zh"
category: "function"
name: "ReflectionParameter::getClass"
title: "获取参数的 `ReflectionClass` 对象或为 `null`"
signature: "#[\\Deprecated] public ReflectionClass|null ReflectionParameter::getClass()"
module: "reflection"
source_url: "https://www.php.net/manual/zh/reflectionparameter.getclass.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取参数的 `ReflectionClass` 对象或为 `null`

## 说明

```php
#[\Deprecated] public ReflectionClass|null ReflectionParameter::getClass()
```

获取参数的 `ReflectionClass` 对象或为 `null`。

自 PHP 8.0.0 起，弃用此函数且不推荐使用。反而应该使用 `ReflectionParameter::getType()` 获取参数的 `ReflectionType`，然后询问该对象以确定参数类型。

> 本函数还未编写文档，仅有参数列表。

## 参数

此函数没有参数。

## 返回值

`ReflectionClass` 对象，如果没有声明类型或者声明的类型为类或接口则为 `null`。

## 示例

**使用 `ReflectionParameter` 类**

```php


<?php
function foo(Exception $a) { }

$functionReflection = new ReflectionFunction('foo');
$parameters = $functionReflection->getParameters();
$aParameter = $parameters[0];

echo $aParameter->getClass()->name;
?>

    
```

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 此函数已被弃用。推荐使用 `ReflectionParameter::getType()` 代替。 |

## 参见

`ReflectionParameter::getDeclaringClass()`
