---
id: "zh-php-function-reflectionextension-getname"
language: "php"
lang: "zh"
category: "function"
name: "ReflectionExtension::getName"
title: "获取扩展名称"
signature: "public string ReflectionExtension::getName()"
module: "reflection"
source_url: "https://www.php.net/manual/zh/reflectionextension.getname.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取扩展名称

## 说明

```php
public string ReflectionExtension::getName()
```

获取扩展名称。

## 参数

此函数没有参数。

## 返回值

扩展名称。

## 示例

**`ReflectionExtension::getName()` 示例**

```php


<?php
$ext = new ReflectionExtension('mysqli');
var_dump($ext->getName());
?>

    
```

以上示例的输出类似于：

```text


string(6) "mysqli"

    
```

## 参见

`ReflectionExtension::getClassNames()`
