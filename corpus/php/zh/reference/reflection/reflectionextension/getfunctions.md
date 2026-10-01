---
id: "zh-php-function-reflectionextension-getfunctions"
language: "php"
lang: "zh"
category: "function"
name: "ReflectionExtension::getFunctions"
title: "获取扩展中的函数"
signature: "public array ReflectionExtension::getFunctions()"
module: "reflection"
source_url: "https://www.php.net/manual/zh/reflectionextension.getfunctions.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取扩展中的函数

## 说明

```php
public array ReflectionExtension::getFunctions()
```

获取扩展中定义的函数。

## 参数

此函数没有参数。

## 返回值

返回 `ReflectionFunction` 对象数组，数组索引为函数名。如果扩展中没有定义函数，将返回空数组。

## 示例

**`ReflectionExtension::getFunctions()` 示例**

```php


<?php
$dom = new ReflectionExtension('SimpleXML');

print_r($dom->getFunctions());
?>

    
```

以上示例的输出类似于：

```text


Array
(
    [simplexml_load_file] => ReflectionFunction Object
        (
            [name] => simplexml_load_file
        )

    [simplexml_load_string] => ReflectionFunction Object
        (
            [name] => simplexml_load_string
        )

    [simplexml_import_dom] => ReflectionFunction Object
        (
            [name] => simplexml_import_dom
        )

)

    
```

## 参见

`ReflectionExtension::getClasses()` `get_extension_funcs()`
