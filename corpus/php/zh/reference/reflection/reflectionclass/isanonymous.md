---
id: "zh-php-function-reflectionclass-isanonymous"
language: "php"
lang: "zh"
category: "function"
name: "ReflectionClass::isAnonymous"
title: "检查类是否是匿名类"
signature: "public bool ReflectionClass::isAnonymous()"
module: "reflection"
source_url: "https://www.php.net/manual/zh/reflectionclass.isanonymous.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检查类是否是匿名类

## 说明

```php
public bool ReflectionClass::isAnonymous()
```

检查类是否是匿名类。

## 参数

此函数没有参数。

## 返回值

如果类是匿名类，则返回 `true`，否则返回 `false`。

## 示例

**`ReflectionClass::isAnonymous()` 示例**

```php


<?php
class TestClass {}
$anonClass = new class {};

$normalClass = new ReflectionClass('TestClass');
$anonClass  = new ReflectionClass($anonClass);

var_dump($normalClass->isAnonymous());
var_dump($anonClass->isAnonymous());

?>

    
```

以上示例会输出：

```text


bool(false)
bool(true)

    
```

## 参见

`ReflectionClass::isFinal()`
