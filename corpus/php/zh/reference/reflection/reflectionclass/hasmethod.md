---
id: "zh-php-function-reflectionclass-hasmethod"
language: "php"
lang: "zh"
category: "function"
name: "ReflectionClass::hasMethod"
title: "检查方法是否已定义"
signature: "public bool ReflectionClass::hasMethod(string $name)"
module: "reflection"
source_url: "https://www.php.net/manual/zh/reflectionclass.hasmethod.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检查方法是否已定义

## 说明

```php
public bool ReflectionClass::hasMethod(string $name)
```

检查一个类中指定的方法是否已定义。

## 参数

- **`$name`** — 要检查的方法的名称。

## 返回值

如果有这个方法返回 `true`，否则返回 `false`。

## 示例

**`ReflectionClass::hasMethod()` 示例**

```php


<?php
Class C {
    public function publicFoo() {
        return true;
    }

    protected function protectedFoo() {
        return true;
    }

    private function privateFoo() {
        return true;
    }

    static function staticFoo() {
        return true;
    }
}

$rc = new ReflectionClass("C");

var_dump($rc->hasMethod('publicFoo'));

var_dump($rc->hasMethod('protectedFoo'));

var_dump($rc->hasMethod('privateFoo'));

var_dump($rc->hasMethod('staticFoo'));

// C should not have method bar
var_dump($rc->hasMethod('bar'));

// Method names are case insensitive
var_dump($rc->hasMethod('PUBLICfOO'));
?>

    
```

以上示例会输出：

```text


bool(true)
bool(true)
bool(true)
bool(true)
bool(false)
bool(true)

    
```

## 参见

`ReflectionClass::hasConstant()` `ReflectionClass::hasProperty()`
