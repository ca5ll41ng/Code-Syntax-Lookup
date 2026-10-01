---
id: "zh-php-function-reflectionclass-getextensionname"
language: "php"
lang: "zh"
category: "function"
name: "ReflectionClass::getExtensionName"
title: "获取定义的类所在的扩展的名称"
signature: "public string|false ReflectionClass::getExtensionName()"
module: "reflection"
source_url: "https://www.php.net/manual/zh/reflectionclass.getextensionname.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取定义的类所在的扩展的名称

## 说明

```php
public string|false ReflectionClass::getExtensionName()
```

获取定义的类所在的扩展的名称。

## 参数

此函数没有参数。

## 返回值

获取定义的类所在的扩展的名称，如果是用户定义的类，则返回 `false`。

## 示例

**`ReflectionClass::getExtensionName()` 的基本用法**

```php


<?php
$class = new ReflectionClass('ReflectionClass');
$extension = $class->getExtensionName();
var_dump($extension);
?>

    
```

以上示例会输出：

```text


string(10) "Reflection"

    
```

## 参见

`ReflectionClass::getExtension()`
