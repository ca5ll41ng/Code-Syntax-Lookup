---
id: "zh-php-function-reflectionnamedtype-isbuiltin"
language: "php"
lang: "zh"
category: "function"
name: "ReflectionNamedType::isBuiltin"
title: "检查它是否是内置类型"
signature: "public bool ReflectionNamedType::isBuiltin()"
module: "reflection"
source_url: "https://www.php.net/manual/zh/reflectionnamedtype.isbuiltin.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检查它是否是内置类型

## 说明

```php
public bool ReflectionNamedType::isBuiltin()
```

检查该类型是否是 PHP 中的内置类型。 内置类型是任何不是类、接口或 trait 的类型。

## 参数

此函数没有参数。

## 返回值

如果是内置类型返回 `true`，否则为 `false`。

## 示例

**`ReflectionNamedType::isBuiltin()` 示例**

```php


<?php
class SomeClass {}

function someFunction(string $param, SomeClass $param2, stdClass $param3) {}

$reflectionFunc = new ReflectionFunction('someFunction');
$reflectionParams = $reflectionFunc->getParameters();

var_dump($reflectionParams[0]->getType()->isBuiltin());
var_dump($reflectionParams[1]->getType()->isBuiltin());
var_dump($reflectionParams[2]->getType()->isBuiltin());

    
```

以上示例会输出：

```text


bool(true)
bool(false)
bool(false)

    
```

注意：`ReflectionNamedType::isBuiltin()` 方法不区分内部类和 自定义类。为了区分，应该在返回的类名上使用 `ReflectionClass::isInternal()` 方法。

## 参见

`ReflectionType::allowsNull()` `ReflectionType::__toString()` `ReflectionClass::isInternal()` `ReflectionParameter::getType()`
