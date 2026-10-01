---
id: "zh-php-function-reflectionintersectiontype-gettypes"
language: "php"
lang: "zh"
category: "function"
name: "ReflectionIntersectionType::getTypes"
title: "返回包含在交集类型中的类型"
signature: "public array ReflectionIntersectionType::getTypes()"
module: "reflection"
source_url: "https://www.php.net/manual/zh/reflectionintersectiontype.gettypes.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回包含在交集类型中的类型

## 说明

```php
public array ReflectionIntersectionType::getTypes()
```

返回包含在交集类型中的类型的反射。

## 参数

此函数没有参数。

## 返回值

包含 `ReflectionType` 对象的数组。

## 示例

**`ReflectionIntersectionType::getTypes()` 示例**

```php


<?php

function someFunction(Iterator&Countable $value) {}

$reflectionFunc = new ReflectionFunction('someFunction');
$reflectionParam = $reflectionFunc->getParameters()[0];

var_dump($reflectionParam->getType()->getTypes());
?>

    
```

以上示例的输出类似于：

```text


array(2) {
    [0] =>
    class ReflectionNamedType#4(0) {
    }
    [1] =>
    class ReflectionNamedType#5(0) {
    }
}

    
```

## 参见

`ReflectionType::allowsNull()` `ReflectionParameter::getType()`
