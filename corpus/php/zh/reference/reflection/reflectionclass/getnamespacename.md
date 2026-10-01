---
id: "zh-php-function-reflectionclass-getnamespacename"
language: "php"
lang: "zh"
category: "function"
name: "ReflectionClass::getNamespaceName"
title: "获取命名空间的名称"
signature: "public string ReflectionClass::getNamespaceName()"
module: "reflection"
source_url: "https://www.php.net/manual/zh/reflectionclass.getnamespacename.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取命名空间的名称

## 说明

```php
public string ReflectionClass::getNamespaceName()
```

获取命名空间（namespace）的名称。

## 参数

此函数没有参数。

## 返回值

命名空间的名称。

## 示例

**`ReflectionClass::getNamespaceName()` 示例**

```php


<?php
namespace A\B;

class Foo { }

$class = new \ReflectionClass('stdClass');

var_dump($class->inNamespace());
var_dump($class->getName());
var_dump($class->getNamespaceName());
var_dump($class->getShortName());

$class = new \ReflectionClass('A\\B\\Foo');

var_dump($class->inNamespace());
var_dump($class->getName());
var_dump($class->getNamespaceName());
var_dump($class->getShortName());
?>

    
```

以上示例会输出：

```text


bool(false)
string(8) "stdClass"
string(0) ""
string(8) "stdClass"

bool(true)
string(7) "A\B\Foo"
string(3) "A\B"
string(3) "Foo"

    
```

## 参见

`ReflectionClass::getParentClass()` namespaces
