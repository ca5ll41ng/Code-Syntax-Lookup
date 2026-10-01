---
id: "zh-php-function-reflectionclass-getdefaultproperties"
language: "php"
lang: "zh"
category: "function"
name: "ReflectionClass::getDefaultProperties"
title: "获取默认属性"
signature: "public array ReflectionClass::getDefaultProperties()"
module: "reflection"
source_url: "https://www.php.net/manual/zh/reflectionclass.getdefaultproperties.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取默认属性

## 说明

```php
public array ReflectionClass::getDefaultProperties()
```

获取类的默认属性（包括了继承的属性）。

> 当在内部类中使用时，此方法仅用于静态属性，当在用户定义类中使用此方法时，无法追踪静态类属性的默认值。

## 参数

此函数没有参数。

## 返回值

默认属性的 `array`，其键是属性的名称，其值是属性的默认值或者 `null`（如果没有默认值）。这个函数不区分静态和非静态属性，也不考虑可见性修饰符。

## 示例

**`ReflectionClass::getDefaultProperties()` 示例**

```php


<?php
class Bar {
    protected $inheritedProperty = 'inheritedDefault';
}

class Foo extends Bar {
    public $property = 'propertyDefault';
    private $privateProperty = 'privatePropertyDefault';
    public static $staticProperty = 'staticProperty';
    public $defaultlessProperty;
}

$reflectionClass = new ReflectionClass('Foo');
var_dump($reflectionClass->getDefaultProperties());
?>

    
```

以上示例会输出：

```text


array(5) {
   ["staticProperty"]=>
   string(14) "staticProperty"
   ["property"]=>
   string(15) "propertyDefault"
   ["privateProperty"]=>
   string(22) "privatePropertyDefault"
   ["defaultlessProperty"]=>
   NULL
   ["inheritedProperty"]=>
   string(16) "inheritedDefault"
}

    
```

## 参见

`ReflectionClass::getProperties()` `ReflectionClass::getStaticProperties()` `ReflectionClass::getProperty()`
