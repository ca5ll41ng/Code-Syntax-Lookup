---
id: "zh-php-function-reflectionclass-getinterfaces"
language: "php"
lang: "zh"
category: "function"
name: "ReflectionClass::getInterfaces"
title: "获取接口"
signature: "public array ReflectionClass::getInterfaces()"
module: "reflection"
source_url: "https://www.php.net/manual/zh/reflectionclass.getinterfaces.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取接口

## 说明

```php
public array ReflectionClass::getInterfaces()
```

获取接口。

## 参数

此函数没有参数。

## 返回值

接口的关联`数组`，数组键是接口（interface）的名称，数组的值是 `ReflectionClass` 对象。

## 示例

**`ReflectionClass::getInterfaces()` 示例**

```php


<?php
interface Foo { }

interface Bar { }

class Baz implements Foo, Bar { }

$rc1 = new ReflectionClass("Baz");

print_r($rc1->getInterfaces());
?>

    
```

以上示例的输出类似于：

```text


Array
(
    [Foo] => ReflectionClass Object
        (
            [name] => Foo
        )

    [Bar] => ReflectionClass Object
        (
            [name] => Bar
        )

)

    
```

## 参见

`ReflectionClass::getInterfaceNames()`
