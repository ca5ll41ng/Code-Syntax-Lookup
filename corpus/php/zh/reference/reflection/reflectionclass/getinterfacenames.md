---
id: "zh-php-function-reflectionclass-getinterfacenames"
language: "php"
lang: "zh"
category: "function"
name: "ReflectionClass::getInterfaceNames"
title: "获取接口（interface）名称"
signature: "public array ReflectionClass::getInterfaceNames()"
module: "reflection"
source_url: "https://www.php.net/manual/zh/reflectionclass.getinterfacenames.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取接口（interface）名称

## 说明

```php
public array ReflectionClass::getInterfaceNames()
```

获取接口（interface）名称。

## 参数

此函数没有参数。

## 返回值

一个数值数组，接口（interface）的名称是数组的值。

## 示例

**`ReflectionClass::getInterfaceNames()` 示例**

```php


<?php
interface Foo { }

interface Bar { }

class Baz implements Foo, Bar { }

$rc1 = new ReflectionClass("Baz");

print_r($rc1->getInterfaceNames());
?>

    
```

以上示例的输出类似于：

```text


Array
(
    [0] => Foo
    [1] => Bar
)

    
```

## 参见

`ReflectionClass::getInterfaces()`
