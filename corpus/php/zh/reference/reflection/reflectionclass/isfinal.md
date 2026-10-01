---
id: "zh-php-function-reflectionclass-isfinal"
language: "php"
lang: "zh"
category: "function"
name: "ReflectionClass::isFinal"
title: "检查类是否声明为 final"
signature: "public bool ReflectionClass::isFinal()"
module: "reflection"
source_url: "https://www.php.net/manual/zh/reflectionclass.isfinal.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检查类是否声明为 final

## 说明

```php
public bool ReflectionClass::isFinal()
```

检查类是否声明为 final。

## 参数

此函数没有参数。

## 返回值

如果类是最终类，则返回 `true`，否则返回 `false`。

## 示例

**`ReflectionClass::isFinal()` 示例**

```php


<?php
class       TestClass { }
final class TestFinalClass { }

$normalClass = new ReflectionClass('TestClass');
$finalClass  = new ReflectionClass('TestFinalClass');

var_dump($normalClass->isFinal());
var_dump($finalClass->isFinal());

?>

    
```

以上示例会输出：

```text


bool(false)
bool(true)

    
```

## 参见

`ReflectionClass::isAbstract()` Final 关键字
