---
id: "zh-php-function-reflectionclass-hasproperty"
language: "php"
lang: "zh"
category: "function"
name: "ReflectionClass::hasProperty"
title: "检查属性是否已定义"
signature: "public bool ReflectionClass::hasProperty(string $name)"
module: "reflection"
source_url: "https://www.php.net/manual/zh/reflectionclass.hasproperty.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检查属性是否已定义

## 说明

```php
public bool ReflectionClass::hasProperty(string $name)
```

检查指定的属性是否已定义。

## 参数

- **`$name`** — 待检查的属性的名称。

## 返回值

如果有这个属性返回 `true`，否则返回 `false`。

## 示例

**`ReflectionClass::hasProperty()` 示例**

```php


<?php
class Foo {
    public    $p1;
    protected $p2;
    private   $p3;

}

$obj = new ReflectionObject(new Foo());

var_dump($obj->hasProperty("p1"));
var_dump($obj->hasProperty("p2"));
var_dump($obj->hasProperty("p3"));
var_dump($obj->hasProperty("p4"));
?>

    
```

以上示例的输出类似于：

```text


bool(true)
bool(true)
bool(true)
bool(false)

    
```

## 参见

`ReflectionClass::hasConstant()` `ReflectionClass::hasMethod()`
