---
id: "zh-php-function-reflectionclass-getshortname"
language: "php"
lang: "zh"
category: "function"
name: "ReflectionClass::getShortName"
title: "获取短名"
signature: "public string ReflectionClass::getShortName()"
module: "reflection"
source_url: "https://www.php.net/manual/zh/reflectionclass.getshortname.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取短名

## 说明

```php
public string ReflectionClass::getShortName()
```

获取类的短名，就是不含命名空间（namespace）的那一部分。

## 参数

此函数没有参数。

## 返回值

类的短名。

## 示例

**`ReflectionClass::getShortName()` 示例**

```php


<?php
namespace A\B;

class Foo { }

$function = new \ReflectionClass('stdClass');

var_dump($function->inNamespace());
var_dump($function->getName());
var_dump($function->getNamespaceName());
var_dump($function->getShortName());

$function = new \ReflectionClass('A\\B\\Foo');

var_dump($function->inNamespace());
var_dump($function->getName());
var_dump($function->getNamespaceName());
var_dump($function->getShortName());
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

`ReflectionClass::getName()`
