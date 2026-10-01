---
id: "zh-php-function-reflectionextension-getclasses"
language: "php"
lang: "zh"
category: "function"
name: "ReflectionExtension::getClasses"
title: "获取类列表"
signature: "public array ReflectionExtension::getClasses()"
module: "reflection"
source_url: "https://www.php.net/manual/zh/reflectionextension.getclasses.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取类列表

## 说明

```php
public array ReflectionExtension::getClasses()
```

从扩展中获取类列表。

## 参数

此函数没有参数。

## 返回值

`ReflectionClass` 对象数组，包括扩展中所有类。如果没有类，将返回空数组。

## 示例

**`ReflectionExtension::getClasses()` 示例**

```php


<?php
$ext = new ReflectionExtension('XMLWriter');
var_dump($ext->getClasses());
?>

    
```

以上示例的输出类似于：

```text


array(1) {
  ["XMLWriter"]=>
  object(ReflectionClass)#2 (1) {
    ["name"]=>
    string(9) "XMLWriter"
  }
}

    
```

## 参见

`ReflectionExtension::getClassNames()`
