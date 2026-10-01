---
id: "zh-php-function-reflectionclass-getproperty"
language: "php"
lang: "zh"
category: "function"
name: "ReflectionClass::getProperty"
title: "获取类的一个属性的 `ReflectionProperty`"
signature: "public ReflectionProperty ReflectionClass::getProperty(string $name)"
module: "reflection"
source_url: "https://www.php.net/manual/zh/reflectionclass.getproperty.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取类的一个属性的 `ReflectionProperty`

## 说明

```php
public ReflectionProperty ReflectionClass::getProperty(string $name)
```

获取类的一个属性的 `ReflectionProperty`。

## 参数

- **`$name`** — 属性名。

## 返回值

一个 `ReflectionProperty`。

## 示例

**`ReflectionClass::getProperty()` 的基本用法**

```php


<?php
$class = new ReflectionClass('ReflectionClass');
$property = $class->getProperty('name');
var_dump($property);
?>

    
```

以上示例会输出：

```text


object(ReflectionProperty)#2 (2) {
  ["name"]=>
  string(4) "name"
  ["class"]=>
  string(15) "ReflectionClass"
}

    
```

## 参见

`ReflectionClass::getProperties()`
