---
id: "zh-php-function-function-get-mangled-object-vars"
language: "php"
lang: "zh"
category: "function"
name: "get_mangled_object_vars"
title: "返回将对象属性混在一起的数组"
signature: "array get_mangled_object_vars(object $object)"
module: "classobj"
source_url: "https://www.php.net/manual/zh/function.get-mangled-object-vars.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回将对象属性混在一起的数组

## 说明

```php
array get_mangled_object_vars(object $object)
```

返回 `array`，其元素是 `$object` 的属性。key 是成员变量名，但有几个显著的异常：private 变量的变量名前加上类名，protected 变量的变量名前面加上 `*` 号。这些前置值在两边都带有 `NUL` 字节。未初始化的类型属性会默默丢弃。

## 参数

- **`$object`** — 对象实例。

## 返回值

返回包含 `$object` 的所有属性的 `array`，无论其可见性如何。

## 示例

**`get_mangled_object_vars()` 示例**

```php


<?php

class A
{
    public $public = 1;

    protected $protected = 2;

    private $private = 3;
}

class B extends A
{
    private $private = 4;
}

$object = new B;
$object->dynamic = 5;
$object->{'6'} = 6;

var_dump(get_mangled_object_vars($object));

class AO extends ArrayObject
{
    private $private = 1;
}

$arrayObject = new AO(['x' => 'y']);
$arrayObject->dynamic = 2;

var_dump(get_mangled_object_vars($arrayObject));

    
```

以上示例会输出：

```text


array(6) {
  ["Bprivate"]=>
  int(4)
  ["public"]=>
  int(1)
  ["*protected"]=>
  int(2)
  ["Aprivate"]=>
  int(3)
  ["dynamic"]=>
  int(5)
  [6]=>
  int(6)
}
array(2) {
  ["AOprivate"]=>
  int(1)
  ["dynamic"]=>
  int(2)
}


    
```

## 参见

`get_class_vars()` `get_object_vars()`
