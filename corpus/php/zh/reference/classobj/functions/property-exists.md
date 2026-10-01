---
id: "zh-php-function-function-property-exists"
language: "php"
lang: "zh"
category: "function"
name: "property_exists"
title: "检查对象或类是否具有该属性"
signature: "bool property_exists(object|string $object_or_class, string $property)"
module: "classobj"
source_url: "https://www.php.net/manual/zh/function.property-exists.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检查对象或类是否具有该属性

## 说明

```php
bool property_exists(object|string $object_or_class, string $property)
```

本函数检查给出的 `$property` 是否存在于指定的类中。

> 跟 `isset()` 的区别是即使属性的值为 `null`，`property_exists()` 也会返回 `true`。

## 参数

- **`$object_or_class`** — 需要检查的类名或者类的对象
- **`$property`** — 属性的名称

## 返回值

如果属性存在则返回 `true`，不存在则返回 `false`。

## 示例

**`property_exists()` 示例**

```php


<?php

class myClass {
    public $mine;
    private $xpto;
    static protected $test;

    static function test() {
        var_dump(property_exists('myClass', 'xpto')); //true
    }
}

var_dump(property_exists('myClass', 'mine'));   //true
var_dump(property_exists(new myClass, 'mine')); //true
var_dump(property_exists('myClass', 'xpto'));   //true
var_dump(property_exists('myClass', 'bar'));    //false
var_dump(property_exists('myClass', 'test'));   //true
myClass::test();

?>

    
```

## 注释

> 如果此类不是已知类，使用此函数会使用任何已注册的 autoloader。

> `property_exists()` 函数不能检查通过 `__get` 魔术方法访问的属性。

## 参见

`method_exists()`
