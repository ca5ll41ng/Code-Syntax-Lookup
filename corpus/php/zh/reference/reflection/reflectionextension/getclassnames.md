---
id: "zh-php-function-reflectionextension-getclassnames"
language: "php"
lang: "zh"
category: "function"
name: "ReflectionExtension::getClassNames"
title: "获取类名列表"
signature: "public array ReflectionExtension::getClassNames()"
module: "reflection"
source_url: "https://www.php.net/manual/zh/reflectionextension.getclassnames.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取类名列表

## 说明

```php
public array ReflectionExtension::getClassNames()
```

获取扩展中的类名列表。

## 参数

此函数没有参数。

## 返回值

扩展中定义的类名 `array`。如果扩展中没有定义类，将返回空数组。

## 示例

**`ReflectionExtension::getClassNames()` 示例**

```php


<?php
$ext = new ReflectionExtension('XMLWriter');
var_dump($ext->getClassNames());
?>

    
```

以上示例的输出类似于：

```text


array(1) {
  [0]=>
  string(9) "XMLWriter"
}

    
```

## 参见

`ReflectionExtension::getClasses()` `ReflectionExtension::getName()`
