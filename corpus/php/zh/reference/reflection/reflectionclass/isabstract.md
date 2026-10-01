---
id: "zh-php-function-reflectionclass-isabstract"
language: "php"
lang: "zh"
category: "function"
name: "ReflectionClass::isAbstract"
title: "检查类是否是抽象类（abstract）"
signature: "public bool ReflectionClass::isAbstract()"
module: "reflection"
source_url: "https://www.php.net/manual/zh/reflectionclass.isabstract.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检查类是否是抽象类（abstract）

## 说明

```php
public bool ReflectionClass::isAbstract()
```

检查这个类是否是抽象类（abstract）。

## 参数

此函数没有参数。

## 返回值

如果类是抽象类，则返回 `true`，否则返回 `false`。

## 示例

**`ReflectionClass::isAbstract()` 示例**

```php


<?php
class          TestClass { }
abstract class TestAbstractClass { }

$testClass     = new ReflectionClass('TestClass');
$abstractClass = new ReflectionClass('TestAbstractClass');

var_dump($testClass->isAbstract());
var_dump($abstractClass->isAbstract());
?>

    
```

以上示例会输出：

```text


bool(false)
bool(true)

    
```

## 参见

`ReflectionClass::isInterface()` 类的抽象
