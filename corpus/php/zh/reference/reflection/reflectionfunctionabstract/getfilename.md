---
id: "zh-php-function-reflectionfunctionabstract-getfilename"
language: "php"
lang: "zh"
category: "function"
name: "ReflectionFunctionAbstract::getFileName"
title: "获取文件名称"
signature: "public string|false ReflectionFunctionAbstract::getFileName()"
module: "reflection"
source_url: "https://www.php.net/manual/zh/reflectionfunctionabstract.getfilename.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取文件名称

## 说明

```php
public string|false ReflectionFunctionAbstract::getFileName()
```

获取函数定义的文件名称。

## 参数

此函数没有参数。

## 返回值

返回定义函数所在文件的文件名。如果定义的类在 PHP 核心或者 PHP 扩展中，则返回 `false`。

## 参见

`ReflectionFunctionAbstract::getNamespaceName()`
