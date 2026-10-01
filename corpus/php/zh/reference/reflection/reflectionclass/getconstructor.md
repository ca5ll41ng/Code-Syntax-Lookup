---
id: "zh-php-function-reflectionclass-getconstructor"
language: "php"
lang: "zh"
category: "function"
name: "ReflectionClass::getConstructor"
title: "获取类的构造函数"
signature: "public ReflectionMethod|null ReflectionClass::getConstructor()"
module: "reflection"
source_url: "https://www.php.net/manual/zh/reflectionclass.getconstructor.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取类的构造函数

## 说明

```php
public ReflectionMethod|null ReflectionClass::getConstructor()
```

获取已反射的类的构造函数。

## 参数

此函数没有参数。

## 返回值

一个 `ReflectionMethod` 对象，反射了类的构造函数，或者当类不存在构造函数时返回 `null`。

## 示例

**`ReflectionClass::getConstructor()` 的基本用法**

```php


<?php
$class = new ReflectionClass('ReflectionClass');
$constructor = $class->getConstructor();
var_dump($constructor);
?>

    
```

以上示例会输出：

```text


object(ReflectionMethod)#2 (2) {
  ["name"]=>
  string(11) "__construct"
  ["class"]=>
  string(15) "ReflectionClass"
}

    
```

## 参见

`ReflectionClass::getName()`
