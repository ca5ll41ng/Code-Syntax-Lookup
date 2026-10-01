---
id: "zh-php-function-reflectionclass-getconstant"
language: "php"
lang: "zh"
category: "function"
name: "ReflectionClass::getConstant"
title: "获取已定义的常量"
signature: "public mixed ReflectionClass::getConstant(string $name)"
module: "reflection"
source_url: "https://www.php.net/manual/zh/reflectionclass.getconstant.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取已定义的常量

## 说明

```php
public mixed ReflectionClass::getConstant(string $name)
```

获取已定义的常量。

## 参数

- **`$name`** — 要获取的类常量的名称。

## 返回值

常量名称为 `$name` 的值。 如果在类中没有找到该常量，则返回 `false` 。

## 示例

**使用 `ReflectionClass::getConstant()`**

```php


<?php

class Example {
    const C1 = false;
    const C2 = 'I am a constant';
}

$reflection = new ReflectionClass('Example');

var_dump($reflection->getConstant('C1'));
var_dump($reflection->getConstant('C2'));
var_dump($reflection->getConstant('C3'));
?>

    
```

以上示例会输出：

```text


bool(false)
string(15) "I am a constant"
bool(false)

    
```

## 参见

`ReflectionClass::getConstants()`
