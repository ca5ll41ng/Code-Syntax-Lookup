---
id: "zh-php-function-reflectionclass-hasconstant"
language: "php"
lang: "zh"
category: "function"
name: "ReflectionClass::hasConstant"
title: "检查常量是否已经定义"
signature: "public bool ReflectionClass::hasConstant(string $name)"
module: "reflection"
source_url: "https://www.php.net/manual/zh/reflectionclass.hasconstant.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检查常量是否已经定义

## 说明

```php
public bool ReflectionClass::hasConstant(string $name)
```

检查类中是否已经定义了指定的常量。

## 参数

- **`$name`** — 要被检查的常量名称。

## 返回值

如果已定义返回 `true`，否则返回 `false`。

## 示例

**`ReflectionClass::hasConstant()` 示例**

```php


<?php
class Foo {
    const c1 = 1;
}

$class = new ReflectionClass("Foo");

var_dump($class->hasConstant("c1"));
var_dump($class->hasConstant("c2"));
?>

    
```

以上示例的输出类似于：

```text


bool(true)
bool(false)

    
```

## 参见

`ReflectionClass::hasMethod()` `ReflectionClass::hasProperty()`
